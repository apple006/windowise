import { Frame } from 'animatorjs';

let Animation = {};

Animation.overlay_in = [
	new Frame('.wwise-overlay-in-1', 0),
	new Frame('.wwise-overlay-in-2', 300)
];

Animation.overlay_out = [
	new Frame('.wwise-overlay-out-1', 300)
];

Animation.fade_in = [
	new Frame('.wwise-fade-in-1', 0),
	new Frame('.wwise-fade-in-2', { duration: 200, 'timing-function': 'ease-in' }),
	new Frame('.wwise-fade-in-3', { duration: 100, 'timing-function': 'linear' }),
	new Frame('.wwise-fade-in-4', { duration: 100, 'timing-function': 'linear' })
];

Animation.fade_out = [
	new Frame('.wwise-fade-out-1', { duration: 250, 'timing-function': 'ease-in' })
];

Animation.min_in = [
	new Frame('.wwise-min-in-1', 0),
	new Frame('.wwise-min-in-2', 350)
];

Animation.min_out = [
	new Frame('.wwise-min-out-1', 400)
];

let dirs = ['top', 'bottom', 'left', 'right'];
for(let i in dirs) {
	let key = dirs[i];

	Animation[key + '_in'] = [
		new Frame('.wwise-' + key + '-in-1', 0),
		new Frame('.wwise-' + key + '-in-2', 350),
	];

	Animation[key + '_out'] = [
		new Frame('.wwise-' + key + '-out-1', 300)
	];
}

export default Animation;