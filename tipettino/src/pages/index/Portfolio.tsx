import React from 'react';
import { RefreshIcon } from '@heroicons/react/outline';
import { ArrowDownIcon } from '@heroicons/react/solid';
import GhLogo from '../../assets/images/gh-logo.png';
import { Menu } from '@headlessui/react';
import Logo from '../../assets/images/system-logo';
import HeaderPortfolioDivider from '../../assets/images/HeaderPortfolioDivider.svg'
import PortfolioDescriptionDivider from '../../assets/images/PortfolioDescriptionDivider.svg'


class Download {
	platform = '';
	link = '';
}
class Project {
	imgUrl = '';
	title = '';
	github = '';
	download: [Download] = [new Download()];
}
export default class Portfolio extends React.Component {
	state = {
		loaded: false,
		projects: [new Project()],
	};

	componentDidMount() {
		const xhttp = new XMLHttpRequest();
		var result = '';
		xhttp.open('GET', process.env.PUBLIC_URL + '/assets/progetti.json');
		xhttp.onload = () => {
			result = xhttp.responseText;
			this.setState({
				loaded: true,
				projects: JSON.parse(result),
			});
		};
		xhttp.send();
	}

	render() {
		if (this.state.loaded) {
			return (
				<div className="h-auto bg-secondary-200 w-min-full flex flex-col">
					<img src={HeaderPortfolioDivider} alt="Header Divider" />
					<this.Title />
					<div className="flex flex-row justify-around mt-5 mb-9 self-center flex-wrap">
						{this.state.projects.map((value) => {
							return this.ProjectDetail(value);
						})}
					</div>
					<img src={PortfolioDescriptionDivider} alt="Divider" className="transform rotate-180"/>
				</div>
			);
		} else {
			return (
				<div className="h-auto bg-secondary-200 w-min-full flex flex-col">
					<img src={HeaderPortfolioDivider} alt="Header Divider" />
					<this.Title />
					<RefreshIcon className="w-10 animate-rspin-slow text-primary-400 self-center mb-3" />
					<img src={PortfolioDescriptionDivider} alt="Divider" />
				</div>
			);
		}
	}
	Title() {
		return (
			<div className="text-4xl text-center uppercase text-primary-500 mt-6">
				<h1>Portfolio</h1>
			</div>
		);
	}

	ProjectDetail(prog: Project) {
		return <MoreInfo proj={prog} />;
	}
}

class MoreInfo extends React.Component {
	props = {
		proj: new Project()
	};
	state = {
		hidden: true
	};
	toggle() {
		this.setState({ hidden: !this.state.hidden });
	}
	render() {
		return (
			<div className="flex flex-col items-center group">
				<img
					onClick={() => this.toggle()}
					src={
						process.env.PUBLIC_URL +
						'/assets/img/portfolio' +
						this.props.proj.imgUrl
					}
					alt={this.props.proj.title + ' image'}
					className="w-96 rounded-xl shadow-md m-3 border-0 border-primary-300 hover:border-4 transition-transform duration-150 transform group-hover:scale-105"
				/>
				<div
					hidden={this.state.hidden}
					className={
						'bg-primary-200 w-96 rounded-lg transition-transform duration-150 transform group-hover:scale-105'
					}>
					<div className="m-5 flex flex-col items-center">
						<h1 className="text-xl text-primary-600 uppercase mb-3">
							{this.props.proj.title}
						</h1>
						<this.GitHub url={this.props.proj.github} />
						<this.Download downloads={this.props.proj.download} />
						<button
							className="mt-4 text-gray-500 text-sm transition-transform duration-150 transform hover:scale-105"
							onClick={() => this.toggle()}>
							hide
						</button>
					</div>
				</div>
			</div>
		);
	}
	GitHub(props: any) {
		if (props.url !== 'none') {
			return (
				<button
					className="bg-secondary-200 rounded border-2 border-secondary-300 transition-transform duration-150 transform hover:scale-105"
					onClick={() => {
						window.location.href = props.url;
					}}>
					<div className="m-2 w-44 flex flex-row content-center">
						<div className="flex flex-col content-center mr-2 ml-2">
							<img
								src={GhLogo}
								alt="github logo"
								className="w-5 h-5"
							/>
						</div>
						<p className="text-secondary-500">See on GitHub</p>
					</div>
				</button>
			);
		}
		return <div></div>;
	}

	Download(props: any) {
		var downloads: [Download] = props.downloads;
		if (downloads.length > 0) {
			return (
				<Menu>
					<Menu.Button className="m-4 bg-secondary-200 rounded border-2 border-secondary-300 transition-transform duration-150 transform hover:scale-105">
						<div className="m-2 flex flex-row items-center w-44">
							<ArrowDownIcon className="w-5 h-5 animate-bounce mr-2 ml-2" />
							<p className="text-secondary-500">Download now</p>
						</div>
					</Menu.Button>
					<Menu.Items className="m-4 bg-secondary-200 rounded flex flex-col items-center border-2 border-secondary-300">
						{downloads.map((value) => {
							return (
								<Menu.Item>
									<button
										className="text-secondary-500 m-2 w-44 flex flex-row items-center"
										onClick={() =>
											MoreInfo.download(value.link, value.platform === "web")
										}>
										<img
											src={Logo(value.platform)}
											className="w-5 h-5 ml-2 mr-3"
											alt={value.platform + ' logo'}
										/>
										<p>{value.platform}</p>
									</button>
								</Menu.Item>
							);
						})}
					</Menu.Items>
				</Menu>
			);
		} else {
			return <></>;
		}
	}

	static download(link: string, webpage: boolean = false) {
		var download = document.createElement('a');
		download.href = link;
		if (!webpage) {
			let elements = link.split('/');
			download.download = elements[elements.length - 1];
		}
		download.click();
		download.remove();
	}
}
