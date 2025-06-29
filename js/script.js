// Abre o menu quando o botão com ID 'btn-open' é clicado
document.getElementById('btn-open').addEventListener('click', () => {
    document.getElementById('menu-mobile').classList.add('open-menu'); // Adiciona a classe 'open-menu' ao elemento com ID 'menu-mobile'
});

// Fecha o menu quando o botão com ID 'btn-close' é clicado
document.getElementById('btn-close').addEventListener('click', () => {
    document.getElementById('menu-mobile').classList.remove('open-menu'); // Remove a classe 'open-menu' do elemento com ID 'menu-mobile'
});

// Fecha o menu se o usuário clicar fora dele
document.addEventListener('click', (event) => {
    const menuMobile = document.getElementById('menu-mobile');
    const btnOpen = document.getElementById('btn-open');
    
    // Verifica se o clique foi fora do menu ou do botão de abrir
    if (!menuMobile.contains(event.target) && !btnOpen.contains(event.target)) {
        menuMobile.classList.remove('open-menu'); // Fecha o menu
    }
});

// --- BLOCO MODIFICADO PARA ROLAGEM SUAVE ---

// Seleciona todos os elementos com a classe 'link-menu'
const menuLinks = document.querySelectorAll('.link-menu');

// Adiciona um evento de clique a cada link do menu
menuLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        // NOVO: Previne o comportamento padrão do link (o salto brusco)
        event.preventDefault();

        // Ação que você já tinha: fechar o menu mobile ao clicar em um link
        document.getElementById('menu-mobile').classList.remove('open-menu');

        // NOVO: Lógica para a rolagem suave
        const href = link.getAttribute('href'); // Pega o destino do link (ex: '#projetos')
        const targetSection = document.querySelector(href); // Seleciona a seção de destino

        //Executa a rolagem suave até a seção
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start' // Alinha o topo da seção com o topo da tela
            });
        }
    });
});


// CÓDIGO PARA OS SKILLS ---
document.addEventListener('DOMContentLoaded', function() {
    const icons = document.querySelectorAll('.box-skills > div');
    const info = document.getElementById('skill-info');

    if (info) { // Boa prática: verificar se o elemento existe antes de usar
        icons.forEach(icon => {
            // Evento para quando o mouse passar por cima do ícone
            icon.addEventListener('mouseenter', function() {
                // Atualiza o texto das informações com o valor do atributo 'data-info' do ícone
                info.textContent = this.getAttribute('data-info');
            });

            // Evento para quando o mouse sair de cima do ícone
            icon.addEventListener('mouseleave', function() {
                // Restaura o texto original
                info.textContent = 'Passe o cursor sobre um card para ler...';
            });
        });
    }
});