import React, { useContext } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext'

const CartTotal = () => {
    const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

    return (
        <div className="w-full">
            <div className="text-2xl text-pink-700"> {/* Dark pink title */}
                <Title text1={'CART'} text2={'TOTALS'} />
            </div>
            <div className="flex flex-col gap-2 mt-2 text-sm">
                <div className="flex justify-between">
                    <p className="text-pink-700">Subtotal</p> {/* Dark pink text */}
                    <p className="text-pink-700">
                        {currency} {getCartAmount()}.00
                    </p>
                </div>
                <hr className="border-pink-700" /> {/* Dark pink horizontal line */}
                <div className="flex justify-between">
                    <p className="text-pink-700">Shipping Fee</p> {/* Dark pink text */}
                    <p className="text-pink-700">{currency} {delivery_fee}</p>
                </div>
                <hr className="border-pink-700" /> {/* Dark pink horizontal line */}
                <div className="flex justify-between">
                    <b className="text-pink-700">Total</b> {/* Dark pink bold text */}
                    <b className="text-pink-700">
                        {currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00
                    </b>
                </div>
            </div>
        </div>
    );
};

export default CartTotal;
