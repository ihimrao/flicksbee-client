import { Provider } from 'react-redux';
import storeObj from '../redux/store';
import ThemeWrapper from '../src/utils/theme';
// import { SnackBarProvider } from './snackbar/SnackBarContext';

const RootContextProvider = ({ children, appProps }) => (
    <>
        <Provider store={storeObj.store}>

                    <ThemeWrapper appProps={appProps}>
                        {/* <SnackBarProvider> */}
                            {children}
                        {/* </SnackBarProvider> */}
                    </ThemeWrapper>

        </Provider>

    </>
);

export default RootContextProvider;