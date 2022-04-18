function validateForm() {
  let x = document.forms["myForm"]["fName", "fMessage"].value;
  if (x == "") {
    alert("Lo sentimos! Para enviar el formulario debe llenar los campos nombre, asunto y mensaje. Vuelva a intentarlo.");
    return false;
  } else {
    alert("Su mensaje ha sido enviado exitosamente!");
    return true;
  }
}

