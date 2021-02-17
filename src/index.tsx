import { useEffect, useState } from 'react';
import { Keyboard, Platform } from 'react-native';

const useKeyboardHeight = (platforms: string[] = ['ios', 'android']) => {
	const [keyboardHeight, setKeyboardHeight] = useState<number>(0);
	useEffect(() => {
		if (platforms?.map((p: string) => p.toLowerCase()).indexOf(Platform.OS) !== -1 || !platforms) {
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

	const keyboardDidShow = (frames: any) => {
		setKeyboardHeight(frames.endCoordinates.height);
	};

	const keyboardDidHide = () => {
		setKeyboardHeight(0);
	};

	return keyboardHeight;
};

export default useKeyboardHeight;
