export function orientacao() {
    window.addEventListener('click', async () => {
        const docEl = document.documentElement;
        try {
            if (docEl.requestFullscreen) {
                await docEl.requestFullscreen();
            } else if (docEl.webkitRequestFullscreen) {
                await docEl.webkitRequestFullscreen();
            }

            await new Promise(resolve => setTimeout(resolve, 300));

            if (screen.orientation && screen.orientation.lock) {
                await screen.orientation.lock('portrait');
                console.log("Sucesso!");
            }
        } catch (err) {
            console.error("Falha técnica:", err);
        }
    }, { once: true });
}