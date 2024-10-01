// Abre o menu quando o botão com ID 'btn-open' é clicado
document.getElementById('btn-open').addEventListener('click', () => {
    document.getElementById('menu-mobile').classList.add('open-menu'); // Adiciona a classe 'open-menu' ao elemento com ID 'menu-mobile'
});

// Fecha o menu quando o botão com ID 'btn-close' é clicado
document.getElementById('btn-close').addEventListener('click', () => {
    document.getElementById('menu-mobile').classList.remove('open-menu'); // Remove a classe 'open-menu' do elemento com ID 'menu-mobile'
});


// Seleciona todos os elementos com a classe 'link-menu'
const links = document.getElementsByClassName('link-menu');

// Adiciona um evento de clique a cada link do menu para fechar o menu quando um link é clicado
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', () => {
        document.getElementById('menu-mobile').classList.remove('open-menu'); // Remove a classe 'open-menu' do elemento com ID 'menu-mobile'
    });
}

document.addEventListener('click', (event) => {
    const menuMobile = document.getElementById('menu-mobile');
    const btnOpen = document.getElementById('btn-open');
    
    // Verifica se o clique foi fora do menu ou do botão de abrir
    if (!menuMobile.contains(event.target) && !btnOpen.contains(event.target)) {
        menuMobile.classList.remove('open-menu'); // Fecha o menu
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const icons = document.querySelectorAll('.box-skills > div');
    const info = document.getElementById('skill-info');

    icons.forEach(icon => {
        // Evento para quando o mouse passar por cima do ícone
        icon.addEventListener('mouseenter', function() {
            // Atualiza o texto das informações com o valor do atributo 'data-info' do ícone
            info.textContent = this.getAttribute('data-info');
        });

        // Evento para quando o mouse sair de cima do ícone
        icon.addEventListener('mouseleave', function() {
            // Restaura o texto original
            info.textContent = 'Hover the cursor over the card to read...';
        });
    });
});


