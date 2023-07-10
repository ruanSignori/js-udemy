describe('Primitive values', () => {
  it('should test jest assertions', () => {
    const number = 10;

    expect(number).toBe(10);
  });
});

describe('Object values', () => {
  it('should test jest assertions', () => {
    const person = {
      name: 'ruan',
      age: 18,
    };

    const anotherPerson = { ...person };

    expect(person).toEqual(anotherPerson);
    expect(person).toHaveProperty('age');
    expect(person).toHaveProperty('age', 18);
    expect(person).not.toHaveProperty('cpf');
  });
});
