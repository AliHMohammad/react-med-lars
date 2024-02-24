
export default interface Country {
	name: { common: string; official: string };
	capital: string[];
	borders: string[];
	population: number;
	flags: { png: string; svg: string; alt: string };
	maps: { googleMaps: string };
}