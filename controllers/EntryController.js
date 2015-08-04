angular.module('foodApp').controller('EntryController', EntryController);

function EntryController () {
	this.items = [];
	this.foodItem = "";
	this.quantity = "";
	this.submit = function () {
		this.items.push({foodItem: this.foodItem, quantity: this.quantity})
	}
}
