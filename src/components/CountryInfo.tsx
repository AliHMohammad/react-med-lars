import Country from '../models/Country.ts';


type Props = {
	country: Country | null;
};

export default function CountryInfo({country}:Props) {
	return country == null ? (
		<p>Enter Country Code above to fetch country info</p>
	) : (
		<>
			<h1>Country Info</h1>
			<h4>Flag</h4>
			<img style={{ width: 100 }} src={country.flags.png} alt={country.flags.alt} />
			<p>Country Name Common: TODO</p>
			<p>Country Name Official: TODO</p>
			<p>Country Capital: TODO</p>
			<p>Population: TODO</p>
			<p>Country Borders: {country.borders.join(", ")}</p>
			<a href="TODO" target="_blank">
				Google Maps
			</a>
		</>
	);
}