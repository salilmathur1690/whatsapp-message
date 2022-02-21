import {
	Box,
	Button,
	Center,
	Image,
	Input,
	InputGroup,
	InputLeftAddon,
	Text,
	useToast,
	VStack,
} from '@chakra-ui/react';
import { useState } from 'react';

const IndexPage = () => {

	const [mobile, setMobile] = useState(undefined);
	const toast = useToast();

	const handleMobile = (e) => {
		setMobile(e.target.value);
	};

	const handleSubmit = () => {
		if (mobile) {
			let cleanMob = mobile.replaceAll('+91', '').replaceAll(' ', '').replaceAll('-', '');
			cleanMob = parseInt(cleanMob).toString();
			if (cleanMob.length === 10) {
				window.open(`https://wa.me/91${cleanMob}`, '_blank');
			} else {
				toast({
					title: `Mobile is not valid`,
					status: 'error',
					isClosable: true,
				});
			}
		}
	};

	const handleKeyPress = (e) => {
		console.log(e.code);
		if (e.code === 'Enter' || e.code === 'NumpadEnter') {
			handleSubmit();
		}
	};

	return (
		<Center w={'100vw'} h={'90vh'} px={4}>
			<Box bg={'white'} maxW={'400px'} py={10} px={5} shadow={'base'}>
				<VStack spacing={4}>
					<Image src={'/whatsapp.svg'} h={'50px'} />
					<Text textAlign={'center'} fontSize={'sm'} color={'gray.500'}>
						Open Whatsapp message for number
					</Text>
					<InputGroup size={'lg'}>
						<InputLeftAddon children={'+91'} />
						<Input value={mobile} onChange={handleMobile} type={'tel'}
							   placeholder={'10 Digit Mobile Number'} onKeyDown={handleKeyPress} />
					</InputGroup>
					<Button size={'lg'} colorScheme={'green'} w={'full'} onClick={handleSubmit}>
						Send Message
					</Button>
				</VStack>
			</Box>
			<Box position={'absolute'} bottom={'10px'}>
				<Text fontSize={'sm'} color={'gray.400'}>
					Small utility by Salil
				</Text>

			</Box>
		</Center>
	);
};

export default IndexPage;