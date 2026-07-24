export function telaDeOpcao() {
    const ACTIVECLASS = "aberto";
    const sair = document.querySelector(".sair");
    const option = document.getElementById("options");
    // const audio = document.getElementById("telaInicialTheme");
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

    window.addEventListener('load', () => {
    audio.play().catch(() => {
        const iniciar = () => {
            audio.play();
            document.removeEventListener('click', iniciar);
            document.removeEventListener('keydown', iniciar);
        };
        document.addEventListener('click', iniciar);
        document.addEventListener('keydown', iniciar);
    });
});
}





