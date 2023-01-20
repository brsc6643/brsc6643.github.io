let element = document.getElementById("myBtn");
let btn = document.getElementById('btn2');



function myFunction() {
  document.getElementById("demo").innerHTML = "You won!";
}

function myFunction2() {
    document.getElementById("demo2").style.color = "red";
  }


btn.addEventListener('click', function onClick() {
  // 👇️ change background color
  document.body.style.float = right;

  // 👇️ optionally change text color
  // document.body.style.color = 'white';
});