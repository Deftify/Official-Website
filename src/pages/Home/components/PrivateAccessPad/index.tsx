import {Fragment} from 'react';
import {ReactComponent as Fund} from '../../../../assets/Icons/fund.svg';
import {ReactComponent as Incubator} from '../../../../assets/Icons/incubator.svg';
import {ReactComponent as Invest} from '../../../../assets/Icons/invest.svg';
import Spacing from '../../../../components/Spacing';
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
			fullWidth:		'{true}',
			justifyContent: 'center'
		}}>
			<p className="section-text__headerdfty headerdfty">
			Deftify token (DFTY) has multiple use cases across Deftify ecosystem
		</p>
		<div className="subsection subsection__right">
		<img className="stakedfty_image" src="./images/stakedfty-transparent.svg" alt={''} /></div>
		&nbsp;
		<p className="section-text__header2 header2">
			Private Access Pad (PAP)
		</p>
		<p className="section-text__description description">
			Deftify’s Private Access Pad (PAP) is a private round launchpad and incubator with Africa as the focus. Our team has wide and direct connections to untapped potential. Through PAP,
			Deftify is going to incubate promising blockchain projects that are not reachable by the usual launchpads
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
