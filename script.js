function dis(val) {
  document.getElementById("myInput").value += val;
}

function solve() {
  let a = document.getElementById("myInput").value;
  document.getElementById("myInput").value = eval(a);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

this.addEventListener("keypress", (event) => {
  if (event.keyCode == 48) {
    dis("0");
  }
});

this.addEventListener("keypress", (event) => {
  if (event.keyCode == 49) {
    dis("1");
  }
});

this.addEventListener("keypress", (event) => {
  if (event.keyCode == 50) {
    dis("2");
  }
});

this.addEventListener("keypress", (event) => {
  if (event.keyCode == 51) {
    dis("3");
  }
});

this.addEventListener("keypress", (event) => {
  if (event.keyCode == 52) {
    dis("4");
  }
});

this.addEventListener("keypress", (event) => {
  if (event.keyCode == 53) {
    dis("5");
  }
});

this.addEventListener("keypress", (event) => {
  if (event.keyCode == 54) {
    dis("6");
  }
});

this.addEventListener("keypress", (event) => {
  if (event.keyCode == 55) {
    dis("7");
  }
});

this.addEventListener("keypress", (event) => {
  if (event.keyCode == 56) {
    dis("8");
  }
});

this.addEventListener("keypress", (event) => {
  if (event.keyCode == 57) {
    dis("9");
  }
});

/*this.addEventListener("keypress", (event) => {
  if (event.keyCode == 13) {
    dis("+");
  }
});

this.addEventListener("keypress", (event) => {
  if (event.keyCode == 13) {
    dis("-");
  }
});

this.addEventListener("keypress", (event) => {
  if (event.keyCode == 16) {
    dis("*");
  }
});

this.addEventListener("keypress", (event) => {
  if (event.keyCode == 13) {
    dis("/");
  }
});*/

this.addEventListener("keypress", (event) => {
  if (event.keyCode == 13) {
    solve();
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var inputEl = document.getElementById('custom');
var goodKey = '0123456789+-*/()% ';

var checkInputTel = function(e) {
  var key = (typeof e.which == "number") ? e.which : e.keyCode;
  var start = this.selectionStart,
    end = this.selectionEnd;

  var filtered = this.value.split('').filter(filterInput);
  this.value = filtered.join("");

  /* Prevents moving the pointer for a bad character */
  var move = (filterInput(String.fromCharCode(key)) || (key == 0 || key == 8)) ? 0 : 1;
  this.setSelectionRange(start - move, end - move);
}

var filterInput = function(val) {
  return (goodKey.indexOf(val) > -1);
}

inputEl.addEventListener('input', checkInputTel);
