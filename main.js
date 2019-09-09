	//Intilize variables
		var totalSwings = 0;
		var debug = false;
		
		//Material Variables
			var dirt = 0;
			var stone = 0;
			var coal = 0;
			var iron_ingot = 0;
			var gold_ingot = 0;
			var diamond = 0;
			
		//tool variables
			var sword_level = 0;
			var pickaxe_level = 0;
			var shovel_level = 0;
			var axe_level = 0;
			var hoe_level = 0;
			
	// Will execute updateValues every 0.5 seconds 
	var updateTicker = window.setInterval(updateValues, 500);

function updateValues() {
	
	document.getElementById('totalSwings').innerHTML = totalSwings;
		
	document.getElementById('dirt_count').innerHTML = dirt;
	document.getElementById('stone_count').innerHTML = stone;
	document.getElementById('coal_count').innerHTML = coal;
	document.getElementById('iron_ingot_count').innerHTML = iron_ingot;
	document.getElementById('gold_ingot_count').innerHTML = gold_ingot;
	document.getElementById('diamond_count').innerHTML = diamond;

	if(pickaxe_level == 0) {
		document.getElementById('pickaxe').innerHTML = "Wood";
	}
	if(pickaxe_level == 1) {
		document.getElementById('pickaxe').innerHTML = "Stone";
	}
	if(pickaxe_level == 2) {
		document.getElementById('pickaxe').innerHTML = "Iron";
	}
	if(pickaxe_level == 3) {
		document.getElementById('pickaxe').innerHTML = "Gold";
	}
	if(pickaxe_level == 4) {
		document.getElementById('pickaxe').innerHTML = "Diamond";
	}
	if(shovel_level == 0) {
		document.getElementById('shovel').innerHTML = "Wood";
	}
	if(shovel_level == 1) {
		document.getElementById('shovel').innerHTML = "Stone";
	}
	if(shovel_level == 2) {
		document.getElementById('shovel').innerHTML = "Iron";
	}
	if(shovel_level == 3) {
		document.getElementById('shovel').innerHTML = "Gold";
	}
	if(shovel_level == 4) {
		document.getElementById('shovel').innerHTML = "Diamond";
	}
}

function swingTool(toolType) {
	
	if(debug == true) {
		console.log("swingTool:" + toolType);
	}
	
	switch(toolType){
		
		case 'pickaxe': //Pickaxe
			if(pickaxe_level <= 0) {
				stone = stone + 1;
				if(debug == true) {
					console.log("stone=" + stone);
				}
			}
			
			totalSwings = totalSwings + 1;
			break;
		
		case 'shovel': //Shovel
			if(shovel_level <= 0) {
				dirt = dirt + 1;
				if(debug == true) {
					console.log("dirt=" + dirt);
				}
			}
			
			totalSwings = totalSwings + 1;
			break;
	}
}

function upgradeTool(toolType) {
	
	if(debug == true) {
		console.log("upgradeTool:" + toolType);
	}
	
	switch(toolType){
		
		case 'pickaxe': //Pickaxe
			//Upgrade to level 1 ( 0 -> 1)
			if(pickaxe_level <= 0) {
				if(dirt >= 1000) {
					dirt = dirt - 1000;
					pickaxe_level = pickaxe_level + 1;
				} else {
					var dirt_needed = 1000 - dirt;
					//alert("Not enough dirt! You need " + dirt_needed + " more dirt!");
					if(debug == true) {
						console.log("Not enough dirt! You need " + dirt_needed + " more dirt!");
					}
					}
			}
			//Upgrade to level 2 ( 1 -> 2)
			if(pickaxe_level <= 1) {
				if(stone >= 1000) {
					stone = stone - 1000;
					pickaxe_level = pickaxe_level + 1;
				} else {
					var stone_needed = 1000 - stone;
					//alert("Not enough stone! You need " + stone_needed + " more stone!");
					if(debug == true) {
						console.log("Not enough stone! You need " + stone_needed + " more stone!");
					}
					}
			}
			break;
			
		case 'shovel': //Shovel
			//Upgrade to level 1 ( 0 -> 1)
			if(shovel_level <= 0) {
				if(dirt >= 1000) {
					dirt = dirt - 1000;
					shovel_level = shovel_level + 1;
				} else {
					var dirt_needed = 1000 - dirt;
					//alert("Not enough dirt! You need " + dirt_needed + " more dirt!");
					if(debug == true) {
						console.log("Not enough dirt! You need " + dirt_needed + " more dirt!");
					}
					}
			}
			//Upgrade to level 2 ( 1 -> 2)
			if(shovel_level <= 1) {
				if(stone >= 1000) {
					stone = stone - 1000;
					shovel_level = shovel_level + 1;
				} else {
					var stone_needed = 1000 - stone;
					//alert("Not enough stone! You need " + stone_needed + " more stone!");
					if(debug == true) {
						console.log("Not enough stone! You need " + stone_needed + " more stone!");
					}
					}
			}
			break;
	}
}

