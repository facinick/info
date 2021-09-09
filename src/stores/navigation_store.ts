import { action, makeObservable, observable } from 'mobx';
import { Store } from './interface';
import { RootStore } from './root_store';

export type NavigationStoreInit = {
    defaultPage: number;
};

export class NavigationStore implements Store {
    root: RootStore;
    currentPage: number = 0;

    constructor(root: RootStore) {
        this.root = root;
        makeObservable(this, {
            hydrate: action,
            setPage: action,
            currentPage: observable,
        });
    }

    setPage = ({ page }: { page: number }) => {
        this.currentPage = page;
    };

    hydrate(data: { defaultPage: number }): void {
        this.currentPage = data.defaultPage;
    }
}
