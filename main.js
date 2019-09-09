	//Intilize variables
	var dirt = 0;
	var stone = 0;
	var coal = 0;
	var iron_ingot = 0;
	var gold_ingot = 0;
	var diamond = 0;
	
	// Will execute updateValues every 0.5 seconds 
	var updateTicker = window.setInterval(updateValues, 500);

function updateValues() {
	document.getElementById('dirt_count').innerHTML = dirt;
	document.getElementById('stone_count').innerHTML = stone;
	document.getElementById('coal_count').innerHTML = coal;
	document.getElementById('iron_ingot_count').innerHTML = iron_ingot;
	document.getElementById('gold_ingot_count').innerHTML = gold_ingot;
	document.getElementById('diamond_count').innerHTML = diamond;
}

function saveGame() {
	// var dirt = myVariables().var('dirt');
	// var stone = myVariables().valueOf('stone');
	// var coal = myVariables().valueOf('coal');
	// var iron_ingot = myVariables().valueOf('iron_ingot');
	// var gold_ingot = myVariables().valueOf('gold_ingot');
	// var diamond = myVariables().valueOf('diamond');

	document.cookie = "test";
	document.cookie = "dirt=" + dirt;
		console.log("Cookie dirt saved with value of: " + dirt);
	document.cookie = "stone=" + stone;
		console.log("Cookie stone saved with value of: " + stone);
	document.cookie = "coal=" + coal;
		console.log("Cookie coal saved with value of: " + coal);
	document.cookie = "iron_ingot=" + iron_ingot;
		console.log("Cookie iron_ingot saved with value of: " + iron_ingot);
	document.cookie = "gold_ingot=" + gold_ingot;
		console.log("Cookie gold_ingot saved with value of: " + gold_ingot);
	document.cookie = "diamond=" + diamond;
		console.log("Cookie diamond saved with value of: " + diamond);
	
	alert("Game Saved!");
	console.log("Game Saved!");
}

function loadGame() {
	
}

function resetGame() {
	
}

function exportGame() {
	
}
