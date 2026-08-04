export function orientacao() {
    window.addEventListener('click', async () => {
    const docEl = document.documentElement;

    try {
        // 1. Tenta Fullscreen (Chrome usa webkit no Android às vezes)
        if (docEl.requestFullscreen) {
            await docEl.requestFullscreen();
        } else if (docEl.webkitRequestFullscreen) {
            await docEl.webkitRequestFullscreen();
        }

        // 2. O segredo: Espere o navegador processar a animação de tela cheia
        // Sem esse delay, o 'lock' falha porque o Chrome acha que ainda não está em fullscreen
        await new Promise(resolve => setTimeout(resolve, 300));

        // 3. Trava a orientação
        if (screen.orientation && screen.orientation.lock) {
            await screen.orientation.lock('portrait');
            console.log("Sucesso!");
        }
    } catch (err) {
        console.error("Falha técnica:", err);
    }
}, { once: true });
}