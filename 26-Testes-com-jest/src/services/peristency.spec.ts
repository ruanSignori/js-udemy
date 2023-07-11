import { Persistency } from './persistency';

describe('Persistency', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should return undefined', () => {
    //Sysrtem under test
    const sut = new Persistency();

    //Verificar se o retorno da saveOrder foi undefined
    expect(sut.saveOrder()).toBe(undefined);
  });
  it('should call console.log once', () => {
    const sut = new Persistency();

    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();

    //Verificar se o console.log foi executado somente uma vez
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });
  it('should call console.log with "Pedido salvo com sucesso"', () => {
    const sut = new Persistency();

    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();

    //Verificar se o conole.log tinha o valor "Pedido salvo com sucesso"
    expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso');
  });
});
