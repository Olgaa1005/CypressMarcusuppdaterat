//Ange HelloWorld som ett värde till div-output
document.getElementById("output").innerText = "Hello World"

let counter = 0;

function count() {
  counter++
  document.getElementById("counterOutput").innerText = counter
}

function generateGreetings(){
  //Hämta värden från input fält
  let name = document.getElementById("name").value

  //If sats, om name == "Medieinstitutet"
  if (name == "Medieinstitutet") {
    location.assign("secondPage.html")
  }
  let age = document.getElementById("age").value

  //Generera meddelandet
  let message = `${name} är ${age} år gammal`

  //Posta meddelande
  document.getElementById("nameOutput").innerText = message
}

//Lägg till Event listeners till buttons
document.getElementById("btnCount").addEventListener("click", count)
document.getElementById("btnName").addEventListener("click", generateGreetings)