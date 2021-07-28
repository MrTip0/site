import { ExclamationIcon } from '@heroicons/react/outline';
import React from 'react';

export default class Error404 extends React.Component {
	componentDidMount = () => {
		document.title = 'Error404';
	};
	render = () => {
		return (
			<div className="w-screen bg-error-400 h-screen flex flex-row items-center">
				<div className="flex flex-col items-center w-screen">
					<ExclamationIcon className="text-error-500 h-72 w-72" />
					<h1 className="text-center font-semibold text-error-500">
						I'm sorry, this page doesen't exist
					</h1>
				</div>
			</div>
		);
	};
}
