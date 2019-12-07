const root = document.getElementById('root')
let str = ''

db.collection("users").orderBy("name", "asc").get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
    const data = doc.data()
    console.log(data);
       str += `
        <div class="row" id="cards">
          <div class="col-10 offset-1 col-md-10 shadow-lg p-3 mb-5 bg-white rounded">
            <div class="card text-center">
              <div class="card-header">
                Nombre Cliente: ${data.name}
              </div>
              <div class="card-body text-left">
                <p>Id cliente: ${data.idCliente}</p>
                <p>Fecha instalación: ${data.fecha}</p>
                <p>Próximo movimiento: Mantenimiento</p>
                <p>Fecha movimiento: en 3 meses </p>
              </div>
            </div>
          </div>
        </div>`
  root.innerHTML = str
  });
});