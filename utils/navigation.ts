
/**
 * Abre um link externo de forma segura, priorizando o SDK do Telegram
 * para evitar loops de redirecionamento no iOS/Safari.
 */
export const openExternalLink = (url: string) => {
    const tg = (window as any).Telegram?.WebApp;

    if (tg?.openLink) {
        tg.openLink(url);
    } else {
        // Fallback para navegadores padrão
        const win = window.open(url, '_blank');
        if (win) win.focus();
    }
};
