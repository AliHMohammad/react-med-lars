import { User } from '../data/data';
import React from 'react';

type Props = {
	users: User[];
	setHighlightedUser: React.Dispatch<React.SetStateAction<User | undefined>>;
};

export default function UserTableWithButtons({ users, setHighlightedUser }: Props) {
	return (
		<>
			<table>
				<thead>
				<tr style={{ textAlign: 'center' }}>
					<td>Id</td>
					<td>Name</td>
					<td>Email</td>
					<td>Active</td>
					<td>#</td>
				</tr>
				</thead>
				<tbody>
				{users.map((user) => (
					<tr key={user.id}>
						<td>{user.id}</td>
						<td>{user.name}</td>
						<td>{user.email}</td>
						<td>{user.isActive ? 'Yes' : 'No'}</td>
						<td>
							<button style={{cursor: "pointer"}} onClick={() => {
								setHighlightedUser(user);
							}} type="button">Edit</button>
						</td>
					</tr>
				))}
				</tbody>
			</table>
		</>
	);
}
