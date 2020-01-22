function main() {
  var variavel = "Ola mundo!";
  writeln(variavel);
  for (var i = 0; i < 10; i++)
    writeln(i);
}

function app() {
  cls();
  main();
}

function write(text) {
  document.getElementById("codigo").innerHTML += text;
}

function writeln(text) {
  document.getElementById("codigo").innerHTML += text + "<br>";
}

function cls() {
  document.getElementById("codigo").innerHTML = "";
}