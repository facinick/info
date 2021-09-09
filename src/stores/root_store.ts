import { NavigationStore, NavigationStoreInit } from './navigation_store';
import { ThemeStoreInit, ThemeStore } from './theme_store';
import { CodeStore, CodeStoreInit } from './code_store';

export type RootStoreHydration = {
    themeStoreInit: ThemeStoreInit;
    codeStoreInit: CodeStoreInit;
    navigationStoreInit: NavigationStoreInit;
};
export class RootStore {
    themeStore: ThemeStore;
    codeStore: CodeStore;
    navigationStore: NavigationStore;

    constructor() {
        this.themeStore = new ThemeStore(this);
        this.codeStore = new CodeStore(this);
        this.navigationStore = new NavigationStore(this);
    }

    hydrate(data: RootStoreHydration): void {
        this.themeStore.hydrate(data.themeStoreInit);
        this.codeStore.hydrate(data.codeStoreInit);
        this.navigationStore.hydrate(data.navigationStoreInit);
    }
}
