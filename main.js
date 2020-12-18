	//Intilize variables
		var totalSwings = 0;
		var debug = true;
		var pickaxe_unlocked = false;
		var shovel_unlocked = true;
		var axe_unlocked = false;
		var hoe_unlocked = false;
		var sword_unlocked = false;
		
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
			var sword_leve = 0;
			
	
	// Will execute updateValues every 0.5 seconds 
	var updateTicker = window.setInterval(updatePage, 500);

function notSupported() {
	alert("This feature is not supported yet!");
	console.log("ERROR: This feature is not supported yet!");
}

function updatePage() {
	updateValues();
	updateButtons();
}

function updateValues() {
	
	document.getElementById('totalSwings').innerHTML = totalSwings;
		
	document.getElementById('dirt_count').innerHTML = dirt;
	document.getElementById('stone_count').innerHTML = stone;
	document.getElementById('coal_count').innerHTML = coal;
	document.getElementById('iron_ingot_count').innerHTML = iron_ingot;
	document.getElementById('gold_ingot_count').innerHTML = gold_ingot;
	document.getElementById('diamond_count').innerHTML = diamond;

	if(pickaxe_level == 0) {
		document.getElementById('pickaxe').innerHTML = 'Wood <img class="wooden_pickaxe" id="wooden_pickaxe" src="assets/img/item_icons/wooden_pickaxe.png" />';
	}
	if(pickaxe_level == 1) {
		document.getElementById('pickaxe').innerHTML = 'Stone <img class="stone_pickaxe" id="stone_pickaxe" src="assets/img/item_icons/stone_pickaxe.png" />';
	}
	if(pickaxe_level == 2) {
		document.getElementById('pickaxe').innerHTML = 'Iron <img class="iron_pickaxe" id="iron_pickaxe" src="assets/img/item_icons/iron_pickaxe.png" />';
	}
	if(pickaxe_level == 3) {
		document.getElementById('pickaxe').innerHTML = 'Gold <img class="golden_pickaxe" id="golden_pickaxe" src="assets/img/item_icons/golden_pickaxe.png" />';
	}
	if(pickaxe_level == 4) {
		document.getElementById('pickaxe').innerHTML = 'Diamond <img class="diamond_pickaxe" id="diamond_pickaxe" src="assets/img/item_icons/diamond_pickaxe.png" />';
	}
	if(shovel_level == 0) {
		document.getElementById('shovel').innerHTML = 'Wood <img class="wooden_pickaxe" id="wooden_pickaxe" src="assets/img/item_icons/wooden_shovel.png" />';
	}
	if(shovel_level == 1) {
		document.getElementById('shovel').innerHTML = 'Stone <img class="stone_pickaxe" id="stone_pickaxe" src="assets/img/item_icons/stone_shovel.png" />';
	}
	if(shovel_level == 2) {
		document.getElementById('shovel').innerHTML = 'Iron <img class="iron_pickaxe" id="iron_pickaxe" src="assets/img/item_icons/iron_shovel.png" />';
	}
	if(shovel_level == 3) {
		document.getElementById('shovel').innerHTML = 'Gold <img class="golden_pickaxe" id="golden_pickaxe" src="assets/img/item_icons/golden_shovel.png" />';
	}
	if(shovel_level == 4) {
		document.getElementById('shovel').innerHTML = 'Diamond <img class="diamond_pickaxe" id="diamond_pickaxe" src="assets/img/item_icons/diamond_shovel.png" />';
	}
}

function updateButtons() {
	document.getElementById('craft_pickaxe').innerHTML = "Craft Pickaxe";
	document.getElementById('swing_pickaxe').innerHTML = "Swing Pickaxe";
	
	if(pickaxe_unlocked == true) {
		document.getElementById('craft_pickaxe').style.display='none';
		document.getElementById('swing_pickaxe').style.display='block';
		document.getElementById('upgrade_pickaxe_enabled').style.display='block';
		document.getElementById('upgrade_pickaxe_disabled').style.display='none';
	}
	
	if(pickaxe_unlocked == false) {
		document.getElementById('swing_pickaxe').style.display='none';
		document.getElementById('upgrade_pickaxe_enabled').style.display='none';
		document.getElementById('upgrade_pickaxe_disabled').style.display='block';
	}
}

