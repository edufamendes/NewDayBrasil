// Exemplo de Backend Node.js para integração com Mercado Pago
// Este arquivo mostra como implementar a integração completa

const express = require('express');
const mercadopago = require('mercadopago');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuração do Mercado Pago
mercadopago.configure({
    access_token: 'APP_USR-2803705882545320-071017-b8550733051ba7e6a4478777bd3e4ed5-348490132'
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Para servir os arquivos estáticos

// Rota para criar preferência de pagamento
app.post('/api/mercadopago/create-preference', async (req, res) => {
    try {
        const { items } = req.body;
        
        const preference = {
            items: items.map(item => ({
                title: item.title,
                unit_price: parseFloat(item.unit_price),
                quantity: parseInt(item.quantity),
                picture_url: item.picture_url
            })),
            back_urls: {
                success: `${req.protocol}://${req.get('host')}/success`,
                failure: `${req.protocol}://${req.get('host')}/failure`,
                pending: `${req.protocol}://${req.get('host')}/pending`
            },
            auto_return: "approved",
            external_reference: "site-dayz-" + Date.now(),
            notification_url: `${req.protocol}://${req.get('host')}/api/mercadopago/webhook`
        };

        const response = await mercadopago.preferences.create(preference);
        
        res.json({
            id: response.body.id,
            init_point: response.body.init_point
        });
        
    } catch (error) {
        console.error('Erro ao criar preferência:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

// Webhook para receber notificações do Mercado Pago
app.post('/api/mercadopago/webhook', async (req, res) => {
    try {
        const { type, data } = req.body;
        
        if (type === 'payment') {
            const payment = await mercadopago.payment.findById(data.id);
            
            // Aqui você pode processar o pagamento
            // Por exemplo, salvar no banco de dados, enviar email, etc.
            console.log('Pagamento recebido:', payment.body);
            
            // Exemplo de processamento:
            if (payment.body.status === 'approved') {
                // Pagamento aprovado - processar pedido
                console.log('Pedido aprovado:', payment.body.external_reference);
            }
        }
        
        res.status(200).send('OK');
        
    } catch (error) {
        console.error('Erro no webhook:', error);
        res.status(500).send('Erro');
    }
});

// Rotas de retorno do Mercado Pago
app.get('/success', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Pagamento Aprovado</title>
                <style>
                    body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
                    .success { color: #4CAF50; font-size: 24px; }
                    .btn { background: #4CAF50; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; }
                </style>
            </head>
            <body>
                <h1 class="success">✅ Pagamento Aprovado!</h1>
                <p>Seu pedido foi processado com sucesso.</p>
                <p>Você receberá um email com os detalhes do seu pedido.</p>
                <a href="/" class="btn">Voltar à Loja</a>
            </body>
        </html>
    `);
});

app.get('/failure', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Pagamento Recusado</title>
                <style>
                    body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
                    .error { color: #f44336; font-size: 24px; }
                    .btn { background: #4CAF50; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; }
                </style>
            </head>
            <body>
                <h1 class="error">❌ Pagamento Recusado</h1>
                <p>Houve um problema com seu pagamento.</p>
                <p>Tente novamente ou entre em contato conosco.</p>
                <a href="/" class="btn">Voltar à Loja</a>
            </body>
        </html>
    `);
});

app.get('/pending', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Pagamento Pendente</title>
                <style>
                    body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
                    .pending { color: #ff9800; font-size: 24px; }
                    .btn { background: #4CAF50; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; }
                </style>
            </head>
            <body>
                <h1 class="pending">⏳ Pagamento Pendente</h1>
                <p>Seu pagamento está sendo processado.</p>
                <p>Você receberá uma confirmação em breve.</p>
                <a href="/" class="btn">Voltar à Loja</a>
            </body>
        </html>
    `);
});

// Rota para obter produtos (exemplo de API)
app.get('/api/produtos', (req, res) => {
    const produtos = [
        {
            id: 1,
            nome: "Base VIP Fortaleza",
            categoria: "bases-vip",
            categoriaNome: "Bases VIP",
            preco: 29.90,
            descricao: "Base VIP completa com todas as funcionalidades.",
            imagem: "https://via.placeholder.com/400x300/4CAF50/white?text=Base+VIP+Fortaleza",
            galeria: [
                "https://via.placeholder.com/400x300/4CAF50/white?text=Base+VIP+1",
                "https://via.placeholder.com/400x300/45a049/white?text=Base+VIP+2"
            ],
            videos: []
        }
        // Adicione mais produtos aqui
    ];
    
    res.json(produtos);
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Acesse: http://localhost:${PORT}`);
});

// Para usar este backend:
// 1. Instale as dependências: npm install express mercadopago cors
// 2. Execute: node backend-example.js
// 3. Atualize o JavaScript do frontend para chamar este backend 