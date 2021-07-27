import React from 'react';
import { Dialog } from '@headlessui/react';

export default class Contact extends React.Component {
	constructor(props: any) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	state = {
		name: '',
		mail: '',
		message: '',
		disabled: true,
		sent: false,
		openAlert: false,
		alertTitle: '',
		alertDescription: '',
	};

	handleChange(event: any) {
		const target = event.target;
		const value = target.value;
		const info = target.name;

		this.setState({
			[info]: value,
		});
		this.readyToSend();
	}

	handleSubmit(event: any) {
		if (!this.state.sent) {
			this.setState({
				sent: true,
				disabled: true,
			});
			const xhttp = new XMLHttpRequest();
			var result = '';
			xhttp.open('POST', process.env.PUBLIC_URL + '/emailer.php', true);
			xhttp.setRequestHeader(
				'Content-type',
				'application/x-www-form-urlencoded'
			);
			xhttp.onload = () => {
				result = xhttp.responseText;
				if (result === 'success') {
					this.showMessage(
						'Message sent succesfully',
						'you can close this window'
					);
				} else {
					this.showMessage(
						'An error has occured',
						'the server has response: ' + result
					);
					this.setState({
						sent: false,
						disabled: false,
					});
				}
			};
			xhttp.send(
				'name=' +
					this.state.name +
					'&mail=' +
					this.state.mail +
					'&message=' +
					this.state.message
			);
		}
		event.preventDefault();
	}

	showMessage(title: string, message: string) {
		this.setState({
			openAlert: true,
			alertTitle: title,
			alertDescription: message,
		});
	}

	readyToSend() {
		if (
			!this.state.sent &&
			this.state.mail !== '' &&
			this.state.name !== '' &&
			this.state.message !== ''
		) {
			this.setState({ disabled: false });
		} else {
			this.setState({ disabled: true });
		}
	}

	render() {
		return (
			<div className="h-auto bg-secondary-200 w-min-full flex flex-col">
				<h1 className="text-4xl text-center uppercase text-primary-500 mt-5">
					Contact me
				</h1>
				<form
					onSubmit={this.handleSubmit}
					className="flex flex-col items-center">
					<input
						type="text"
						name="name"
						placeholder="Name"
						onChange={this.handleChange}
						value={this.state.name}
						className="bg-primary-100 rounded mb-4 mt-4 h-10 w-11/12 text-lg text-center focus:ring-4 focus:ring-primary-200 shadow-lg transition-transform duration-200 transform focus:scale-110 sm:w-9/12 md:w-1/2"
						required
					/>
					<input
						type="email"
						name="mail"
						placeholder="Email"
						onChange={this.handleChange}
						value={this.state.mail}
						className="bg-primary-100 rounded mb-4 h-10 w-11/12 text-lg text-center focus:ring-4 focus:ring-primary-200 shadow-lg transition-transform duration-200 transform focus:scale-110 sm:w-9/12 md:w-1/2"
						required
					/>
					<textarea
						name="message"
						id="message"
						cols={30}
						rows={10}
						placeholder="Message"
						onChange={this.handleChange}
						value={this.state.message}
						className="bg-primary-100 rounded mb-4 w-11/12 text-lg text-center focus:ring-4 focus:ring-primary-200 shadow-lg transition-transform duration-200 transform focus:scale-110 sm:w-9/12 md:w-1/2"
						required
					/>
					<input
						type="submit"
						value="Send"
						disabled={this.state.disabled}
						className={
							'bg-primary-100 rounded mb-4 h-10 w-11/12 text-lg text-center transition-transform duration-200 transform sm:w-9/12 md:w-1/2 ' +
							(this.state.disabled
								? 'text-gray-500'
								: 'text-gray-900 hover:scale-110')
						}
					/>
				</form>
				<Alert
					open={this.state.openAlert}
					close={() => this.setState({ openAlert: false })}
					title={this.state.alertTitle}
					description={this.state.alertDescription}
				/>
			</div>
		);
	}
}

const Alert = (props: any) => {
	let button = React.useRef(null);
	return (
		<Dialog
			open={props.open}
			onClose={() => props.close}
			className="fixed z-10 inset-0 overflow-y-auto">
			<Dialog.Overlay className="fixed inset-0 bg-secondary-50 bg-opacity-70 flex flex-row items-center">
				<div className="flex flex-col items-center w-screen">
					<div className="flex flex-col w-80 rounded bg-primary-200">
						<Dialog.Title className="w-auto m-5 text-xl font-semibold text-center">
							{props.title}
						</Dialog.Title>
						<Dialog.Description className="w-auto m-5 text-base font-semibold text-center">
							{props.description}
						</Dialog.Description>
						<button
							ref={button}
							className="h-8 w-auto rounded border-2 border-primary-500 m-5"
							onClick={props.close}>
							Close
						</button>
					</div>
				</div>
			</Dialog.Overlay>
		</Dialog>
	);
};
