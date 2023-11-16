import { Vehicle } from '../vehicle/vehicle';

export abstract class VehicleFactory {
  abstract getVehicle(vechicleName: string): Vehicle;

  pickUp(customerName: string, vehicleName: string): void {
    const car = this.getVehicle(vehicleName);

    car.pickUp(customerName);
  }
}
