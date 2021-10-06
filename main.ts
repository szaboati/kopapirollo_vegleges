input.onGesture(Gesture.Shake, function () {
    szam = randint(1, 3)
    if (szam == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(200)
    } else {
        if (szam == 1) {
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                `)
            basic.pause(200)
        } else {
            basic.showLeds(`
                # # . . #
                # # . # .
                . . # . .
                # # . # .
                # # . . #
                `)
            basic.pause(200)
        }
    }
})
let szam = 0
basic.showIcon(IconNames.Heart)
basic.pause(1000)
basic.clearScreen()
