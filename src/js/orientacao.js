export function orientacao() {
    document.addEventListener('click', () => {
        document.documentElement.requestFullscreen().catch(() => {});
        
        if (screen.orientation && screen.orientation.lock) {
            screen.orientation.lock('portrait').catch(() => {});
        }
    }, { once: true });
}