function encriptar() {
    let texto = document.getElementById("texto").value;//en esta funcion se llama para obtener el texto del usuario
    let tituloMensaje = document.getElementById("titulo-mensaje");//para que aparezca el titulo que corresponde sii es if o else 
    let parrafo = document.getElementById("parrafo");//
    let muñeco = document.getElementById("muñeco");//esta es la imagen 
  
    let textoCifrado = texto //aqui cambiamos las letras para cifrarlas 
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    if (texto.length != 0){ //si la longitud de caracteres es diferente a 0 se va a poder cifrar
      document.getElementById("texto").value = textoCifrado;//al darle encriptar este va a guardar la variable y luego la va a cifrar 
      tituloMensaje.textContent = "Texto encriptado con éxito";//si es corrct va a salir texto encriptado con exito 
      parrafo.textContent = "";
      muñeco.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsm3-x-TMWtlFesF9w-LxKGkVo08NNTK_DEg&usqp=CAU";//esta imagen va a cambiar en el momento de darle al boton esta cambiara 
    } else {//en otro caso  
      muñeco.src = "./img/muñeco.png";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";//va a aparecer este mensaje si no hay letras para encriptrar
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      alert("Ooops!", "Debes ingresar un texto", "warning");//si se llega a dar en el boton encrptar sin nada que encriptar va a salir una alerta
    }
  }
  
  function desencriptar() {
    let texto = document.getElementById("texto").value;//en esta funcion se llama para obtener el texto del usuario
    let tituloMensaje = document.getElementById("titulo-mensaje");//para que aparezca el titulo que corresponde sii es if o else 
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
  
    let textoCifrado = texto //para desencriptar se cambian la palabras encriptadas a letras desencriptadas 
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    
      if (texto.length != 0) {//si la longitud de caracteres es diferente a 0 se va a poder cifrar
        document.getElementById("texto").value = textoCifrado;//coge el valor del texto y luego lo cifra
        tituloMensaje.textContent = "Texto desencriptado con éxito";//al momento de darle desencriptar va a aparcer un mensaje 
        parrafo.textContent = "";
        muñeco.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY0eNwoSN-AnemaNcp1SCi6SzkO-6DOy0mNw&usqp=CAU";//luego de desencriptar va a aparecer esta imagen 
      } else {//de lo contrario
        muñeco.src = "https://img.freepik.com/vector-gratis/astronauta-flotando-globos-cartoon-vector-icon-illustration-concepto-icono-tecnologia-ciencia-aislado-vector-premium-estilo-dibujos-animados-plana_138676-3461.jpg?w=2000";//va apareer esta imagen
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";//va a aparecer este mensaje si no hay letras para desencriptrar
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";//y vueve a aparecer este mensaje 
        swal("Ooops!", "Debes ingresar un texto", "warning");//sino hay ningun texto va a saltar esta alerta 
      }
  }
  Footer