function trackTime() {
	let startDate = new Date();
	let elapsedTime = 0;

	const focus = function() {
		startDate = new Date();
	};

	const blur = function() {
		const endDate = new Date();
		const spentTime = endDate.getTime() - startDate.getTime();
		elapsedTime += spentTime;
	};

	const beforeunload = function() {
		const endDate = new Date();
		const spentTime = endDate.getTime() - startDate.getTime();
		elapsedTime += spentTime;

		// elapsedTime contains the time spent on page in milliseconds
	};

	window.addEventListener('focus', focus);
	window.addEventListener('blur', blur);
	window.addEventListener('beforeunload', beforeunload);
	
	if(debug == true) {
		console.log("startDate: " + startDate);
		console.log("elapsedTime: " + elapsedTime);
	}
}
function toolMultiplier(itemMultiply) {
	
	var theMultiplier = 1;
	
	switch(itemMultiply) {
		
		case 0:
			theMultiplier = 1;
			break;
			
		case 1:
			theMultiplier = 2;
			break;
			
		case 2:
			theMultiplier = 3;
			break;
		
		case 3:
			theMultiplier = 4;
			break;
		
		case 4:
			theMultiplier = 5;
			break;
		
	}
	
	newVal = itemMultiply * theMultiplier;
	
	if(debug == true) {
		console.log("Multiply:" + newVal);
	}
	
	return newVal;
}

function randomDrop(toolLevel) {
	var randItem = 0;
	
	//Drops 0 - 1 Items
	if(toolLevel == 1) {
		var min=0; 
		var max=1;  
		var random = Math.floor(Math.random() * (+max - +min)) + +min; 
		randItem = random;
	}
	
	//Drops 0 - 5 Items
	if(toolLevel == 2) {
		var min=0; 
		var max=5;  
		var random = Math.floor(Math.random() * (+max - +min)) + +min; 
		randItem = random;
	}
	
	//Drops 0 - 15 Items
	if(toolLevel == 3) {
		var min=0; 
		var max=15;  
		var random = Math.floor(Math.random() * (+max - +min)) + +min; 
		randItem = random;
	}
	
	//Drops 0 - 30 Items
	if(toolLevel == 3) {
		var min=0; 
		var max=30;  
		var random = Math.floor(Math.random() * (+max - +min)) + +min; 
		randItem = random;
	}
	
	//Drops 0 - 50 Items
	if(toolLevel == 4) {
		var min=0; 
		var max=50;  
		var random = Math.floor(Math.random() * (+max - +min)) + +min; 
		randItem = random;
	}
	
	return randItem;
}

function swingTool(toolType) {
	
	if(debug == true) {
		console.log("swingTool:" + toolType);
	}
	
	switch(toolType){
		
		case 'pickaxe': //Pickaxe
			
			//Level 0 = Wood
			if(pickaxe_level == 0) { 
				stone = stone + 1;
				if(debug == true) {
					console.log("stone=" + stone);
				}
			}
			
			//Level 1 = Stone
			if(pickaxe_level == 1) { 
				stone = stone + 1 * (toolMultiplier(pickaxe_level));
				coal = coal + 1;
				iron_ingot = iron_ingot + randomDrop(pickaxe_level);
				if(debug == true) {
					console.log("stone=" + stone);
					console.log("coal=" + coal);
					console.log("iron_ingot=" + iron_ingot);
				}
			}
			
			//Level 2 = Iron
			if(pickaxe_level == 2) {
				stone = stone + 2 * toolMultiplier(pickaxe_level);
				coal = coal + 2 * toolMultiplier(pickaxe_level);
				iron_ingot = iron_ingot + randomDrop(pickaxe_level);
				gold_ingot = gold_ingot + randomDrop(pickaxe_level);
				if(debug == true) {
					console.log("stone=" + stone);
					console.log("coal=" + coal);
					console.log("iron_ingot=" + iron_ingot);
					console.log("gold_ingot=" + gold_ingot);
				}
			}
			
			//Level 3 = Gold
			if(pickaxe_level == 3) {
				stone = stone + 3 * toolMultiplier(pickaxe_level);
				coal = coal + 3 * toolMultiplier(pickaxe_level);
				iron_ingot = iron_ingot + randomDrop(pickaxe_level * 3);
				gold_ingot = gold_ingot + randomDrop(pickaxe_level * 3);
				diamond = diamond + randomDrop(pickaxe_level);
				if(debug == true) {
					console.log("stone=" + stone);
					console.log("coal=" + coal);
					console.log("iron_ingot=" + iron_ingot);
					console.log("gold_ingot=" + gold_ingot);
					console.log("diamond=" + diamond);
				}
			}
			
			//Level 4 = Diamond
			if(pickaxe_level == 4) {
				stone = stone + pickaxe_level * toolMultiplier(pickaxe_level);
				coal = coal + 4 * toolMultiplier(pickaxe_level);
				iron_ingot = iron_ingot + randomDrop(pickaxe_level);
				gold_ingot = gold_ingot + randomDrop(pickaxe_level);
				diamond = diamond + randomDrop(pickaxe_level);
				if(debug == true) {
					console.log("stone=" + stone);
					console.log("coal=" + coal);
					console.log("iron_ingot=" + iron_ingot);
					console.log("gold_ingot=" + gold_ingot);
					console.log("diamond=" + diamond);
				}
			}
			
			totalSwings = totalSwings + 1;
			break;
		
		case 'shovel': //Shovel
			
			//Level 0 = Wood
			if(shovel_level == 0) { 
				dirt = dirt + 1;
				if(debug == true) {
					console.log("dirt=" + dirt);
				}
			}
			
			//Level 1 = Stone
			if(shovel_level == 1) {
				dirt = dirt + 1 * toolMultiplier(1);
				if(debug == true) {
					console.log("dirt=" + dirt);
				}
			}
			
			//Level 2 = Iron
			if(shovel_level == 2) {
				dirt = dirt + 2 * toolMultiplier(2);
				if(debug == true) {
					console.log("dirt=" + dirt);
				}
			}
			
			//Level 3 = Gold
			if(shovel_level == 3) {
				dirt = dirt + 3 * toolMultiplier(3);
				if(debug == true) {
					console.log("dirt=" + dirt);
				}
			}
			
			//Level 4 = Diamond
			if(shovel_level == 4) {
				dirt = dirt + 4 * toolMultiplier(4);
				if(debug == true) {
					console.log("dirt=" + dirt);
				}
			}
			
			totalSwings = totalSwings + 1;
			break;
	}
}

