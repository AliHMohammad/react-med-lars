import { User } from '../data/data';

type Props = {
	users: User[];
};

export default function UserTable({ users }: Props) {
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
								<button type="button">Delete</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}
