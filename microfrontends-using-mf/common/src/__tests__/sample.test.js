// https://jestjs.io/docs/getting-started
import {describe, expect, test} from '@jest/globals';
import useCartStore from "../stores/useCartStore";


test('adds 1 + 2 to equal 3', () => {
    expect(3).toBe(3);
});



test('test cart store', async () => {

    // console.log('msg', useCartStore.getState());
    expect(useCartStore.getState().cart).toEqual([]);
    useCartStore.getState().addToCartIfNotInCart({idDrink: 1, strDrink: 'test'});
    expect(useCartStore.getState().cart.length).toEqual(1);

});
