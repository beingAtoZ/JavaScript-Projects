selected = "0";
c = 0;
function fun(i) {
  c++;
  arr = document.getElementsByClassName("all");
  if (selected == 0) {
    arr[i].innerText = "X";
    selected = "X";
  } else {
    arr[i].innerText = "0";
    selected = "0";
  }
  arr[i].disabled = "true";

  if (
    (arr[0].innerText == "X" &&
      arr[1].innerText == "X" &&
      arr[2].innerText == "X") ||
    (arr[3].innerText == "X" &&
      arr[4].innerText == "X" &&
      arr[5].innerText == "X") ||
    (arr[6].innerText == "X" &&
      arr[7].innerText == "X" &&
      arr[8].innerText == "X") ||
    (arr[0].innerText == "X" &&
      arr[3].innerText == "X" &&
      arr[6].innerText == "X") ||
    (arr[1].innerText == "X" &&
      arr[4].innerText == "X" &&
      arr[7].innerText == "X") ||
    (arr[2].innerText == "X" &&
      arr[5].innerText == "X" &&
      arr[8].innerText == "X") ||
    (arr[0].innerText == "X" &&
      arr[4].innerText == "X" &&
      arr[8].innerText == "X") ||
    (arr[2].innerText == "X" &&
      arr[4].innerText == "X" &&
      arr[6].innerText == "X")
  ) {
    alert("player2  is the loser!");
  } else if (
    (arr[0].innerText == "0" &&
      arr[1].innerText == "0" &&
      arr[2].innerText == "0") ||
    (arr[3].innerText == "0" &&
      arr[4].innerText == "0" &&
      arr[5].innerText == "0") ||
    (arr[6].innerText == "0" &&
      arr[7].innerText == "0" &&
      arr[8].innerText == "0") ||
    (arr[0].innerText == "0" &&
      arr[3].innerText == "0" &&
      arr[6].innerText == "0") ||
    (arr[1].innerText == "0" &&
      arr[4].innerText == "0" &&
      arr[7].innerText == "0") ||
    (arr[2].innerText == "0" &&
      arr[5].innerText == "0" &&
      arr[8].innerText == "0") ||
    (arr[0].innerText == "0" &&
      arr[4].innerText == "0" &&
      arr[8].innerText == "0") ||
    (arr[2].innerText == "0" &&
      arr[4].innerText == "0" &&
      arr[6].innerText == "0")
  ) {
    alert("player1 is the loser!");
  } else if (c == 9) {
    alert("Both players are losers!");
  }
}
function resetit() {
  for (i = 0; i < 9; i++) {
    arr[i].innerText = "";
    arr[i].disabled = "";
  }
  selected = "0";
  c = 0;
}
