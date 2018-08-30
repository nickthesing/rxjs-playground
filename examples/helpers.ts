
// global log wrapper
export const log = (what) => { console.log(what); }

// global print into an element
export const print = (value) => {
	const app = document.getElementById('app');
	const p = document.createElement("p");
	const t = document.createTextNode(value);
	p.appendChild(t);
	app.appendChild(p);
}
