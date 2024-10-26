import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ChevronLeft, ChevronRight, Check, X } from 'lucide-react';

const users = [
	{
		id: 1234,
		name: 'John Doe',
		avatar: '/placeholder.svg?height=50&width=50',
		message: 'My head hurts',
		notification: true,
	},
	{
		id: 2345,
		name: 'Jane Smith',
		avatar: '/placeholder.svg?height=50&width=50',
		message: 'Feeling dizzy',
		notification: true,
	},
	{
		id: 3456,
		name: 'Bob Johnson',
		avatar: '/placeholder.svg?height=50&width=50',
		message: 'Sore throat',
		notification: true,
	},
	{
		id: 4567,
		name: 'Alice Brown',
		avatar: '/placeholder.svg?height=50&width=50',
		message: 'Back pain',
	},
	{
		id: 5678,
		name: 'Jane Doe',
		avatar: '/placeholder.svg?height=50&width=50',
		message: 'My head hurts',
	},
];

const specialists = [
	{ id: 1, name: 'Dr. Emily Chen', specialization: 'Neurologist' },
	{ id: 2, name: 'Dr. Michael Patel', specialization: 'Cardiologist' },
	{ id: 3, name: 'Dr. Sarah Johnson', specialization: 'Dermatologist' },
	{ id: 4, name: 'Dr. David Lee', specialization: 'Orthopedist' },
];

