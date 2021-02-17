import { useEffect, useState } from 'react';
import { Keyboard, Platform } from 'react-native';

const useKeyboardHeight = (platforms: string[] = ['ios', 'android']) => {
	const [keyboardHeight, setKeyboardHeight] = useState<number>(0);
	useEffect(() => {
		if (isEventRequired(platforms)) {
			Keyboard.addListener('keyboardDidShow', keyboardDidShow);
			Keyboard.addListener('keyboardDidHide', keyboardDidHide);

			// cleanup function
			return () => {
				Keyboard.removeListener('keyboardDidShow', keyboardDidShow);
				Keyboard.removeListener('keyboardDidHide', keyboardDidHide);
			};
		} else {
			return () => {}
		}
	}, []);

	const isEventRequired = (platforms: any) => {
		try {
			return platforms?.map((p: string) => p?.toLowerCase()).indexOf(Platform.OS) !== -1 || !platforms;
		} catch (ex: any) {

		}

		return false;
	}

	const keyboardDidShow = (frames: any) => {
		setKeyboardHeight(frames.endCoordinates.height);
	};

	const keyboardDidHide = () => {
		setKeyboardHeight(0);
	};

	return keyboardHeight;
};

export default useKeyboardHeight;
