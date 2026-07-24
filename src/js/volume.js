export function controleVolume() {
    const audio = document.getElementById("telaInicialTheme");
    const efeito = document.getElementById("volumeEfeitos");
    const som = document.getElementById("volumeMusica");
    let volumes = [som, efeito];

    function controleVolume(input) {
        const val = Number(input.value);
        const min = Number(input.min) || 0;
        const max = Number(input.max) || 100;
        const porcentagem = ((val - min) / (max - min)) * 100;

        input.style.background = `linear-gradient(to right, #ff0000 0%, #ff0000 ${porcentagem}%, #ddd ${porcentagem}%, #ddd 100%)`;
    }

    volumes.forEach((volume) => {
        const audioAlvo = document.getElementById(volume.dataset.audio);
        controleVolume(volume);
        if(audioAlvo) {
            audioAlvo.volume = volume.value / 100;
        }

        volume.addEventListener("input", () => {
            controleVolume(volume);
            if(audioAlvo) {
                audioAlvo.volume = volume.value / 100;
            }
        });
    });

    window.addEventListener('load', () => {
        if(!audio) return;
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