import Swal from "sweetalert2";
function successAlert(message) {
  Swal.fire({
    title: message,
    showConfirmButton: true,
    showCancelButton: false,
    confirmButtonText: "OK",
    icon: "success",
  });
}

function errorAlert(message) {
  Swal.fire({
    title: message,
    showConfirmButton: true,
    showCancelButton: false,
    confirmButtonText: "OK",
    icon: "error",
  });
}

export { successAlert ,errorAlert};
