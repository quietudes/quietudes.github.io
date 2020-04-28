function changeInstruction() {

  let label = document.getElementById('label').innerText;
  let inhale = "inhale";
  if (label.valueOf() == inhale.valueOf()) {
    document.getElementById('label').innerText = "exhale";
  } else {
    document.getElementById('label').innerHTML = "inhale";
  }

  var t = setTimeout(changeInstruction, 4000);
}

changeInstruction();
