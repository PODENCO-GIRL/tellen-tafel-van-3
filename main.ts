let getal = 0
basic.forever(function () {
    basic.showNumber(getal)
    if (getal < 12) {
        getal += Math.imul(1, 3)
    }
    if (getal > 12) {
        getal = 0
    }
    if (getal == 12) {
        basic.showNumber(12)
        basic.pause(100)
        getal = 0
    }
})
