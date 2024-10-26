import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronRight, Activity, Pill, ClipboardList } from 'lucide-react';

export default function MedicalDashboard() {
	const medicalHistory = [
		'Allergies',
		'Previous Conditions',
		'Previous Medical Visits',
		'Surgeries',
		'Genetic Disorders',
	];

	const medications = [
		{ name: 'Paracetamol', dosage: '2 pills', frequency: '3 times a day' },
		{ name: 'Paracetamol', dosage: '2 pills', frequency: '3 times a day' },
	];

	return (
		<div className="mx-auto py-4">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				<Card className="bg-white border border-gray-200">
					<CardHeader>
						<CardTitle className="flex items-center space-x-2">
							<ClipboardList className="h-6 w-6 text-blue-500" />
							<span>Medical History</span>
						</CardTitle>
					</CardHeader>
					<CardContent>
						<ul className="space-y-2">
							{medicalHistory.map((item, index) => (
								<li
									key={index}
									className="flex justify-between items-center py-2 border-b border-blue-100 last:border-b-0"
								>
									<span>{item}</span>
									<Button
										variant="link"
										className="text-blue-500 p-0"
									>
										Learn more <ChevronRight className="h-4 w-4 ml-1" />
									</Button>
								</li>
							))}
						</ul>
					</CardContent>
				</Card>

				<Card className="bg-white border border-gray-200">
					<CardHeader>
						<CardTitle className="flex items-center space-x-2">
							<Pill className="h-6 w-6 text-blue-500" />
							<span>Medication</span>
						</CardTitle>
					</CardHeader>
					<CardContent>
						{medications.map((med, index) => (
							<div
								key={index}
								className="mb-4 last:mb-0"
							>
								<h3 className="font-semibold">{med.name}</h3>
								<div className="flex justify-between text-sm text-gray-600 mt-1">
									<span>Dosage</span>
									<span>{med.dosage}</span>
								</div>
								<div className="flex justify-between text-sm text-gray-600">
									<span>Frequency</span>
									<span>{med.frequency}</span>
								</div>
								<Button
									variant="link"
									className="text-blue-500 p-0 mt-2"
								>
									Learn more <ChevronRight className="h-4 w-4 ml-1" />
								</Button>
							</div>
						))}
					</CardContent>
				</Card>

				<Card className="bg-white border border-gray-200">
					<CardHeader>
						<CardTitle className="flex items-center space-x-2">
							<Activity className="h-6 w-6 text-blue-500" />
							<span>Vital Signs</span>
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="bg-white p-4 rounded-lg">
							<h3 className="font-semibold flex items-center">
								<svg
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5 mr-2 text-blue-500"
								>
									<path
										d="M22 12H18L15 21L9 3L6 12H2"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
								HEART RATE
							</h3>
							<div className="flex justify-between mt-2">
								<div>
									<div className="text-sm text-gray-600">Avg today</div>
									<div className="text-2xl font-bold">
										94-127<span className="text-sm font-normal">BPM</span>
									</div>
								</div>
								<div className="text-right">
									<div className="text-sm text-gray-600">7-day baseline</div>
									<div className="text-2xl font-bold">
										80-124<span className="text-sm font-normal">BPM</span>
									</div>
								</div>
							</div>
							<div className="mt-4 h-20 flex items-end space-x-1">
								{[20, 15, 25, 30, 10, 35, 20, 25, 40, 15, 30, 20].map(
									(height, index) => (
										<div
											key={index}
											className="bg-blue-500 w-full"
											style={{ height: `${height * 2}px` }}
										></div>
									)
								)}
							</div>
							<div className="flex justify-between text-sm text-gray-600 mt-2">
								<span>6 AM</span>
								<span>12 PM</span>
								<span>6 PM</span>
							</div>
						</div>
						<Button
							variant="link"
							className="text-blue-500 p-0 mt-4 w-full text-right"
						>
							Learn more <ChevronRight className="h-4 w-4 ml-1 inline" />
						</Button>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
