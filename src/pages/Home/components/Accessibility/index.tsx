import {ReactComponent as AllChains} from '../../../../assets/Icons/allchains.svg';
import {ReactComponent as Wave} from '../../../../assets/images/wave.svg';
import Spacing from '../../../../components/Spacing';
import Text from '../../../../components/Typography';
import './index.scss';

export const Accessibility = () => {
	return (
		<Spacing className="accessibility-wrapper">
			<p className="section-text__title--small small">BUILT FOR ACCESSIBILITY</p>

			<Text className="powered-by-text">
			<div className="row">
			<div className="column">
			<AllChains />
  			</div>
  			</div>
			</Text>

			<p className="section-text__description description">
				Deftify is utilizing Polygon and Cardano, making it the first Africa-focused launchpad and market data 
				aggregator to tap into both Polygon and Cardano ecosystem
			</p>

			<Wave className="wave" />
		</Spacing>
	);
};
