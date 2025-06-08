import Swal from "sweetalert2";
function successAlert(message) {
  Swal.fire({
    title: "success!",
    text:message,
    showConfirmButton: true,
    showCancelButton: false,
    confirmButtonText: "OK",
    icon: "success",
  });
}

function errorAlert(message) {
  console.log(message,'msss')
  Swal.fire({
    title: "Getting error",
    text:message,
    showConfirmButton: true,
    showCancelButton: false,
    confirmButtonText: "OK",
    icon: "error",
  });
}

export { successAlert ,errorAlert};
