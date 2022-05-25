import Spacing from '../../../../components/Spacing';
import styled from 'styled-components';
import IntroductionFeatures from '../../../../components/ColumnsFormatting/IntroductionFeatures'; //edited part
import './index.scss';

const IntroductionGrid = styled.div` 
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 60px 0px;
  margin-top: 40px;

  ${({theme}) => theme.breakpoint.down('lg')} {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }

  ${({theme}) => theme.breakpoint.down('sm')} {
    grid-template-columns: repeat(1, 1fr);
  }
`; //edited part

const uniqueRef = (): string => {
	return `ref-${Math.ceil(Math.random() * 10e13)}`;
};

const PARTNERS: {
	image: string;
	key: string;
}[] = [
	{image: 'lead-wallet.svg', key: uniqueRef()},
	{image: 'unvest.svg', key: uniqueRef()},
	{image: 'gotbit-svg.svg', key: uniqueRef()},
	{image: 'polygon-partner.svg', key: uniqueRef()},
	{image: 'despace.svg', key: uniqueRef()},
	{image: 'dec-ventures.svg', key: uniqueRef()},
	{image: 'ace-capital.svg', key: uniqueRef()},
	{image: 'oasis-capital.svg', key: uniqueRef()},
	{image: 'averagemenvc-svg.svg', key: uniqueRef()},
	{image: 'lgg.svg', key: uniqueRef()},
	{image: 'moonstarter.svg', key: uniqueRef()},
	{image: 'erax.svg', key: uniqueRef()}
];


export const Partners = () => {
	return (
		<Spacing
			style={{
				display:        'flex',
				flexDirection:  'column',
				alignItems:     'center',
				justifyContent: 'center'
			}}>
			<div className="section-text__title--small small">Our Partners & Investors</div>
			&nbsp;

			<div className="partner-cont">
				{PARTNERS.map(partner => <div
					className="partner"
					key={partner.key}
					style={{
						background:     `url('./images/${partner.image}') no-repeat center center`,
						backgroundSize: '69% auto'
					}}
				>
				</div>)}
			</div>
			<span>&nbsp;</span>
			<span>&nbsp;</span>
			<div className="section-text__title--small small">Deftify On The Media</div>
			<Spacing>
          	<IntroductionGrid> 
			  <a href="https://kwwl.marketminute.com/article/marketersmedia-2022-1-5-deftify-builds-the-first-africa-focused-crypto-incubator-and-launchpad" target="_blank" rel="noreferrer">
              <IntroductionFeatures
                featuredImage="./images/kwwl.png"
                explanation="Deftify Builds the First Africa-Focused Crypto Incubator and..."
              /></a>
			  <a href="https://markets.financialcontent.com/ibtimes/news/read/42098274" target="_blank" rel="noreferrer">
              <IntroductionFeatures
                featuredImage="./images/ibtimes.png"
                explanation="Deftify Crypto Incubator Gives Investors Private Round Access..."
              /></a>
			  <a href="https://www.digitaljournal.com/pr/deftify-builds-the-first-africa-focused-crypto-incubator-and-launchpad" target="_blank" rel="noreferrer">
              <IntroductionFeatures
                featuredImage="./images/digitaljournal.png"
                explanation="Deftify team has integrated an incubator into the launchpad..."
              /></a>
			  <a href="https://markets.financialcontent.com/bostonherald/news/read/42098274" target="_blank" rel="noreferrer">
			  <IntroductionFeatures
                featuredImage="./images/bostonherald.png"
                explanation="Deftify has built a one-of-a kind ecosystem all in one place..."
              /></a>
            </IntroductionGrid>
            </Spacing>
			{/*
			 &nbsp;
			<div className="row">
			<div className="column">
			<a href="https://www.marketwatch.com/press-release/deftify-builds-the-first-africa-focused-crypto-incubator-and-launchpad-2022-01-04" target="_blank" rel="noreferrer">
			<img src="images/marketwatch.png" alt="marketwatch"></img>
			<div className="section-text____pressrelease pressrelease">Deftify Builds the First Africa-Focused Crypto Incubator and Launchpad</div>
			</a>
  			</div>
  			<div className="column">
  			<a href="https://markets.financialcontent.com/ibtimes/news/read/42098274" target="_blank" rel="noreferrer">
			<img src="images/ibtimes.png" alt="marketwatch"></img>
			<div className="section-text____pressrelease pressrelease">Deftify Crypto Incubator Gives Investors Private Round Access</div>
			</a>
  			</div>
  			<div className="column">
  			<a href="https://www.digitaljournal.com/pr/deftify-builds-the-first-africa-focused-crypto-incubator-and-launchpad" target="_blank" rel="noreferrer">
			<img src="images/digitaljournal.png" alt="marketwatch"></img>
			<div className="section-text____pressrelease pressrelease"> The Deftify team has integrated an incubator into the launchpad to...</div>
			</a>
  			</div>
  			<div className="column">
 			<a href="https://markets.financialcontent.com/bostonherald/news/read/42098274" target="_blank" rel="noreferrer">
			<img src="images/bostonherald.png" alt="marketwatch"></img>
			<div className="section-text____pressrelease pressrelease">Deftify has built a one-of-a kind ecosystem in one place</div>
			</a>
  			</div>
  			</div>
			*/}			
			
			
		</Spacing>
	);
};
