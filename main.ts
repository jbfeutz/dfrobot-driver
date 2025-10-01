basic.forever(function () {
    motor.servo(motor.Servos.S1, pins.map(
    pins.analogReadPin(AnalogReadWritePin.P0),
    0,
    1023,
    0,
    180
    ))
    motor.servo(motor.Servos.S2, pins.map(
    pins.analogReadPin(AnalogReadWritePin.P1),
    0,
    1023,
    0,
    180
    ))
    motor.servo(motor.Servos.S3, pins.map(
    pins.analogReadPin(AnalogReadWritePin.P2),
    0,
    1023,
    0,
    180
    ))
    if (input.buttonIsPressed(Button.A)) {
        motor.servo(motor.Servos.S4, 28)
    } else {
        motor.servo(motor.Servos.S4, 84)
    }
})
