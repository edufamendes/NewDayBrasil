# NewDay Brasil - Loja Dinâmica

Um site completo e dinâmico para loja de itens do DayZ com integração ao Mercado Pago.

## 🚀 Funcionalidades

- **Loja Dinâmica**: Produtos organizados por categorias (Bases VIP, Roupas VIP, Veículos, Construção)
- **Navegação por Categorias**: Botões interativos no header para acesso rápido às categorias
- **Carrinho de Compras**: Sistema completo com adicionar/remover produtos e controle de quantidade
- **Galeria de Produtos**: Modal com galeria de fotos e vídeos para cada produto
- **Integração Mercado Pago**: Sistema de pagamento integrado com redirecionamento direto
- **Design Responsivo**: Interface moderna e adaptável a todos os dispositivos
- **Filtros por Categoria**: Navegação fácil entre diferentes tipos de produtos

## 📁 Estrutura do Projeto

```
NewDay Brasil/
├── index.html              # Página principal
├── styles.css              # Estilos CSS
├── script.js               # JavaScript com toda a lógica
├── newday.png              # Imagem de fundo (adicione sua imagem)
├── teste-mercadopago.html  # Arquivo de teste da integração
├── backend-example.js      # Exemplo de backend Node.js
├── package.json            # Dependências do backend
└── README.md               # Este arquivo
```

## 🛠️ Configuração

### 1. Imagem de Fundo
Adicione sua imagem `newday.png` na pasta raiz do projeto. A imagem será usada como fundo do site.

### 2. Configuração do Mercado Pago
As credenciais do Mercado Pago já estão configuradas no arquivo `script.js`:

```javascript
const MERCADO_PAGO_PUBLIC_KEY = 'APP_USR-d48cee54-55fe-4224-9c71-fa59af9c77f6';
const MERCADO_PAGO_ACCESS_TOKEN = 'APP_USR-2803705882545320-071017-b8550733051ba7e6a4478777bd3e4ed5-348490132';
```

### 3. Produtos
Os produtos estão definidos no arquivo `script.js`. Para adicionar novos produtos, edite o array `produtos`:

```javascript
const produtos = [
    {
        id: 1,
        nome: "Nome do Produto",
        categoria: "categoria-slug",
        categoriaNome: "Nome da Categoria",
        preco: 29.90,
        descricao: "Descrição do produto",
        imagem: "URL da imagem principal",
        galeria: [
            "URL da imagem 1",
            "URL da imagem 2"
        ],
        videos: [
            "URL do vídeo (YouTube embed)"
        ]
    }
];
```

**Produtos de Construção Disponíveis:**
- Pregos (R$ 8,90)
- Bica D'água (R$ 12,90)
- Tábuas (R$ 18,90)
- Troncos (R$ 22,90)
- Pedra de Amolar (R$ 15,90)
- Ferramentas Básicas (R$ 35,90)

**Produtos de Roupas VIP Disponíveis:**
- Roupa VIP Militar (R$ 19,90)
- Roupa VIP Ninja (R$ 15,90)
- Kit NBQ (R$ 25,90)

## 🎨 Personalização

### Cores
As cores principais do site podem ser alteradas no arquivo `styles.css`:

- Verde principal: `#4CAF50`
- Azul: `#2196F3`
- Vermelho: `#ff4757`

### Categorias
Para adicionar novas categorias, edite o HTML em `index.html`:

```html
<button class="categoria-btn" data-categoria="nova-categoria">Nova Categoria</button>
```

## 🔧 Funcionalidades Técnicas

### Carrinho de Compras
- Adicionar/remover produtos
- Controle de quantidade
- Cálculo automático do total
- Persistência durante a sessão

### Modal de Produto
- Galeria de imagens com miniaturas
- Suporte a vídeos do YouTube
- Informações detalhadas do produto
- Botão de adicionar ao carrinho

### Integração Mercado Pago
- Criação de preferências de pagamento
- Redirecionamento para checkout
- URLs de retorno configuradas

## 📱 Responsividade

O site é totalmente responsivo e funciona em:
- Desktop
- Tablet
- Mobile

## 🚀 Como Usar

1. Abra o arquivo `index.html` em um navegador
2. Use os botões de categoria no header para navegação rápida
3. Navegue pelas categorias de produtos na seção loja
4. Clique em "Ver Detalhes" para ver a galeria completa
5. Adicione produtos ao carrinho
6. Finalize a compra - será redirecionado diretamente para o Mercado Pago

## 🧪 Teste da Integração

Para testar se a integração com o Mercado Pago está funcionando:

1. Abra o arquivo `teste-mercadopago.html` em um navegador
2. Execute os testes disponíveis
3. Verifique se as credenciais estão corretas

## 🔒 Segurança

⚠️ **Importante**: Em produção, as credenciais do Mercado Pago devem ser mantidas no backend, não no frontend.

Para implementar em produção:

1. Crie um backend (Node.js, PHP, etc.)
2. Mova as credenciais para o backend
3. Crie endpoints para criar preferências do Mercado Pago
4. Atualize o JavaScript para chamar seu backend

## 📞 Suporte

Para dúvidas ou problemas:
- Verifique se todos os arquivos estão na mesma pasta
- Certifique-se de que a imagem `newday.png` está presente
- Verifique o console do navegador para erros

## 🎯 Próximos Passos

Para melhorar o site, considere:

1. **Backend**: Implementar um servidor para gerenciar produtos e pagamentos
2. **Banco de Dados**: Armazenar produtos e pedidos
3. **Sistema de Usuários**: Login e histórico de compras
4. **Notificações**: Email de confirmação de pedido
5. **SEO**: Otimização para motores de busca

---

**Desenvolvido com ❤️ para o NewDay Brasil** 