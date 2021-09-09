import React from 'react';
import '../styles/App.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { observer } from 'mobx-react-lite';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useThemeStore } from '../stores/provider';
import { HelloWorld } from './HelloWorld';

const App = observer(function App() {
    const { theme } = useThemeStore();

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <CssBaseline />
                <HelloWorld />
            </div>
        </ThemeProvider>
    );
});

export default App;
