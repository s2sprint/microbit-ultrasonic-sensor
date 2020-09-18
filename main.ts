basic.forever(function () {
    serial.writeLine("" + (grove.measureInCentimeters(DigitalPin.P0)))
    basic.pause(500)
})
