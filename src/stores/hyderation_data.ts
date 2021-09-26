import { RootStoreHydration } from './root_store';
import { DEFAULT_THEME, ITheme } from './theme_store';

export const hyderationData: RootStoreHydration = {
    themeStoreInit: {
        mode: <ITheme>localStorage.getItem('theme') || DEFAULT_THEME,
    },
    codeStoreInit: {},
    navigationStoreInit: {
        defaultPage: 0,
    },
};
