import { Facebook, Twitter, Linkedin } from 'lucide-react';
import Logo from '../assets/Logo.svg';

export default function Footer() {
	return (
		<footer className="pt-4">
			<div className="mx-auto py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div className="space-y-4">
						<div className="flex items-center space-x-2">
							<img
								src={Logo}
								alt="FaithbaseLogo"
							/>
						</div>
						<p className="text-sm text-gray-600">
							Empowering healthcare through AI-driven solutions.
						</p>
					</div>
					<div>
						<h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">
							Services
						</h3>
						<ul className="space-y-2">
							<li>
								<a
									href="#"
									className="text-sm text-gray-600 hover:text-blue-500"
								>
									AI Assistant
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-sm text-gray-600 hover:text-blue-500"
								>
									Find a Doctor
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-sm text-gray-600 hover:text-blue-500"
								>
									Health Apps
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-sm text-gray-600 hover:text-blue-500"
								>
									Telemedicine
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">
							Company
						</h3>
						<ul className="space-y-2">
							<li>
								<a
									href="#"
									className="text-sm text-gray-600 hover:text-blue-500"
								>
									About Us
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-sm text-gray-600 hover:text-blue-500"
								>
									Careers
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-sm text-gray-600 hover:text-blue-500"
								>
									Press
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-sm text-gray-600 hover:text-blue-500"
								>
									Contact
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">
							Legal
						</h3>
						<ul className="space-y-2">
							<li>
								<a
									href="#"
									className="text-sm text-gray-600 hover:text-blue-500"
								>
									Privacy Policy
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-sm text-gray-600 hover:text-blue-500"
								>
									Terms of Service
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-sm text-gray-600 hover:text-blue-500"
								>
									Cookie Policy
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="mt-8 border-t border-blue-100 pt-8 flex flex-col md:flex-row justify-between items-center">
					<p className="text-sm text-gray-600">
						© 2024 Medi.ai. All rights reserved.
					</p>
					<div className="flex space-x-6 mt-4 md:mt-0">
						<a
							href="#"
							className="text-gray-600 hover:text-blue-500"
						>
							<span className="sr-only">Facebook</span>
							<Facebook className="h-6 w-6" />
						</a>
						<a
							href="#"
							className="text-gray-600 hover:text-blue-500"
						>
							<span className="sr-only">Twitter</span>
							<Twitter className="h-6 w-6" />
						</a>
						<a
							href="#"
							className="text-gray-600 hover:text-blue-500"
						>
							<span className="sr-only">LinkedIn</span>
							<Linkedin className="h-6 w-6" />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
