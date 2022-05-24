const playerConstruct = [
	"no",
	"name",
	"nation",
	"height",
	"age",
	"position",
	"foot",
	"sAttack",
	"sDefence",
	"sBalance",
	"sStamina",
	"sSpeed",
	"sAccel",
	"sAggr",
	"sTech",
	"sDribbling",
	"sPassing",
	"sCurving",
	"sShotPow",
	"sShotAcc",
	"sJump",
	"sHeader",
];

const playerData = [
	{
		no: 1,
		name: "A. Becker",
		portrait: "becker",
		nation: "brazil",
		height: 191,
		age: 29,
		position: "GK",
		foot: "Right",
		sAttack: 51,
		sDefence: 54,
		sBalance: 73,
		sStamina: 60,
		sSpeed: 58,
		sAccel: 60,
		sAggr: 50,
		sDribbling: 50,
		sTech: 57,
		sPassing: 59,
		sCurving: 47,
		sShotPow: 72,
		sShotAcc: 40,
		sJump: 72,
		sHeader: 50,
	},
	{
		no: 2,
		name: "S. Ramos",
		portrait: "ramos",
		nation: "spain",
		height: 184,
		age: 35,
		position: "CB",
		foot: "Right",
		sAttack: 65,
		sDefence: 84,
		sBalance: 79,
		sStamina: 76,
		sSpeed: 71,
		sAccel: 70,
		sAggr: 86,
		sDribbling: 70,
		sTech: 73,
		sPassing: 72,
		sCurving: 72,
		sShotPow: 74,
		sShotAcc: 60,
		sJump: 85,
		sHeader: 90,
	},
	{
		no: 3,
		name: "V. van Dijk",
		portrait: "dijk",
		nation: "netherland",
		height: 193,
		age: 30,
		position: "CB",
		foot: "Right",
		sAttack: 58,
		sDefence: 83,
		sBalance: 87,
		sStamina: 69,
		sSpeed: 73,
		sAccel: 62,
		sAggr: 77,
		sDribbling: 61,
		sTech: 61,
		sPassing: 68,
		sCurving: 61,
		sShotPow: 74,
		sShotAcc: 49,
		sJump: 81,
		sHeader: 80,
	},
	{
		no: 4,
		name: "A. Davies",
		portrait: "davies",
		nation: "canada",
		height: 185,
		age: 21,
		position: "SB",
		foot: "Left",
		sAttack: 67,
		sDefence: 68,
		sBalance: 70,
		sStamina: 80,
		sSpeed: 88,
		sAccel: 88,
		sAggr: 70,
		sDribbling: 79,
		sTech: 75,
		sPassing: 68,
		sCurving: 74,
		sShotPow: 73,
		sShotAcc: 63,
		sJump: 75,
		sHeader: 61,
	},
	{
		no: 5,
		name: "T. A-Arnold",
		portrait: "arnold",
		nation: "england",
		height: 175,
		age: 23,
		position: "SB",
		foot: "Right",
		sAttack: 71,
		sDefence: 71,
		sBalance: 63,
		sStamina: 83,
		sSpeed: 79,
		sAccel: 77,
		sAggr: 72,
		sDribbling: 72,
		sTech: 73,
		sPassing: 85,
		sCurving: 90,
		sShotPow: 82,
		sShotAcc: 58,
		sJump: 76,
		sHeader: 63,
	},
	{
		no: 6,
		name: "J. Kimmich",
		portrait: "kimmich",
		nation: "german",
		height: 177,
		age: 26,
		position: "DH",
		foot: "Right",
		sAttack: 73,
		sDefence: 78,
		sBalance: 72,
		sStamina: 86,
		sSpeed: 73,
		sAccel: 81,
		sAggr: 82,
		sDribbling: 75,
		sTech: 81,
		sPassing: 82,
		sCurving: 80,
		sShotPow: 77,
		sShotAcc: 70,
		sJump: 81,
		sHeader: 70,
	},
	{
		no: 7,
		name: "K. de Bruyne",
		portrait: "bruyne",
		nation: "belgium",
		height: 181,
		age: 30,
		position: "OH",
		foot: "Right",
		sAttack: 81,
		sDefence: 60,
		sBalance: 69,
		sStamina: 82,
		sSpeed: 75,
		sAccel: 71,
		sAggr: 61,
		sDribbling: 78,
		sTech: 80,
		sPassing: 84,
		sCurving: 84,
		sShotPow: 87,
		sShotAcc: 75,
		sJump: 54,
		sHeader: 55,
	},
	{
		no: 8,
		name: "T. Alcantara",
		portrait: "alcantara",
		nation: "spain",
		height: 174,
		age: 30,
		position: "OH",
		foot: "Right",
		sAttack: 70,
		sDefence: 67,
		sBalance: 60,
		sStamina: 79,
		sSpeed: 62,
		sAccel: 68,
		sAggr: 77,
		sDribbling: 80,
		sTech: 85,
		sPassing: 81,
		sCurving: 81,
		sShotPow: 72,
		sShotAcc: 68,
		sJump: 72,
		sHeader: 59,
	},
	{
		no: 9,
		name: "C. Ronaldo",
		portrait: "ronaldo",
		nation: "portugal",
		height: 187,
		age: 37,
		position: "CF",
		foot: "Right",
		sAttack: 83,
		sDefence: 63,
		sBalance: 78,
		sStamina: 79,
		sSpeed: 78,
		sAccel: 77,
		sAggr: 56,
		sDribbling: 83,
		sTech: 80,
		sPassing: 76,
		sCurving: 77,
		sShotPow: 83,
		sShotAcc: 81,
		sJump: 87,
		sHeader: 86,
	},
	{
		no: 10,
		name: "R. Lewandowski",
		portrait: "lewandowski",
		nation: "poland",
		height: 185,
		age: 33,
		position: "CF",
		foot: "Right",
		sAttack: 87,
		sDefence: 63,
		sBalance: 77,
		sStamina: 74,
		sSpeed: 77,
		sAccel: 71,
		sAggr: 57,
		sDribbling: 77,
		sTech: 77,
		sPassing: 71,
		sCurving: 70,
		sShotPow: 83,
		sShotAcc: 90,
		sJump: 81,
		sHeader: 82,
	},
	{
		no: 11,
		name: "L. Messi",
		portrait: "messi",
		nation: "argentina",
		height: 170,
		age: 34,
		position: "WG",
		foot: "Left",
		sAttack: 84,
		sDefence: 53,
		sBalance: 60,
		sStamina: 71,
		sSpeed: 73,
		sAccel: 81,
		sAggr: 54,
		sDribbling: 89,
		sTech: 90,
		sPassing: 85,
		sCurving: 87,
		sShotPow: 75,
		sShotAcc: 89,
		sJump: 55,
		sHeader: 60,
	},
];

