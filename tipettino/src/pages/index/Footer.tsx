import GhLogo from '../../assets/images/gh-logo.png';
import ContactFooterDivider from '../../assets/images/ContactFooterDivider.svg'

export default function Footer() {
	return (
		<div className="bg-primary-200 flex flex-col items-center">
			<img src={ContactFooterDivider} alt="Divider"/>
			<div className="flex flex-col">
				<h2 className="uppercase text-primary-500 text-xl mb-3 mt-5">
					{'Follow me on'}
				</h2>
				<a
					href="https://github.com/MrTip0"
					className="self-center transition-transform duration-200 transform hover:scale-150 mb-3">
					<img src={GhLogo} alt="Github Logo" className="h-6 w-6" />
				</a>
			</div>
			<p className="mb-1 text-gray-600 text-sm">
				Copyright©Tipettino 2021
			</p>
		</div>
	);
}
