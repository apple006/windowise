import Window from './window';
import create from './create';
import SVG from 'svg/sprite.svg';

// Add icons
window.addEventListener('load', () => {
	let dom = document.createElement('div');

	dom.setAttribute('hidden', '');
	dom.innerHTML = SVG;
	document.body.insertBefore(dom, document.body.firstChild);
});

export { Window, create };