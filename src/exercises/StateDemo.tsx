import { BaseProps } from '../models/types.tsx';
import { useState } from 'react';


export default function StateDemo({ title }: BaseProps) {
	const [count, setCount] = useState(0);
	return (
		<>
			<h2>{title}</h2>
			<button onClick={() => {
				setCount((prev) => prev + 1)
			}}>Increment
			</button>
			<button onClick={() => {
				setCount((prev) => prev - 1)
			}}> Decrement
			</button>
			<h3>{count}</h3>
		</>
	);
}
