import { Customer } from '../interfaces/customer-protocol';

export class IndividualCustomer implements Customer {
  constructor(public name: string) {}
}
