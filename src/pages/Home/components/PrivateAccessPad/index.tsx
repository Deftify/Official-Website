import {Fragment} from 'react';
import {ReactComponent as Fund} from '../../../../assets/Icons/fund.svg';
import {ReactComponent as Incubator} from '../../../../assets/Icons/incubator.svg';
import {ReactComponent as Invest} from '../../../../assets/Icons/invest.svg';
import Spacing from '../../../../components/Spacing';
import RegularButton from '../../../../components/Button/Regular';
import './index.scss';

interface Props {
	body: string;
	image: string;
	title: string;
}

const whatWeDoData = [
	{
		image: '../../../../assets/Icons/fund.svg',
		title: 'Early-Stage Incubator',
		body:  `Incubates promising crypto startups from around the world, with a focus on Africa`
	}, {
		image: '../../../../assets/Icons/incubator.svg',
		title: 'Seed Fund Raising',
		body:  `Raises early-stage capital for these projects by allowing Deftify token holders to invest in them`
	}, {
		image: '../../../../assets/Icons/invest.svg',
		title: 'Investment Opportunities',
		body:  `Early-stage investment opportunities are available to users who are looking for the next hidden gems`
	}
];

const getWhatWeDoImage = (title: string): JSX.Element => {
	const className = 'wwd-image';

	switch (title) {
		case whatWeDoData[0].title:
			return <Incubator className={className} />;
		case whatWeDoData[1].title:
			return <Fund className={className} />;
		default:
			return <Invest className={className} />;
	}
};

const WhatWeDo = (props: Props): JSX.Element => <Spacing display="flex">
	{getWhatWeDoImage(props.title)}
	<div className="content">
		<p className="title">{props.title}</p>
		<p className="body">{props.body}</p>
	</div>
</Spacing>;

const SectionOne = () => <Spacing className="section-one">
	<Spacing
		style={{
			display:        'flex',
			flexDirection:  'column',
			alignItems:     'center',
			justifyContent: 'center'
		}}>
			<p className="section-text__headerdfty headerdfty">
			Deftify token (DFTY) has multiple use cases across Deftify ecosystem
		</p>
		<div className="stakedfty_image stakedfty_image__stake">
		<img className="stake-image" src="./images/stakedfty-transparent.svg" alt={''} /></div>
		&nbsp;
		<p className="section-text__header2 header2">
			Private Access Pad (PAP) - Testnet Is Live!
		</p>
		<p className="section-text__description description">
			Deftify’s Private Access Pad (PAP) is a private round launchpad and incubator with Africa as the focus. Through PAP,
			Deftify is going to incubate promising blockchain projects that are not reachable by the usual launchpads.
		</p>

		<p className="section-text__description description">
			Deftify PAP testnet is now live on Ropsten network! To celebrate our testnet, we have 2,500,000 DFTY total tokens for bug bounty rewards. 
			<a
              href="https://medium.com/deftify"
              target="_blank"
              rel="noreferrer">Read the bug bounty announcement</a>
			<a
              href="https://testpap.deftify.io"
              target="_blank"
              rel="noreferrer"
            >
              <RegularButton stretch mr="40px" marginRightSm="50px" marginBottomSm="20px">
                Click Here To Test Our PAP
              </RegularButton>
            </a>
			
		</p>
	</Spacing>
</Spacing>;

const SectionTwo = (): JSX.Element => <Spacing
	display="flex"
	fullWidth={true}
	className="section-two"
>
	<div className="subsection subsection__left">
		{whatWeDoData.map(what => <WhatWeDo
			{...what} key={what.title}
		/>)}
	</div>

	<div className="subsection subsection__right">
		<img className="pap-image" src="./images/pap-image.png" alt={''} />
	</div>
</Spacing>;

export const PrivateAccessPad = (): JSX.Element => {
	return (
		<Fragment>
			<SectionOne />
			<SectionTwo />
		</Fragment>
	);
};
