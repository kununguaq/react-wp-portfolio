import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import smoothscroll from 'smoothscroll-polyfill';
import Portfolio from './routes/Portfolio';

class App extends Component {
	render() {
		smoothscroll.polyfill();
		return (
			<div className="App">
				<BrowserRouter>
					<Route path="/" component={Portfolio} />
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
