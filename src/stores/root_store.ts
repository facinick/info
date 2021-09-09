import { ThemeStoreInit, ThemeStore } from './theme_store';

export type RootStoreHydration = {
    themeStoreInit: ThemeStoreInit;
};
export class RootStore {
    themeStore: ThemeStore;

    constructor() {
        this.themeStore = new ThemeStore(this);
    }

    hydrate(data: RootStoreHydration): void {
        if (data.themeStoreInit) {
            this.themeStore.hydrate(data.themeStoreInit);
        }
    }
}
