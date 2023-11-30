alert("I am from body");
// div1 [0] .innerHTML = <h2> First div</h2> ;
setTimeout(() => {
  var div1 = document.getElementById("divFirst");
  div1.setAttribute("class", "color1");
  div1.textContent = "First div with blue color;";
}, 3000);
