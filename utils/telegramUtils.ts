/**
 * Telegram Mini App Utilities
 * Centralized helpers for Telegram WebApp SDK features
 */

declare global {
    interface Window {
        Telegram?: {
            WebApp: {
                initData: string;
                initDataUnsafe: {
                    user?: {
                        id: number;
                        first_name: string;
                        last_name?: string;
                        username?: string;
                        language_code?: string;
                    };
                    start_param?: string;
                };
                version: string;
                platform: string;
                colorScheme: 'light' | 'dark';
                themeParams: Record<string, string>;
                isExpanded: boolean;
                viewportHeight: number;
                viewportStableHeight: number;
                headerColor: string;
                backgroundColor: string;
                isClosingConfirmationEnabled: boolean;
                BackButton: {
                    isVisible: boolean;
                    show: () => void;
                    hide: () => void;
                    onClick: (callback: () => void) => void;
                    offClick: (callback: () => void) => void;
                };
                MainButton: {
                    text: string;
                    color: string;
                    textColor: string;
                    isVisible: boolean;
                    isActive: boolean;
                    isProgressVisible: boolean;
                    setText: (text: string) => void;
                    show: () => void;
                    hide: () => void;
                    enable: () => void;
                    disable: () => void;
                    showProgress: (leaveActive?: boolean) => void;
                    hideProgress: () => void;
                    onClick: (callback: () => void) => void;
                    offClick: (callback: () => void) => void;
                };
                SettingsButton: {
                    isVisible: boolean;
                    show: () => void;
                    hide: () => void;
                    onClick: (callback: () => void) => void;
                    offClick: (callback: () => void) => void;
                };
                HapticFeedback: {
                    impactOccurred: (style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft') => void;
                    notificationOccurred: (type: 'error' | 'success' | 'warning') => void;
                    selectionChanged: () => void;
                };
                CloudStorage: {
                    setItem: (key: string, value: string, callback?: (error: Error | null, stored: boolean) => void) => void;
                    getItem: (key: string, callback: (error: Error | null, value: string) => void) => void;
                    getItems: (keys: string[], callback: (error: Error | null, values: Record<string, string>) => void) => void;
                    removeItem: (key: string, callback?: (error: Error | null, removed: boolean) => void) => void;
                    removeItems: (keys: string[], callback?: (error: Error | null, removed: boolean) => void) => void;
                    getKeys: (callback: (error: Error | null, keys: string[]) => void) => void;
                };
                ready: () => void;
                expand: () => void;
                close: () => void;
                enableClosingConfirmation: () => void;
                disableClosingConfirmation: () => void;
                setHeaderColor: (color: string) => void;
                setBackgroundColor: (color: string) => void;
                setBottomBarColor: (color: string) => void;
                openLink: (url: string, options?: { try_instant_view?: boolean }) => void;
                openTelegramLink: (url: string) => void;
                shareToStory: (mediaUrl: string, params?: { text?: string; widget_link?: { url: string; name?: string } }) => void;
                showPopup: (params: { title?: string; message: string; buttons?: Array<{ id?: string; type?: string; text?: string }> }, callback?: (buttonId: string) => void) => void;
                showAlert: (message: string, callback?: () => void) => void;
                showConfirm: (message: string, callback?: (confirmed: boolean) => void) => void;
                requestContact: (callback: (shared: boolean) => void) => void;
                onEvent: (eventType: string, callback: () => void) => void;
                offEvent: (eventType: string, callback: () => void) => void;
                sendData: (data: string) => void;
            };
        };
    }
}

const webApp = typeof window !== 'undefined' ? window.Telegram?.WebApp : null;

// ============================================
// CLOUD STORAGE (Sync across devices)
// ============================================

export const cloudStorage = {
    /**
     * Save data to Telegram Cloud Storage
     */
    setItem: (key: string, value: string): Promise<boolean> => {
        return new Promise((resolve, reject) => {
            if (!webApp?.CloudStorage) {
                // Fallback to localStorage
                try {
                    localStorage.setItem(key, value);
                    resolve(true);
                } catch (e) {
                    reject(e);
                }
                return;
            }

            webApp.CloudStorage.setItem(key, value, (error, stored) => {
                if (error) {
                    // Fallback to localStorage
                    try {
                        localStorage.setItem(key, value);
                        resolve(true);
                    } catch (e) {
                        reject(error);
                    }
                } else {
                    resolve(stored);
                }
            });
        });
    },

    /**
     * Get data from Telegram Cloud Storage
     */
    getItem: (key: string): Promise<string | null> => {
        return new Promise((resolve, reject) => {
            if (!webApp?.CloudStorage) {
                // Fallback to localStorage
                resolve(localStorage.getItem(key));
                return;
            }

            webApp.CloudStorage.getItem(key, (error, value) => {
                if (error) {
                    // Fallback to localStorage
                    resolve(localStorage.getItem(key));
                } else {
                    resolve(value || null);
                }
            });
        });
    },

    /**
     * Remove data from Telegram Cloud Storage
     */
    removeItem: (key: string): Promise<boolean> => {
        return new Promise((resolve) => {
            if (!webApp?.CloudStorage) {
                localStorage.removeItem(key);
                resolve(true);
                return;
            }

            webApp.CloudStorage.removeItem(key, (error, removed) => {
                if (error) {
                    localStorage.removeItem(key);
                }
                resolve(removed ?? true);
            });
        });
    }
};

// ============================================
// BACK BUTTON
// ============================================

export const backButton = {
    show: () => {
        webApp?.BackButton?.show();
    },

    hide: () => {
        webApp?.BackButton?.hide();
    },

    onClick: (callback: () => void) => {
        webApp?.BackButton?.onClick(callback);
    },

    offClick: (callback: () => void) => {
        webApp?.BackButton?.offClick(callback);
    },

    isVisible: () => webApp?.BackButton?.isVisible ?? false
};

// ============================================
// SETTINGS BUTTON
// ============================================

export const settingsButton = {
    show: () => {
        webApp?.SettingsButton?.show();
    },

    hide: () => {
        webApp?.SettingsButton?.hide();
    },

    onClick: (callback: () => void) => {
        webApp?.SettingsButton?.onClick(callback);
    },

    offClick: (callback: () => void) => {
        webApp?.SettingsButton?.offClick(callback);
    }
};

// ============================================
// STORY SHARING (Viral)
// ============================================

export const shareToStory = (mediaUrl: string, text?: string, widgetLink?: { url: string; name?: string }) => {
    if (!webApp?.shareToStory) {
        console.warn('Story sharing not available');
        return false;
    }

    webApp.shareToStory(mediaUrl, {
        text,
        widget_link: widgetLink
    });

    return true;
};

// ============================================
// HAPTIC FEEDBACK
// ============================================

export const hapticFeedback = {
    impact: (style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft' = 'medium') => {
        webApp?.HapticFeedback?.impactOccurred(style);
    },

    notification: (type: 'error' | 'success' | 'warning') => {
        webApp?.HapticFeedback?.notificationOccurred(type);
    },

    selection: () => {
        webApp?.HapticFeedback?.selectionChanged();
    }
};

// ============================================
// POPUPS & ALERTS
// ============================================

export const showPopup = (params: {
    title?: string;
    message: string;
    buttons?: Array<{ id?: string; type?: 'default' | 'ok' | 'close' | 'cancel' | 'destructive'; text?: string }>;
}): Promise<string> => {
    return new Promise((resolve) => {
        if (!webApp?.showPopup) {
            alert(params.message);
            resolve('ok');
            return;
        }

        webApp.showPopup(params, (buttonId) => {
            resolve(buttonId);
        });
    });
};

export const showAlert = (message: string): Promise<void> => {
    return new Promise((resolve) => {
        if (!webApp?.showAlert) {
            alert(message);
            resolve();
            return;
        }

        webApp.showAlert(message, () => {
            resolve();
        });
    });
};

export const showConfirm = (message: string): Promise<boolean> => {
    return new Promise((resolve) => {
        if (!webApp?.showConfirm) {
            resolve(confirm(message));
            return;
        }

        webApp.showConfirm(message, (confirmed) => {
            resolve(confirmed);
        });
    });
};

// ============================================
// LINKS
// ============================================

export const openLink = (url: string, tryInstantView = false) => {
    if (webApp?.openLink) {
        webApp.openLink(url, { try_instant_view: tryInstantView });
    } else {
        window.open(url, '_blank');
    }
};

export const openTelegramLink = (url: string) => {
    if (webApp?.openTelegramLink) {
        webApp.openTelegramLink(url);
    } else {
        window.open(url, '_blank');
    }
};

// ============================================
// THEME
// ============================================

export const getThemeParams = () => webApp?.themeParams ?? {};

export const getColorScheme = () => webApp?.colorScheme ?? 'dark';

export const isLowPerformanceDevice = (): boolean => {
    const userAgent = navigator.userAgent.toLowerCase();
    // Check for Android with low performance indicators
    if (userAgent.includes('android')) {
        // Check for older Android versions or low-end indicators
        const match = userAgent.match(/android (\d+)/);
        if (match && parseInt(match[1]) < 10) {
            return true;
        }
    }
    return false;
};

// ============================================
// MAIN APP CONTROLS
// ============================================

export const expand = () => {
    webApp?.expand();
};

export const close = () => {
    webApp?.close();
};

export const enableClosingConfirmation = () => {
    webApp?.enableClosingConfirmation();
};

export const disableClosingConfirmation = () => {
    webApp?.disableClosingConfirmation();
};

export const ready = () => {
    webApp?.ready();
};

// ============================================
// USER INFO
// ============================================

export const getUser = () => webApp?.initDataUnsafe?.user ?? null;

export const getStartParam = () => webApp?.initDataUnsafe?.start_param ?? null;

export const getPlatform = () => webApp?.platform ?? 'unknown';

export const getVersion = () => webApp?.version ?? '0.0';

// ============================================
// MAIN BUTTON
// ============================================

export const mainButton = {
    setText: (text: string) => {
        if (webApp?.MainButton) {
            webApp.MainButton.setText(text);
        }
    },

    show: () => {
        webApp?.MainButton?.show();
    },

    hide: () => {
        webApp?.MainButton?.hide();
    },

    enable: () => {
        webApp?.MainButton?.enable();
    },

    disable: () => {
        webApp?.MainButton?.disable();
    },

    showProgress: (leaveActive = false) => {
        webApp?.MainButton?.showProgress(leaveActive);
    },

    hideProgress: () => {
        webApp?.MainButton?.hideProgress();
    },

    onClick: (callback: () => void) => {
        webApp?.MainButton?.onClick(callback);
    },

    offClick: (callback: () => void) => {
        webApp?.MainButton?.offClick(callback);
    }
};

export default {
    cloudStorage,
    backButton,
    settingsButton,
    hapticFeedback,
    mainButton,
    shareToStory,
    showPopup,
    showAlert,
    showConfirm,
    openLink,
    openTelegramLink,
    getThemeParams,
    getColorScheme,
    isLowPerformanceDevice,
    expand,
    close,
    ready,
    getUser,
    getStartParam,
    getPlatform,
    getVersion,
    enableClosingConfirmation,
    disableClosingConfirmation
};
