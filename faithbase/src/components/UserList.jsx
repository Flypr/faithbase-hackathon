import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const users = [
	{
		id: 1,
		name: 'John Doe',
		avatar: '/placeholder.svg?height=50&width=50',
		message: 'My head hurts',
	},
	{
		id: 2,
		name: 'Jane Smith',
		avatar: '/placeholder.svg?height=50&width=50',
		message: 'Feeling dizzy',
	},
	{
		id: 3,
		name: 'Bob Johnson',
		avatar: '/placeholder.svg?height=50&width=50',
		message: 'Sore throat',
	},
	{
		id: 4,
		name: 'Alice Brown',
		avatar: '/placeholder.svg?height=50&width=50',
		message: 'Back pain',
	},
];

export default function UserList() {
	const [selectedUser, setSelectedUser] = useState(users[0]);

	return (
		<div className="flex justify-center items-center space-x-4 mb-8">
			<Button
				variant="ghost"
				size="icon"
			>
				<ChevronLeft className="h-6 w-6" />
			</Button>
			{users.map((user) => (
				<Avatar
					key={user.id}
					className={`h-12 w-12 cursor-pointer transition-all ${
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
			))}
			<Button
				variant="ghost"
				size="icon"
			>
				<ChevronRight className="h-6 w-6" />
			</Button>
		</div>
	);
}
