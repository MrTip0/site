import Header from './Header';
import Portfolio from './Portfolio';
import Description from './Description';
import Contact from './Contact';
import Footer from './Footer';
import React from 'react';

export default class Index extends React.Component {
	componentDidMount = () => {
		document.title = 'Tipettino';
	};
	render = () => {
		return (
			<div>
				<Header />
				<Portfolio />
				<Description />
				<Contact />
				<Footer />
			</div>
		);
	};
}
