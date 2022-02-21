import 'focus-visible/dist/focus-visible';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';

function YRApp({ Component, pageProps }) {

    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default YRApp;
