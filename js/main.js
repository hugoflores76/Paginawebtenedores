
function validarf(){
    var nick = document.getElementById("nick")
    var nombre = document.getElementById('nombre')
    var tel = document.getElementById('tel')
    var meil1= document.getElementById('email1')
    var meil2 = document.getElementById('email2')
    var afi = document.getElementById('afi')
      var pass = document.getElementById('pass')


        if (nombre.value.length > 50 || nombre.value.length < 2 ){
            nombre.focus();
            nombre.style.backgroundColor ="red"
        alert("nombre menor de 4 caracteres o mayor que 30")}else{     
         }

         if(!/[a-zA-Z0-9]/.test(pass.value)){
            alert("solo alfanumerico")
         }
       
         
}

function validarcorreo1(){
  var patron = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/   
 /*   var patron =/ [A-Z]+[@]+[a-z]{2,4}/ */
  valor = document.getElementById('email1')
  
    if (!patron.test(valor.value)){
        alert("Error: La dirección de correo " + valor.value + " es incorrecta.");
        valor.style.backgroundColor = "red"
        

}}
function validarcorreo2() {
    var patron = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    valor = document.getElementById('email1')
   
    if (!patron.test(valor.value)) {
        alert("Error: La dirección de correo " + valor.value + " es incorrecta.");
        return false
        valor.style.backgroundColor= "red"
    }
}

function validarñ(){
    var pass = document.getElementById('pass')
    
    if (/ñ/.test(pass.value)) {
        alert("no puedes incluir la letra ñ")
        pass.style.backgroundColor = "red"
        
    }else{
        pass.style.backgroundColor = "white"
    }
}
