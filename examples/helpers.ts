
// global log function 
export const log = (what) => { console.log(what); }

// global print function
export const print = (value) => {
	const app = document.getElementById('app');
	const p = document.createElement("p");
	const t = document.createTextNode(value);
	p.appendChild(t);
	app.appendChild(p);
}
