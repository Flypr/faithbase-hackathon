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
import {
	ChevronLeft,
	ChevronRight,
	Check,
	X,
	Stethoscope,
	CalendarDays,
	UserCircle,
} from 'lucide-react';

const users = [
	{
		id: 1,
		name: 'John Doe',
		avatar: '/placeholder.svg?height=50&width=50',
		problem: 'My stomach hurts in the lower left part when I breathe in.',
	},
	{
		id: 2,
		name: 'Jane Smith',
		avatar: '/placeholder.svg?height=50&width=50',
		problem: "I've been experiencing frequent headaches and dizziness.",
	},
	{
		id: 3,
		name: 'Bob Johnson',
		avatar: '/placeholder.svg?height=50&width=50',
		problem: 'My knee has been swollen and painful for the past week.',
	},
	{
		id: 4,
		name: 'Alice Brown',
		avatar: '/placeholder.svg?height=50&width=50',
		problem: "I've been having trouble sleeping and feel anxious all the time.",
	},
	{
		id: 5,
		name: 'Charlie Davis',
		avatar: '/placeholder.svg?height=50&width=50',
		problem: "I've developed a rash on my arms and it's very itchy.",
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
	const [urgency, setUrgency] = useState(null);
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

			<div className="grid grid-cols-12 gap-6 pt-8 pb-4 bg-white bg-opacity-65 backdrop-blur-md px-4">
				{/* Patient Information Card */}
				<Card className="col-span-5">
					<CardHeader>
						<CardTitle className="flex items-center space-x-2">
							<UserCircle className="h-6 w-6" />
							<span>Patient Information</span>
						</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="flex items-center space-x-4">
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
								<p className="text-sm text-gray-500">
									Patient ID: {selectedUser.id}
								</p>
							</div>
						</div>
						<div className="bg-gray-100 p-3 rounded-md">
							<h4 className="font-semibold mb-2">Patient&apos;s Message:</h4>
							<p className="text-sm">{selectedUser.problem}</p>
						</div>
						<div className="bg-blue-100 p-3 rounded-md">
							<h4 className="font-semibold mb-2">AI Analysis:</h4>
							<p className="text-sm">
								Based on the symptoms described, the patient may be experiencing
								[AI-generated analysis here].
							</p>
						</div>
						<div className="flex space-x-4">
							<Button
								variant={urgency === 'not-urgent' ? 'default' : 'outline'}
								onClick={() => setUrgency('not-urgent')}
							>
								Not Urgent
							</Button>
							<Button
								variant={urgency === 'schedule' ? 'default' : 'outline'}
								onClick={() => setUrgency('schedule')}
							>
								Schedule Appointment
							</Button>
						</div>
						<ScrollArea className="h-48 w-full rounded-md border p-4">
							<Accordion
								type="single"
								collapsible
							>
								<AccordionItem value="medical-history">
									<AccordionTrigger>Medical History</AccordionTrigger>
									<AccordionContent>
										[Patient&apos;s medical history details here]
									</AccordionContent>
								</AccordionItem>
								<AccordionItem value="medication">
									<AccordionTrigger>Medication</AccordionTrigger>
									<AccordionContent>
										[Patient&apos;s current medications here]
									</AccordionContent>
								</AccordionItem>
								<AccordionItem value="allergies">
									<AccordionTrigger>Allergies</AccordionTrigger>
									<AccordionContent>
										[Patient&apos;s allergies here]
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

				{/* Recommended Specialists Card */}
				<Card className="col-span-4">
					<CardHeader>
						<CardTitle className="flex items-center space-x-2">
							<Stethoscope className="h-6 w-6" />
							<span>Recommended Specialists</span>
						</CardTitle>
					</CardHeader>
					<CardContent>
						<ScrollArea className="h-[400px] w-full rounded-md border">
							<div className="p-4 space-y-4">
								{specialists.map((specialist) => (
									<div
										key={specialist.id}
										className="flex items-center justify-between p-2 bg-gray-100 rounded-md"
									>
										<div className="flex items-center space-x-4">
											<Avatar>
												<AvatarImage
													src={specialist.avatar}
													alt={specialist.name}
												/>
												<AvatarFallback>
													{specialist.name
														.split(' ')
														.map((n) => n[0])
														.join('')}
												</AvatarFallback>
											</Avatar>
											<div>
												<p className="font-semibold">{specialist.name}</p>
												<p className="text-sm text-gray-500">
													{specialist.specialty}
												</p>
											</div>
										</div>
										<div className="flex space-x-2">
											<Button
												size="sm"
												variant={
													selectedSpecialist === specialist.id
														? 'default'
														: 'outline'
												}
												onClick={() => setSelectedSpecialist(specialist.id)}
											>
												<Check className="h-4 w-4" />
											</Button>
											<Button
												size="sm"
												variant="outline"
												onClick={() => setSelectedSpecialist(null)}
											>
												<X className="h-4 w-4" />
											</Button>
										</div>
									</div>
								))}
							</div>
						</ScrollArea>
					</CardContent>
				</Card>

				{/* Appointment Scheduling Card */}
				<Card className="col-span-3">
					<CardHeader>
						<CardTitle className="flex items-center space-x-2">
							<CalendarDays className="h-6 w-6" />
							<span>Schedule Appointment</span>
						</CardTitle>
					</CardHeader>
					<CardContent>
						{selectedSpecialist ? (
							<>
								<div className="mb-4">
									<h3 className="font-semibold mb-2">Selected Specialist:</h3>
									<p>
										{specialists.find((s) => s.id === selectedSpecialist)?.name}
									</p>
									<p className="text-sm text-gray-500">
										{
											specialists.find((s) => s.id === selectedSpecialist)
												?.specialty
										}
									</p>
								</div>
								<div className="flex flex-col items-start">
									<Calendar
										mode="single"
										selected={date}
										onSelect={setDate}
										className="rounded-md border"
									/>
								</div>
							</>
						) : (
							<p className="text-center text-gray-500">
								Please select a specialist to schedule an appointment.
							</p>
						)}
					</CardContent>
				</Card>
			</div>
		</div>
	);
}