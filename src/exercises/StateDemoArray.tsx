

import {BaseProps} from '../models/types.tsx';
import { users as usersFromDB, User } from "../data/data";
import { useState } from "react";
import UserTable from "../components/UserTable";
import UserForm from "../components/UserForm";

export default function StateDemoArray({ title }: BaseProps) {
	const [users, setUsers] = useState<User[]>(usersFromDB || []);
	//Derived value. No need for a useState here
	const nextId = 1 + users.reduce((max, user) => (user.id > max ? user.id : max), users[0].id);


	const onSubmitUser = (newUser: User) => {
		newUser.id = nextId;
		setUsers((prevState: User[]) => [...prevState, newUser])
	};


	return (
		<>
			<h2>{title}</h2>
			<UserTable users={users} />
			<UserForm title="Add User" onSubmitUser={onSubmitUser} />
		</>
	);
}
