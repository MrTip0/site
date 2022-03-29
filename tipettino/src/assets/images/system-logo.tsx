import macOS from './system-logo/macOS-logo.svg';
import linux from './system-logo/linux-logo.svg';
import win from './system-logo/windows-logo.svg';
import web from './system-logo/web-logo.svg'

export default function Logo(os: string) {
	switch (os.toLocaleLowerCase()) {
		case 'macos':
			return macOS;

		case 'windows':
			return win;

		case 'linux':
			return linux;

		case 'web':
			return web

		default:
			break;
	}
}
