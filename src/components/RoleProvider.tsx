import { createContext, useContext, useState, SetStateAction } from "react";


// Værdierne (keys) i ContextTypen SKAL være med i value-proppen i Provideren l. 22.
type RoleContextType = {
	role: string;
	setRole: React.Dispatch<SetStateAction<string>>;
}
// Altid instancer med null!
const RoleContext = createContext<RoleContextType>(null!);


type RoleProviderType = {
	children: React.ReactNode
}
export default function RoleProvider({children}: RoleProviderType) {
	const [role, setRole] = useState("anonymous");

	return (
		<RoleContext.Provider value={{ role, setRole }}>{children}</RoleContext.Provider>
	);
}

// Shortcut. Denne importeres:
// const {role, setRole} = useRole();
// Alternativt:
// const contextProp = useRole(); contextProp.role eller contextProp.setRole()
export function useRole() {
	return useContext(RoleContext);
}


