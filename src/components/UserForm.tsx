import { FormEvent, useRef } from 'react';
import { User } from '../data/data.ts';

type Props = {
	title: string,
	onSubmitUser: (user: User) => void;
}

export default function UserForm({onSubmitUser, title}:Props) {
	const nameRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const activeRef = useRef<HTMLInputElement>(null);

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const newUser: User = {
			id: 0,
			name: nameRef.current!.value,
			email: emailRef.current!.value,
			isActive: activeRef.current!.checked,
		}
		//Read form inputs and submit the form to the parent
		onSubmitUser(newUser);
	};


	return (
		<>
			<h2>{title}</h2>
			<form onSubmit={onSubmit}>
				First Name: <input name="name" ref={nameRef} />
				Email: <input name="email" ref={emailRef} />
				Active: <input type="checkbox" name="isActive" ref={activeRef}/>
				<button type="submit">Add User</button>
			</form>
		</>
	);

}