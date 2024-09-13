document.addEventListener('DOMContentLoaded', function () {
    const icons = document.querySelectorAll('.box-skill > div');
    const info = document.getElementById('skill-info');

    icons.forEach(icon => {
        // Evento para quando o mouse passar por cima do ícone
        icon.addEventListener('mouseenter', function () {
            // Atualiza o texto das informações com o valor do atributo 'data-info' do ícone
            info.textContent = this.getAttribute('data-info');
        });

        // Evento para quando o mouse sair de cima do ícone
        icon.addEventListener('mouseleave', function () {
            // Restaura o texto original
            info.textContent = 'Hover the cursor over the card to read...';
        });
    });
});

const chk = document.getElementById('chk');
chk.addEventListener('change', () => {
    document.body.classList.toggle('white')
})