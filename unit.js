class Unit {
    constructor(relativeUnitMultiplier, relativeUnit=null, relativeUnitOffset = 0) {
        this.baseUnit = relativeUnit?.baseUnit ?? this
        this.ratioToBaseUnit = relativeUnitMultiplier * (relativeUnit?.ratioToBaseUnit ?? 1)
        this.relativeUnitOffset = relativeUnitOffset
    }

    isCompatible(otherUnit) {
        return this.baseUnit === otherUnit.baseUnit
    }

    getAmountInDesiredUnits(amount, desiredUnit) {
        return (amount - this.relativeUnitOffset) * this.ratioToBaseUnit / desiredUnit.ratioToBaseUnit + desiredUnit.relativeUnitOffset
    }
}


const TEASPOON = new Unit(1)
const TABLESPOON = new Unit(3, TEASPOON)
const OUNCE = new Unit(2, TABLESPOON)
const CUP = new Unit(8, OUNCE)
const PINT = new Unit(2, CUP)
const QUART = new Unit(2, PINT)
const GALLON = new Unit(4, QUART)

const INCH = new Unit(1)
const FOOT = new Unit(12, INCH)
const YARD = new Unit(3, FOOT)
const FURLONG = new Unit(220, YARD)
const MILE = new Unit(8, FURLONG)

const CELSIUS = new Unit(1)
const FAHRENHEIT = new Unit(5/9, CELSIUS, 32)

module.exports = {TEASPOON, TABLESPOON, OUNCE, CUP, PINT, QUART, GALLON, INCH, FOOT, YARD, FURLONG, MILE, CELSIUS, FAHRENHEIT}





