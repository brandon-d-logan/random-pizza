var styles = document.createElement("style");
styles.innerHTML = ".this-one{border:5px solid red !important;margin-right:-10px;}";
document.body.appendChild(styles);
function randomNumber(min, max){ return Math.random() * (max - min) + min; }
function scrollTo(className, spaceAbove) {
    // Default spaceAbove to 200 pixels if not provided
    spaceAbove = spaceAbove || 200;
    var el = document.querySelector("." + className);
    if (el) { var scrollPosition = el.getBoundingClientRect().top - spaceAbove; window.scrollBy({ top: scrollPosition, left: 0, behavior: "smooth" }); }
}
function randomBtnClick(){
  //clear any selected items
  var selected = document.getElementsByClassName('this-one');if(selected){ for (var i = 0; i < selected.length; i++){ selected[i].classList.remove('this-one'); } }
  var pizzas = document.querySelectorAll('.pageContent .menu .menuGroup:nth-child(5) .itemSection li');
  //get random one out of the set
  var pizzaIndex = Math.ceil(randomNumber(1,pizzas.length));
  //add styling class and scroll to the chosen item
  pizzas[pizzaIndex].classList.add('this-one');
  scrollTo("this-one");
}
var randomBtn = document.createElement("button");
randomBtn.id = "random-pizza";
randomBtn.style = "z-index:99999 !important;position:fixed;top:100px;right:100px;padding:30px;text-align:center;background:red;color:#fff;border-radius:10px;font-size:16px;";
randomBtn.innerText = "Random Pizza!";
randomBtn.addEventListener("click", randomBtnClick);
document.body.prepend(randomBtn);
