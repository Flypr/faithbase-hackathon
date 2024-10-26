import { Button } from '@/components/ui/button';
import Logo from '../assets/Logo.svg';
import { useLocation } from 'react-router-dom';

export default function Header() {
	const location = useLocation();
	const { pathname } = location;

	return (
		<header className="py-4 pt-8 flex items-center justify-between pb-10">
			<div className="flex items-center space-x-2">
				<img
					src={Logo}
					alt="FaithbaseLogo"
				/>
			</div>
			<nav className="flex items-center space-x-6">
				<Button
					variant="default"
					className={
						pathname === '/pacient'
							? 'text-white'
							: 'bg-transparent hover:bg-slate-300 text-gray-600 hover:text-gray-800 shadow-none'
					}
				>
					<a href="/pacient">Pacient</a>
				</Button>
				<Button
					variant="default"
					className={
						pathname === '/doctor'
							? 'text-white'
							: 'bg-transparent hover:bg-slate-300 text-gray-600 hover:text-gray-800 shadow-none'
					}
				>
					<a href="/doctor">Doctor</a>
				</Button>
				<a
					href="/apps"
					className="text-gray-600 hover:text-gray-800"
				>
					Settings
				</a>
				<a
					href="/testimonials"
					className="text-gray-600 hover:text-gray-800"
				>
					Testimonials
				</a>
				<a
					href="/about"
					className="text-gray-600 hover:text-gray-800"
				>
					About us
				</a>
			</nav>
		</header>
	);
}
