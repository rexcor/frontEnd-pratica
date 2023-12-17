export default function initAccordion() {
  //Seleciona os elementos html da página
  const accordionList = document.querySelectorAll(
    '[data-anime="accordion"] dt'
  );

  //Verifica se os elementos existem na página para então executar o resto do código
  if (accordionList.length) {
    accordionList[0].classList.add("ativo");
    accordionList[0].nextElementSibling.classList.add("ativo");

    //Adiciona classe ativo ao elemento que foi clicado
    function activeAccordion() {
      this.classList.toggle("ativo");
      this.nextElementSibling.classList.toggle("ativo");
    }

    //Adiciona evento de clique ao elemento html e executa função
    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();
