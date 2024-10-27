import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function MedicalAssistant() {
	const [prompt, setPrompt] = useState('');
	const [problem, setProblem] = useState('');
	const [doctors, setDoctors] = useState([]);
	const textareaRef = useRef(null);

	useEffect(() => {
		if (textareaRef.current) {
			textareaRef.current.style.height = 'auto';
			textareaRef.current.style.height =
				textareaRef.current.scrollHeight + 'px';
		}
	}, [prompt]);

	const handleSubmit = (e) => {
		e.preventDefault();
		// Simulating API call and response
		setTimeout(() => {
			setProblem(
				'Potential concerns include cardiovascular health, metabolism, and joint function. Consulting cardiology, endocrinology, or rheumatology specialists is recommended.'
			);
			setDoctors([
				{
					id: '1',
					name: 'Dr. Emily Chen',
					specialty: 'Cardiologist',
					experience: '15 years',
					education: 'MD from Johns Hopkins University',
					avatar: '/placeholder.svg?height=50&width=50',
				},
				{
					id: '2',
					name: 'Dr. Sarah Johnson',
					specialty: 'Nutritionist',
					experience: '10 years',
					education: 'MD from Harvard Medical School',
					avatar: '/placeholder.svg?height=50&width=50',
				},
				{
					id: '3',
					name: 'Dr. Lisa Brown',
					specialty: 'Rheumatologist',
					experience: '12 years',
					education: 'MD from Stanford University',
					avatar: '/placeholder.svg?height=50&width=50',
				},
			]);
		}, 1000);
	};

	return (
		<Card className="w-full mx-auto col-span-8">
			<CardHeader>
				<CardTitle>Medical Diagnosis Assistant</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				<form
					onSubmit={handleSubmit}
					className="space-y-2"
				>
					<Textarea
						ref={textareaRef}
						placeholder="Describe patient symptoms in detail..."
						value={prompt}
						onChange={(e) => setPrompt(e.target.value)}
						className="min-h-[100px] resize-none overflow-hidden"
					/>
					<Button
						type="submit"
						className="w-full"
					>
						Analyze
					</Button>
				</form>
				{problem && (
					<div className="bg-yellow-100 p-3 rounded-md">
						<h3 className="font-semibold">Identified Problem:</h3>
						<p>{problem}</p>
					</div>
				)}
				<div className="bg-gray-100 p-4 rounded-md">
					<h3 className="font-semibold mb-2">Recommended Specialists:</h3>
					<ScrollArea className="h-64 w-full rounded-md border">
						<div className="p-4 space-y-4">
							{doctors.map((doctor) => (
								<Accordion
									key={doctor.id}
									type="single"
									collapsible
									className="bg-white rounded-md"
								>
									<AccordionItem value={doctor.id}>
										<AccordionTrigger className="px-4 py-2 hover:bg-gray-50">
											<div className="flex items-center space-x-4">
												<Avatar>
													<AvatarImage
														src={doctor.avatar}
														alt={doctor.name}
													/>
													<AvatarFallback>
														{doctor.name
															.split(' ')
															.map((n) => n[0])
															.join('')}
													</AvatarFallback>
												</Avatar>
												<div className="text-left">
													<p className="font-medium">{doctor.name}</p>
													<p className="text-sm text-gray-500">
														{doctor.specialty}
													</p>
												</div>
											</div>
										</AccordionTrigger>
										<AccordionContent className="px-4 py-2">
											<p>
												<strong>Experience:</strong> {doctor.experience}
											</p>
											<p>
												<strong>Education:</strong> {doctor.education}
											</p>
										</AccordionContent>
									</AccordionItem>
								</Accordion>
							))}
						</div>
					</ScrollArea>
				</div>
			</CardContent>
		</Card>
	);
}
