document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os links da navegação
    const navLinks = document.querySelectorAll('nav a');
  
    // Seleciona todos os containers que vão ser afetados pelo evento
    const containers = document.querySelectorAll('.container__motivacional, .container__about');
  
    // Adiciona o evento de clique a cada link da navegação
    navLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        // Previne o comportamento padrão do link
        e.preventDefault();
  
        // Seleciona o container que deve ser mostrado com base na classe do link
        const containerToShow = document.querySelector(`.${link.className.replace('-link', '')}`);
  
        // Esconde todos os containers
        containers.forEach((container) => {
          container.style.display = 'none';
        });
  
        // Mostra o container selecionado
        containerToShow.style.display = 'block';
      });
    });
  });