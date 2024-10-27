import { useState } from 'react';
import PropTypes from 'prop-types';
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Stethoscope, Send, AlertCircle, X, Loader2 } from 'lucide-react';
import MedicalLogo from '../assets/jam_medical.svg';

const doctorRecommendations = [
	{
		id: 1,
		name: 'Dr. Emily Chen',
		specialty: 'Cardiologist',
		recommendation:
			'Regular cardiovascular exercise and a balanced diet are key to heart health.',
		avatarUrl: '/placeholder.svg?height=40&width=40',
	},
	{
		id: 2,
		name: 'Dr. Sarah Johnson',
		specialty: 'Nutritionist',
		recommendation:
			'Incorporate a variety of colorful fruits and vegetables into your daily meals for optimal nutrition.',
		avatarUrl: '/placeholder.svg?height=40&width=40',
	},
	{
		id: 3,
		name: 'Dr. Lisa Brown',
		specialty: 'Rheumatologist',
		recommendation:
			'Low-impact exercises and proper joint care can help manage arthritis symptoms.',
		avatarUrl: '/placeholder.svg?height=40&width=40',
	},
];

DoctorRecommendationsCard.propTypes = {
	role: PropTypes.string.isRequired,
};

const PopupNotification = () => {
	return (
		<div className="fixed -top-[180px] right-4 w-96 bg-white rounded-lg shadow-lg border border-gray-200 p-4 animate-in slide-in-from-top-5">
			<div className="flex justify-between items-start mb-2">
				<h3 className="text-lg font-semibold">Specialist Approved</h3>
				<Button
					variant="ghost"
					size="icon"
					className="-mr-2 -mt-2"
				>
					<X className="h-4 w-4" />
					<span className="sr-only">Close</span>
				</Button>
			</div>
			<p className="text-sm mb-2">
				Dr. Emily Chen, Cardiologist, has been approved for your consultation.
			</p>
			<p className="text-sm text-muted-foreground">
				Phone: (555) 123-4567
				<br />
				Address: 123 Heart Health Blvd, Cardio City, CC 12345
			</p>
		</div>
	);
};

export default function DoctorRecommendationsCard({ role }) {
	const [prompt, setPrompt] = useState('');
	const [visibility, setVisibility] = useState(false);
	// const [responseMessage, setResponseMessage] = useState('');
	const [showPopup, setShowPopup] = useState(false);
	const [loading, setLoading] = useState(false);

	const nameDescription =
		role === 'Doctor'
			? 'Doctor AI Helper'
			: 'AI Doctor Specialists Recommendations';

	const handleSubmit = async (e) => {
		e.preventDefault();
		setPrompt('');

		// try {
		// 	const patientId = '1';
		// 	const response = await fetch(
		// 		`http://localhost:3001/patients/patient/updateAiModelResponse/${patientId}`,
		// 		{
		// 			method: 'POST',
		// 			headers: {
		// 				'Content-Type': 'application/json',
		// 			},
		// 			body: JSON.stringify({ aiModelResponse: prompt }),
		// 		}
		// 	);

		// 	if (response.ok) {
		// 		const result = await response.json();
		// 		console.log('Server response:', result.message);
		// 		setResponseMessage(result.message);
		// 		console.log({ responseMessage });
		// 		setVisibility(true);
		// 	} else {
		// 		const errorData = await response.json();
		// 		console.error('Error:', errorData.error);
		// 		setResponseMessage(errorData.error || 'Failed to update response.');
		// 	}
		// } catch (error) {
		// 	console.error('Request failed:', error);
		// 	setResponseMessage(
		// 		'An error occurred while updating the AI model response.'
		// 	);
		// }
		setLoading(true);
		setTimeout(() => {
			setShowPopup(true);
		}, 6000);
		setTimeout(() => {
			setVisibility(true);
		}, 3000);
	};

	return (
		<>
			<Card className="w-full mx-auto col-span-8 flex flex-col">
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<Stethoscope className="h-6 w-6 text-primary" />
						{nameDescription}
					</CardTitle>
				</CardHeader>

				{visibility ? (
					<CardContent className="space-y-4 flex-grow">
						<div className="flex items-start space-x-2 p-4 bg-muted rounded-lg">
							<AlertCircle className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
							<p className="text-sm text-muted-foreground">
								Based on your symptoms of fatigue, joint pain, and recent weight
								changes, our algorithm has identified potential concerns related
								to your cardiovascular health, metabolism, and joint function.
								The following specialists have been recommended to address these
								issues comprehensively.
							</p>
						</div>
						<ScrollArea className="h-[300px] pr-4">
							<div className="space-y-4">
								{doctorRecommendations.map((doctor) => (
									<div
										key={doctor.id}
										className="flex items-start space-x-4"
									>
										<Avatar>
											<AvatarImage
												src={doctor.avatarUrl}
												alt={doctor.name}
											/>
											<AvatarFallback>
												{doctor.name
													.split(' ')
													.map((n) => n[0])
													.join('')}
											</AvatarFallback>
										</Avatar>
										<div className="space-y-1">
											<h3 className="font-semibold">{doctor.name}</h3>
											<p className="text-sm text-muted-foreground">
												{doctor.specialty}
											</p>
											<p className="text-sm">{doctor.recommendation}</p>
										</div>
									</div>
								))}
							</div>
						</ScrollArea>
					</CardContent>
				) : (
					<CardContent className="flex-grow flex items-center justify-center">
						{loading ? (
							<Loader2 className="h-8 w-8 text-primary animate-spin" />
						) : (
							<img
								src={MedicalLogo}
								alt="Medical logo"
								className="h-32"
							/>
						)}
					</CardContent>
				)}

				<CardFooter className="border-t pt-8 h-24">
					<form
						onSubmit={handleSubmit}
						className="w-full flex space-x-2"
					>
						<Input
							type="text"
							placeholder="Ask a health question..."
							value={prompt}
							onChange={(e) => setPrompt(e.target.value)}
							className="flex-grow"
						/>
						<Button type="submit">
							<Send className="h-4 w-4 mr-2" />
							Send
						</Button>
					</form>
				</CardFooter>
			</Card>
			{showPopup && <PopupNotification />}
		</>
	);
}
