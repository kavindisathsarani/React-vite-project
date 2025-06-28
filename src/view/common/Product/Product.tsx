import {ModifyCart} from "../ModifyCart/ModifyCart.tsx";
import type {ProductData} from "../../../model/ProductData.ts";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../../store/store.ts";
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

    const item = useSelector((state:RootState) => state.cart.items.find(cartItem => cartItem.product.id === data.id));

    // const [isActive, setIsActive] = useState(false);


    const addToCart = () => {
        dispatch(addItemToCart(data));
        // setIsActive(true);
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

                {item ? (
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


    );
}