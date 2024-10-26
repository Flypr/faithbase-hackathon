import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
	User,
	Cake,
	Phone,
	MapPin,
	Clipboard,
	Pill,
	Stethoscope,
	Activity,
	AlertCircle,
} from 'lucide-react';

export default function UserInfo() {
	return (
		<Card className="w-full mx-auto col-span-4">
			<CardHeader className="pb-4">
				<div className="flex items-center space-x-4">
					<Avatar className="w-16 h-16">
						<AvatarImage
							src="/placeholder.svg?height=64&width=64"
							alt="Jane Doe"
						/>
						<AvatarFallback>JD</AvatarFallback>
					</Avatar>
					<div>
						<CardTitle>Jane Doe</CardTitle>
						<div className="flex items-center text-sm text-muted-foreground mt-1">
							<User className="mr-1 h-4 w-4" />
							<span>Patient ID: 12345</span>
						</div>
						<div className="flex items-center text-sm text-muted-foreground mt-1">
							<Cake className="mr-1 h-4 w-4" />
							<span>DOB: 15/05/1985</span>
						</div>
					</div>
				</div>
			</CardHeader>
			<CardContent>
				<div className="space-y-2 mb-6">
					<div className="flex items-center text-sm">
						<Phone className="mr-2 h-4 w-4 text-muted-foreground" />
						<span>(555) 123-4567</span>
					</div>
					<div className="flex items-center text-sm">
						<MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
						<span>123 Medical St, Health City, HC 12345</span>
					</div>
				</div>
				<ScrollArea className="h-[300px] pr-4">
					<div className="space-y-6">
						<div>
							<h3 className="font-semibold flex items-center mb-2">
								<Clipboard className="mr-2 h-5 w-5 text-primary" />
								Medical History
							</h3>
							<ul className="list-disc list-inside space-y-1 text-sm">
								<li>Hypertension (diagnosed 2018)</li>
								<li>Type 2 Diabetes (diagnosed 2019)</li>
								<li>Appendectomy (2010)</li>
							</ul>
						</div>
						<div>
							<h3 className="font-semibold flex items-center mb-2">
								<Pill className="mr-2 h-5 w-5 text-primary" />
								Current Medications
							</h3>
							<ul className="list-disc list-inside space-y-1 text-sm">
								<li>Lisinopril 10mg daily</li>
								<li>Metformin 500mg twice daily</li>
								<li>Aspirin 81mg daily</li>
							</ul>
						</div>
						<div>
							<h3 className="font-semibold flex items-center mb-2">
								<Stethoscope className="mr-2 h-5 w-5 text-primary" />
								Recent Visits
							</h3>
							<ul className="list-disc list-inside space-y-1 text-sm">
								<li>10/03/2023 - Annual Physical</li>
								<li>22/01/2023 - Diabetes Follow-up</li>
								<li>05/12/2022 - Flu Shot</li>
							</ul>
						</div>
						<div>
							<h3 className="font-semibold flex items-center mb-2">
								<Activity className="mr-2 h-5 w-5 text-primary" />
								Vital Signs (Last Recorded)
							</h3>
							<ul className="list-disc list-inside space-y-1 text-sm">
								<li>Blood Pressure: 128/82 mmHg</li>
								<li>Heart Rate: 72 bpm</li>
								<li>Temperature: 98.6°F (37°C)</li>
								<li>Weight: 160 lbs (72.5 kg)</li>
							</ul>
						</div>
						<div>
							<h3 className="font-semibold flex items-center mb-2">
								<AlertCircle className="mr-2 h-5 w-5 text-primary" />
								Allergies
							</h3>
							<ul className="list-disc list-inside space-y-1 text-sm">
								<li>Penicillin - Severe</li>
								<li>Latex - Moderate</li>
								<li>Peanuts - Mild</li>
							</ul>
						</div>
					</div>
				</ScrollArea>
			</CardContent>
		</Card>
	);
}
