// Aguarda o carregamento completo da página
document.addEventListener('DOMContentLoaded', () => {
    
    // Suaviza a rolagem para os links internos da navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    console.log("Site da Associação APA carregado com sucesso!");
});
