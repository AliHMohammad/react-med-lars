import { useEffect, useState } from 'react';
import { BaseProps } from '../models/types.tsx';

const SERVER_URL = 'http://localhost:8000/users';
const DELAY = 500;


type User = { id: number; name: string };


//Utility function to fetch a user from the server
function fetchUser(userId: number, options?: object): Promise<User> {
	return fetch(`${SERVER_URL}/${userId}?delay=${DELAY}`, options).then((res) => res.json());
}


export default function FetchDemo({ title }: BaseProps) {
	const [userId] = useState(1);
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);


	//Use this to fetch the next user when the "Next User" button is clicked
	//Make sure you understand why we don't need useEffect here
	const fetchNextUser = async () => {
		const nextUser = user && user.id + 1 <= 15 ? user.id + 1 : 1;
		//Do not set call setUserId here it will cause an extra render
		setLoading(true);
		const theUser = await fetchUser(nextUser);
		setLoading(false);
		setUser(theUser);

		localStorage.setItem('user', JSON.stringify(theUser));
	};


	useEffect(() => {
		//Call fetchUser(..) immediately when the component is mounted
		let active = true;
		const storedUser = localStorage.getItem('user');

		if (storedUser !== null) {
			setUser(JSON.parse(storedUser) as User);
			setLoading(false)
		} else {
			fetchUser(userId).then((response) => {
				if (active) {
					setUser(response);
					setLoading(false);
					console.log(response);
					localStorage.setItem('user', JSON.stringify(response));
				}
			});
		}

		return () => {
			active = false;
		};
	}, []);


	return (
		<>
			<h2>{title}</h2>
			{!loading ? (
				<>
					{JSON.stringify(user)}
					<br />
					<button onClick={fetchNextUser}>Next User</button>
				</>
			) : <h2>Loading...</h2>}
		</>
	);

}
