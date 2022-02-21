import { extendTheme } from '@chakra-ui/react';
import breakpoints from './breakpoints';
import { newColors } from './colors';
import Modal from './componentOverrides/modal';
import fonts from './fonts';
import styles from './styles';

const overrides = {
    config: {
        cssVarPrefix: 'yr',
        initialColorMode: 'light',
        useSystemColorMode: false,
    },
    colors: newColors,
    breakpoints: breakpoints,
    styles: styles,
    fonts: fonts,
    components: {
        Modal: Modal,
        Drawer: Modal,
    },
};

const theme = extendTheme(overrides);

export default theme;
