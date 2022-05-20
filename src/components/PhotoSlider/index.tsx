import {useCallback, useEffect, useRef, useState} from 'react';
import Spacing from '../Spacing';
import './index.scss';

export interface Slide {
	caption?: string;
	image: string;
}

interface Props {
	slides: Slide[];
}

const INTERVAL = 5000;

export const PhotoSlider = ({slides}: Props) => {
	const intervalRef                     = useRef<NodeJS.Timeout>();
	const [currentIndex, setcurrentIndex] = useState<number>(0);

	const initSlider = useCallback(() => {
		intervalRef.current = setInterval(() => {
			setcurrentIndex(current => current === slides.length - 1 ? 0 : current + 1);
		}, INTERVAL);
	}, [slides.length]);

	useEffect(() => {
		initSlider();
		return () => clearInterval(intervalRef.current as NodeJS.Timeout);
	}, [initSlider]);

	const selectImage = (index: number) => {
		setcurrentIndex(index);
		clearInterval(intervalRef.current as NodeJS.Timeout);
		initSlider();
	};

	return (
		<div className="slider-wrapper sec-one">
			<img className="image" src={slides[currentIndex].image} alt={''} />

			<div className="caption">
				{slides[currentIndex].caption}
			</div>

			<Spacing className="dot-cont">
				{slides.map((slide, index) => <div
					className={`dot ${index === currentIndex ? 'dot__active' : ''}`}
					onClick={() => selectImage(index)}
					key={index} />)}
			</Spacing>
		</div>
	);
};
