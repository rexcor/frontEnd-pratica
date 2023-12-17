export default function initTabNav() {
  // Seleciona os elementos html da página
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  //Verifica se os elementos existem na página para então executar o resto do código
  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    // Cria a classe 'ativo' dentro do elemento selecionado e remove seleção caso existe
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      const direction = tabContent[index].dataset.anime;
      tabContent[index].classList.add("ativo", direction);
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();
