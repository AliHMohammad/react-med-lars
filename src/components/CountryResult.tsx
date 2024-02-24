import Country from '../models/Country.ts';


type Props = {
	country: Country | null;
};

export default function CountryResult({country}:Props) {
	return country == null ? (
		<p>Enter Country Code above to fetch country info</p>
	) : (
		<>
			<h1>Country Info</h1>
			<h4>Flag</h4>
			<img style={{ width: 100 }} src={country.flags.png} alt={country.flags.alt} />
			<p>Country Name Common: {country.name.common}</p>
			<p>Country Name Official: {country.name.official}</p>
			<p>Country Capital: {country.capital}</p>
			<p>Population: {country.population}</p>
			<p>Country Borders: {country.borders.join(", ")}</p>
			<a href={country.maps.googleMaps} target="_blank">
				Google Maps
			</a>
		</>
	);
}