// Configurações do Mercado Pago
const MERCADO_PAGO_PUBLIC_KEY = 'APP_USR-d48cee54-55fe-4224-9c71-fa59af9c77f6';
const MERCADO_PAGO_ACCESS_TOKEN = 'APP_USR-2803705882545320-071017-b8550733051ba7e6a4478777bd3e4ed5-348490132';

// Dados dos produtos (simulando uma API)
const produtos = [
    {
        id: 1,
        nome: "Base VIP Media",
        categoria: "bases-vip",
        categoriaNome: "Bases VIP",
        preco: 60.00,
        descricao: "Base vip vem incluso:10 storages de mil slots,5 portoes ja T2,Bandeira,1 Bica D'água,kit ferramentas+livro bbp...lembrando que a base vip o valor é mensal,caso queira pegar por mais de um mes entre em contato com a staff do servidor via ticket e irei fazer um preço melhor.",
        imagem: "Basevipcla.png",
        galeria: [
            "Basevipcla.png",
            "basevipcla2.png",
        ],
        videos: [
            "Basevip.mp4"
        ]
    },
    {
        id: 2,
        nome: "Roupa VIP Militar",
        categoria: "roupas-vip",
        categoriaNome: "Roupas VIP",
        preco: 15.00,
        descricao: "Roupa militar VIP com design exclusivo. Oferece proteção adicional e visual único no servidor.",
        imagem: "roupavip.png",
        galeria: [
            "roupavip.png",
            "vipslots.png"
        ],
        videos: []
    },
    {
        id: 3,
        nome: "Veículo Hummer H1",
        categoria: "veiculos",
        categoriaNome: "Veículos",
        preco: 10.00,
        descricao: "Veículo Hummer H1 totalmente equipado...veiculo nao possui seguro,entao se perder seu veiculo nao iremos dropar outro.",
        imagem: "hamer.jpg",
        galeria: [
            "hamer.jpg"
        ],
        videos: []
    },
    {
        id: 4,
        nome: "Kit Construção Avançado",
        categoria: "construcao",
        categoriaNome: "Construção",
        preco: 35.00,
        descricao: "Kit completo de construção avançada. Inclui ferramentas,2 pilhas de madeira,10 caixas de pregos,10 pedras de amolar,livro bbp.",
        imagem: "construcao.jpg",
        galeria: [
            "construcao.jpg"
        ],
        videos: []
    },
    {
        id: 5,
        nome: "Base VIP Grande",
        categoria: "bases-vip",
        categoriaNome: "Bases VIP",
        preco: 70.00,
        descricao: "Base vip vem incluso:15 storages de mil slots,7 portoes ja T2,1 carro de brinde(nao tem seguro),Bandeira,1 Bica D'água,kit ferramentas+livro bbp ...lembrando que a base vip o valor é mensal,caso queira pegar por mais de um mes entre em contato com a staff do servidor via ticket e irei fazer um preço melhor..",
        imagem: "basevipgrande.png",
        galeria: [
            "basevipgrande.png",
            "basevipgrande2.png"
        ],
        videos: [
            "basevipgrande.mp4"
        ]
    },
    {
        id: 7,
        nome: "Pregos",
        categoria: "construcao",
        categoriaNome: "Construção",
        preco: 10.00,
        descricao: "Vip Pregos consta 10 caixas de pregos no pacote.",
        imagem: "pregos.jpg",
        galeria: [
            "pregos.jpg"
        ],
        videos: []
    },
    {
        id: 8,
        nome: "Bica D'água",
        categoria: "construcao",
        categoriaNome: "Construção",
        preco: 20.00,
        descricao: "Bica d'água pode ser colocada em qualquer base que voce fizer,basta informar a Staff o local e iremos adicionar para voce a bica d'agua na sua base.",
        imagem: "bicadagua.jpg",
        galeria: [
            "bicadagua.jpg"
        ],
        videos: []
    },
    {
        id: 9,
        nome: "Kit NBQ",
        categoria: "roupas-vip",
        categoriaNome: "Roupas VIP",
        preco: 10.00,
        descricao: "Kit completo NBQ com mascara e 5 filtros+3 comprimidos de carvao!.",
        imagem: "kitnbq.jpg",
        galeria: [
            "kitnbq.jpg"
        ],
        videos: []
    },
    {
        id: 10,
        nome: "Tábuas",
        categoria: "construcao",
        categoriaNome: "Construção",
        preco: 10.00,
        descricao: "Pacote com 3 pilhas de planks.",
        imagem: "planks.png",
        galeria: [
            "planks.png"
        ],
        videos: []
    },
    {
        id: 11,
        nome: "Troncos",
        categoria: "construcao",
        categoriaNome: "Construção",
        preco: 10.00,
        descricao: "Kit com 15 troncos de madeira.",
        imagem: "troncos.jpg",
        galeria: [
            "troncos.jpg"
        ],
        videos: []
    },
    {
        id: 12,
        nome: "Pedra de Amolar",
        categoria: "construcao",
        categoriaNome: "Construção",
        preco: 10.00,
        descricao: "Kit com 15 pedras de amolar.",
        imagem: "pedradeamolar.jpg",
        galeria: [
            "pedradeamolar.jpg"
        ],
        videos: []
    },
    {
        id: 13,
        nome: "Ferramentas Básicas",
        categoria: "construcao",
        categoriaNome: "Construção",
        preco: 10,
        descricao: "Kit completo de ferramentas básicas para construção. Inclui martelo,chave de fenda,Machado grande e machado pequeno.",
        imagem: "https://via.placeholder.com/400x300/8D6E63/white?text=Ferramentas+Básicas",
        galeria: [
            "https://via.placeholder.com/400x300/8D6E63/white?text=Ferramentas+1",
            "https://via.placeholder.com/400x300/6D4C41/white?text=Ferramentas+2"
        ],
        videos: []
    },
    {
        id: 15,
        nome: "Carro Mod Blindado com Seguro",
        categoria: "veiculos",
        categoriaNome: "Veículos",
        preco: 60.00,
        descricao: "Carro modificado blindado, seguro incluso! Em caso de perda, será reposto pela staff.",
        imagem: "raptor.png",
        galeria: [
            "carrovip.jpg",
            "raptor.png",
            "carrovipvel.png"
        ],
        videos: []
    }
];

