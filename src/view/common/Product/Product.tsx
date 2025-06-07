import hair from "../../../assets/products/pexels-chloekalaartist-1321916.jpg";
import {useState} from "react";
import {ModifyCart} from "../ModifyCart/ModifyCart.tsx";

type ProductData = {
    id: number,
    name: string,
    price: string,
    currency: string,
    image: string
}

type ProductProps = {
    data: ProductData
}

const images: Record<string, string>
    = import.meta.glob('../../../assets/products/*',
    {eager: true, import: 'default'});


export function Product({data}: ProductProps) {
    console.log(images);
    console.log(`../../../assets/${data.image}`);

    const image = images[`../../../assets/products/${data.image}`];

    const [isActive, setIsActive] = useState(false);
    const addToCart = () => {
        setIsActive(true);
    }

    return (
        <div className="w-48 bg-white rounded-lg shadow-md p-2 border border-gray-300">
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
        </div>

    );
}