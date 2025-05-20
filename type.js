  let screen = document.querySelector("input");
  let btns = document.querySelectorAll("button");

  for (let btn of btns) {
    btn.onclick = function () {
      let txt = btn.innerText;

      if (txt == "AC") screen.value = "";
      else if (txt == "DEL") screen.value = screen.value.slice(0, -1);
      else if (txt == "=") screen.value = eval(screen.value.replace("X", "*"));
      else screen.value += txt;
    };
  }
