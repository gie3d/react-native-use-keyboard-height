import { useEffect, useState } from 'react';
import { Keyboard, Platform } from 'react-native';

const useKeyboardHeight = (platforms: string[] = ['ios', 'android']) => {
	const [keyboardHeight, setKeyboardHeight] = useState<number>(0);
	useEffect(() => {
		if (isEventRequired(platforms)) {
			let keyboardShowEvent = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
			let keyboardHideEvent = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

			// cleanup function
			return () => {
        keyboardShowEvent.remove();
        keyboardHideEvent.remove();
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
