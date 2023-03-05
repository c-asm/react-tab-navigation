import Header from './components/Header';

import Container from 'react-bootstrap/Container';
import './css/Home.css';

import { useEffect, useState } from 'react';


export default function App() {
	// Actual tabs list:
	const [tabs, setTabs] = useState([]);
	// Active tab id (can be null):
	const [activeTab, setActiveTab] = useState(null);

	useEffect(() => {
		// This is example data, you can make a API call, etc. to set tabs list
		setTabs([
			{
				title: 'Tab 1', content: <span>Hello world! Not select another tab.</span>
			},
			{
				title: 'Next tab', content: <span>OMG, tabs work 🙊</span>
			},
			{
				title: 'Saved tab', content: <span>This value will be saved: <input type='text' /></span>,
				saved: true  // This means that tab is not rerendered, but only hidden/shown
			}
		]);
	}, []);

	return (
		<>
			<Header />
			<Container style={{maxWidth: 450}} className="tabs-root-wrapper">
				<div className='tabs-list-wrapper'>
					{tabs.map((e, i) =>
					<div className={activeTab==i?'active-tab':''} key={'title'+i} onClick={e => setActiveTab(i)}>{e.title}</div>)
					}
				</div>
				<div className='tabs-content-wrapper'>
					{activeTab!=null ? tabs.map((e, i) => (
						// If a tab should be saved: always render, only change display property
						// Otherwise: only render if the tab is selected (to not overload DOM with unnecessary elements)
						e.saved ? (
							<div key={'tab'+i} style={{display: activeTab==i?'block':'none'}} className='tab-content'>{e.content}</div>
						) : (
							activeTab==i ? <div key={'tab'+i} className='tab-content'>{e.content}</div> : null
						)
					)) : <span className='no-tab-label'>🙈 Please select a tab</span>}
				</div>
			</Container>
		</>
	)
}