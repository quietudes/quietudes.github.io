var count = document.getElementById('count');
var input = document.getElementById('input');


function wordCounter(text) {
  var text = input.value;
  var wordCount = text.match(/\S+/g).length;
  count.innerText = wordCount;

	var bar = document.getElementById("innerBar");
	if (wordCount <= 100) {
		bar.style.width = wordCount + '%';
	} else {
		bar.style.width = '100%';
	}

}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();

  h = checkTime(h);
  m = checkTime(m);
  document.getElementById('time').innerHTML = h + ":" + m;
  var t = setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // prepend 0 for single digit #s
  return i;
}

startTime();


input.addEventListener('keyup', function(e){
  wordCounter(e.target.value);
});
