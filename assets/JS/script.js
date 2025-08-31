document.addEventListener('DOMContentLoaded', function () {
    // Menu Mobile
    const mobileMenu = document.querySelector('.mobile-menu');
    const menu = document.querySelector('.menu');

    mobileMenu.addEventListener('click', function () {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
        menu.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            menu.classList.remove('active');
            mobileMenu.setAttribute('aria-expanded', 'false');
        });
    });

    // Header scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Carregar destinos
    const destinosGrid = document.querySelector('.destinos-grid');
    const destinos = [
        {
            img: 'https://wallpaperaccess.com/full/1192224.jpg',
            titulo: 'Paris, França',
            descricao: 'A cidade do amor e da luz, com sua Torre Eiffel icônica e deliciosa culinária.',
            preco: 'R$ 3.499'
        },
        {
            img: 'https://s.yimg.com/ny/api/res/1.2/OSfOf0_b1btOoJBAhnPLPA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/creatr-uploaded-images/2021-07/59a4bc60-f23c-11eb-bf75-c38993010fb7',
            titulo: 'Tóquio, Japão',
            descricao: 'Uma mistura fascinante de tradição e modernidade, com tecnologia de ponta e cultura ancestral.',
            preco: 'R$ 5.999'
        },
        {
            img: 'https://forbes.com.br/wp-content/uploads/2018/09/NY-istock-1-768x509.jpg',
            titulo: 'Nova York, EUA',
            descricao: 'A cidade que nunca dorme, com seus arranha-céus imponentes e diversidade cultural.',
            preco: 'R$ 4.299'
        },
        {
            img: 'https://a.cdn-hotels.com/gdcs/production143/d357/42fb6908-dcd5-4edb-9f8c-76208494af80.jpg',
            titulo: 'Rio de Janeiro, Brasil',
            descricao: 'Cidade maravilhosa com praias deslumbrantes, Cristo Redentor e o Pão de Açúcar.',
            preco: 'R$ 1.899'
        },
        {
            img: 'https://bucket-files.city-sightseeing.com/blog/2023/02/cityview-barcelona-scaled.jpg',
            titulo: 'Barcelona, Espanha',
            descricao: 'Arquitetura única de Gaudí, praias mediterrâneas e uma vida noturna vibrante.',
            preco: 'R$ 3.799'
        },
        {
            img: 'https://a.cdn-hotels.com/gdcs/production0/d1645/0c67ff64-cf54-4886-91dd-89aa601463af.jpg',
            titulo: 'Sydney, Austrália',
            descricao: 'Casa da Ópera de Sydney, praias incríveis e uma atmosfera descontraída.',
            preco: 'R$ 6.499'
        }
    ];

    destinos.forEach(destino => {
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
                    <button class="btn">Reservar</button> 
                </div>
            </div>
        `;// Ao clicar abrirá o modal de reservar
        destinosGrid.appendChild(destinoCard);
    });

    // Carregar ofertas
    const ofertasCarrossel = document.querySelector('.ofertas-carrossel');
    const ofertas = [
        {
            img: 'https://www.mochilerosviajeros.com/wp-content/uploads/2021/04/MALDIVAS.jpg',
            titulo: 'Pacote All Inclusive',
            local: 'Maldivas',
            duracao: '7 noites',
            preco: 'R$ 8.999'
        },
        {
            img: 'https://www.residenzamaritti.com/wp-content/uploads/2016/09/colosseo.jpg',
            titulo: 'Tour Cultural',
            local: 'Roma, Itália',
            duracao: '5 noites',
            preco: 'R$ 4.599'
        },
        {
            img: 'https://a.cdn-hotels.com/gdcs/production115/d1798/2f8ee366-c274-4562-ac1a-f8b7bd8efa56.jpg?impolicy=fcrop&w=1600&h=1066&q=medium',
            titulo: 'Parques Temáticos',
            local: 'Orlando, EUA',
            duracao: '6 noites',
            preco: 'R$ 5.299'
        },
        {
            img: 'https://a.cdn-hotels.com/gdcs/production143/d1112/c4fedab1-4041-4db5-9245-97439472cf2c.jpg',
            titulo: 'Lua de Mel',
            local: 'Bali, Indonésia',
            duracao: '10 noites',
            preco: 'R$ 7.899'
        },
        {
            img: 'https://www.worldatlas.com/upload/94/49/83/cancun-mexico-jdross75.jpg',
            titulo: 'Férias na Praia',
            local: 'Cancún, México',
            duracao: '7 noites',
            preco: 'R$ 3.999'
        }
    ];

    const carrosselContainer = document.createElement('div');
    carrosselContainer.className = 'carrossel-container';

    ofertas.forEach(oferta => {
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
                <button class="btn" style="width: 100%; margin-top: 15px;">Detalhes</button> 
            </div>
        `;// Ao clicar abrirá o modal de detalhes
        carrosselContainer.appendChild(ofertaCard);
    });

    ofertasCarrossel.appendChild(carrosselContainer);

    // Botões do carrossel
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

    // Navegação do carrossel
    let currentScroll = 0;
    const cardWidth = 320; // Largura aproximada do card + gap

    prevBtn.addEventListener('click', function () {
        currentScroll = Math.max(currentScroll - cardWidth, 0);
        carrosselContainer.scrollTo({
            left: currentScroll,
            behavior: 'smooth'
        });
    });

    nextBtn.addEventListener('click', function () {
        currentScroll = Math.min(currentScroll + cardWidth, carrosselContainer.scrollWidth - carrosselContainer.clientWidth);
        carrosselContainer.scrollTo({
            left: currentScroll,
            behavior: 'smooth'
        });
    });

    // Carregar depoimentos
    const depoimentosCarrossel = document.querySelector('.depoimentos-carrossel');
    const depoimentos = [
        {
            texto: 'A Voyager tornou nossa lua de mel inesquecível! Tudo foi perfeitamente organizado e superou nossas expectativas.',
            autor: 'Ana e Carlos',
            foto: 'https://images.pexels.com/photos/984923/pexels-photo-984923.jpeg?cs=srgb&dl=pexels-vera-arsic-304265-984923.jpg&fm=jpg',
            local: 'Viagem para Maldivas'
        },
        {
            texto: 'Como viajo a trabalho constantemente, preciso de uma agência confiável. A Voyager sempre entrega o melhor serviço.',
            autor: 'Roberto Silva',
            foto: 'https://jrmcoaching.com.br/wp-content/uploads/2020/07/perfil-empreendedor-thumb-600x282.jpg',
            local: 'Viagens corporativas'
        },
        {
            texto: 'Levei minha família para Orlando e foi a melhor experiência que já tivemos. Obrigada Voyager por cada detalhe!',
            autor: 'Patrícia Oliveira',
            foto: 'https://tse2.mm.bing.net/th/id/OIP.LL1Zn8IhNQeTPGwudQOaKQHaLH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
            local: 'Férias em família'
        }
    ];

    depoimentos.forEach(depoimento => {
        const depoimentoCard = document.createElement('div');
        depoimentoCard.className = 'depoimento-card';
        depoimentoCard.innerHTML = `
            <p class="depoimento-texto">${depoimento.texto}</p>
            <div class="depoimento-autor">
                <img src="${depoimento.foto}" alt="${depoimento.autor}">
                <div class="autor-info">
                    <h4>${depoimento.autor}</h4>
                    <p>${depoimento.local}</p>
                </div>
            </div>
        `;
        depoimentosCarrossel.appendChild(depoimentoCard);
    });

    // Inicializar carrossel de depoimentos
    $('.depoimentos-carrossel').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000
    });

    // Animação de contagem
    const statNumbers = document.querySelectorAll('.stat-number');

    function animateCount() {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            const duration = 2000; // 2 segundos
            const step = target / (duration / 16); // 60fps

            let current = 0;
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    clearInterval(timer);
                    current = target;
                }
                stat.textContent = Math.floor(current);
            }, 16);
        });
    }

    // Observador de interseção para animações
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('stats')) {
                    animateCount();
                }
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Formulário de contato
    const formContato = document.getElementById('form-contato');
    formContato.addEventListener('submit', function (e) {
        e.preventDefault();

        // Simular envio
        const btn = this.querySelector('button[type="submit"]');
        btn.textContent = 'Enviando...';
        btn.disabled = true;

        setTimeout(() => {
            btn.textContent = 'Mensagem Enviada!';
            this.reset();

            setTimeout(() => {
                btn.textContent = 'Enviar Mensagem';
                btn.disabled = false;
            }, 2000);
        }, 1500);
    });

    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Modais
