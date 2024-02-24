import { useState } from "react";
import "./App.css"
import Country from './models/Country.ts';
import CountryInfo from './components/CountryInfo.tsx';


const fetchCountryData = async (countryCode: string) => {
	const res = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
	const countries = await res.json();
	console.log(countries);
	return countries[0];
};

export default function App() {
	const [code, setCode] = useState<string>("dk");
	const [country, setCountry] = useState<Country | null>(null);

	const getInfo = async () => {
		const info = await fetchCountryData(code);
		setCountry(info);
	};

	return (
		<>
			<h1>Show Country Info</h1>
			<input
				type="text"
				id="code"
				onChange={(e) => setCode(e.target.value)}
				placeholder="Enter Country Code"
			/>
			<button onClick={() => getInfo()}>Get Info</button>
			<CountryInfo country={country} />
		</>
	);
}

