document.addEventListener('DOMContentLoaded', function () {
    // --- Menu Mobile ---
    const mobileMenu = document.querySelector('.mobile-menu');
    const menu = document.querySelector('.menu');
    mobileMenu.addEventListener('click', function () {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
        menu.classList.toggle('active');
    });
    document.querySelectorAll('.menu a').forEach(link => {
        link.addEventListener('click', function () {
            menu.classList.remove('active');
            mobileMenu.setAttribute('aria-expanded', 'false');
        });
    });
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    });

    // --- Dados dos Destinos e Ofertas ---
    const destinos = [
        { img: 'https://wallpaperaccess.com/full/1192224.jpg', titulo: 'Paris, França', descricao: 'A cidade do amor e da luz, com sua Torre Eiffel icônica e deliciosa culinária.', preco: 'R$ 3.499' },
        { img: 'https://s.yimg.com/ny/api/res/1.2/OSfOf0_b1btOoJBAhnPLPA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/creatr-uploaded-images/2021-07/59a4bc60-f23c-11eb-bf75-c38993010fb7', titulo: 'Tóquio, Japão', descricao: 'Uma mistura fascinante de tradição e modernidade, com tecnologia de ponta e cultura ancestral.', preco: 'R$ 5.999' },
        { img: 'https://forbes.com.br/wp-content/uploads/2018/09/NY-istock-1-768x509.jpg', titulo: 'Nova York, EUA', descricao: 'A cidade que nunca dorme, com seus arranha-céus imponentes e diversidade cultural.', preco: 'R$ 4.299' },
        { img: 'https://a.cdn-hotels.com/gdcs/production143/d357/42fb6908-dcd5-4edb-9f8c-76208494af80.jpg', titulo: 'Rio de Janeiro, Brasil', descricao: 'Cidade maravilhosa com praias deslumbrantes, Cristo Redentor e o Pão de Açúcar.', preco: 'R$ 1.899' },
        { img: 'https://bucket-files.city-sightseeing.com/blog/2023/02/cityview-barcelona-scaled.jpg', titulo: 'Barcelona, Espanha', descricao: 'Arquitetura única de Gaudí, praias mediterrâneas e uma vida noturna vibrante.', preco: 'R$ 3.799' },
        { img: 'https://a.cdn-hotels.com/gdcs/production0/d1645/0c67ff64-cf54-4886-91dd-89aa601463af.jpg', titulo: 'Sydney, Austrália', descricao: 'Casa da Ópera de Sydney, praias incríveis e uma atmosfera descontraída.', preco: 'R$ 6.499' }
    ];
    const ofertas = [
        { img: 'https://www.mochilerosviajeros.com/wp-content/uploads/2021/04/MALDIVAS.jpg', titulo: 'Pacote All Inclusive', local: 'Maldivas', duracao: '7 noites', preco: 'R$ 8.999' },
        { img: 'https://www.elissalles.com.br/imagens/roma_italia(1).jpg', titulo: 'Tour Cultural', local: 'Roma, Itália', duracao: '5 noites', preco: 'R$ 4.599' },
        { img: 'https://a.cdn-hotels.com/gdcs/production115/d1798/2f8ee366-c274-4562-ac1a-f8b7bd8efa56.jpg?impolicy=fcrop&w=1600&h=1066&q=medium', titulo: 'Parques Temáticos', local: 'Orlando, EUA', duracao: '6 noites', preco: 'R$ 5.299' },
        { img: 'https://a.cdn-hotels.com/gdcs/production143/d1112/c4fedab1-4041-4db5-9245-97439472cf2c.jpg', titulo: 'Lua de Mel', local: 'Bali, Indonésia', duracao: '10 noites', preco: 'R$ 7.899' },
        { img: 'https://www.worldatlas.com/upload/94/49/83/cancun-mexico-jdross75.jpg', titulo: 'Férias na Praia', local: 'Cancún, México', duracao: '7 noites', preco: 'R$ 3.999' }
    ];

    // --- Render Destinos ---
    const destinosGrid = document.querySelector('.destinos-grid');
    destinos.forEach((destino, idx) => {
        const destinoCard = document.createElement('div');
        destinoCard.className = 'destino-card';
        destinoCard.innerHTML = `
            <div class="destino-img">
                <img src="${destino.img}" alt="${destino.titulo}">
            </div>
            <div class="destino-info">
                <h3>${destino.titulo}</h3>
                <p>${destino.descricao}</p>
                <div class="destino-preco">
                    <span>${destino.preco}</span>
                    <button class="btn"><i class="fas fa-shopping-bag"></i></button>
                    <button class="btn reservar-btn">Reservar</button> 
                </div>
            </div>
        `;
        destinosGrid.appendChild(destinoCard);
    });

    // --- Render Ofertas ---
    const ofertasCarrossel = document.querySelector('.ofertas-carrossel');
    const carrosselContainer = document.createElement('div');
    carrosselContainer.className = 'carrossel-container';
    ofertas.forEach((oferta, idx) => {
        const ofertaCard = document.createElement('div');
        ofertaCard.className = 'oferta-card';
        ofertaCard.innerHTML = `
            <div class="oferta-img">
                <img src="${oferta.img}" alt="${oferta.titulo}">
            </div>
            <div class="oferta-info">
                <h3>${oferta.titulo}</h3>
                <p class="local"><i class="fas fa-map-marker-alt"></i> ${oferta.local}</p>
                <div class="detalhes">
                    <span class="duracao"><i class="far fa-calendar-alt"></i> ${oferta.duracao}</span>
                    <span class="preco">${oferta.preco}</span>
                </div>
                <button class="btn" style="width: 100%; margin-top: 15px;"><i class="fas fa-shopping-bag"></i></button>
                <button class="btn detalhes-btn" style="width: 100%; margin-top: 15px;">Detalhes</button> 
            </div>
        `;
        carrosselContainer.appendChild(ofertaCard);
    });
    ofertasCarrossel.appendChild(carrosselContainer);

    // --- Botões do Carrossel ---
    const prevBtn = document.createElement('button');
    prevBtn.className = 'carrossel-btn prev';
    prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
    prevBtn.setAttribute('aria-label', 'Anterior');
    const nextBtn = document.createElement('button');
    nextBtn.className = 'carrossel-btn next';
    nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
    nextBtn.setAttribute('aria-label', 'Próximo');
    ofertasCarrossel.appendChild(prevBtn);
    ofertasCarrossel.appendChild(nextBtn);
    let currentScroll = 0;
    const cardWidth = 320;
    prevBtn.addEventListener('click', function () {
        currentScroll = Math.max(currentScroll - cardWidth, 0);
        carrosselContainer.scrollTo({ left: currentScroll, behavior: 'smooth' });
    });
    nextBtn.addEventListener('click', function () {
        currentScroll = Math.min(currentScroll + cardWidth, carrosselContainer.scrollWidth - carrosselContainer.clientWidth);
        carrosselContainer.scrollTo({ left: currentScroll, behavior: 'smooth' });
    });

    // --- Carrinho ---
    const cartIcon = document.querySelector('.cart-icon');
    const cartOverlay = document.querySelector('.cart-overlay');
    const closeCart = document.querySelector('.close-cart');
    const cartContent = document.querySelector('.cart-content');
    const cartTotal = document.querySelector('.total-amount');
    const cartCount = document.querySelector('.cart-count');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Abrir/fechar carrinho
    if (cartIcon) {
        cartIcon.addEventListener('click', function (e) {
            e.preventDefault();
            cartOverlay.classList.add('active');
        });
    }
    if (closeCart) {
        closeCart.addEventListener('click', function () {
            cartOverlay.classList.remove('active');
        });
    }

    // Abre o modal de reserva e preenche com os dados do produto (não adiciona ao carrinho ainda)
    function openReservaModal(productId) {
        const reservaModal = document.getElementById('modal-reserva');
        const reservaTitulo = document.getElementById('reserva-titulo');
        const reservaPreco = document.getElementById('reserva-preco');
        const formReserva = document.getElementById('form-reserva');
        const product = getProductById(productId);
        if (!product) return;

        if (reservaTitulo) reservaTitulo.textContent = product.title;
        if (reservaPreco) reservaPreco.textContent = `R$ ${product.price.toFixed(2)}`;
        if (formReserva) {
            formReserva.dataset.productId = productId;
            formReserva.reset(); // limpa inputs anteriores
            // opcional: selecionar 1 pessoa como padrão
            const pessoas = document.getElementById('reserva-pessoas');
            if (pessoas) pessoas.value = '1';
        }

        // fecha outros modais abertos e abre o modal de reserva
        document.querySelectorAll('.modal.show').forEach(m => m.classList.remove('show'));
        if (reservaModal) reservaModal.classList.add('show');
    }

    // Adicionar ao carrinho usando o botão com ícone já presente nos cards
    function setupAddToCartButtons() {
        // Destinos (icone de sacola) -> agora abre modal de reserva
        document.querySelectorAll('.destino-card').forEach((card, idx) => {
            const btn = card.querySelector('.fa-shopping-bag')?.closest('button');
            if (btn) {
                btn.dataset.id = 'destino-' + idx;
                btn.onclick = function (ev) {
                    ev.preventDefault();
                    openReservaModal(this.dataset.id);
                };
            }
        });

        // Destinos (botão "Reservar" — agora abre modal de reserva)
        document.querySelectorAll('.destino-card .reservar-btn').forEach((btn, idx) => {
            btn.dataset.id = 'destino-' + idx;
            btn.addEventListener('click', function (ev) {
                ev.preventDefault();
                openReservaModal(this.dataset.id);
            });
        });

        // Ofertas (icone de sacola) -> agora abre modal de reserva
        document.querySelectorAll('.oferta-card').forEach((card, idx) => {
            const btn = card.querySelector('.fa-shopping-bag')?.closest('button');
            if (btn) {
                btn.dataset.id = 'oferta-' + idx;
                btn.onclick = function (ev) {
                    ev.preventDefault();
                    openReservaModal(this.dataset.id);
                };
            }
        });
    }

    // Produtos do carrinho (destinos + ofertas)
    function getProductById(id) {
        if (id.startsWith('destino-')) {
            const idx = parseInt(id.split('-')[1]);
            const destino = destinos[idx];
            return {
                id,
                title: destino.titulo,
                price: parseFloat(destino.preco.replace('R$', '').replace('.', '').replace(',', '.')),
                image: destino.img,
                quantity: 1
            };
        }
        if (id.startsWith('oferta-')) {
            const idx = parseInt(id.split('-')[1]);
            const oferta = ofertas[idx];
            return {
                id,
                title: oferta.titulo + ' - ' + oferta.local,
                price: parseFloat(oferta.preco.replace('R$', '').replace('.', '').replace(',', '.')),
                image: oferta.img,
                quantity: 1
            };
        }
        return null;
    }

    // Adicionar ao carrinho
    function addToCart(e) {
        const productId = e.currentTarget.dataset.id;
        let item = cart.find(i => i.id === productId);
        if (item) {
            item.quantity += 1;
        } else {
            const product = getProductById(productId);
            if (product) cart.push(product);
        }
        updateCart();
        showAddedToCartMessage(getProductById(productId).title);
    }

    // Mensagem de sucesso
    function showAddedToCartMessage(productName) {
        const message = document.createElement('div');
        message.className = 'cart-message';
        message.innerHTML = `<p>${productName} foi adicionado ao carrinho!</p>`;
        document.body.appendChild(message);
        setTimeout(() => message.classList.add('show'), 10);
        setTimeout(() => {
            message.classList.remove('show');
            setTimeout(() => document.body.removeChild(message), 300);
        }, 2000);
    }

    // Atualizar carrinho
    function updateCart() {
        renderCartItems();
        updateCartTotal();
        saveCartToLocalStorage();
        updateCartIcon();
    }

    // Renderizar itens do carrinho
    function renderCartItems() {
        if (!cartContent) return;
        cartContent.innerHTML = '';
        if (cart.length === 0) {
            cartContent.innerHTML = '<p class="empty-cart">Seu carrinho está vazio</p>';
            return;
        }
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}" class="cart-item-img">
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${item.title}</h4>
                    <p class="cart-item-price">R$ ${item.price.toFixed(2)}</p>
                    <span class="cart-item-remove" data-id="${item.id}">Remover</span>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn minus" data-id="${item.id}">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn plus" data-id="${item.id}">+</button>
                    </div>
                </div>
            `;
            cartContent.appendChild(cartItem);
        });
        // Eventos dos botões
        cartContent.querySelectorAll('.cart-item-remove').forEach(btn => btn.onclick = removeCartItem);
        cartContent.querySelectorAll('.quantity-btn.minus').forEach(btn => btn.onclick = decreaseQuantity);
        cartContent.querySelectorAll('.quantity-btn.plus').forEach(btn => btn.onclick = increaseQuantity);
    }

    // Atualizar total
    function updateCartTotal() {
        if (!cartTotal) return;
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = `R$ ${total.toFixed(2)}`;
    }

    // Atualizar ícone
    function updateCartIcon() {
        if (!cartCount) return;
        const count = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = count;
    }

    // Remover item
    function removeCartItem(e) {
        const productId = e.currentTarget.dataset.id;
        cart = cart.filter(item => item.id !== productId);
        updateCart();
    }

    // Diminuir quantidade
    function decreaseQuantity(e) {
        const productId = e.currentTarget.dataset.id;
        const item = cart.find(item => item.id === productId);
        if (item.quantity > 1) {
            item.quantity -= 1;
        } else {
            cart = cart.filter(item => item.id !== productId);
        }
        updateCart();
    }

    // Aumentar quantidade
    function increaseQuantity(e) {
        const productId = e.currentTarget.dataset.id;
        const item = cart.find(item => item.id === productId);
        item.quantity += 1;
        updateCart();
    }

    // Salvar no localStorage
    function saveCartToLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Finalizar compra
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function () {
            if (cart.length === 0) {
                alert('Seu carrinho está vazio!');
                return;
            }
            alert('Compra finalizada com sucesso! Obrigado por escolher a Voyager.');
            cart = [];
            updateCart();
            cartOverlay.classList.remove('active');
        });
    }

    // --- Inicialização dos botões do carrinho ---
    setupAddToCartButtons();
    updateCart();

    // Abrir modal de detalhes imediatamente ao clicar em "Detalhes"
    const detalhesModal = document.getElementById('modal-detalhes');
    if (detalhesModal) {
        carrosselContainer.querySelectorAll('.detalhes-btn').forEach((btn, idx) => {
            btn.addEventListener('click', function (ev) {
                const oferta = ofertas[idx];
                if (!oferta) return;

                const imgEl = detalhesModal.querySelector('#detalhes-img');
                const tituloEl = detalhesModal.querySelector('#detalhes-titulo');
                const descricaoEl = detalhesModal.querySelector('#detalhes-descricao');
                const localEl = detalhesModal.querySelector('#detalhes-local');
                const duracaoEl = detalhesModal.querySelector('#detalhes-duracao');
                const precoEl = detalhesModal.querySelector('#detalhes-preco');
                const inclusosEl = detalhesModal.querySelector('#detalhes-incluso');

                if (imgEl) imgEl.src = oferta.img;
                if (tituloEl) tituloEl.textContent = `${oferta.titulo} — ${oferta.local || ''}`;
                if (descricaoEl) descricaoEl.textContent = oferta.titulo + ' em ' + (oferta.local || '');
                if (localEl) localEl.textContent = oferta.local || '';
                if (duracaoEl) duracaoEl.textContent = oferta.duracao || '';
                if (precoEl) precoEl.textContent = oferta.preco || '';
                if (inclusosEl) inclusosEl.innerHTML = '<li>Passagem aérea</li><li>Hospedagem</li><li>Café da manhã</li>';

                // ligar o botão do modal para abrir o modal de reserva (em vez de adicionar direto ao carrinho)
                const reservarBtnModal = detalhesModal.querySelector('.btn-reservar');
                if (reservarBtnModal) {
                    reservarBtnModal.dataset.id = 'oferta-' + idx;
                    reservarBtnModal.onclick = function () {
                        const reservaModal = document.getElementById('modal-reserva');
                        const reservaTitulo = document.getElementById('reserva-titulo');
                        const reservaPreco = document.getElementById('reserva-preco');
                        const formReserva = document.getElementById('form-reserva');

                        // Preencher resumo da reserva
                        if (reservaTitulo) reservaTitulo.textContent = `${oferta.titulo} — ${oferta.local || ''}`;
                        if (reservaPreco) reservaPreco.textContent = oferta.preco || '';

                        // Guardar o productId no form para uso no submit
                        if (formReserva) formReserva.dataset.productId = 'oferta-' + idx;

                        // Abrir modal de reserva (fecha o modal de detalhes)
                        detalhesModal.classList.remove('show');
                        if (reservaModal) reservaModal.classList.add('show');
                    };
                }

                detalhesModal.classList.add('show');
            });
        });
    }
    
    // --- Tratamento do formulário de reserva: ao confirmar, adiciona ao carrinho e abre o overlay ---
    const formReserva = document.getElementById('form-reserva');
    if (formReserva) {
        formReserva.addEventListener('submit', function (e) {
            e.preventDefault();
            const productId = this.dataset.productId;
            if (!productId) return;

            // Quantidade baseada no select de pessoas (fallback 1)
            const pessoasSelect = document.getElementById('reserva-pessoas');
            const quantidade = parseInt(pessoasSelect?.value, 10) || 1;

            // Adiciona ao carrinho respeitando quantidades já existentes
            let item = cart.find(i => i.id === productId);
            if (item) {
                item.quantity += quantidade;
            } else {
                const product = getProductById(productId);
                if (product) {
                    product.quantity = quantidade;
                    cart.push(product);
                }
            }

            updateCart();

            // Fechar modal de reserva e abrir carrinho
            const reservaModalEl = document.getElementById('modal-reserva');
            if (reservaModalEl) reservaModalEl.classList.remove('show');
            if (cartOverlay) cartOverlay.classList.add('active');

            // Mensagem curta de confirmação
            showAddedToCartMessage(getProductById(productId).title);

            // reset básico do form
            this.reset();
            delete this.dataset.productId;
        });
    }

    // --- Modais: abrir/fechar, tabs e fechamento ao clicar fora / Esc ---
    // Abrir modal de login ao clicar no ícone de usuário
    const userIcon = document.querySelector('.fa-user');
    const loginModal = document.getElementById('modal-login');
    if (userIcon && loginModal) {
        userIcon.style.cursor = 'pointer';
        userIcon.addEventListener('click', function (e) {
            e.preventDefault();
            loginModal.classList.add('show');
        });
    }

    // Fechar modais com o botão X
    document.querySelectorAll('.modal .close').forEach(closeBtn => {
        closeBtn.addEventListener('click', function () {
            const modal = this.closest('.modal');
            if (modal) modal.classList.remove('show');
        });
    });

    // Fechar modal ao clicar fora do conteúdo
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function (e) {
            if (e.target === this) this.classList.remove('show');
        });
    });

    // Fechar modais com tecla Esc
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal.show').forEach(m => m.classList.remove('show'));
        }
    });

    // Tabs do modal de login/cadastro
    document.querySelectorAll('.modal .tab-btn').forEach(tabBtn => {
        tabBtn.addEventListener('click', function () {
            const modal = this.closest('.modal');
            if (!modal) return;

            // remover active nos botões e conteúdos
            modal.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            modal.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

            // ativar botão e conteúdo correspondente
            this.classList.add('active');
            const tab = this.dataset.tab; // "login" ou "cadastro"
            const content = modal.querySelector(`#${tab}-tab`);
            if (content) content.classList.add('active');
        });
    });
});
