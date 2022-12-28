basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("ecstatic")
        basic.showIcon(IconNames.Heart)
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showString("furious")
        basic.showIcon(IconNames.Heart)
    }
    if (input.isGesture(Gesture.Shake)) {
        basic.showString("miserable")
        basic.showIcon(IconNames.Heart)
    }
    if (input.isGesture(Gesture.TiltRight)) {
        basic.showString("horrified")
        basic.showIcon(IconNames.Heart)
    }
    if (input.isGesture(Gesture.TiltLeft)) {
        basic.showString("astonish")
        basic.showIcon(IconNames.Heart)
    }
    if (input.isGesture(Gesture.LogoDown)) {
        basic.showString("satisfying")
        basic.showIcon(IconNames.Heart)
    }
    if (input.isGesture(Gesture.LogoUp)) {
        basic.showString("considerate")
        basic.showIcon(IconNames.Heart)
    }
    if (input.isGesture(Gesture.FreeFall)) {
        basic.showString(" isolated")
        basic.showIcon(IconNames.Heart)
    }
})
