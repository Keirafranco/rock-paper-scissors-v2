radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        if (Juego == 2) {
            basic.showIcon(IconNames.Happy)
        }
    } else if (Juego == 1) {
        basic.showIcon(IconNames.Asleep)
    } else if (false) {
        basic.showIcon(IconNames.Sad)
    }
})
input.onGesture(Gesture.Shake, function () {
    Juego = randint(1, 3)
    radio.sendNumber(Juego)
    if (Juego == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (Juego == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
    basic.pause(2000)
})
let Juego = 0
radio.setGroup(1)
