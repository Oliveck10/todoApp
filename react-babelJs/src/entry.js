import React from 'react';
import { render } from 'react-dom';
import TodoApp from './components/app';
import '../style/style.css';

render(<TodoApp />, document.getElementById('root'));
render(
	<footer className="info">
		<p> Sourced from  <a href="http://todomvc.com">TodoMVC</a></p>
	</footer>, document.getElementById('footer')
);
