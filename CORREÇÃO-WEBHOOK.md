# 🔧 Correção do Sistema de Notificações do Discord

## Problema Identificado
O site estava enviando notificações para o Discord **imediatamente** quando o usuário clicava em "Finalizar Compra", antes mesmo do pagamento ser processado no Mercado Pago. Isso causava notificações falsas mesmo quando o usuário cancelava a compra.

## Solução Implementada

### 1. Remoção da Notificação Prematura
- **Arquivo:** `script.js`
- **Linhas removidas:** 467-480 (notificação do Discord na função `finalizarCompra()`)
- **Resultado:** Não há mais notificações enviadas antes da confirmação do pagamento

### 2. Implementação de Verificação de Status
- **Função adicionada:** `verificarStatusPagamento()`
- **Localização:** `script.js` (linhas 200-250)
- **Funcionalidade:** Verifica o status do pagamento quando o usuário retorna do Mercado Pago

### 3. Webhook PHP para Processamento
- **Arquivo criado:** `webhook-mercadopago.php`
- **Funcionalidade:** Processa webhooks do Mercado Pago e envia notificações apenas para pagamentos aprovados
- **Logs:** Cria arquivo `webhook_log.txt` para debug

### 4. Notificação Condicional
- **Função:** `enviarNotificacaoDiscord(payment)`
- **Condição:** Só envia notificação se `payment.status === 'approved'`
- **Informações:** Inclui ID do pagamento, status e detalhes da transação

## Como Funciona Agora

1. **Usuário clica em "Finalizar Compra"**
   - Carrinho é enviado para o Mercado Pago
   - **NENHUMA** notificação é enviada para o Discord

2. **Usuário processa pagamento no Mercado Pago**
   - Pode aprovar, cancelar ou deixar pendente
   - Mercado Pago envia webhook para `webhook-mercadopago.php`

3. **Webhook processa a notificação**
   - Verifica se o pagamento foi aprovado
   - **SÓ ENVIA** notificação para o Discord se status = 'approved'

4. **Usuário retorna ao site**
   - Função `verificarStatusPagamento()` verifica o status
   - Mostra mensagem apropriada para o usuário

## Configuração Necessária

### 1. Hospedar o arquivo PHP
O arquivo `webhook-mercadopago.php` deve ser hospedado no mesmo domínio do site:
```
https://seudominio.com/webhook-mercadopago.php
```

### 2. Configurar webhook no Mercado Pago (Opcional)
Para maior segurança, configure o webhook no painel do Mercado Pago:
- URL: `https://seudominio.com/webhook-mercadopago.php`
- Eventos: `payment`

### 3. Verificar permissões do servidor
O arquivo PHP precisa de permissão para:
- Fazer requisições HTTP (curl)
- Escrever logs (webhook_log.txt)

## Testes Recomendados

1. **Teste de Compra Cancelada**
   - Adicione itens ao carrinho
   - Clique em "Finalizar Compra"
   - Cancele no Mercado Pago
   - **Verificar:** Nenhuma notificação no Discord

2. **Teste de Compra Aprovada**
   - Adicione itens ao carrinho
   - Clique em "Finalizar Compra"
   - Aprove o pagamento no Mercado Pago
   - **Verificar:** Notificação aparece no Discord

3. **Teste de Pagamento Pendente**
   - Use método de pagamento que fica pendente
   - **Verificar:** Nenhuma notificação até ser aprovado

## Logs e Debug

O arquivo `webhook_log.txt` registra:
- Webhooks recebidos
- Consultas de pagamento
- Notificações enviadas
- Erros encontrados

## Benefícios da Correção

✅ **Notificações precisas:** Só envia para pagamentos realmente aprovados
✅ **Sem spam:** Elimina notificações falsas de compras canceladas
✅ **Melhor experiência:** Usuário vê status correto do pagamento
✅ **Logs detalhados:** Facilita debug e monitoramento
✅ **Segurança:** Verifica status real no Mercado Pago

## Arquivos Modificados

- `script.js` - Removida notificação prematura, adicionada verificação de status
- `webhook-mercadopago.php` - Novo arquivo para processar webhooks
- `CORREÇÃO-WEBHOOK.md` - Este arquivo de documentação 