import React from 'react';
import '../styles/App.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { observer } from 'mobx-react-lite';
import {
    BottomNavigation,
    BottomNavigationAction,
    Box,
    CssBaseline,
    // IconButton,
    ThemeProvider,
    ToggleButton,
} from '@mui/material';
import { useNavigationStore, useThemeStore } from '../stores/provider';
// import { HelloWorld } from './HelloWorld';
import LockIcon from '@mui/icons-material/Lock';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import { CodesComponent } from './Codes';
import DarkMode from '@mui/icons-material/DarkMode';
import LightMode from '@mui/icons-material/LightMode';
import { LastUpdated } from './LastUpdated';

const App = observer(function App() {
    const { theme, mode, setMode } = useThemeStore();
    const { currentPage, setPage } = useNavigationStore();

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <CssBaseline />
                {/* <HelloWorld /> */}
                <LastUpdated />

                {currentPage === 0 && <CodesComponent />}

                <Box position="fixed" color="primary" sx={{ width: '100%', top: 'auto', bottom: 0, display: 'flex' }}>
                    <BottomNavigation
                        sx={{ width: '100%' }}
                        showLabels
                        value={currentPage}
                        onChange={(event, newValue) => {
                            setPage({ page: newValue });
                        }}
                    >
                        <BottomNavigationAction label="Codes" icon={<LockIcon />} />
                        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                    </BottomNavigation>
                    <Box
                        sx={{
                            // position: 'absolute',
                            marginLeft: 'auto',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            top: 0,
                            bottom: 0,
                            right: 0,
                            padding: '0px 4px',
                            backgroundColor: 'background.paper',
                        }}
                    >
                        <ToggleButton
                            value="check"
                            onChange={() => {
                                setMode({ mode: mode === 'dark' ? 'light' : 'dark' });
                            }}
                        >
                            {mode === 'light' && <DarkMode />}
                            {mode === 'dark' && <LightMode />}
                        </ToggleButton>
                    </Box>
                </Box>
            </div>
        </ThemeProvider>
    );
});

export default App;
