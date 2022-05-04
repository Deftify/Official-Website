import {ReactComponent as AllChains} from '../../../../assets/Icons/allchains1.svg';
import {ReactComponent as AllChainsMobile} from '../../../../assets/Icons/allchains-mobile.svg';
import {ReactComponent as Wave} from '../../../../assets/images/wave.svg';
import React, { useState, useEffect } from 'react';
import Spacing from '../../../../components/Spacing';
import Text from '../../../../components/Typography';
import './index.scss';


export const Accessibility = () => {

	const [deviceWidth, setDeviceWidth] = useState<string>('');

	useEffect(() => {
		const checkWidth = () => {
			if (window.innerWidth <= 1023) {
				setDeviceWidth('mobile');
			}
			if (window.innerWidth > 1023) {
				setDeviceWidth('desktop');
			}
		};
		window.addEventListener('resize', checkWidth, { passive: true });
		checkWidth();
		return () => window.removeEventListener('resize', checkWidth);
	}, []);
	
	return (
		<Spacing className="accessibility-wrapper">
			<p className="section-text__title--small small">BUILT FOR ACCESSIBILITY</p>

			<Text className="powered-by-text">
			<div className="row">
			<div className="column">
			{deviceWidth === 'mobile' ? (
                <AllChainsMobile />
                ) : deviceWidth === 'desktop' ? (
				<AllChains />
                ) : (
                    ''
                )}

  			</div>
  			</div>
			</Text>

			<p className="section-text__description description">
				Deftify will launch on Polygon and will be cross-chain compatible with other EVM chains and Cardano, making it the first Africa-focused launchpad and market data 
				aggregator to tap into multi-chain ecosystem
			</p>

			<Wave className="wave" />
		</Spacing>
	);
};
