import { Customer } from '../interfaces/customer-protocol';
import { Vehicle } from '../interfaces/vehicle-protocol';

export class EnterpriseCar implements Vehicle {
  constructor(public name: string, private readonly customer: Customer) {}
  pickUp(): void {
    console.log(`${this.name} está buscando ${this.customer.name}`);
  }
}
