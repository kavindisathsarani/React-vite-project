// import hair from "../../../assets/products/pexels-chloekalaartist-1321916.jpg";
import {useState} from "react";
import {ModifyCart} from "../ModifyCart/ModifyCart.tsx";
import type {ProductData} from "../../../model/ProductData.ts";
import {useDispatch} from "react-redux";
import type {AppDispatch} from "../../../store/store.ts";
import {addItemToCart} from "../../../slices/cartSlice.ts";

type ProductProps = {
    data: ProductData
}

const images: Record<string, string>
    = import.meta.glob('../../../assets/products/*',
    {eager: true, import: 'default'});


export function Product({data}: ProductProps) {
    const image = images[`../../../assets/products/${data.image}`];

    const dispatch = useDispatch<AppDispatch>();

    const [isActive, setIsActive] = useState(false);
    /**
     * Handles adding the current product to the shopping cart.
     * - Dispatches the addItemToCart action with the product data to update the Redux store
     * - Sets the isActive state to true to show the ModifyCart component for quantity adjustments
     */
    const addToCart = () => {
        dispatch(addItemToCart(data));
        setIsActive(true);
    }

    return (
        <div
            className="w-52 bg-white rounded-lg shadow-md p-3 border border-gray-200 hover:shadow-lg transition-shadow duration-200
            hover:bg-green-200">
            <img
                className="h-36 w-full object-cover rounded-md"
                src={image}
                alt="Hair Highlight"
            />

            <div className="mt-3">
                <div className="flex justify-between items-center">
                    <h3 className="text-gray-800 font-medium text-sm">{data.name}</h3>
                    <div className="bg-amber-100 text-amber-800 text-sm font-medium px-2 py-1 rounded-md">
                        {data.price} <span className="text-xs">{data.currency}</span>
                    </div>
                </div>

                {isActive ? (
                    <ModifyCart
                        data={{product: data}}

                    />
                ) : (
                    <button
                        className="w-full mt-3 bg-green-600 hover:bg-green-700 text-white text-sm py-1.5 rounded-md
                transition duration-200 flex items-center justify-center gap-1"
                        onClick={addToCart}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                        </svg>
                        Add to Cart
                    </button>
                )}
            </div>
        </div>
        /* <div className="w-48 bg-white rounded-lg shadow-md p-2 border border-gray-300">
             <img
                 className="h-32 w-full object-cover rounded-md"
                 src={image}
                 alt="Hair Highlight"
             />
             <div className="mt-2">
                 <div className="flex justify-between items-center">
                     <h3 className="text-green-700 text-sm font-medium">{data.name}</h3>
                     <div className="bg-yellow-300 text-sm text-gray-800 px-2 py-0.5 rounded-md">
                         {data.price} <small className="text-[10px]">{data.currency}</small>
                     </div>
                 </div>
                 {
                     isActive?(
                         <ModifyCart data={{
                             product:data
                         }}/>
                     ): (
                         <button
                             className="w-full mt-2 bg-green-700 hover:bg-green-800 text-white text-xs py-1 rounded-md
                     transition duration-200" onClick={addToCart}>
                             Add to Cart
                         </button>
                     )
                 }

             </div>
         </div>*/

    );
}