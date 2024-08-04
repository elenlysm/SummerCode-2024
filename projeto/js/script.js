document.addEventListener("DOMContentLoaded", function() {
    console.log("Página carregada!");

    const header = document.querySelector('header');
    const backToTopButton = document.getElementById('back-to-top');
    let lastScrollTop = 0;

    // Controle do cabeçalho
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Rolando para baixo
            header.style.transform = 'translateY(-100%)'; // Esconder cabeçalho
        } else {
            // Rolando para cima
            header.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop;

        // Mostrar/Esconder botão "Voltar ao topo"
        if (scrollTop > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Função para voltar ao topo
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Validação do formulário
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio do formulário para fins de demonstração
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        if (nome && email && mensagem) {
            alert('Formulário enviado com sucesso!');
            form.reset(); // Limpa o formulário
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});
