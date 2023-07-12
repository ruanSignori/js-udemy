import { Product } from './product';

const createSut = (name: string, price: number) => {
  return new Product(name, price);
};

describe('Product', () => {
  // Após os testes, o jest limpará os seus mocks
  afterEach(() => jest.clearAllMocks());

  it('should return undefined', () => {
    const sut = createSut('Camiseta', 40.9);
    expect(sut).toHaveProperty('name', 'Camiseta');
    expect(sut).toBeCloseTo(40.9);
  });
});
