import { action, makeObservable, observable } from 'mobx';
import { RootStore } from './root_store';
import { Theme } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../styles/theme';
import { Store } from './interface';

export type ITheme = 'light' | 'dark';

export type ThemeStoreInit = {
    mode: ITheme;
};

export class ThemeStore implements Store {
    root: RootStore;
    mode: ITheme = 'dark';
    theme: Theme = darkTheme;

    constructor(root: RootStore) {
        this.root = root;
        makeObservable(this, {
            hydrate: action,
            mode: observable,
            theme: observable,
            setMode: action,
        });
    }

    setMode = ({ mode }: { mode: ITheme }): void => {
        this.mode = mode;
        if (this.mode === 'light') {
            this.theme = lightTheme;
        } else if (this.mode === 'dark') {
            this.theme = darkTheme;
        }
    };

    hydrate(data: { mode: ITheme }): void {
        this.mode = data.mode;

        if (this.mode === 'light') {
            this.theme = lightTheme;
        } else if (this.mode === 'dark') {
            this.theme = darkTheme;
        }
    }
}
