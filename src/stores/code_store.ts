import { action, makeObservable, observable } from 'mobx';
import { RootStore } from './root_store';
import codes from '../constants/codes.json';
import { Store } from './interface';

export type CodeStoreInit = {};

interface Code {
    id: number;
    place: string;
    code: string;
}

export class CodeStore implements Store {
    root: RootStore;
    codes: Array<Code> = codes;

    constructor(root: RootStore) {
        this.root = root;
        makeObservable(this, {
            hydrate: action,
            codes: observable,
        });
    }

    hydrate(data: CodeStoreInit): void {
        return;
    }
}