function criarModais() {
    // Elementos dos modais
    const modalLogin = document.getElementById('modal-login');
    const modalDetalhes = document.getElementById('modal-detalhes');
    const modalReserva = document.getElementById('modal-reserva');
    const botoesFechar = document.querySelectorAll('.close');
    const iconeUsuario = document.querySelector('.fa-user');

    // Abrir modal de login ao clicar no ícone de usuário
    iconeUsuario.addEventListener('click', () => {
        abrirModal(modalLogin);
    });

    // Fechar modais ao clicar no X
    botoesFechar.forEach(botao => {
        botao.addEventListener('click', () => {
            fecharModal(modalLogin);
            fecharModal(modalDetalhes);
            fecharModal(modalReserva);
        });
    });

    // Fechar modal ao clicar fora dele
    window.addEventListener('click', (e) => {
        if (e.target === modalLogin) fecharModal(modalLogin);
        if (e.target === modalDetalhes) fecharModal(modalDetalhes);
        if (e.target === modalReserva) fecharModal(modalReserva);
    });

    // Tabs do modal de login
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');

            // Remover classe ativa de todos os botões e conteúdos
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Adicionar classe ativa ao botão e conteúdo clicado
            btn.classList.add('active');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });

    // Formulário de login
    const formLogin = document.getElementById('form-login');
    formLogin.addEventListener('submit', (e) => {
        e.preventDefault();
        // Simular login bem-sucedido
        alert('Login realizado com sucesso!');
        fecharModal(modalLogin);
    });

    // Formulário de cadastro
    const formCadastro = document.getElementById('form-cadastro');
    formCadastro.addEventListener('submit', (e) => {
        e.preventDefault();
        // Simular cadastro bem-sucedido
        alert('Cadastro realizado com sucesso!');
        fecharModal(modalLogin);
    });

    // Formulário de reserva
    const formReserva = document.getElementById('form-reserva');
    formReserva.addEventListener('submit', (e) => {
        e.preventDefault();
        // Simular reserva bem-sucedida
        alert('Reserva confirmada com sucesso! Em breve entraremos em contato.');
        fecharModal(modalReserva);
    });

    // Configurar botões "Detalhes" nas ofertas
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn') && e.target.textContent === 'Detalhes') {
            const ofertaCard = e.target.closest('.oferta-card');
            const img = ofertaCard.querySelector('img').src;
            const titulo = ofertaCard.querySelector('h3').textContent;
            const local = ofertaCard.querySelector('.local').textContent;
            const duracao = ofertaCard.querySelector('.duracao').textContent;
            const preco = ofertaCard.querySelector('.preco').textContent;

            abrirModalDetalhes({
                img,
                titulo,
                local,
                duracao,
                preco
            });
        }

        // Configurar botões "Reservar" nos destinos
        if (e.target.classList.contains('btn') && e.target.textContent === 'Reservar') {
            const destinoCard = e.target.closest('.destino-card');
            const titulo = destinoCard.querySelector('h3').textContent;
            const preco = destinoCard.querySelector('span').textContent;

            abrirModalReserva({
                titulo,
                preco
            });
        }

        // Configurar botão "Fazer Reserva" no modal de detalhes
        if (e.target.classList.contains('btn-reservar')) {
            const titulo = document.getElementById('detalhes-titulo').textContent;
            const preco = document.getElementById('detalhes-preco').textContent;

            fecharModal(modalDetalhes);
            abrirModalReserva({
                titulo,
                preco
            });
        }
    });
}

