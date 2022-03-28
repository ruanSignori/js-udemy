export class Car {
  private readonly motor = new Motor();

  on(): void {
    this.motor.on();
  }

  acelerate(): void {
    this.motor.acelerate();
  }

  stop(): void {
    this.motor.stop();
  }

  off(): void {
    this.motor.off();
  }
}

export class Motor {
  on(): void {
    console.log('Motor está ligado');
  }

  acelerate(): void {
    console.log('Motor está acelerando');
  }

  stop(): void {
    console.log('Motor está parado...');
  }

  off(): void {
    console.log('Motor está desligado');
  }
}

const car = new Car();

car.acelerate();
