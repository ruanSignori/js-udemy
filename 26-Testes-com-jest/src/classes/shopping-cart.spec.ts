import { Discount } from './discount';
import { CartItem } from './interfaces/cart-item';
import { ShoppingCart } from './shopping-cart';

const createSut = () => {
  const discountMock = createDiscountMock();
  const sut = new ShoppingCart(discountMock);
  return { sut, discountMock };
};

const createDiscountMock = () => {
  class DiscountMock extends Discount {}
  return new DiscountMock();
};

const createCartItemMock = (name: string, price: number) => {
  class CartItemMock implements CartItem {
    constructor(public name: string, public price: number) {}
  }
  return new CartItemMock(name, price);
};

const createSutWithProducts = () => {
  const { sut, discountMock } = createSut();
  const cartItem = createCartItemMock('Tesoura', 30);
  const cartItem2 = createCartItemMock('Lápis', 30);
  sut.addItem(cartItem);
  sut.addItem(cartItem2);
  return { sut, discountMock };
};

describe('ShoppingCart', () => {
  it('should be an empty cart when no product is added', () => {
    const { sut } = createSut();

    expect(sut.isEmpty()).toBe(true);
  });
  it('should have 2 cart items', () => {
    const { sut } = createSutWithProducts();

    expect(sut.items.length).toBe(2);
  });
  it('should test total and totalWithDiscount', () => {
    const { sut } = createSutWithProducts();

    expect(sut.total()).toBe(60); // Tesoura 30 + Lápis + 30 = 60
    expect(sut.totalWithDiscount()).toBe(60);
  });
  it('should add products and clear cart', () => {
    const { sut } = createSutWithProducts();

    expect(sut.items.length).toBe(2);
    sut.clearItems();
    expect(sut.items.length).toBe(0);
    expect(sut.isEmpty()).toBe(true);
  });
  it('should remove products', () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
    sut.removeItem(1);
    expect(sut.items.length).toBe(1);
  });
});
