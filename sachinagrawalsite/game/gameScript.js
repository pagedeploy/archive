function changeColors(){
  document.getElementById("title").style.backgroundColor = getRandomColor();
  document.getElementById("controls").style.backgroundColor = getRandomColor();
}

function getRandomColor(){
	return "rgba("+Math.ceil(Math.random()*255)+","+Math.ceil(Math.random()*255)+","+Math.ceil(Math.random()*255)+","+(Math.random())+")";
}