import { User } from '../data/data';
import React from 'react';

type Props = {
	users: User[];
	setHighlightedUser: React.Dispatch<React.SetStateAction<User | undefined>>;
	setUsersArr: React.Dispatch<React.SetStateAction<User[]>>;
};

export default function UserTableWithButtons({ users, setHighlightedUser, setUsersArr }: Props) {
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
						<td style={{cursor: "pointer"}} onClick={() => {
							setHighlightedUser(user);
						}}
						>{user.name}</td>
						<td>{user.email}</td>
						<td>{user.isActive ? 'Yes' : 'No'}</td>
						<td>
							<button onClick={() => {
								setUsersArr((prevState) => prevState.filter((prevUser) => prevUser.id != user.id))
							}} type="button">Delete</button>
						</td>
					</tr>
				))}
				</tbody>
			</table>
		</>
	);
}
