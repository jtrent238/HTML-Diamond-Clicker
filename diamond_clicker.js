function getCookie(dcookie){
		var diamonds = "fa454c5a-1d4c-4607-9d88-4f2309fb40b6=";
	}
function checkCookie() {
		var diamonds = getCookie("fa454c5a-1d4c-4607-9d88-4f2309fb40b6");
	}
function pageLoad() {
	var firstload = new boolean(true);
	if(firstload == true){
		var diamonds = 0;
		var miners = 0;
		var minercost = 25;
		var drillcost = 200;
		var drills = 0;
		var makercost = 1000;
		var makers = 0;
		var quarrycost = 10000;
		var quarrys = 0;
		var istimeron = new boolean(true);
		var millionAchivement = new boolean(false);
		var TenMinersAchivement = new boolean(false);
		var firstload = new boolean(false);
		}
	if(firstload == false){
		var diamonds = 0;
		var miners = 0;
		var minercost = 25;
		var drillcost = 200;
		var drills = 0;
		var makercost = 1000;
		var makers = 0;
		var quarrycost = 10000;
		var quarrys = 0;
		var istimeron = new boolean(true);
		var millionAchivement = new boolean(false);
		var TenMinersAchivement = new boolean(false);
		}
}
function saveGame() {
			//Save cookies to browser
	//document.cookie = "0602016d-7949-43fd-8986-f7b0e61562bb=" firstload(boolean);
	document.cookie = "fa454c5a-1d4c-4607-9d88-4f2309fb40b6=" + diamonds;
	document.cookie = "b96cfeaa-cb36-4b26-a157-6275f763220d=" + miners;
		document.cookie = "4a17dde7-e9bf-49b0-a8f9-352c16bc7e26=" + minercost;
	document.cookie = "8cbf5bf4-59ed-4eda-8f57-7f42e3ab3c9b=" + drills;
		document.cookie = "f38e432c-8322-4cde-9b43-a677841ecaf9=" + drillcost;
	document.cookie = "dbb2a3da-2202-4650-ac65-98c1c3c9df3b=" + makers;
		document.cookie = "8dd7b8d8-e913-4616-b507-32c50a3bc9cd=" + makercost;
	document.cookie = "cb3cf844-71d3-4626-b2d2-b362035f5efb=" + quarrys;
		document.cookie = "6d4aa6ba-caef-4d83-818c-3b091773da6f=" + quarrycost;
	//document.cookie = "80fb6b2a-5f37-4fdb-a9de-64d9691a8f09=" istimeron(boolean);
	//document.cookie = "9ff01744-d853-4905-9b29-3efbf4b4acf2=" = millionAchivement(boolean);
	//document.cookie = "2c20da4c-a9c6-46a2-9ed6-7233a4e484a0=" = TenMinersAchivement(boolean);
	document.getElementById("f9fadf18-1645-49f8-9898-d657aa96fb7c").innerHTML = lastSaved();
}

function loadGame() {
			//Load cookies from browser
	//boolean firstload = getCookie("0602016d-7949-43fd-8986-f7b0e61562bb");
	var diamonds = getCookie("fa454c5a-1d4c-4607-9d88-4f2309fb40b6");
	var miners = getCookie("b96cfeaa-cb36-4b26-a157-6275f763220d");
		var minercost = getCookie("4a17dde7-e9bf-49b0-a8f9-352c16bc7e26");
	var drills = getCookie("8cbf5bf4-59ed-4eda-8f57-7f42e3ab3c9b");
		var drillcost = getCookie("f38e432c-8322-4cde-9b43-a677841ecaf9");
	var makers = getCookie("dbb2a3da-2202-4650-ac65-98c1c3c9df3b");
		var makercost = getCookie("8dd7b8d8-e913-4616-b507-32c50a3bc9cd");
	var quarrys = getCookie("cb3cf844-71d3-4626-b2d2-b362035f5efb");
		var quarrycost = getCookie("6d4aa6ba-caef-4d83-818c-3b091773da6f");
	//boolean istimeron = getCookie("80fb6b2a-5f37-4fdb-a9de-64d9691a8f09");
	//boolean millionAchivement = getCookie("9ff01744-d853-4905-9b29-3efbf4b4acf2");
	//boolean TenMinersAchivement = getCookie("2c20da4c-a9c6-46a2-9ed6-7233a4e484a0");
	var lastSaved = getCookie("f9fadf18-1645-49f8-9898-d657aa96fb7c");
}

function diamondClick(diamonds){
	diamonds + 1;
	document.getElementById("diamonds_count").innerHTML = diamonds;
};