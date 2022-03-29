import DescriptionContactDivider from '../../assets/images/DescriptionContactDivider.svg'

export default function Description() {
	const desc1: String =
		"Hi, I'm an italian computer science student. I have a simple knowledge of some Programming Languages such as Javascript, Python, Rust, Golang. I also know how to use a lot of frameworks of some kind,";
	const desc2: String =
		"such as React, Vue.js, Express, fiber, for web frame work, or Flutter for Mobile Dev. I'm currently attending the fourth year of high school.";
	return (
		<div className="bg-primary-200 flex flex-col content-center h-auto">
			<h1 className="text-center text-4xl uppercase text-primary-500 mt-5">
				About me
			</h1>
			<div className="grid grid-flow-row grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 md:grid-cols-2 md:grid-rows-1 h-auto">
				<div className="flex flex-col items-center w-full">
					<div className="bg-secondary-100 mb-8 mt-4 rounded-xl shadow-xl w-10/12 transition-transform duration-200 transform hover:-rotate-6">
						<p className="m-3 text-lg font-semibold break-normal text-center">
							{desc1}
						</p>
					</div>
				</div>
				<div className="flex flex-col items-center w-full">
					<div className="bg-secondary-100 mb-8 mt-4 rounded-xl shadow-xl w-10/12 transition-transform duration-200 transform hover:rotate-6">
						<p className="m-3 text-lg font-semibold break-normal text-center">
							{desc2}
						</p>
					</div>
				</div>
			</div>
			<img src={DescriptionContactDivider} alt="Divider" className="transform rotate-180"/>
		</div>
	);
}
