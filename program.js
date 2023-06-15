// Clientes
const botonAgregarUsuario = document.getElementById("agregarUsuario");
const tablaUsuario = document.getElementById("tablaUsuarios");

let users = [];

botonAgregarUsuario.addEventListener("click", agregarUsuario);

function agregarUsuario() {
  let documento = document.getElementById("documento").value;
  let nombres = document.getElementById("nombres").value;
  let apellidos = document.getElementById("apellidos").value;
  let placa = document.getElementById("placa").value;
  let tipo = document.getElementById("tipo").value;
  let correo = document.getElementById("correo").value;
  let telefono = document.getElementById("telefono").value;
  let puntosUsuario = 0;

  let user = {
    documento: documento,
    nombres: nombres,
    apellidos: apellidos,
    placa: placa,
    tipo: tipo,
    correo: correo,
    telefono: telefono,
    puntosUsuario: puntosUsuario
  };

  users.push(user);
  actualizarTablaUsuarios();
  formularioUsuarios.reset();
}

function actualizarTablaUsuarios() {
  tablaUsuario.innerHTML = "";

  let encabezado = document.createElement("tr");
  encabezado.innerHTML = `
    <th>N° Documento</th>
    <th>Nombres</th>
    <th>Apellidos</th>
    <th>Placa del Auto</th>
    <th>Tipo de Auto</th>
    <th>Correo Electronico</th>
    <th>Telèfono</th>
    <th><i class="ri-close-circle-line"></i></th>
    <th><i class="ri-pencil-fill"></i></th>
  `;
  tablaUsuario.appendChild(encabezado);

  for (let i = 0; i < users.length; i++) {
    let user = users[i];

    let row = document.createElement("tr");
    let documento = document.createElement("td");
    let nombres = document.createElement("td");
    let apellidos = document.createElement("td");
    let placa = document.createElement("td");
    let tipo = document.createElement("td");
    let correo = document.createElement("td");
    let telefono = document.createElement("td");
    let accionesEliminar = document.createElement("td");
    let accionesEditar = document.createElement("td");

    documento.textContent = user.documento;
    nombres.textContent = user.nombres;
    apellidos.textContent = user.apellidos;
    placa.textContent = user.placa;
    tipo.textContent = user.tipo;
    correo.textContent = user.correo;
    telefono.textContent = user.telefono;

    let botonEliminar = document.createElement("button");
    botonEliminar.innerHTML = '<i class="ri-close-circle-line"></i>';
    botonEliminar.classList.add("icono");
    botonEliminar.addEventListener("click", function () {
      eliminarUsuario(i);
    });
    accionesEliminar.appendChild(botonEliminar);

    let botonEditar = document.createElement("button");
    botonEditar.innerHTML = '<i class="ri-pencil-fill"></i>';
    botonEditar.classList.add("icono");
    botonEditar.addEventListener("click", function () {
      editarUsuario(i);
    });
    accionesEditar.appendChild(botonEditar);

    row.appendChild(documento);
    row.appendChild(nombres);
    row.appendChild(apellidos);
    row.appendChild(placa);
    row.appendChild(tipo);
    row.appendChild(correo);
    row.appendChild(telefono);
    row.appendChild(accionesEliminar);
    row.appendChild(accionesEditar);

    tablaUsuario.appendChild(row);
  }
}

function eliminarUsuario(i) {
  users.splice(i, 1);
  actualizarTablaUsuarios();
}

function editarUsuario(i) {
  let user = users[i];

  let documento = document.getElementById("documento").value;
  let nombres = document.getElementById("nombres").value;
  let apellidos = document.getElementById("apellidos").value;
  let placa = document.getElementById("placa").value;
  let tipo = document.getElementById("tipo").value;
  let correo = document.getElementById("correo").value;
  let telefono = document.getElementById("telefono").value;

  user.documento = documento;
  user.nombres = nombres;
  user.apellidos = apellidos;
  user.placa = placa;
  user.tipo = tipo;
  user.correo = correo;
  user.telefono = telefono;

  actualizarTablaUsuarios();
}

// Servicios 

