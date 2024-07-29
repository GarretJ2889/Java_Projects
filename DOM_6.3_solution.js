//task 1
const a = document.getElementById('task1');
a.innerText='Now Changed';

//task 2
const b = document.getElementById('task2');
b.innerHTML= 
'<button type="submit">Submit</button>';

//task 3
const c = document.querySelector('body');
c.style.backgroundColor = '#232323';

//task 4
const d = document.querySelectorAll('.item');
for (let item of d) {
    item.style.border= '1px solid';
}

//task 5
document.getElementById('task5').href = 'https://www.springboard.com/';

//task 6
document.getElementById('task6').value = 'DOM Master';

//task 7
document.getElementById('task7').classList.add('new-class');

//task 8
document.getElementById('task8').appendChild(document.createElement('button'));

//task 9
document.getElementById('task9').remove();









