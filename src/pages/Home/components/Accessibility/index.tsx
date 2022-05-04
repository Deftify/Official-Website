import {ReactComponent as Polygon} from '../../../../assets/Icons/polygon.svg';
import {ReactComponent as Cardano} from '../../../../assets/Icons/cardano.svg';
import {ReactComponent as EVM} from '../../../../assets/Icons/evm.svg';
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
			<a href="https://polygon.technology/" target="_blank" rel="noreferrer"><Polygon /></a>
  			</div>
			  {/*<div className="column">&nbsp;</div>*/}
  			<div className="column">
  			<EVM />
  			</div>
			{/*<div className="column">&nbsp;</div>*/}
  			<div className="column">
  			<Cardano />
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
