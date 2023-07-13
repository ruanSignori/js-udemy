import { EnterpriseCustomer, IndividualCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('should have firtsName, lastName, cpf', () => {
    const sut = createIndividualCustomer('Ruan', 'Pedro', '000.000.000-13');
    expect(sut).toHaveProperty('firstName', 'Ruan');
    expect(sut).toHaveProperty('lastName', 'Pedro');
    expect(sut).toHaveProperty('cpf', '000.000.000-13');
  });

  it('should have methods to get full name and idn', () => {
    const sut = createIndividualCustomer('Ruan', 'Pedro', '000.000.000-13');
    expect(sut.getName()).toBe('Ruan Pedro');
    expect(sut.getIDN()).toBe('000.000.000-13');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have name and cpf', () => {
    const sut = createEnterpriseCustomer('Ruan S.P', '00.000.000/0001-32');
    expect(sut).toHaveProperty('name', 'Ruan S.P');
    expect(sut).toHaveProperty('cnpj', '00.000.000/0001-32');
  });

  it('should have methods to get name and idn', () => {
    const sut = createEnterpriseCustomer('Ruan S.P', '00.000.000/0001-32');
    expect(sut.getName()).toBe('Ruan S.P');
    expect(sut.getIDN()).toBe('00.000.000/0001-32');
  });
});
