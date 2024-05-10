// Código JavaScript para controlar as abas
function openTab(tabName) {
    // Esconder todos os conteúdos da aba
    var tabContents = document.getElementsByClassName('tab-content');
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active');
    }

    // Mostrar o conteúdo da aba selecionada
    var tab = document.getElementById(tabName);
    if (tab) {
        tab.classList.add('active');
    }
}