function craftTool(toolType) {
	
	if(debug == true) {
		console.log("craftTool:" + toolType);
	}

	switch(toolType) {
		
		case 'pickaxe': //Pickaxe
			if(dirt >= 5000) {
				dirt = dirt - 5000;
				pickaxe_unlocked = true;
				alert("Pickaxe Unlocked!");
			} else {
				var dirt_needed = 5000 - dirt;
				alert("Not enough dirt! You need " + dirt_needed + " more dirt!");
		}
	}
}


function upgradeTool(toolType) {
	
	if(debug == true) {
		console.log("upgradeTool:" + toolType);
	}
	
	
		if(toolType == 'pickaxe') {
		//Pickaxe
			//Upgrade to level 1 ( 0 -> 1)
			if(pickaxe_level <= 0) {
				if(dirt >= 1000) {
					dirt = dirt - 1000 * pickaxe_level;
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
			else if(pickaxe_level <= 1) {
				if(stone >= 1000 * pickaxe_level) {
					stone = stone - 1000 * pickaxe_level;
					pickaxe_level = pickaxe_level + 1;
				} else {
					var stone_needed = 1000 - stone;
					//alert("Not enough stone! You need " + stone_needed + " more stone!");
					if(debug == true) {
						console.log("Not enough stone! You need " + stone_needed + " more stone!");
					}
				}
			}
			
			//Upgrade to level 3 ( 2 -> 3)
			else if(pickaxe_level <= 2) {
				if(iron_ingot >= 1000 * pickaxe_level) {
					iron_ingot = iron_ingot - 1000 * pickaxe_level;
					pickaxe_level = pickaxe_level + 1;
				} else {
					var iron_needed = 1000 - iron_ingot;
					//alert("Not enough iron! You need " + iron_needed + " more iron!");
					if(debug == true) {
						console.log("Not enough iron! You need " + iron_needed + " more iron!");
					}
				}
			}
			
			//Upgrade to level 4 ( 3 -> 4)
			else if(pickaxe_level <= 3) {
				if(gold_ingot >= 1000 * pickaxe_level) {
					gold_ingot = gold_ingot - 1000 * pickaxe_level;
					pickaxe_level = pickaxe_level + 1;
				} else {
					var gold_needed = 1000 - gold_ingot;
					//alert("Not enough gold! You need " + gold_needed + " more gold!");
					if(debug == true) {
						console.log("Not enough gold! You need " + gold_needed + " more gold!");
					}
				}
			}
			
			//Upgrade to level 5 ( 4 -> 5)
			else if(pickaxe_level <= 4) {
				if(diamond >= 1000 * pickaxe_level) {
					diamond = diamond - 1000 * pickaxe_level;
					pickaxe_level = pickaxe_level + 1;
				} else {
					var diamond_needed = 1000 - diamond;
					//alert("Not enough diamond! You need " + diamond_needed + " more diamond!");
					if(debug == true) {
						console.log("Not enough diamond! You need " + diamond_needed + " more diamond!");
					}
				}
			}
			
			//Upgrade MAX
			 else if(pickaxe_level <=5) {
				 alert("Pickaxe is at MAX Level!");
				 if(debug == true) {
					 console.log("ERROR: Pickaxe is at MAX Level!");
				 }
			 }
		}
			
		if(toolType == 'shovel'){
		 //Shovel
			//Upgrade to level 1 ( 0 -> 1)
			if(shovel_level <= 0) {
				if(dirt >= 250) {
					dirt = dirt - 250;
					shovel_level = shovel_level + 1;
				} else {
					var dirt_needed = 250 - dirt;
					alert("Not enough dirt! You need " + dirt_needed + " more dirt!");
					if(debug == true) {
						console.log("Not enough dirt! You need " + dirt_needed + " more dirt!");
					}
					}
			}
			
			//Upgrade to level 2 ( 1 -> 2)
			else if(shovel_level <= 1) {
				if(stone >= 1000) {
					stone = stone - 1000;
					shovel_level = shovel_level + 1;
				} else {
					var stone_needed = 1000 - stone;
					alert("Not enough stone! You need " + stone_needed + " more stone!");
					if(debug == true) {
						console.log("Not enough stone! You need " + stone_needed + " more stone!");
					}
					}
			}
			
			//Upgrade to level 3 ( 2 -> 3)
			else if(shovel_level <= 2) {
				if(iron_ingot >= 3000) {
					iron_ingot = iron_ingot - 3000;
					shovel_level = shovel_level + 1;
				} else {
					var iron_needed = 3000 - iron_ingot;
					alert("Not enough iron! You need " + iron_needed + " more iron!");
					if(debug == true) {
						console.log("Not enough iron! You need " + iron_needed + " more iron!");
					}
					}
			}
			
			//Upgrade to level 4 ( 3 -> 4)
			else if(shovel_level <= 3) {
				if(gold_ingot >= 3000) {
					gold_ingot = gold_ingot - 3000;
					shovel_level = shovel_level + 1;
				} else {
					var gold_needed = 3000 - gold_ingot;
					alert("Not enough gold! You need " + gold_needed + " more gold!");
					if(debug == true) {
						console.log("Not enough gold! You need " + gold_needed + " more gold!");
					}
					}
			}
			
			//Upgrade to level 5 ( 4 -> 5)
			else if(shovel_level <= 4) {
				if(diamond >= 3000) {
					diamond = diamond - 3000;
					shovel_level = shovel_level + 1;
				} else {
					var diamond_needed = 3000 - diamond;
					alert("Not enough diamond! You need " + diamond_needed + " more diamond!");
					if(debug == true) {
						console.log("Not enough diamond! You need " + diamond_needed + " more diamond!");
					}
					}
			}
			
			//Upgrade MAX
			 else if(shovel_level <=5) {
				 alert("Shovel is at MAX Level!");
				 if(debug == true) {
					 console.log("ERROR: Shovel is at MAX Level!");
				 }
			 }
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
	notSupported();
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
	
	var jsonData = {
		materials: {
			dirt: dirt,
			stone: stone,
			coal: coal,
			iron_ingot: iron_ingot,
			gold_ingot: gold_ingot,
			diamond: diamond
		},
		tools: {
			pickaxe: {
				unlocked: pickaxe_unlocked,
				level: pickaxe_level
			},
			shovel: {
				unlocked: shovel_unlocked,
				level: shovel_level
			},
			axe: {
				unlocked: axe_unlocked,
				level: axe_level
			},
			hoe: {
				unlocked: hoe_unlocked,
				level: hoe_level
			},
			sword: {
				unlocked: sword_unlocked,
				level: sword_level
			}
		},
		swings: {
			pickaxe_swings: null,
			shovel_swings: null,
			axe_swings: null,
			hoe_swings: null,
			sword_swings: null,
			total_swings: totalSwings
		}
	};
	
	let dataStr = JSON.stringify(jsonData);
	let dataUrl = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
	
	let exportFileDefaultName = 'save-' + Date.now() + '.json';
	
	let linkElement = document.createElement('a');
	linkElement.setAttribute('href', dataUrl);
	linkElement.setAttribute('download', exportFileDefaultName);
	linkElement.click();
}

function importGame() {
	notSupported();
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
		var max=100000; 
		
		// Assign random variables for testing
		dirt = Math.floor(Math.random() * (+max - +min)) + +min; 
		stone = Math.floor(Math.random() * (+max - +min)) + +min; 
		coal = Math.floor(Math.random() * (+max - +min)) + +min; 
		iron_ingot = Math.floor(Math.random() * (+max - +min)) + +min; 
		gold_ingot = Math.floor(Math.random() * (+max - +min)) + +min; 
		diamond = Math.floor(Math.random() * (+max - +min)) + +min; 
}
	
function debugToolValues() {
	
		var min=0; 
		var max=5; 
				
		pickaxe_level = Math.floor(Math.random() * (+max - +min)) + +min; 
		shovel_level = Math.floor(Math.random() * (+max - +min)) + +min; 
		//axe_level = Math.floor(Math.random() * (+max - +min)) + +min; 
		//hoe_level = Math.floor(Math.random() * (+max - +min)) + +min; 
}