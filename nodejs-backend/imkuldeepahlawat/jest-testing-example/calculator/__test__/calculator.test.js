const { sum, multiply } = require("../calculator");


test('testing calculator sum fucntionalty', () => {



    expect(sum(-1, -2)).toBe(-3);

});
test('testing calculator multiply fucntionalty', () => {
    expect(multiply(2, 2)).toBe(4);
});


const cartList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
];

test('the shopping list has milk on it', () => {
    // adding a item in cart
    cartList.push('preworkout')
    expect(cartList).toContain('preworkout');
    expect(new Set(cartList)).toContain('preworkout');
});