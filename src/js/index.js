import Window from './window';
import Modal from './modal';
import Nft from './notification';
import Push from './push';
import Progress from './progress';
import Input from './input';
import Utility from './utility';
import SVG from 'svg/sprite.svg';

// Add icons
window.addEventListener('load', () => {
	let dom = document.createElement('div');

	dom.setAttribute('hidden', '');
	dom.innerHTML = SVG;
	document.body.insertBefore(dom, document.body.firstChild);
});

export { Window, Modal, Nft, Push, Progress, Input, Utility };