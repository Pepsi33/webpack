 import _ from 'lodash';
 import '../css/index.css';
 import Icon from '../image/blog.jpg'
 //import data from '../json/data.xml';
 import printMe from './print.js';
 import { cube } from './math.js';

 if (process.env.NODE_ENV !== 'production') {
   console.log('Looks like we are in development mode!');
 }

 function component() {
	var element = document.createElement('div');
	element.innerHTML = [
		'Hello webpack!',
		'5 cubed is equal to ' + cube(5)
	].join('\n\n');
 	element.classList.add('hello');
 	var btn = document.createElement('button');
 	btn.innerHTML = 'Click me and check the console!';
 	btn.onclick = printMe;

 	element.appendChild(btn);

 	return element;
 }

 document.body.appendChild(component());

/*if (module.hot) {
	module.hot.accept('./print.js', function() {
	  console.log('Accepting the updated printMe module!');
	  document.body.removeChild(element);
	  element = component(); // Re-render the "component" to update the click handler
	  document.body.appendChild(element);
	})
}*/