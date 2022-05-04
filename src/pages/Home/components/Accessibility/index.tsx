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
				Deftify will start on Polygon and will be cross-chain compatible with all other EVM chains as well as Cardano, making it the first Africa-focused launchpad and market data 
				aggregator to tap into multiple chains.
			</p>

			<Wave className="wave" />
		</Spacing>
	);
};
