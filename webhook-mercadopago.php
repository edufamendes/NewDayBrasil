<?php
// Webhook para processar notificações do Mercado Pago
// Este arquivo deve ser hospedado no servidor para receber webhooks

// Configurações
$MERCADO_PAGO_ACCESS_TOKEN = 'APP_USR-2803705882545320-071017-b8550733051ba7e6a4478777bd3e4ed5-348490132';
$DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1394224368925544488/gsb0kycXUQq4lcVAkYNn1roszQl4mrSwCvConHV4jpf3mHfjn0jYjEnBMhkPxpwOmkb8';

// Log para debug
function logMessage($message) {
    $logFile = 'webhook_log.txt';
    $timestamp = date('Y-m-d H:i:s');
    file_put_contents($logFile, "[$timestamp] $message\n", FILE_APPEND);
}

// Verificar se é uma requisição POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit('Método não permitido');
}

// Obter dados do webhook
$input = file_get_contents('php://input');
$data = json_decode($input, true);

logMessage("Webhook recebido: " . $input);

// Verificar se é uma notificação de pagamento
if (isset($data['type']) && $data['type'] === 'payment') {
    $paymentId = $data['data']['id'];
    
    try {
        // Consultar detalhes do pagamento no Mercado Pago
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, "https://api.mercadopago.com/v1/payments/$paymentId");
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            'Authorization: Bearer ' . $MERCADO_PAGO_ACCESS_TOKEN,
            'Content-Type: application/json'
        ]);
        
        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
        
        if ($httpCode === 200) {
            $payment = json_decode($response, true);
            
            logMessage("Pagamento consultado: " . $response);
            
            // Verificar se o pagamento foi aprovado
            if ($payment['status'] === 'approved') {
                // Extrair informações do pagamento
                $externalReference = $payment['external_reference'] ?? 'N/A';
                $total = $payment['transaction_amount'] ?? 0;
                $items = $payment['additional_info']['items'] ?? [];
                
                // Preparar mensagem para o Discord
                $produtosTexto = '';
                foreach ($items as $item) {
                    $produtosTexto .= "• " . $item['title'] . " (x" . $item['quantity'] . ") - R$ " . number_format($item['unit_price'], 2, ',', '.') . "\n";
                }
                
                $data = new DateTime();
                $horario = $data->format('d/m/Y H:i:s');
                
                $mensagem = [
                    'content' => "✅ **Pagamento Aprovado!**\n\n" .
                                $produtosTexto . "\n" .
                                "**Total:** R$ " . number_format($total, 2, ',', '.') . "\n" .
                                "**ID do Pagamento:** $paymentId\n" .
                                "**Referência:** $externalReference\n" .
                                "**Data/Hora:** $horario\n" .
                                "**Status:** " . $payment['status']
                ];
                
                // Enviar notificação para o Discord
                $ch = curl_init();
                curl_setopt($ch, CURLOPT_URL, $DISCORD_WEBHOOK_URL);
                curl_setopt($ch, CURLOPT_POST, true);
                curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($mensagem));
                curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                
                $discordResponse = curl_exec($ch);
                $discordHttpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
                curl_close($ch);
                
                if ($discordHttpCode === 204) {
                    logMessage("Notificação enviada para o Discord com sucesso");
                } else {
                    logMessage("Erro ao enviar notificação para o Discord: $discordHttpCode - $discordResponse");
                }
                
            } else {
                logMessage("Pagamento não aprovado. Status: " . $payment['status']);
            }
            
        } else {
            logMessage("Erro ao consultar pagamento: $httpCode - $response");
        }
        
    } catch (Exception $e) {
        logMessage("Erro: " . $e->getMessage());
    }
}

// Responder OK para o Mercado Pago
http_response_code(200);
echo 'OK';
?> 