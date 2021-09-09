import { enableStaticRendering } from 'mobx-react-lite';
import React, { createContext, ReactNode, useContext } from 'react';
import { RootStore, RootStoreHydration } from './root_store';
import { ThemeStore } from './theme_store';

enableStaticRendering(typeof window === 'undefined');

let store: RootStore;
const StoreContext: React.Context<RootStore | undefined> = createContext<RootStore | undefined>(undefined);
StoreContext.displayName = 'StoreContext';

export function useRootStore(): RootStore {
    const context = useContext(StoreContext);
    if (context === undefined) {
        throw new Error('useRootStore must be used within RootStoreProvider');
    }

    return context;
}

export function useThemeStore(): ThemeStore {
    const { themeStore } = useRootStore();
    return themeStore;
}

export function RootStoreProvider({
    children,
    hydrationData,
}: {
    children: ReactNode;
    hydrationData?: RootStoreHydration;
}): JSX.Element {
    const store = initializeStore(hydrationData);

    return <StoreContext.Provider value={store}> {children} </StoreContext.Provider>;
}

function initializeStore(initialData?: RootStoreHydration): RootStore {
    const _store = store ?? new RootStore();

    if (initialData) {
        console.log(`LOG: store initializing data:`, initialData);
        _store.hydrate(initialData);
    }
    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') return _store;
    // Create the store once in the client
    if (!store) store = _store;

    return _store;
}
