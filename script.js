//your JS code here. If required.
//your JS code here. If required.
const container = document.querySelector('.container');

for(let i = 0; i < 800; i++) {
	const box = document.createElement('div');
	box.className = 'square';
	container.appendChild(box);
}