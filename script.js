// FIFPRO
const vieww = document.querySelectorAll("input[name=view]");
const formation = document.querySelector(".formation");
const fifproVertical = document.querySelector(".fifpro-vertical");
const fifproHorizontal = document.querySelector(".fifpro-horizontal");

vieww.forEach(function (vi) {
  vi.addEventListener("click", function () {
    // console.log(vi);
    if (vi.value == "vertical") {
      formation.style.height = 1250;
      fifproVertical.style.display = "block";
      fifproHorizontal.style.display = "none";
      console.log(vi);
    } else {
      formation.style.height = 740;
      fifproHorizontal.style.display = "block";
      fifproVertical.style.display = "none";
      console.log(vi);
    }
  });
});

// Cards
const cardsThumb = document.querySelectorAll(".cards-thumb");
const jumbo = document.querySelectorAll(".show-player-card");
const field = document.querySelector(".player-field");

// cardsThumb.forEach(function(th){
//     th.addEventListener('click', function(t){
//         console.log(th, t);
//     });
// });

for (let i = 0; i < cardsThumb.length; i++) {
  cardsThumb[i].addEventListener("click", function (th) {
    // console.log(jumbo[i].children, jumbo[i].children.length);

    for (let k = 0; k < cardsThumb.length; k++) {
      jumbo[k].classList.remove("cards-active");
      for (let l = 0; l < jumbo[i].children.length; l++) {
        jumbo[k].children[l].classList.remove("cards-active-2");
      }
    }

    jumbo[i].classList.add("cards-active");

    field.scrollIntoView();

    for (let j = 0; j < jumbo[i].children.length; j++) {
      jumbo[i].children[j].classList.add("cards-active-2");
    }
  });
}

// Stats
const playerNam = document.querySelector(".p-nam");
const playerName = document.querySelectorAll(".p-name");
// const playerPDS = document.querySelectorAll('.p-p-d-s');
const statsNumber = [];

playerNam.addEventListener("click", function (pnam) {
  if (pnam.target.className == "p-name") {
    playerName.forEach(function (pname) {
      pname.className = "p-name";
    });

    pnam.target.classList.add("selected");

    let a = 0,
      b = 0,
      c = 0,
      d = 0,
      indeks = 0;

    for (let i = 0; i < playerName.length; i++) {
      if (playerName[i].classList.contains("selected")) {
        indeks = i;
      }
    }

    // console.log(playerPDS[indeks]);

    playerPDS.forEach(function (ppds) {
      ppds.className = "p-p-d-s";
    });

    playerPDS[indeks].classList.add("stats-active");

    // console.log(playerPDS[indeks].children.length);

    for (let i = 0; i < playerPDS[indeks].children.length; i++) {
      switch (i) {
        case 0:
          // console.log(playerPDS[indeks].children[i].children.length);
          for (let j = 0; j < playerPDS[indeks].children[i].children.length; j++) {
            switch (j) {
              case 0:
                // console.log(playerPDS[indeks].children[i].children[j].classList);
                playerPDS.forEach(function (e) {
                  e.children[i].children[j].className = "p-port";
                });

                playerPDS[indeks].children[i].children[j].classList.add(
                  "stats-active-2"
                );
                break;
              case 1:
                // console.log(playerPDS[indeks].children[i].children[j].classList);
                playerPDS.forEach(function (e) {
                  e.children[i].children[j].className = "p-desc";
                });

                playerPDS[indeks].children[i].children[j].classList.add(
                  "stats-active-3"
                );
                break;
            }
          }
          break;
        case 1:
          // console.log(playerPDS[indeks].children[i].classList);
          playerPDS.forEach(function (e) {
            e.children[i].className = "p-stats";
          });

          playerPDS[indeks].children[i].classList.add("stats-active-4");

          // console.log(playerPDS[indeks].children[i].children[1].children);

          a = 0;
          b = 0;
          c = 0;
          d = 0;
          for (a in playerData[indeks]) {
            if (c > 7) {
              temp[b] = playerData[indeks][a];
              b++;
            }
            c++;
          }

          // b = 0;
          // c = 0;
          // c = (b * indeks) + indeks;
          // d = c - b;
          // console.log(indeks, d, c);

          console.table(temp);

          // for(let i = 0; i < temp.length; i++){
          //     temp[i] = undefined;
          // }

          c = playerPDS[indeks].children[i].children[1].children.length;

          for (let j = 0; j < c; j++) {
            // console.log(indeks, temp[j]);
            let z = 1;

            function increment() {
              if (z >= temp[j]) {
                clearInterval(interval);
                return;
              }
              z++;
              playerPDS[indeks].children[i].children[1].children[j].innerHTML =
                z;
            }
            var interval = setInterval(increment, 1);
          }

          setTimeout(function () {
            a = playerPDS[indeks].children[i].children[1].children.length;

            for (let j = 0; j < a; j++) {
              // statsNumber[j] = playerPDS[indeks].children[i].children[1].children[j].innerHTML;
              statsNumber[j] = temp[j];

              playerPDS.forEach(function (e) {
                e.children[i].children[2].children[
                  j
                ].children[0].children[0].className = "kotak p-stats-gradient";
              });

              if (statsNumber[j] > 89) {
                playerPDS[indeks].children[i].children[2].children[
                  j
                ].children[0].children[0].classList.add("nine");
              } else if (statsNumber[j] > 79 && statsNumber[j] < 90) {
                playerPDS[indeks].children[i].children[2].children[
                  j
                ].children[0].children[0].classList.add("eight");
              } else if (statsNumber[j] > 69 && statsNumber[j] < 80) {
                playerPDS[indeks].children[i].children[2].children[
                  j
                ].children[0].children[0].classList.add("seven");
              } else if (statsNumber[j] > 59 && statsNumber[j] < 70) {
                playerPDS[indeks].children[i].children[2].children[
                  j
                ].children[0].children[0].classList.add("six");
              } else if (statsNumber[j] > 49 && statsNumber[j] < 60) {
                playerPDS[indeks].children[i].children[2].children[
                  j
                ].children[0].children[0].classList.add("five");
              } else if (statsNumber[j] > 39 && statsNumber[j] < 50) {
                playerPDS[indeks].children[i].children[2].children[
                  j
                ].children[0].children[0].classList.add("four");
              } else if (statsNumber[j] > 29 && statsNumber[j] < 40) {
                playerPDS[indeks].children[i].children[2].children[
                  j
                ].children[0].children[0].classList.add("three");
              } else if (statsNumber[j] > 19 && statsNumber[j] < 30) {
                playerPDS[indeks].children[i].children[2].children[
                  j
                ].children[0].children[0].classList.add("two");
              } else if (statsNumber[j] > 9 && statsNumber[j] < 20) {
                playerPDS[indeks].children[i].children[2].children[
                  j
                ].children[0].children[0].classList.add("one");
              }
            }
          }, 700);
          // console.log(statsNumber);

          // console.log(playerPDS[indeks].children[i].children[2].children[j].children[0].children[0].classList);
          break;
      }
    }
  }
});