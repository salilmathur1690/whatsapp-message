import { useBreakpoint } from '@chakra-ui/media-query';

const useBreakpointName = () => {
	const breakpoint = useBreakpoint();
	if (breakpoint === 'base' || breakpoint === 'sm') return 'mobile';
	if (breakpoint === 'md') return 'tablet';
	if (breakpoint === 'lg' || breakpoint === 'xl' || breakpoint === '2xl') return 'desktop';
};

export default useBreakpointName;