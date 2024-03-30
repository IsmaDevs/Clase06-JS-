//ARRAY de Contactos
//el cual contiene objetos que representan Contactos
const Contactos = [
  {
    Id: 1,
    NombreUsuario: "usuario example 1",
    Telefono: 3815222111,
    Direccion: "llarea 1230",
    Email: "example1@gmail.com",
  },
  {
    Id: 2,
    NombreUsuario: "usuario example 2",
    Telefono: 3815444555,
    Direccion: "salta 298",
    Email: "example2@gmail.com",
  },
  {
    Id: 3,
    NombreUsuario: "usuario example 3",
    Telefono: 3814123456,
    Direccion: "jujuy 1230",
    Email: "example3@gmail.com",
  },
  {
    Id: 4,
    NombreUsuario: "usuario example 4",
    Telefono: 3812888444,
    Direccion: "Los ralos",
    Email: "example4@gmail.com",
  },
  
];

//Funcion para mostrar los contactos en el TABLE
const mostrarContactos = () => {

    document.getElementById("tr").innerHTML =""

    for (const user of Contactos) {

        document.getElementById("tr").innerHTML += `
        <tr >
        <th scope="row">${user.Id}</th>
        <td>${user.NombreUsuario}</td>
        <td>${user.Telefono}</td>
        <td>${user.Direccion}</td>
        <td>${user.Email}</td>
        </tr>
        `;
      }
}


//Funcion para agregar un Usuario nuevo
const agregarUser = () =>{
    let nombre = document.getElementById("name").value
    let direccion = document.getElementById("dir").value
    let tel = document.getElementById("tel").value
    let mail = document.getElementById("mail").value


    let objVacio = {
      //aqui me faltaria agregar el ID
        NombreUsuario : nombre,
        Direccion : direccion,
        Telefono : tel,
        Email:mail
    }

    Contactos.push(objVacio)

    mostrarContactos();

}

document.getElementById("agregar").addEventListener("click",agregarUser)

//llamo mostrar contactos para ver la tabla bien se muestre mi pagina
mostrarContactos()
