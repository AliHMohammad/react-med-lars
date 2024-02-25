import { useState } from 'react';
import { User, users } from '../data/data.ts';
import UserTableWithButtons from '../components/UserTableWithButtons.tsx';
import UserFormControlled, { AddEditDeleteFunction } from '../components/UserFormControlled.tsx';

export default function LiftingState({ title }: { title: string }) {
	const [usersArr, setUsersArr] = useState<User[]>(users);
	const [highlightedUser, setHighlightedUser] = useState<User | undefined>(undefined);


	const handleSubmit: AddEditDeleteFunction = (newUser, isDelete) => {

		if (isDelete) {
			setUsersArr((prevState) => prevState.filter((prevUser) => prevUser.id != newUser.id))
		} else {
			if (newUser.id) {
				for (let i = 0; i < usersArr.length; i++) {
					if (usersArr[i].id == newUser.id) {
						const newList = [...usersArr];
						newList[i] = newUser
						setUsersArr(newList)
						break;
					}
				}
			} else {
				setUsersArr((prevState) => [...prevState, {
					...newUser,
					id: usersArr.length + 1
				}]);
			}
		}
	};

	return (
		<>
			<h2 style={{ textAlign: 'center' }}>{title}</h2>
			<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
				<div>
					<UserTableWithButtons users={usersArr} setHighlightedUser={setHighlightedUser} setUsersArr={setUsersArr} />
				</div>
				<div>
					<UserFormControlled title="User form" onSubmitUser={handleSubmit} defaultUser={highlightedUser}  />
				</div>
			</div>
		</>
	);
}