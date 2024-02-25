import { useState, ChangeEvent } from 'react';
import { BaseProps } from '../models/types.tsx';
import { User } from '../data/data';


export default function StateDemoObject({ title }: BaseProps) {
	const [user, setUser] = useState<User>({
		id: 1,
		name: 'Max Power',
		email: 'max.power@email.com',
		isActive: true
	});


	function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
		const name = e.target.value;
		setUser({
			...user,
			name
		})
	}


	return (
		<>
			<h2>{title}</h2>
			<div>
				<p>ID: {user.id}</p>{' '}
			</div>
			First Name: <input name="name" value={user.name} onChange={handleNameChange} />
			Email: <input name="email" value={user.email} readOnly={true} />
			Active: <input type="checkbox" checked={user.isActive} name="isActive" readOnly={true} />
			<p style={{ marginTop: 15 }}> {JSON.stringify(user)} </p>
		</>
	);
}
