
type Props = {
	image: string,
	onClick: () => void;
}


export default function ImageButton({image, onClick}:Props) {
	return (
		<button  onClick={onClick}>
			<img style={{height: "50px"}} src={image} alt={image}/>
		</button>
	)
}