import { useState } from 'react';
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
import { Stethoscope, Send, AlertCircle } from 'lucide-react';

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
		name: 'Dr. Michael Patel',
		specialty: 'Dermatologist',
		recommendation:
			'Always use sunscreen, even on cloudy days, to protect your skin from UV damage.',
		avatarUrl: '/placeholder.svg?height=40&width=40',
	},
	{
		id: 3,
		name: 'Dr. Sarah Johnson',
		specialty: 'Nutritionist',
		recommendation:
			'Incorporate a variety of colorful fruits and vegetables into your daily meals for optimal nutrition.',
		avatarUrl: '/placeholder.svg?height=40&width=40',
	},
	{
		id: 4,
		name: 'Dr. David Lee',
		specialty: 'Endocrinologist',
		recommendation:
			'Regular blood sugar monitoring and a balanced diet are crucial for managing diabetes.',
		avatarUrl: '/placeholder.svg?height=40&width=40',
	},
	{
		id: 5,
		name: 'Dr. Lisa Brown',
		specialty: 'Rheumatologist',
		recommendation:
			'Low-impact exercises and proper joint care can help manage arthritis symptoms.',
		avatarUrl: '/placeholder.svg?height=40&width=40',
	},
];

export default function DoctorRecommendationsCard() {
	const [prompt, setPrompt] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Submitted prompt:', prompt);
		setPrompt('');
	};

	return (
		<Card className="w-full max-w-2xl mx-auto">
			<CardHeader>
				<CardTitle className="flex items-center gap-2">
					<Stethoscope className="h-6 w-6 text-primary" />
					Doctor Specialists Recommendations
				</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				<div className="flex items-start space-x-2 p-4 bg-muted rounded-lg">
					<AlertCircle className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
					<p className="text-sm text-muted-foreground">
						Based on your symptoms of fatigue, joint pain, and recent weight
						changes, our algorithm has identified potential concerns related to
						your cardiovascular health, metabolism, and joint function. The
						following specialists have been recommended to address these issues
						comprehensively.
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
			<CardFooter className="border-t pt-4">
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
	);
}
