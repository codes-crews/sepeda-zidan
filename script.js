function goToMenu2() {
  window.location.assign("bookingform.html");
}

function process() {
  var package = document.getElementById("package").value;
  var num_of_people = document.getElementById("num-of-people").value;
  var totalPayment = package * num_of_people;
  document.getElementById("total").innerHTML = totalPayment;
}
