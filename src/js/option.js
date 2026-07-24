export function telaDeOpcao() {
    const sair = document.querySelector(".sair");
    const option = document.getElementById("options");
    const menuOptions = document.querySelector(".menuOptions");
    const fundoEstatico = document.querySelector(".fundoStatico");

    option.addEventListener("click", () => {
        menuOptions.classList.add("aberto");
        fundoEstatico.classList.add("aberto");
    });

    sair.addEventListener("click", () => {
        menuOptions.classList.remove("aberto");
        fundoEstatico.classList.remove("aberto");
    });
}