// Função para abrir modal
function abrirModal(modal) {
    modal.style.display = 'block';
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
    document.body.style.overflow = 'hidden';
}

// Função para fechar modal
function fecharModal(modal) {
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
    document.body.style.overflow = 'auto';
}

// Função para abrir modal de detalhes com dados específicos
function abrirModalDetalhes(dados) {
    const modal = document.getElementById('modal-detalhes');

    // Preencher dados
    document.getElementById('detalhes-img').src = dados.img;
    document.getElementById('detalhes-titulo').textContent = dados.titulo;
    document.getElementById('detalhes-local').textContent = dados.local;
    document.getElementById('detalhes-duracao').textContent = dados.duracao;
    document.getElementById('detalhes-preco').textContent = dados.preco;

    // Descrição padrão (poderia ser personalizada por destino)
    document.getElementById('detalhes-descricao').textContent =
        'Desfrute de uma experiência incrível com este pacote exclusivo. Inclui hospedagem, traslados e muito mais.';

    // Itens incluídos (poderia ser personalizado por destino)
    const inclusos = [
        'Hospedagem em hotel selecionado',
        'Café da manhã',
        'Traslados aeroporto-hotel-aeroporto',
        'City tour ou passeio similar',
        'Assistência de viagem 24h'
    ];

    const listaInclusos = document.getElementById('detalhes-incluso');
    listaInclusos.innerHTML = '';

    inclusos.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        listaInclusos.appendChild(li);
    });

    abrirModal(modal);
}

// Função para abrir modal de reserva com dados específicos
function abrirModalReserva(dados) {
    const modal = document.getElementById('modal-reserva');

    // Preencher dados
    document.getElementById('reserva-titulo').textContent = dados.titulo;
    document.getElementById('reserva-preco').textContent = dados.preco;

    // Limpar formulário
    document.getElementById('form-reserva').reset();

    // Definir data mínima como hoje
    const hoje = new Date().toISOString().split('T')[0];
    document.getElementById('reserva-data').setAttribute('min', hoje);

    abrirModal(modal);
}

// Inicializar modais quando o DOM estiver carregado

document.addEventListener('DOMContentLoaded', criarModais);
