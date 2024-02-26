import { createContext, useContext, useState, SetStateAction } from "react";


type RoleContextType = {
	role: string;
	setRole: React.Dispatch<SetStateAction<string>>;
}

//Værdierne (keys) i createContext() SKAL være med i value-proppen i Provideren l. 21.
const RoleContext = createContext<RoleContextType>({ role: null!, setRole: () => {} });



type RoleProviderType = {
	children: React.ReactNode
}

export default function RoleProvider({children}: RoleProviderType) {
	const [role, setRole] = useState("anonymous");
	return (
		<RoleContext.Provider value={{ role, setRole }}>{children}</RoleContext.Provider>
	);
}


export function useRole() {
	return useContext(RoleContext);
}


