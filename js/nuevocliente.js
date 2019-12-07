const guardar = document.getElementById('guardar')
const cancelar = document.getElementById('cancelar')


const name = document.getElementById('name')
const selectoption = document.getElementById('selectoption')
const idCliente = document.getElementById('id-cliente')
const calle = document.getElementById('calle')
const exterior = document.getElementById('exterior')
const interior = document.getElementById('interior')
const colonia = document.getElementById('colonia')
const cp = document.getElementById('cp')
const municipio = document.getElementById('municipio')
const delegacion = document.getElementById('delegacion')
const telefono = document.getElementById('telefono')
const celular = document.getElementById('celular')
const email = document.getElementById('email')
const mantenimiento = document.getElementById('mantenimiento')
const referencias = document.getElementById('referencias')



const sendForm = () => {
const cliente = {
  name: name.value,
  selectoption: selectoption.value,
  idCliente: idCliente.value,
  calle : calle.value,
  exterior: exterior.value,
  interior: interior.value,
  colonia: colonia.value,
  cp: cp.value,
  municipio: municipio.value,
  delegacion: delegacion.value,
  telefono: telefono.value,
  celular: celular.value,
  email: email.value,
  mantenimiento: mantenimiento.checked,
  referencias: referencias.value,
  fecha: new Date()
}
db.collection("users").add(cliente)
.then(function(docRef) {
  console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
  console.error("Error adding document: ", error);
});
}


guardar.addEventListener('click', sendForm)

cancelar.addEventListener('click', () => {
  const cancelado = confirm('¿Seguro que quiere cancelar la acción?')
  cancelado ? location.reload() : null
})