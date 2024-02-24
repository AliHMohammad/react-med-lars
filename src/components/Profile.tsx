type Props = {
	name: string,
	email: string,
	isActive: boolean,
	singleLine: boolean
}


export default function Profile({ name, email, isActive, singleLine }: Props) {


	return singleLine ? (
		<>
			<p>Name: {name}, Email: {email} is {isActive ? "active" : "not active"}</p>
		</>
	) : (
		<div>
			<h3>{name}</h3>
			<p>{email}</p>
			<p>{isActive ? 'Is active' : 'Is not active'}</p>
		</div>
	);
}