const botonAgregarServicio = document.getElementById("agregarServicio");
const tablaServicios = document.getElementById("tablaServicios");

let servicios = [];

botonAgregarServicio.addEventListener("click", agregarServicio);

function agregarServicio() {
    let id = servicios.length + 1;
    let nombre = document.getElementById("nombre").value;
    let valor = document.getElementById("valor").value;
    let descripcion = document.getElementById("descripcion").value;
    let puntosServicio = document.getElementById("puntosServicio").value;

  let servicio = {
    id: id,
    nombre: nombre,
    valor: valor,
    descripcion: descripcion,
    puntosServicio: puntosServicio
  };

  servicios.push(servicio);
  actualizarTablaServicios();
  formularioServicios.reset();
}

function actualizarTablaServicios() {
  tablaServicios.innerHTML = "";

  let encabezado = document.createElement("tr");
  encabezado.innerHTML = `
  <th>N° Id</th>
  <th>Servicio</th>
  <th>Valor</th>
  <th>Descripciòn</th>
  <th>Puntos fidelización</th>
  <th><i class="ri-close-circle-line"></i></th>
  `;
  tablaServicios.appendChild(encabezado);

  for (let i = 0; i < servicios.length; i++) {
    let servicio = servicios[i];

    let row = document.createElement("tr");
    let id = document.createElement("td");
    let nombre = document.createElement("td");
    let valor = document.createElement("td");
    let descripcion = document.createElement("td");
    let puntosServicio = document.createElement("td");
    let accionesEliminar = document.createElement("td");

    id.textContent = servicio.id;
    nombre.textContent = servicio.nombre;
    valor.textContent = servicio.valor;
    descripcion.textContent = servicio.descripcion;
    puntosServicio.textContent = servicio.puntosServicio;

    let botonEliminar = document.createElement("button");
    botonEliminar.innerHTML = '<i class="ri-close-circle-line"></i>';
    botonEliminar.classList.add("icono");
    botonEliminar.addEventListener("click", function () {
      eliminarServicio(i);
    });
    accionesEliminar.appendChild(botonEliminar);


    row.appendChild(id);
    row.appendChild(nombre);
    row.appendChild(valor);
    row.appendChild(descripcion);
    row.appendChild(puntosServicio);
    row.appendChild(accionesEliminar);

    tablaServicios.appendChild(row);
  }
}

function eliminarServicio(i) {
  servicios.splice(i, 1);
  actualizarTablaServicios();
}

// Ventas
const formularioVentas = document.getElementById("formularioVentas");
const selectCliente = document.getElementById("selectCliente");
const selectServicio = document.getElementById("selectServicio");
const tablaCompra = document.getElementById("tablaCompra");

// Evento submit del formulario de ventas
formularioVentas.addEventListener("submit", function (event) {
  event.preventDefault(); // Evitar que se recargue la página

  // Obtener los valores seleccionados del cliente y el servicio
  const clienteSeleccionado = selectCliente.value;
  const servicioSeleccionado = selectServicio.value;

  // Realizar las operaciones necesarias con los datos de la venta
  const totalPagar = obtenerValorServicio(servicioSeleccionado);
  const puntosFidelizacion = obtenerPuntosServicio(servicioSeleccionado);

  // Crear una nueva fila en la tabla de compras
  const nuevaFila = document.createElement("tr");
  nuevaFila.innerHTML = `
    <td>${clienteSeleccionado}</td>
    <td>${servicioSeleccionado}</td>
    <td>${totalPagar}</td>
    <td>${puntosFidelizacion}</td>
    <td><i class="ri-close-circle-line"></i></td>
  `;

  // Agregar la nueva fila a la tabla de compras
  tablaCompra.appendChild(nuevaFila);

  // Reiniciar los valores seleccionados en los selectores
  selectCliente.value = "Selecciona el cliente";
  selectServicio.value = "Selecciona el servicio";
});

// Función para obtener el valor de un servicio
function obtenerValorServicio(servicio) {
  
    for (let i = 0; i < servicios; i++){
        valorServicio = servicios.valor
    }
  return valoresServicios[servicio];
}