function saveGame() {

	document.cookie = "total_swings=" + totalSwings;
		if(debug == true) {
			console.log("Cookie total_swings saved with value of: " + totalSwings);
		}
	document.cookie = "dirt=" + dirt;
		if(debug == true) {
			console.log("Cookie dirt saved with value of: " + dirt);
		}
	document.cookie = "stone=" + stone;
		if(debug == true) {
			console.log("Cookie stone saved with value of: " + stone);
		}
	document.cookie = "coal=" + coal;
		if(debug == true) {
			console.log("Cookie coal saved with value of: " + coal);
		}
	document.cookie = "iron_ingot=" + iron_ingot;
		if(debug == true) {
			console.log("Cookie iron_ingot saved with value of: " + iron_ingot);
		}
	document.cookie = "gold_ingot=" + gold_ingot;
		if(debug == true) {
			console.log("Cookie gold_ingot saved with value of: " + gold_ingot);
		}
	document.cookie = "diamond=" + diamond;
		if(debug == true) {
			console.log("Cookie diamond saved with value of: " + diamond);
		}
		
	document.cookie = "pickaxe_level=" + pickaxe_level;
		if(debug == true) {
			console.log("Cookie pickaxe_level saved with value of: " + pickaxe_level);
		}
	document.cookie = "shovel_level=" + shovel_level;
		if(debug == true) {
			console.log("Cookie shovel_level saved with value of: " + shovel_level);
		}
	
	
	alert("Game Saved!");
		if(debug == true) {
			console.log("Game Saved!");
		}
}

function loadGame() {
	
}

function resetGame() {
	if(confirm("Are you sure you want to reset your game?")) {
		confirmReset();
	}
}

function confirmReset() {
	
	var resetMaterialValue = 0;
	var resetToolValue = 0;
	
	document.cookie = "total_swings=" + resetMaterialValue;
		if(debug == true) {
			console.log("Cookie total_swings saved with value of: " + resetMaterialValue);
		}
	document.cookie = "dirt=" + resetMaterialValue;
		if(debug == true) {
			console.log("Cookie dirt saved with value of: " + resetMaterialValue);
		}
	document.cookie = "stone=" + resetMaterialValue;
		if(debug == true) {
			console.log("Cookie stone saved with value of: " + resetMaterialValue);
		}
	document.cookie = "coal=" + resetMaterialValue;
		if(debug == true) {
			console.log("Cookie coal saved with value of: " + resetMaterialValue);
		}
	document.cookie = "iron_ingot=" + resetMaterialValue;
		if(debug == true) {
			console.log("Cookie iron_ingot saved with value of: " + resetMaterialValue);
		}
	document.cookie = "gold_ingot=" + resetMaterialValue;
		if(debug == true) {
			console.log("Cookie gold_ingot saved with value of: " + resetMaterialValue);
		}
	document.cookie = "diamond=" + resetMaterialValue;
		if(debug == true) {
			console.log("Cookie diamond saved with value of: " + resetMaterialValue);
		}
	
	document.cookie = "pickaxe_level=" + resetToolValue;
		if(debug == true) {
			console.log("Cookie pickaxe_level saved with value of: " + resetToolValue);
		}
	document.cookie = "shovel_level=" + resetToolValue;
		if(debug == true) {
			console.log("Cookie shovel_level saved with value of: " + resetToolValue);
		}
	
	totalSwings = 0;
	
	dirt = 0;
	stone = 0;
	coal = 0;
	iron_ingot = 0;
	gold_ingot = 0;
	diamond = 0;
	
	pickaxe_level = 0;
	shovel_level = 0;
	
	alert("Game Reset!");
	if(debug == true) {
		console.log("Game Reset!");
	}
}

function exportGame() {
	
}

function debugValues() {
	debugMaterialValues();
	debugToolValues();
	if(debug == true) {
		console.log("Debug values set!");
	}
}

function debugMaterialValues() {
		var min=0; 
		var max=1000;  
		var random = Math.floor(Math.random() * (+max - +min)) + +min; 
		// Assign random variables for testing
		dirt = random;
		stone = random;
		coal = random;
		iron_ingot = random;
		gold_ingot = random;
		diamond = random;
	}
	
function debugToolValues() {
		var min = 0;
		var max = 5;
		var random = Math.floor(Math.random() * (+max - +min)) + +min; 
		pickaxe_level = random;
		shovel_level = random;
	}
