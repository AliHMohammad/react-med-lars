import {BaseProps} from '../models/types.tsx';
import Profile from '../components/Profile.tsx';
import { useState } from "react";


export default function Propsdemo({ title }: BaseProps) {
	const [showHorizontal, setShowHorizontal] = useState(false);
	return (
		<>
			<h2>{title}</h2>
			Direction: <input type="checkbox" checked={showHorizontal} onChange={()=>setShowHorizontal(!showHorizontal)}/>
			<Profile name="Max Power" email="mp@email.com" isActive={true} singleLine={showHorizontal} />
			<Profile name="Ali Mohammad" email="almo1234@stud.kea.dk" isActive={false} singleLine={showHorizontal}/>
			<Profile name="Jonathan Riccccci" email="Riiciicci@gmail.com" isActive={true} singleLine={showHorizontal}/>
		</>
	);
}
