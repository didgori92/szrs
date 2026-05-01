// cw1

let car = {
    _model: "CLS",
    _brand: "Mercedes",
    _year: 2007,

    get displayCar() {
        if(this._year > 2000 && this._brand === "Mercedes") {
            return this._brand + " " + this._model + " " + this._year
        } else {
            return "we are not interested, this " + this._model + " is not for us"
        }
    }
}

console.log(car.displayCar)