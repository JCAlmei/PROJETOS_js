const titulo = document.getElementById("titulo");
console.log(titulo);
console.log(titulo.innerText);
titulo.innerText = "As três linguagens do Front End";

let elementoUl = document.querySelector("Ul");
console.log(elementoUl);
console.log(elementoUl.innerHTML);
elementoUl.innerHTML = `
<ul>
    <li>HTML - É a linguagem de marcação padrão para páginas da Web.</li>
    <li>CSS - É a linguagem que usamos para estilizar um documento HTML.</li>
    <li>JS - É a linguagem de programação mais popular do mundo.</li>
</ul>
`

const listaOrdenada = document.getElementById("listaOrdenada");
console.log(listaOrdenada);
console.log(listaOrdenada.innerHTML);
listaOrdenada.innerHTML = `
<ol>
  <li><a href="https://www.w3schools.com/html/default.asp">HTML</a></li>
  <li><a href="https://www.w3schools.com/css/default.asp">CSS</a></li>
  <li><a href="https://www.w3schools.com/js/default.asp">JS</a></li>
</ol>
`

document.addEventListener("DOMContentLoaded", function() {
    var linkElement = document.querySelector('a[href="https://prozeducacao.com.br"]');

    if (linkElement) {
        linkElement.textContent = "Projeto desenvolvido para o curso TalentoCloud da Escola Proz Educação";
    }
});