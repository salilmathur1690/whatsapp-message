const modal = {
	baseStyle: (props) => ({
		overlay: {
			bg: 'blackAlpha.800',
		},
		dialog: {
			bg: props.colorMode === 'light' ? 'otherWhite.bg' : 'otherBlack.bg',
		},
	}),
};

export default modal;