const pPos = document.querySelector(".p-pos");
const pNum = document.querySelector(".p-num");
const pNam = document.querySelector(".p-nam");
const playerPDS = document.querySelectorAll(".p-p-d-s");
const stats = document.querySelector(".stats");

let pPosition = [],
	tPosition = [],
	pNumber = [],
	tNumber = [],
	pName = [],
	tName = [],
	pPortrait = [],
	pDescRight = [],
	tDescRight = [],
	pStats = [],
	tStats = [],
	temp = [],
	temp2 = [];

for (let i = 0; i < playerData.length; i++) {
	let a = "",
		b = "",
		c = 0,
		d = 0;

	// Position
	if (playerData[i]["position"] == "GK") {
		pPosition[i] = document.createElement("div");
		a = playerData[i]["position"];
		tPosition[i] = document.createTextNode(a);
		pPosition[i].appendChild(tPosition[i]);
		pPosition[i].className = "p-position";
		pPosition[i].classList.add(
			"position-" + playerData[i]["position"].toLowerCase()
		);
		pPos.appendChild(pPosition[i]);
	} else if (
		playerData[i]["position"] == "CB" ||
		playerData[i]["position"] == "SB"
	) {
		pPosition[i] = document.createElement("div");
		a = playerData[i]["position"];
		tPosition[i] = document.createTextNode(a);
		pPosition[i].appendChild(tPosition[i]);
		pPosition[i].className = "p-position";
		pPosition[i].classList.add("position-deff");
		pPos.appendChild(pPosition[i]);
	} else if (
		playerData[i]["position"] == "DH" ||
		playerData[i]["position"] == "OH"
	) {
		pPosition[i] = document.createElement("div");
		a = playerData[i]["position"];

		tPosition[i] = document.createTextNode(a);
		pPosition[i].appendChild(tPosition[i]);
		pPosition[i].className = "p-position";
		pPosition[i].classList.add("position-mid");
		pPos.appendChild(pPosition[i]);
	} else if (
		playerData[i]["position"] == "CF" ||
		playerData[i]["position"] == "WG"
	) {
		pPosition[i] = document.createElement("div");
		a = playerData[i]["position"];
		tPosition[i] = document.createTextNode(a);
		pPosition[i].appendChild(tPosition[i]);
		pPosition[i].className = "p-position";
		pPosition[i].classList.add("position-forward");
		pPos.appendChild(pPosition[i]);
	}

	// Number
	pNumber[i] = document.createElement("div");
	tNumber[i] = document.createTextNode(i + 1);
	pNumber[i].appendChild(tNumber[i]);
	pNumber[i].className = "p-number";
	pNum.appendChild(pNumber[i]);

	// Name
	pName[i] = document.createElement("div");
	tName[i] = document.createTextNode(playerData[i]["name"]);
	pName[i].appendChild(tName[i]);
	pName[i].className = "p-name";
	pNam.appendChild(pName[i]);

	// Portrait
	pPortrait[i] = document.createElement("img");
	pPortrait[i].setAttribute(
		"src",
		"img/stats/" + playerData[i]["portrait"] + ".png"
	);
	pPortrait[i].setAttribute("alt", "" + playerData[i]["portrait"] + "");
	pPortrait[i].className = "p-img";

	playerPDS[i].children[0].children[0].appendChild(pPortrait[i]);

	// Desc
	// p-desc-right
	// indeks = 3, length 5
	// span class p
	// ganjil dsg, genap dg
	// img char 0,3
	// img setAttribute src & alt

	// desc-right
	for (var j = 0; j < 5; j++) {
		switch (j) {
			case 0:
				a = playerData[i]["nation"];
				b = a.substring(0, 3);
				pDescRight[j] = document.createElement("span");
				tDescRight[j] = document.createTextNode(b.toUpperCase());
				pDescRight[j].appendChild(tDescRight[j]);
				pDescRight[j].className = "p";
				pDescRight[j].classList.add("dg");
				playerPDS[i].children[0].children[1].children[1].appendChild(
					pDescRight[j]
				);
				break;
			case 1:
				pDescRight[j] = document.createElement("span");
				tDescRight[j] = document.createTextNode(
					playerData[i]["height"] + " cm"
				);
				pDescRight[j].appendChild(tDescRight[j]);
				pDescRight[j].className = "p";
				pDescRight[j].classList.add("dsg");
				playerPDS[i].children[0].children[1].children[1].appendChild(
					pDescRight[j]
				);
				break;
			case 2:
				pDescRight[j] = document.createElement("span");
				tDescRight[j] = document.createTextNode(playerData[i]["age"]);
				pDescRight[j].appendChild(tDescRight[j]);
				pDescRight[j].className = "p";
				pDescRight[j].classList.add("dg");
				playerPDS[i].children[0].children[1].children[1].appendChild(
					pDescRight[j]
				);
				break;
			case 3:
				pDescRight[j] = document.createElement("span");
				tDescRight[j] = document.createTextNode(playerData[i]["position"]);
				pDescRight[j].appendChild(tDescRight[j]);
				pDescRight[j].className = "p";
				pDescRight[j].classList.add("dsg");
				playerPDS[i].children[0].children[1].children[1].appendChild(
					pDescRight[j]
				);
				break;
			case 4:
				pDescRight[j] = document.createElement("span");
				tDescRight[j] = document.createTextNode(
					playerData[i]["foot"] + " Foot"
				);
				pDescRight[j].appendChild(tDescRight[j]);
				pDescRight[j].className = "p";
				pDescRight[j].classList.add("dg");
				playerPDS[i].children[0].children[1].children[1].appendChild(
					pDescRight[j]
				);
				break;
		}
	}

	// Nation
	pDescRight[j] = document.createElement("img");
	pDescRight[j].setAttribute(
		"src",
		"img/country/" + playerData[i]["nation"] + ".png"
	);
	pDescRight[j].setAttribute("alt", "" + playerData[i]["nation"] + "");
	playerPDS[i].children[0].children[1].children[1].children[0].appendChild(
		pDescRight[j]
	);

	// Stats Number
	b = 0;
	c = 0;
	for (a in playerData[i]) {
		if (b > 7) {
			pStats[i] = document.createElement("span");
			// tStats[i] = document.createTextNode(playerData[i][a]);
			tStats[i] = document.createTextNode(0);
			pStats[i].appendChild(tStats[i]);
			pStats[i].className = "p";
			if (b % 2 == 1) {
				pStats[i].classList.add("dsg");
			} else {
				pStats[i].classList.add("dg");
			}
			playerPDS[i].children[1].children[1].appendChild(pStats[i]);

			// console.log(a + ': '+playerData[i][a]);
			// console.log(b-8);
			// console.log(i, c, playerData[i][a]);
		}
		b++;
	}

	// console.table(temp2);

	c = 0;
	// for(let j = 0; j < arr.length; j++){
	//     let i = 1;
	//         function increment() {
	//             if(i >= arr[j]){
	//                 clearInterval( interval );
	//                 return;
	//             }
	//             i++;
	//             stats[j].innerHTML = i;
	//         }
	//     var interval = setInterval(increment, 1);
	// }

	// Stats Number Increase
	// console.table(temp);

	// for(let j = 0; j < playerPDS[i].children[1].children[1].children.length; j++){
	// let z = 1;
	//     function increment() {
	//         if(z >= temp[j]){
	//             clearInterval(interval);
	//             return;
	//         }
	//             z++;
	//             playerPDS[i].children[1].children[1].children[j].innerHTML = z;
	//     }
	// var interval = setInterval(increment, 1);
	// }
	// z = 0;
}
