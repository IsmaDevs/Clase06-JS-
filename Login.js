//ARRAY de USUARIOS para poder buscar el ADMINISTRADOR
const Usuarios = [
    {
      Id: 1,
      NombreUsuario: "usuario 1",
      Contraseña: "123",
      fechaCreacion: "02/06/2023",
    },
    {
      Id: 2,
      NombreUsuario: "usuario 2",
      Contraseña: "1-2-3-abc",
      fechaCreacion: "02/09/2020",
    },
    {
      Id: 3,
      NombreUsuario: "usuario 3",
      Contraseña: "1-2-3-4c",
      fechaCreacion: "02/06/2019",
    },
    {
      Id: 4,
      NombreUsuario: "usuario 4",
      Contraseña: "1234",
      fechaCreacion: "02/10/2022",
    },
    {
      //este usuario es el ADMINISTRADOR
      Id: 5,
      NombreUsuario: "ADMIN",
      Contraseña: "12345",
      fechaCreacion: "02/10/2022",
    }
  ];

  //funcion para buscar el usuario ADMINISTRADOR
const buscarUser = () => {
  //aqui tomo los valores introducidos x el usuario
  let usuario = document.getElementById("usuario").value;
  let password = document.getElementById("password").value;

  //si esos valores estan vacios le aviso que debe rellenar los campos
  if (usuario === "" || password === "") {
    alert("debes rellenar los campos");
  } else {
    //aqui recorro mi Array de USUARIOS para buscar dentro 
    //si lo que introdujo el cliente coincide con alguno de mi array
    for (const user of Usuarios) {

      //Generalemente aqui habria que hacer una busqueda en la base de datos
      //nosotros lo haremos en nuestro array de Contactos
      if (usuario === user.NombreUsuario && password === user.Contraseña) {
        //Si coincide lo saludo y luego navego a mi pagina de CONTACTOS
        alert("bienvenido Admin");
        window.location.href = "./Agenda.html";
      } 
    }
    
  }
};
//x medio del boton ejecuto la funcion de buscar el usuario
document.getElementById("btn").addEventListener("click", buscarUser);
