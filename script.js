//your JS code here. If required.

const Btn = document.getElementById("btn");
const Div = document.getElementById("output");

Btn.addEventListener("click",async () => {
const Text = document.getElementById("text").value;
const Delay = document.getElementById("delay").value;
	if(Text && Delay){
		let prom = new Promise((res,rej) => {
			setTimeout(() => {
				res(Text);
			},Delay);
		});
		let x = await prom;
		if(x){
			Div.innerText = Text;
		}
	}
});