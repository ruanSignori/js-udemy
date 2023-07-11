import { Messaging } from './messaging';

const createSut = () => {
  return new Messaging();
};

describe('Messaging', () => {
  // Após os testes, o jest limpará os seus mocks
  afterEach(() => jest.clearAllMocks());
  it('should return undefined', () => {
    const sut = createSut();
    expect(sut.sendMessage('Teste')).toBeUndefined();
  });

  it('should call console.log once', () => {
    const sut = createSut();

    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('teste');
    //Verificar se o console.log foi executado somente uma vez
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });
  it('should call console.log with "Mensagem enviada:" and msg', () => {
    const sut = createSut();

    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('teste');

    //Verificar se o console.log tinha o valor "Mensagem enviada:"
    expect(consoleSpy).toHaveBeenCalledWith('Mensagem enviada:', 'teste');
  });
});
