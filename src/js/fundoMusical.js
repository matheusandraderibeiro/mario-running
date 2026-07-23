const audio = document.getElementById("telaInicialTheme");

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