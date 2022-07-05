import { CacheProvider } from '@emotion/react';

import {
  createTheme, ThemeProvider
} from '@mui/material/styles';
import React from 'react';
import createEmotionCache from '../../utility/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();
export const themeColor = {
    primaryColor: '#FF4076',
    primaryColorFade: '#FF407690',
    verifiedColor: '#2E77D0',
    secondaryColor: '#87CEEB',
    successColor: '#3FFF00',

};
export const themeAssets = {
    radius: '10px',
};

const themeWrapper = ({ children, appProps }) => {
const { emotionCache = clientSideEmotionCache } = appProps;

    const currentTheme = 'dark';
  const fonts = [
        'Poppins', 'sans-serif',
    ].join(', ');
  const globalTheme = React.useMemo(
        () => createTheme({
            // shadows: [ 'none' ],
            typography: {
                caption: {
                    fontFamily: fonts,
                },
                fontFamily: fonts,
            },
            // breakpoints
            breakpoints: {
                values: {
                    xs: 0,
                    smallmobile: 320,
                    sm: 600,
                    md: 900,
                    laptop: 1024,
                    laptoplg: 1440,
                    lg: 1200,
                    xl: 1536,
                },
            },
            palette: {
                mode: currentTheme,
                ...themeColor,
                ...themeAssets,
                background: {
                    default: themeColor.backgroundColorPrimary,
                    paper: themeColor.backgroundColorSecondary,
                },
            },
        }),
        [ currentTheme ],
    );
  return (
    <CacheProvider value={emotionCache}>
            <ThemeProvider theme={globalTheme}>
                {/* <CssBaseline /> */}
                <div className={`theme-${ currentTheme }`}>
                    {children}
                </div>
            </ThemeProvider>
        </CacheProvider>
  );
}

export default themeWrapper
