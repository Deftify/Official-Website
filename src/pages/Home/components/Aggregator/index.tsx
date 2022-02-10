import {PhotoSlider, Slide} from '../../../../components/PhotoSlider';
import Spacing from '../../../../components/Spacing';
import './index.scss';

const uniqueRef = (): string => {
	return `ref-${Math.ceil(Math.random() * 10e13)}`;
};

const aggregatorImages = [
	{
		image: '/images/instant-watch-2.svg',
		style: {marginRight: '44px'},
		key:   uniqueRef()
	}, {
		image: '/images/instant-watch.svg',
		key:   uniqueRef()
	}
];

const slides: Slide[] = aggregatorImages.map(aggregator => ({image: aggregator.image}));

export const Aggregator = () => {
	return (
		<Spacing className="aggregator-wrapper">
			<p className="section-text__title title">
				Instant Watch
			</p>
			<p className="section-text__description description">
				Imagine a combination of DexTools + DefiLlama + OpenSea data aggregator all in one but with better UI and more feature-rich.
				That's Deftify's Instant Watch. Stake Deftify token (DFTY) to unlock premium features in our Instant Watch.
			</p>

			<Spacing
				className="aggregator-images">
				{aggregatorImages.map(aggregator => <img
					src={aggregator.image}
					alt={''}
					style={aggregator.style}
					key={aggregator.key}
				/>)}
			</Spacing>

			<div className="photo-slider">
				<PhotoSlider slides={slides} />
			</div>
		</Spacing>
	);
};
