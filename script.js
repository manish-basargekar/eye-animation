const cursor = document.querySelector(".cursor");
const box = document.querySelector(".box")
var timeout;

//follow cursor on mousemove
box.addEventListener("mousemove", (e) => {
	let x = e.pageX;
	let y = e.pageY;


	cursor.style.top = y + "px";
	cursor.style.left = x + "px";
	cursor.style.display = "block";

});


document.addEventListener("mouseout", () => {
	cursor.style.display = "none";
});


