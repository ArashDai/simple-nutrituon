angular.module('foodApp').controller('EntryController', EntryController);

function EntryController () {
	this.items = [];
	this.foodItem = "";
	this.quantity = "";
	this.food = {};
	this.resultShow = false;
	this.inputShow = false;
	this.calPercent = 0;
	this.totalCount = {
		calories: 0,
		totalFat: 0,
		transFat: 0,
		satFat: 0,
		carbs: 0,
		fiber: 0,
		sugar: 0,
		protein: 0,
		sodium: 0
	};
	this.percents2000 ={
		calories: 0,
		totalFat: 0,
		transFat: 0,
		satFat: 0,
		carbs: 0,
		fiber: 0,
		sugar: 0,
		protein: 0,
		sodium: 0
	};
	this.percentScaled ={
		calories: 0,
		totalFat: 0,
		transFat: 0,
		satFat: 0,
		carbs: 0,
		fiber: 0,
		sugar: 0,
		protein: 0,
		sodium: 0
	};
	this.RMIScaled={
		calories: 0,
		totalFat: 0,
		transFat: 0,
		satFat: 0,
		carbs: 0,
		fiber: 0,
		sugar: 0,
		protein: 0,
		sodium: 0
	};

	this.reset = function () {
		this.items = [];
		this.resultShow = false;
		this.inputShow = false;
		this.totalCount = {
			calories: 0,
			totalFat: 0,
			transFat: 0,
			satFat: 0,
			carbs: 0,
			fiber: 0,
			sugar: 0,
			protein: 0,
			sodium: 0
		};
	};
	
	this.submit = function () {
		if (!this.quantity) {
			this.quantity = 1;
		}
		for (key in this.foods[this.foodItem]) {
		this.food[key] = this.foods[this.foodItem][key] * this.quantity;
	}
		this.items.unshift({foodItem: this.foodItem, foodNutrition: this.food, quantity: this.quantity});
		this.foodItem = '';
		this.quantity = '';
		this.food = {};
	};
	this.sum = function(){
		for(var i = 0;i<this.items.length;i++){
			for (key in this.RMI) {
				this.totalCount[key] += this.items[i].foodNutrition[key];
			}
		}

	for (key in this.percents2000) {
		this.percents2000[key] = Math.round(this.totalCount[key] / this.RMI[key] * 1000) /10;
	}

	this.calPercent = this.totalCount.calories / this.RMI.calories;

		for(key in this.RMIScaled){
			this.RMIScaled[key] = Math.round(this.RMI[key]*this.calPercent);
			this.percentScaled[key] = Math.round(this.totalCount[key]/this.RMIScaled[key] *1000) /10;
		}

	};

	this.complete = function () {
		this.sum();
		this.resultShow = true;
		this.inputShow = true;

	};

	
	this.foods ={
		hamburger:{
			calories:390 ,
			totalFat:19,
			transFat:0 ,
			satFat:5 ,
			carbs:39 ,
			fiber:3 ,
			sugar:10 ,
			protein:16 ,
			sodium:650
		},	
		cheeseburger:{
			calories:480 ,
			totalFat:27 ,
			transFat:0.5 ,
			satFat:10 ,
			carbs:39 ,
			fiber:3 ,
			sugar:10 ,
			protein:22 ,
			sodium:1000
		},

		"double double":{
			calories:670 ,
			totalFat:41 ,
			transFat:1 ,
			satFat:18 ,
			carbs:39,
			fiber:3 ,
			sugar:11 ,
			protein:37 ,
			sodium:1440
		},

		fries:{
			calories:395 ,
			totalFat:18 ,
			transFat:0 ,
			satFat:5 ,
			carbs:54 ,
			fiber:2 ,
			sugar:0 ,
			protein:7 ,
			sodium:245
		},

		"small soda":{
			calories: 190,
			totalFat: 0,
			transFat: 0,
			satFat: 0,
			carbs: 52,
			fiber: 0,
			sugar: 52,
			protein: 0,
			sodium: 60
		},
		"medium soda":{
			calories: 240,
			totalFat: 0,
			transFat: 0,
			satFat: 0,
			carbs: 65,
			fiber: 0,
			sugar: 65,
			protein: 0,
			sodium: 75
		},
		"large soda":{
			calories: 420,
			totalFat: 0,
			transFat: 0,
			satFat: 0,
			carbs: 117,
			fiber: 0,
			sugar: 117,
			protein: 0,
			sodium: 135
		},
		milkshake:{
			calories:590,
			totalFat:29 ,
			transFat:1 ,
			satFat:19 ,
			carbs:72 ,
			fiber:0 ,
			sugar:65 ,
			protein:10 ,
			sodium:320
		},
		"double double protein style":{
			calories: 520,
			totalFat: 39,
			transFat: 1,
			satFat: 17,
			carbs: 11,
			fiber: 3,
			sugar: 7,
			protein: 33,
			sodium: 1160
		},
		"animal style fries":{
			calories: 660,
			totalFat: 42,
			transFat: 1,
			satFat: 17,
			carbs: 54,
			fiber: 2,
			sugar: 0,
			protein: 19,
			sodium: 1105
		}
	};

	this.RMI ={
	calories:2070,	
	totalFat:70,
	transFat:0.01,
	satFat:24,
	carbs:310,
	fiber:28,
	sugar:90,
	protein:50,
	sodium:2300
	}
}


