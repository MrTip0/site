import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';

const NavBar = () => {
	return (
		<nav className="bg-primary-200 flex flex-col sticky -top-0 w-screen h-12">
			<Link
				to="home"
				className="self-start ml-10 m-2 text-2xl font-semibold text-primary-600 flex flex-row items-center">
				<img className="h-5 mr-6" src={Logo} alt="Logo" />
				<h1>Tipettino</h1>
			</Link>
		</nav>
	);
};

export default NavBar;
