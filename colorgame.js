var numsquare = 6;
var colors = randomcolor(numsquare);

var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var squares = document.querySelectorAll(".square");
var header = document.querySelector("h1");
var p = document.querySelector("#p");
var resetbutton = document.querySelector("#butt");
var pickedcolor ;

//EASY CONCEPT
easy.addEventListener("click",function(){
	p.textContent = "";
	easy.classList.add("selected");
	hard.classList.remove("selected");
	numsquare= 3;
	colors = randomcolor(numsquare);
	rightcolor = right();
	colordisplay.textContent = rightcolor;
	for(var i = 0;i<colors.length;i++)
	{
		squares[i].style.background = colors[i];
	}
	for(var i =3 ;i<squares.length;i++)
	{
		squares[i].style.display= "none";
	}		
});

hard.addEventListener("click",function(){
		p.textContent = "";
		easy.classList.remove("selected");
		hard.classList.add("selected");
		numsquare = 6;
		colors = randomcolor(numsquare);
		rightcolor = right();
		colordisplay.textContent = rightcolor;
		for(var i = 0; i< squares.length;i++)
		{	
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
		}		
	});




var colordisplay = document.querySelector("#colordisplay");
var rightcolor = right();
colordisplay.textContent = rightcolor;

for(var i = 0; i< squares.length ;i++)
{
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click",function(){
		pickedcolor = this.style.background;
		
		if(pickedcolor === rightcolor)
		{
			for(var i = 0; i< squares.length ;i++)
			{
				squares[i].style.background = rightcolor;
			}
			header.style.backgroundColor = rightcolor;
			p.textContent = "correct";
			resetbutton.textContent = "Play Again??";
		}
		else
		{
			p.textContent = "Try Again";
			this.style.background = "#232323";
		}
});
}

function randomcolor(num)
{	
	var arr = [];
	for(var i =0;i<num;i++)
	{
		var r = Math.floor(Math.random()*256);
		var g = Math.floor(Math.random()*256);
		var b =Math.floor(Math.random()*256);
		arr.push("rgb(" + r + ", " + g + ", " + b +")");
	}
	return arr;
}

function right()
{
	var index = Math.floor(Math.random()*(colors.length));
	return colors[index];
}



function changecolor(color)
{
	for(var i = 0; i<squares.length ;i++)
	{
		squares[i].style.background = colors[i];
	}
}


//RESET BUTTON CONCEPT
resetbutton.addEventListener("click",function(){
	if(resetbutton.textContent === "new colors")
	{
	colors = randomcolor(numsquare);
	rightcolor = right();
	colordisplay.textContent = rightcolor;
	changecolor(colors);
	}
	else
	{
	resetbutton.textContent = "new colors";
	colors = randomcolor(numsquare)
	rightcolor = right();
	colordisplay.textContent = rightcolor;
	changecolor(colors);
	p.textContent ="";
	header.style.backgroundColor = "steelblue";
	}	
});



