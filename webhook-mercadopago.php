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

// Log inicial
logMessage("=== WEBHOOK INICIADO ===");
logMessage("Método HTTP: " . $_SERVER['REQUEST_METHOD']);
logMessage("URL: " . $_SERVER['REQUEST_URI']);

// Verificar se é uma requisição POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    logMessage("ERRO: Método não permitido - " . $_SERVER['REQUEST_METHOD']);
    http_response_code(405);
    exit('Método não permitido');
}

// Obter dados do webhook
$input = file_get_contents('php://input');
logMessage("Dados recebidos: " . $input);

$data = json_decode($input, true);

if (json_last_error() !== JSON_ERROR_NONE) {
    logMessage("ERRO: JSON inválido - " . json_last_error_msg());
    http_response_code(400);
    exit('JSON inválido');
}

// Verificar se é uma notificação de pagamento
if (isset($data['type']) && $data['type'] === 'payment') {
    $paymentId = $data['data']['id'];
    logMessage("Processando pagamento ID: " . $paymentId);
    
    try {
        // Consultar detalhes do pagamento no Mercado Pago
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, "https://api.mercadopago.com/v1/payments/$paymentId");
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            'Authorization: Bearer ' . $MERCADO_PAGO_ACCESS_TOKEN,
            'Content-Type: application/json'
        ]);
        curl_setopt($ch, CURLOPT_TIMEOUT, 30);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
        
        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $curlError = curl_error($ch);
        curl_close($ch);
        
        if ($curlError) {
            logMessage("ERRO CURL: " . $curlError);
        }
        
        logMessage("Resposta da API MP: HTTP $httpCode");
        logMessage("Dados do pagamento: " . $response);
        
        if ($httpCode === 200) {
            $payment = json_decode($response, true);
            
            if (json_last_error() !== JSON_ERROR_NONE) {
                logMessage("ERRO: JSON inválido na resposta - " . json_last_error_msg());
            } else {
                $status = $payment['status'] ?? 'unknown';
                $paymentMethod = $payment['payment_method']['type'] ?? 'unknown';
                $paymentType = $payment['payment_type_id'] ?? 'unknown';
                
                logMessage("Status do pagamento: $status");
                logMessage("Método de pagamento: $paymentMethod");
                logMessage("Tipo de pagamento: $paymentType");
                
                // Verificar se o pagamento foi aprovado
                if ($status === 'approved') {
                    logMessage("PAGAMENTO APROVADO - Enviando para Discord");
                    
                    // Extrair informações do pagamento
                    $externalReference = $payment['external_reference'] ?? 'N/A';
                    $total = $payment['transaction_amount'] ?? 0;
                    $items = $payment['additional_info']['items'] ?? [];
                    
                    // Preparar mensagem para o Discord
                    $produtosTexto = '';
                    if (!empty($items)) {
                        foreach ($items as $item) {
                            $produtosTexto .= "• " . $item['title'] . " (x" . $item['quantity'] . ") - R$ " . number_format($item['unit_price'], 2, ',', '.') . "\n";
                        }
                    } else {
                        $produtosTexto = "• Produto não especificado\n";
                    }
                    
                    $data = new DateTime();
                    $horario = $data->format('d/m/Y H:i:s');
                    
                    $mensagem = [
                        'content' => "✅ **Pagamento Aprovado!**\n\n" .
                                    $produtosTexto . "\n" .
                                    "**Total:** R$ " . number_format($total, 2, ',', '.') . "\n" .
                                    "**ID do Pagamento:** $paymentId\n" .
                                    "**Método:** $paymentMethod\n" .
                                    "**Referência:** $externalReference\n" .
                                    "**Data/Hora:** $horario\n" .
                                    "**Status:** $status"
                    ];
                    
                    // Enviar notificação para o Discord
                    $ch = curl_init();
                    curl_setopt($ch, CURLOPT_URL, $DISCORD_WEBHOOK_URL);
                    curl_setopt($ch, CURLOPT_POST, true);
                    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($mensagem));
                    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
                    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                    curl_setopt($ch, CURLOPT_TIMEOUT, 30);
                    
                    $discordResponse = curl_exec($ch);
                    $discordHttpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
                    $discordCurlError = curl_error($ch);
                    curl_close($ch);
                    
                    if ($discordCurlError) {
                        logMessage("ERRO CURL Discord: " . $discordCurlError);
                    }
                    
                    if ($discordHttpCode === 204) {
                        logMessage("SUCESSO: Notificação enviada para o Discord");
                    } else {
                        logMessage("ERRO Discord: HTTP $discordHttpCode - $discordResponse");
                    }
                    
                } else {
                    logMessage("Pagamento NÃO aprovado. Status: $status");
                }
            }
            
        } else {
            logMessage("ERRO: Falha ao consultar pagamento - HTTP $httpCode - $response");
        }
        
    } catch (Exception $e) {
        logMessage("EXCEÇÃO: " . $e->getMessage());
    }
} else {
    logMessage("Tipo de notificação não reconhecido: " . ($data['type'] ?? 'não definido'));
}

// Responder OK para o Mercado Pago
logMessage("=== WEBHOOK FINALIZADO ===");
http_response_code(200);
echo 'OK';
?>