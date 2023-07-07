// getElementsByTagName
const headings = document.getElementsByTagName('h1');
console.log(headings);
console.log(headings[0]);

const h2 = document.getElementsByTagName('h2')[0];
console.log(h2);
console.log(h2[0]);


// getElementsByClassName
const paragraphs = document.getElementsByClassName('para');
console.log(paragraphs);

// getElementById
const img = document.getElementById('img');
console.log(img);

// querySelector
const paragraphs2 = document.querySelector('.para');
console.log(paragraphs2);

// querySelectorAll
const allPara = document.querySelectorAll('.para');
console.log(allPara);

allPara.forEach(function(a) {
	console.log(a)
});

// getting text
const headingHello = document.querySelectorAll('h1')[0];
console.log(headingHello.innerHTML);

console.log(document.querySelector('h2').innerText);
console.log(document.querySelector('h2').textContent);

// setting text
headings[0].innerHTML = "Hello Suvaan";
paragraphs[0].innerText = "Changed the paragraph";
paragraphs[1].textContent = "Changed the paragraph again";
paragraphs[2].innerHTML = "<h1><em>Changed the paragraph again</em><h1>";

// buttons
const btn1 = document.querySelector('#btn1');
const btn2 = document.getElementById('btn2');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');

// event handling

// method 1
function changeColor () {
	headings[0].style.color = "rgb(255, 0, 0)";
	headings[0].style.backgroundColor = 'black';
}
btn1.addEventListener('click', changeColor);


// method 2
btn2.addEventListener('mouseover', function() {
	img.src="../images/lemon.jpg"
})

function changeFontSize () {
	allPara[0].style.fontSize = "5rem";
}

btn4.addEventListener('click', () => {
	allPara[1].classList.add('addClass');
})

btn5.addEventListener('click', () => {
	allPara[1].classList.remove('addClass');
})

btn6.addEventListener('click', () => {
	allPara[1].classList.toggle('addClass');
})