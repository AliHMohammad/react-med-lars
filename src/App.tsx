import { useState, CSSProperties } from 'react';
import './App.css';
import Propsdemo from './exercises/Propsdemo.tsx';
import ListDemo from './exercises/ListDemo.tsx';
import EventDemo from './exercises/EventDemo.tsx';
import FormUncontrolled from './exercises/FormUncontrolled.tsx';
import StateDemo from './exercises/StateDemo.tsx';
import StateDemoObject from './exercises/StateDemoObject.tsx';
import StateDemoArray from './exercises/StateDemoArray.tsx';
import UseEffectDemo from './exercises/UseEffectDemo.tsx';
import FetchDemo from './exercises/FetchDemo.tsx';
import LiftingState from './exercises/LiftingState.tsx';
import ContextDemo from './exercises/ContextDemo.tsx';

export default function App() {
	const [selectedView, setSelectedView] = useState('info');

	function handleSelected(selected: string) {
		setSelectedView(selected);
	}

	const btnStyle = {
		width: '100%'
	};

	return (
		<>
			<div className="outer-div-style">
				<div className="header-style">
					<h2>React Exercises</h2>
				</div>
				<div style={{ display: 'flex' }}>
					<div style={{ flex: 1, padding: 10 }}>
						<Buttons onSelected={handleSelected} btnStyle={btnStyle} />
					</div>
					<div className="exercise-style">
						{selectedView == 'info' && <p>All exercises for React day-1</p>}
						{selectedView == 'props1' && <Propsdemo title="Profiles" />}
						{selectedView == 'list' && <ListDemo title="List Demo" />}
						{selectedView == 'event' && <EventDemo title="Event Demo" />}
						{selectedView == 'uncontrolled' && <FormUncontrolled title="Form Uncontrolled" />}
						{selectedView == 'state' && <StateDemo title="useState demo" />}
						{selectedView == 'stateObj' && <StateDemoObject title="useState demo object" />}
						{selectedView == 'stateArr' && <StateDemoArray title="useState demo array" />}
						{selectedView == "effect" && <UseEffectDemo title="useEffect demo"/>}
						{selectedView == "fetch" && <FetchDemo title="Fetch demo"/>}
						{selectedView == "liftingState" && <LiftingState title="Lifting state"/>}
						{selectedView == "context" && <ContextDemo title="useContext Demo"/>}
						{/**Add the exercise components you create for each exercise using the key you used for the matching button  */}
					</div>
				</div>
			</div>
		</>
	);
}
type ButtonProps = {
	onSelected: (selected: string) => void;
	btnStyle: CSSProperties;
};

const Buttons = (props: ButtonProps) => {
	const { onSelected: handleSelected, btnStyle: btnStyle } = props;
	return (
		<>
			<button style={btnStyle} onClick={() => handleSelected('info')}>
				Info
			</button>
			{/* Add a new button for each of the exercises you complete */}
			<button style={btnStyle} onClick={() => handleSelected('props1')}>
				Props demo1
			</button>
			<button style={btnStyle} onClick={() => handleSelected('list')}>
				List demo
			</button>
			<button style={btnStyle} onClick={() => handleSelected('event')}>
				Event demo
			</button>
			<button style={btnStyle} onClick={() => handleSelected('uncontrolled')}>
				Uncontrolled form
			</button>
			<button style={btnStyle} onClick={() => handleSelected('state')}>
				UseState
			</button>
			<button style={btnStyle} onClick={() => handleSelected('stateObj')}>
				UseState Object
			</button>
			<button style={btnStyle} onClick={() => handleSelected('stateArr')}>
				UseState Array
			</button>
			<button style={btnStyle} onClick={() => handleSelected('effect')}>
				UseEffect
			</button>
			<button style={btnStyle} onClick={() => handleSelected('fetch')}>
				Fetch
			</button>
			<button style={btnStyle} onClick={() => handleSelected('liftingState')}>
				Lifting state
			</button>
			<button style={btnStyle} onClick={() => handleSelected('context')}>
				Use context
			</button>
		</>
	);
};
