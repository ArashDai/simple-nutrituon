angular.module('foodApp').controller('EntryController', EntryController);

function EntryController () {
	this.items = [];
	this.foodItem = "";
	this.quantity = "";
	this.food = {};
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

	this.reset = function () {
		this.items = [];
		this.resultShow = false;
		this.inputShow = false;
	};
	
	this.submit = function () {
		for (key in this.foods[this.foodItem]) {
		this.food[key] = this.foods[this.foodItem][key];
	}
		this.food.calories = this.food.calories * this.quantity;
		this.food.totalFat = this.food.totalFat * this.quantity;
		this.food.transFat = this.food.transFat * this.quantity;
		this.food.satFat = this.food.satFat * this.quantity;
		this.food.carbs = this.food.carbs * this.quantity;
		this.food.fiber = this.food.fiber * this.quantity;
		this.food.sugar = this.food.sugar * this.quantity;
		this.food.protein = this.food.protein * this.quantity;
		this.food.sodium = this.food.sodium * this.quantity;
		this.items.unshift({foodItem: this.foodItem, foodNutrition: this.food, quantity: this.quantity});
		this.foodItem = '';
		this.quantity = '';
		console.log(this.food);
		console.log(this.foods.hamburger);
		this.food = {};
	}
	this.complete = function () {
		this.resultShow = true;
		this.inputShow = true;

	}
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
			calories: 0,
			totalFat: 0,
			transFat: 0,
			satFat: 0,
			carbs: 0,
			fiber: 0,
			sugar: 0,
			protein: 0,
			sodium: 0
		},
		"medium soda":{
			calories: 0,
			totalFat: 0,
			transFat: 0,
			satFat: 0,
			carbs: 0,
			fiber: 0,
			sugar: 0,
			protein: 0,
			sodium: 0
		},
		"large soda":{
			calories: 0,
			totalFat: 0,
			transFat: 0,
			satFat: 0,
			carbs: 0,
			fiber: 0,
			sugar: 0,
			protein: 0,
			sodium: 0
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
		}
	};

	this.RMI ={
	calories:2000,	
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