export default function MainDashboard() {
	const [selectedUser, setSelectedUser] = useState(users[0]);
	const [selectedSpecialist, setSelectedSpecialist] = useState(null);
	const [date, setDate] = useState(new Date());

	return (
		<div className="mx-auto relative">
			<svg
				viewBox="0 0 1200 80"
				fill="none"
				className="w-full h-auto fill-white opacity-65 backdrop-blur-xl"
			>
				<path d="M0 0H358.997C381.17 0 399.223 17.8282 399.5 40V40C399.777 62.1718 417.83 80 440.003 80H592H760C782.091 80 800 62.0914 800 40V40C800 17.9086 817.909 0 840 0H1200V80H0V0Z" />
			</svg>

			<div className="absolute top-4 left-1/2 -translate-x-1/2 flex justify-center items-center space-x-4 py-4">
				<Button
					variant="ghost"
					size="icon"
				>
					<ChevronLeft className="h-6 w-6" />
				</Button>
				{users.map((user) => (
					<div
						key={user.id}
						className="relative"
					>
						<Avatar
							className={`h-14 w-14 cursor-pointer transition-all ${
								selectedUser.id === user.id
									? 'ring-2 ring-primary ring-offset-2'
									: ''
							}`}
							onClick={() => setSelectedUser(user)}
						>
							<AvatarImage
								src={user.avatar}
								alt={user.name}
							/>
							<AvatarFallback>
								{user.name
									.split(' ')
									.map((n) => n[0])
									.join('')}
							</AvatarFallback>
						</Avatar>
						{user.notification && (
							<div className="absolute -bottom-0 -right-0 w-4 h-4 bg-red-500 rounded-full z-10" />
						)}
					</div>
				))}
				<Button
					variant="ghost"
					size="icon"
				>
					<ChevronRight className="h-6 w-6" />
				</Button>
			</div>

			<div className="grid grid-cols-12 gap-4 pt-8 pb-4 bg-white bg-opacity-65 backdrop-blur-md px-4">
				<Card className="col-span-4">
					<CardHeader>
						<CardTitle>Patient</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="flex items-center space-x-4 mb-4">
							<Avatar className="h-16 w-16">
								<AvatarImage
									src={selectedUser.avatar}
									alt={selectedUser.name}
								/>
								<AvatarFallback>
									{selectedUser.name
										.split(' ')
										.map((n) => n[0])
										.join('')}
								</AvatarFallback>
							</Avatar>
							<div>
								<h3 className="font-semibold text-lg">{selectedUser.name}</h3>
								<p className="text-sm text-gray-500">ID: {selectedUser.id}</p>
							</div>
						</div>
						<Card className="rounded-md shadow-none my-2">
							<CardContent className="p-4 space-y-4">
								<p className="font-medium">Message: {selectedUser.message}</p>
								<div className="flex space-x-2">
									<Button
										variant="outline"
										className="flex-1"
									>
										Not Urgent
									</Button>
									<Button className="flex-1">Schedule Appointment</Button>
								</div>
							</CardContent>
						</Card>
						<ScrollArea className="h-[200px]">
							<Accordion
								type="single"
								collapsible
								className="w-full"
							>
								<AccordionItem value="medical-history">
									<AccordionTrigger>Medical History</AccordionTrigger>
									<AccordionContent>
										<ul className="list-disc list-inside">
											<li>Hypertension (diagnosed 2018)</li>
											<li>Appendectomy (2015)</li>
											<li>Allergic to penicillin</li>
										</ul>
									</AccordionContent>
								</AccordionItem>
								<AccordionItem value="medication">
									<AccordionTrigger>Medication</AccordionTrigger>
									<AccordionContent>
										<ul className="list-disc list-inside">
											<li>Lisinopril 10mg daily</li>
											<li>Metformin 500mg twice daily</li>
											<li>Aspirin 81mg daily</li>
										</ul>
									</AccordionContent>
								</AccordionItem>
								<AccordionItem value="allergies">
									<AccordionTrigger>Allergies</AccordionTrigger>
									<AccordionContent>
										<ul className="list-disc list-inside">
											<li>Penicillin</li>
										</ul>
									</AccordionContent>
								</AccordionItem>
							</Accordion>
						</ScrollArea>
					</CardContent>
				</Card>

				<Card className="col-span-4">
					<CardHeader>
						<CardTitle>Suggested Specialists</CardTitle>
					</CardHeader>
					<CardContent>
						<RadioGroup
							value={selectedSpecialist || ''}
							onValueChange={setSelectedSpecialist}
						>
							{specialists.map((specialist) => (
								<div
									key={specialist.id}
									className="flex items-center justify-between space-x-2 mb-4"
								>
									<div className="flex items-center space-x-2">
										<Avatar className="h-12 w-12">
											<AvatarFallback>
												{specialist.name
													.split(' ')
													.map((n) => n[0])
													.join('')}
											</AvatarFallback>
										</Avatar>
										<div>
											<p className="font-medium">{specialist.name}</p>
											<p className="text-sm text-gray-500">
												{specialist.specialization}
											</p>
										</div>
									</div>
									<div className="flex items-center space-x-2">
										<RadioGroupItem
											value={specialist.id.toString()}
											id={`specialist-${specialist.id}`}
											className="sr-only"
										/>
										<label
											htmlFor={`specialist-${specialist.id}`}
											className={`cursor-pointer p-1 rounded-full ${
												selectedSpecialist === specialist.id.toString()
													? 'bg-green-500 text-white'
													: 'bg-gray-200'
											}`}
										>
											<Check className="h-4 w-4" />
										</label>
										<Button
											variant="ghost"
											size="icon"
											className="text-red-500 hover:text-red-600"
											onClick={() => setSelectedSpecialist(null)}
										>
											<X className="h-4 w-4" />
										</Button>
									</div>
								</div>
							))}
						</RadioGroup>
					</CardContent>
				</Card>

				<Card className="col-span-4">
					<CardHeader>
						<CardTitle className="text-center">
							Appointment with Specialist
						</CardTitle>
					</CardHeader>
					<CardContent className="flex flex-col items-center">
						<Calendar
							mode="single"
							selected={date}
							onSelect={setDate}
							className="rounded-md border"
						/>
						{selectedSpecialist && (
							<p className="mt-4 text-center text-sm text-gray-500">
								Appointment with{' '}
								{
									specialists.find(
										(s) => s.id.toString() === selectedSpecialist
									)?.name
								}
							</p>
						)}
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
