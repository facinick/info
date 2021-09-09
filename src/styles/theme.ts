import { PaletteMode } from '@mui/material';
import { createTheme, ThemeOptions } from '@mui/material/styles';

export const lightThemeOptions: ThemeOptions = {
    palette: {
        mode: 'light' as PaletteMode,
        primary: {
            main: '#d32f2f',
        },
        secondary: {
            main: '#263238',
        },
        background: {
            default: '#FAFAFA',
            paper: '#FFFFFF',
        },
        text: {
            primary: 'rgba(0, 0, 0, 0.87)',
        },
    },
    shape: {
        borderRadius: 4,
    },
};

export const darkThemeOptions: ThemeOptions = {
    palette: {
        mode: 'dark' as PaletteMode,
        primary: {
            main: '#d32f2f',
        },
        secondary: {
            main: '#dcdcdc',
        },
        background: {
            default: '#1e1e1e',
            paper: '#2b2b2b',
        },
        text: {
            primary: '#FFFFFF',
        },
    },
    shape: {
        borderRadius: 4,
    },
};

export const lightTheme = createTheme(lightThemeOptions);
export const darkTheme = createTheme(darkThemeOptions);