// Estado da aplicação
let carrinho = [];
let categoriaAtual = 'bases-vip';
let produtoAtual = null;

// Elementos do DOM
const produtosGrid = document.getElementById('produtos-grid');
const categoriaBtns = document.querySelectorAll('.categoria-btn');
const carrinhoItems = document.getElementById('carrinho-items');
const carrinhoTotal = document.getElementById('carrinho-total');
const cartCount = document.querySelector('.cart-count');
const produtoModal = document.getElementById('produto-modal');
const btnFinalizarCompra = document.getElementById('btn-finalizar-compra');

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    // Marcar a primeira categoria como ativa
    const primeiraCategoria = document.querySelector('.categoria-btn');
    if (primeiraCategoria) {
        primeiraCategoria.classList.add('active');
    }
    
    carregarProdutos();
    inicializarEventos();
    atualizarCarrinho();
});

// Carregar produtos
function carregarProdutos() {
    const produtosFiltrados = produtos.filter(p => p.categoria === categoriaAtual);
    
    produtosGrid.innerHTML = '';
    
    produtosFiltrados.forEach(produto => {
        const produtoCard = criarProdutoCard(produto);
        produtosGrid.appendChild(produtoCard);
    });
}

// Criar card do produto
function criarProdutoCard(produto) {
    const card = document.createElement('div');
    card.className = 'produto-card';
    card.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}" class="produto-imagem">
        <div class="produto-info">
            <h3 class="produto-titulo">${produto.nome}</h3>
            <p class="produto-categoria">${produto.categoriaNome}</p>
            <div class="produto-preco">R$ ${produto.preco.toFixed(2)}</div>
            <button class="btn-adicionar" onclick="adicionarAoCarrinho(${produto.id})">
                <i class="fas fa-cart-plus"></i> Adicionar ao Carrinho
            </button>
            <button class="btn-info" onclick="abrirModalProduto(${produto.id})" style="margin-top: 10px; background: #2196F3; color: white; border: none; padding: 12px; border-radius: 8px; cursor: pointer; width: 100%;">
                <i class="fas fa-info-circle"></i> Ver Detalhes
            </button>
        </div>
    `;
    return card;
}

// Abrir modal do produto
function abrirModalProduto(produtoId) {
    console.log('Abrindo modal para produto ID:', produtoId);
    produtoAtual = produtos.find(p => p.id === produtoId);
    if (!produtoAtual) {
        console.log('Produto não encontrado');
        return;
    }
    console.log('Produto encontrado:', produtoAtual.nome);
    console.log('Vídeos do produto:', produtoAtual.videos);
    
    document.getElementById('produto-titulo').textContent = produtoAtual.nome;
    document.getElementById('produto-categoria').textContent = produtoAtual.categoriaNome;
    document.getElementById('produto-descricao').textContent = produtoAtual.descricao;
    document.getElementById('produto-preco').textContent = `R$ ${produtoAtual.preco.toFixed(2)}`;
    document.getElementById('imagem-principal').src = produtoAtual.imagem;
    
    // Carregar galeria
    const galeriaContainer = document.getElementById('galeria-miniaturas');
    galeriaContainer.innerHTML = '';
    
    // Adicionar imagem principal
    const miniaturaPrincipal = document.createElement('img');
    miniaturaPrincipal.src = produtoAtual.imagem;
    miniaturaPrincipal.className = 'miniatura';
    miniaturaPrincipal.onclick = () => {
        document.getElementById('imagem-principal').innerHTML = `<img src='${produtoAtual.imagem}' alt='${produtoAtual.nome}' style='width: 100%; height: 300px; object-fit: cover; border-radius: 10px;'>`;
        abrirImagemModal(produtoAtual.imagem, [produtoAtual.imagem, ...produtoAtual.galeria]);
    };
    galeriaContainer.appendChild(miniaturaPrincipal);
    
    // Adicionar outras imagens da galeria
    produtoAtual.galeria.forEach(imagem => {
        const miniatura = document.createElement('img');
        miniatura.src = imagem;
        miniatura.className = 'miniatura';
        miniatura.onclick = () => {
            document.getElementById('imagem-principal').innerHTML = `<img src='${imagem}' alt='${produtoAtual.nome}' style='width: 100%; height: 300px; object-fit: cover; border-radius: 10px;'>`;
            abrirImagemModal(imagem, [produtoAtual.imagem, ...produtoAtual.galeria]);
        };
        galeriaContainer.appendChild(miniatura);
    });
    
    produtoModal.style.display = 'block';
}

// Fechar modal
function fecharModal() {
    produtoModal.style.display = 'none';
}

// Adicionar ao carrinho
function adicionarAoCarrinho(produtoId) {
    const produto = produtos.find(p => p.id === produtoId);
    if (!produto) return;
    
    const itemExistente = carrinho.find(item => item.id === produtoId);
    
    if (itemExistente) {
        itemExistente.quantidade++;
    } else {
        carrinho.push({
            ...produto,
            quantidade: 1
        });
    }
    
    atualizarCarrinho();
    mostrarNotificacao(`${produto.nome} adicionado ao carrinho!`);
}

// Remover do carrinho
function removerDoCarrinho(produtoId) {
    carrinho = carrinho.filter(item => item.id !== produtoId);
    atualizarCarrinho();
}

// Atualizar quantidade
function atualizarQuantidade(produtoId, delta) {
    const item = carrinho.find(item => item.id === produtoId);
    if (item) {
        item.quantidade += delta;
        if (item.quantidade <= 0) {
            removerDoCarrinho(produtoId);
        } else {
            atualizarCarrinho();
        }
    }
}

// Atualizar carrinho
function atualizarCarrinho() {
    const total = carrinho.reduce((sum, item) => sum + (item.preco * item.quantidade), 0);
    const quantidadeTotal = carrinho.reduce((sum, item) => sum + item.quantidade, 0);
    
    carrinhoTotal.textContent = `R$ ${total.toFixed(2)}`;
    cartCount.textContent = quantidadeTotal;
    
    carrinhoItems.innerHTML = '';
    
    if (carrinho.length === 0) {
        carrinhoItems.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">Carrinho vazio</p>';
        return;
    }
    
    carrinho.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'carrinho-item';
        itemElement.innerHTML = `
            <img src="${item.imagem}" alt="${item.nome}">
            <div class="carrinho-item-info">
                <div class="carrinho-item-titulo">${item.nome}</div>
                <div class="carrinho-item-preco">R$ ${item.preco.toFixed(2)}</div>
                <div class="carrinho-item-quantidade">
                    <button class="quantidade-btn" onclick="atualizarQuantidade(${item.id}, -1)">-</button>
                    <span class="quantidade">${item.quantidade}</span>
                    <button class="quantidade-btn" onclick="atualizarQuantidade(${item.id}, 1)">+</button>
                    <button class="remover-item" onclick="removerDoCarrinho(${item.id})">Remover</button>
                </div>
            </div>
        `;
        carrinhoItems.appendChild(itemElement);
    });
}

// Mostrar notificação
function mostrarNotificacao(mensagem) {
    const notificacao = document.createElement('div');
    notificacao.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 1rem 2rem;
        border-radius: 5px;
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    notificacao.textContent = mensagem;
    document.body.appendChild(notificacao);
    
    setTimeout(() => {
        notificacao.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notificacao.remove(), 300);
    }, 3000);
}

// Inicializar eventos
function inicializarEventos() {
    // Filtros de categoria
    categoriaBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoriaBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            categoriaAtual = btn.dataset.categoria;
            
            // Atualizar botões do header
            const categoriaNavBtns = document.querySelectorAll('.categoria-nav');
            categoriaNavBtns.forEach(b => b.classList.remove('active'));
            const headerBtn = document.querySelector(`.categoria-nav[data-categoria="${categoriaAtual}"]`);
            if (headerBtn) {
                headerBtn.classList.add('active');
            }
            
            carregarProdutos();
        });
    });
    
    // Botões de categoria no header
    const categoriaNavBtns = document.querySelectorAll('.categoria-nav');
    categoriaNavBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            categoriaAtual = btn.dataset.categoria;
            
            // Atualizar botões ativos
            categoriaBtns.forEach(b => b.classList.remove('active'));
            const categoriaBtn = document.querySelector(`[data-categoria="${categoriaAtual}"]`);
            if (categoriaBtn) {
                categoriaBtn.classList.add('active');
            }
            
            // Atualizar botões do header
            categoriaNavBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            carregarProdutos();
            
            // Scroll para a seção da loja
            document.getElementById('loja').scrollIntoView({ behavior: 'smooth' });
        });
    });
    

    
    // Modal
    document.querySelector('.close').addEventListener('click', fecharModal);
    
    window.addEventListener('click', (e) => {
        if (e.target === produtoModal) {
            fecharModal();
        }
    });
    
    // Finalizar compra
    btnFinalizarCompra.addEventListener('click', finalizarCompra);
}

// Finalizar compra com Mercado Pago
async function finalizarCompra() {
    if (carrinho.length === 0) {
        alert('Carrinho vazio!');
        return;
    }
    
    try {
        // Criar preferência no Mercado Pago usando a API do Mercado Pago
        const preference = {
            items: carrinho.map(item => ({
                title: item.nome,
                unit_price: item.preco,
                quantity: item.quantidade,
                picture_url: item.imagem
            })),
            back_urls: {
                success: window.location.href,
                failure: window.location.href,
                pending: window.location.href
            },
            auto_return: "approved",
            external_reference: "site-dayz-" + Date.now()
        };
        
        // Criar preferência usando a API do Mercado Pago
        const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${MERCADO_PAGO_ACCESS_TOKEN}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(preference)
        });
        
        if (!response.ok) {
            throw new Error('Erro ao criar preferência');
        }
        
        const data = await response.json();
        
        // Redirecionar para o Mercado Pago
        window.location.href = data.init_point;
        
    } catch (error) {
        console.error('Erro ao finalizar compra:', error);
        
        // Fallback: tentar criar preferência usando o SDK do Mercado Pago
        try {
            const mp = new MercadoPago(MERCADO_PAGO_PUBLIC_KEY);
            
            const preference = {
                items: carrinho.map(item => ({
                    title: item.nome,
                    unit_price: item.preco,
                    quantity: item.quantidade,
                    picture_url: item.imagem
                })),
                back_urls: {
                    success: window.location.href,
                    failure: window.location.href,
                    pending: window.location.href
                },
                auto_return: "approved",
                external_reference: "site-dayz-" + Date.now()
            };
            
            mp.preferences.create(preference).then(function(response) {
                window.location.href = response.body.init_point;
            }).catch(function(error) {
                console.error('Erro com SDK:', error);
                alert('Erro ao processar pagamento. Tente novamente.');
            });
            
        } catch (sdkError) {
            console.error('Erro com SDK:', sdkError);
            alert('Erro ao processar pagamento. Tente novamente.');
        }
    }
}

// Função para abrir o modal de imagem ampliada com navegação
function abrirImagemModal(src, galeria) {
    const modal = document.getElementById('imagem-modal');
    const modalImg = document.getElementById('imagem-modal-conteudo');
    const btnPrev = document.querySelector('.imagem-modal-prev');
    const btnNext = document.querySelector('.imagem-modal-next');
    let indiceAtual = galeria.indexOf(src);
    function mostrar(indice) {
        if (indice < 0) indice = galeria.length - 1;
        if (indice >= galeria.length) indice = 0;
        indiceAtual = indice;
        modalImg.src = galeria[indiceAtual];
    }
    mostrar(indiceAtual);
    modal.style.display = 'flex';
    btnPrev.onclick = (e) => { e.stopPropagation(); mostrar(indiceAtual - 1); };
    btnNext.onclick = (e) => { e.stopPropagation(); mostrar(indiceAtual + 1); };
}

// Fechar modal ao clicar no X ou fora da imagem
window.onload = function() {
    const modal = document.getElementById('imagem-modal');
    const closeBtn = document.querySelector('.imagem-modal-close');
    closeBtn.onclick = () => { modal.style.display = 'none'; };
    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    };
};

// Adicionar estilos CSS para animações
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style); 