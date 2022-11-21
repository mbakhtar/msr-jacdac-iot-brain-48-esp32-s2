modules.button2.onEvent(jacdac.ButtonEvent.Up, function () {
    modules.led1.setPixelColor(rotate - 1, 0x000000)
})
modules.button2.onEvent(jacdac.ButtonEvent.Down, function () {
    modules.led1.setPixelColor(rotate, 0xff0000)
    rotate += 1
})
let rotate = 0
rotate = 0
forever(function () {
    if (rotate > 8) {
        rotate = 0
        modules.led1.setPixelColor(rotate, 0x000000)
    }
})
