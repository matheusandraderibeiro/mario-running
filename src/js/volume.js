export function controleVolume() {
    const botoes = document.querySelectorAll(".optBotao");
    const audio = document.getElementById("telaInicialTheme");

    function atualizarBarra(input) {
        const val = Number(input.value);
        const min = Number(input.min) || 0;
        const max = Number(input.max) || 100;
        const porcentagem = ((val-min)/(max-min))*100;
        input.style.background = `linear-gradient(to right, #ff0000 0%, #ff0000 ${porcentagem}%, #ddd ${porcentagem}%, #ddd 100%)`;
    }

    function atualizarIcon(botao, icon, valor) {
        const classOn = botao.dataset.iconOn;
        const classOff = botao.dataset.iconOff;

        if(Number(valor) > 0) {
            icon.classList.add(classOn);
            icon.classList.remove(classOff);
        } else {
            icon.classList.remove(classOn);
            icon.classList.add(classOff);
        }
    }

    botoes.forEach((botao)=> {
        const container = botao.closest("div");
        const icon = botao.querySelector("span");
        const controleVolume = container.querySelector(".volume");
        const audioAlvo = document.getElementById(controleVolume.dataset.audio);

        atualizarBarra(controleVolume);
        atualizarIcon(botao, icon, controleVolume.value);

        botao.addEventListener("click", ()=> {
            if(Number(controleVolume.value) > 0) {
                controleVolume.dataset.volume = controleVolume.value;
                controleVolume.value = 0;
            } else {
                controleVolume.value = controleVolume.dataset.volume || 50;
            }

            atualizarBarra(controleVolume);
            atualizarIcon(botao, icon, controleVolume.value);

            if(audioAlvo) {
                audioAlvo.volume = controleVolume.value / 100;
            }
        });

        controleVolume.addEventListener("input", ()=> {
            atualizarBarra(controleVolume);
            atualizarIcon(botao, icon, controleVolume.value);

            if(audioAlvo) {
                audioAlvo.volume = controleVolume.value / 100;
            }
            if(audioAlvo && audioAlvo.id === "efeitosSonoros") {
                audioAlvo.play();
            }
        });
    });

    window.addEventListener("load", () => {
        if(!audio) return;
        audio.play().catch(()=> {
            const iniciar = ()=> {
                audio.play();
                document.removeEventListener("click", iniciar);
                document.removeEventListener("keydown", iniciar);
            }
            document.addEventListener("click", iniciar);
            document.addEventListener("keydown", iniciar);
        });
    });
}
