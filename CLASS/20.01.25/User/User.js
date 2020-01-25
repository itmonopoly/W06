class User {
	constructor(name, age) {
		this._name = name;
		this._age = age;
	}

	getName() {
		return this._name;
	}

	getData() {
		return [this._name, this._age];
	}
}

module.exports = User;