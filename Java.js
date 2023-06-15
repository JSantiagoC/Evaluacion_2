// Cambiar el contenido de un elemento HTML
document.getElementById("myElement").innerHTML = "Nuevo contenido";

// Cambiar el atributo de estilo de un elemento HTML
document.getElementById("myElement").style.color = "red";
document.getElementById("myElement").style.backgroundColor = "yellow";

// Obtener el valor de un campo de formulario
let inputValue = document.getElementById("myInput").value;

// Cambiar la clase CSS de un elemento HTML
document.getElementById("myElement").className = "newClass";

// Agregar un evento de clic a un elemento HTML
document.getElementById("myButton").addEventListener("click", function() {
  console.log("Botón clickeado");
});

// Crear un nuevo elemento HTML y agregarlo al documento
let newElement = document.createElement("div");
newElement.innerHTML = "Nuevo elemento";
document.getElementById("myContainer").appendChild(newElement);

// Obtener el tamaño de la ventana del navegador
let windowWidth = window.innerWidth || document.documentElement.clientWidth;
let windowHeight = window.innerHeight || document.documentElement.clientHeight;

// Redireccionar a una nueva URL
window.location.href = "https://www.example.com";

// Obtener la URL actual del documento
let currentURL = window.location.href;

// Imprimir el contenido de la página
window.print();



// Variables
let x = 5;
let y = x + 3;
document.getElementById("output").innerHTML += `<p>${y}</p>`;

// Condicionales
let age = 18;
if (age >= 18) {
  document.getElementById("output").innerHTML += "<p>Eres mayor de edad</p>";
} else {
  document.getElementById("output").innerHTML += "<p>Eres menor de edad</p>";
}

// Funciones
function sum(a, b) {
  return a + b;
}
let result = sum(3, 4);
document.getElementById("output").innerHTML += `<p>${result}</p>`;

// Arreglos
let numbers = [1, 2, 3, 4, 5];
document.getElementById("output").innerHTML += `<p>${numbers[2]}</p>`;
for (let i = 0; i < numbers.length; i++) {
  document.getElementById("output").innerHTML += `<p>${numbers[i]}</p>`;
}

// Objetos
let person = { name: "John", age: 30, city: "New York" };
document.getElementById("output").innerHTML += `<p>${person.name}</p>`;
person.age = 40;
person.job = "Developer";
document.getElementById("output").innerHTML += `<p>${JSON.stringify(person)}</p>`;

// Ciclos
for (let i = 1; i <= 5; i++) {
  document.getElementById("output").innerHTML += `<p>${i}</p>`;
}
let j = 1;
while (j <= 5) {
  document.getElementById("output").innerHTML += `<p>${j}</p>`;
  j++;
}

// Operadores
let a = 5;
let b = 3;
document.getElementById("output").innerHTML += `<p>${a + b}</p>`;
document.getElementById("output").innerHTML += `<p>${a > b}</p>`;

// Inicializar un repositorio Git
console.log("git init");

// Clonar un repositorio remoto
console.log("git clone <URL>");

// Agregar archivos al área de preparación
console.log("git add <file>");

// Confirmar los cambios en el repositorio
console.log("git commit -m 'Mensaje de confirmación'");

// Ver el estado actual del repositorio
console.log("git status");

// Ver el historial de confirmaciones
console.log("git log");

// Crear una nueva rama
console.log("git branch <branch-name>");

// Cambiar a una rama existente
console.log("git checkout <branch-name>");

// Fusionar una rama con la rama actual
console.log("git merge <branch-name>");

// Subir cambios al repositorio remoto
console.log("git push");

// Obtener cambios del repositorio remoto
console.log("git pull");

// Revertir cambios en el repositorio
console.log("git revert <commit-hash>");

// Crear una etiqueta para una confirmación específica
console.log("git tag <tag-name>");

// Ver diferencias entre confirmaciones
console.log("git diff <commit-hash1> <commit-hash2>");
