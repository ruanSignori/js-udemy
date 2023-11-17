import { Customer } from '../interfaces/customer-protocol';

export class EnterpriseCustomer implements Customer {
  constructor(public name: string) {}
}
