let carts = require('./cart.js');
let cars = require('./data/cars.js');

describe('Cart Properties:', () => {
    test('cart should be empty', () => {
        expect( Array.isArray( carts.cart ) ).toEqual( true );
        expect( carts.cart.length ).toEqual( 0 );
    })
    test('total should be 0', () => {
        expect (carts.total).toBe( 0 );
    })
});

describe('Cart Methods:', ()=>{
    test('addToCart should add 1 to cart length and new cart in array', () => {
        carts.addToCart(cars[0]);
        carts.addToCart(cars[1]);
        carts.addToCart(cars[3]);
        carts.addToCart(cars[4]);
        expect( carts.cart.length ).toBe( 4 );
        expect( carts.cart[carts.cart.length -1] ).toBe( cars[4])
    })
    test('addToCart method should increase total to 111829', () => {
        expect( carts.total ).toEqual( 111829 );
    })
    test('removeFromCart method should decrease cart length to 3 and maintian order in cart array', ()=>{
        carts.removeFromCart(2, 38506);
        expect( carts.cart.length ).toBe( 3 );
        expect( carts.cart[0] ).toBe( cars[0] );
        expect( carts.cart[1] ).toBe( cars[1] );
        expect( carts.cart[2] ).toBe( cars[4] );
    }) 
    test('removeFromCart method should decrease total to 73323', () => {
        expect( carts.total ).toEqual( 73323 );
    })
    test('checkout method should set cart length to 0 and total to 0', () => {
        carts.checkout();
        expect( carts.total ).toEqual( 0 );
        expect( carts.cart.length ).toBe( 0 );
    })
});