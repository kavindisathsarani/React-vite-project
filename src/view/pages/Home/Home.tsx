/*import hair from '../../../assets/products/pexels-chloekalaartist-1321916.jpg';
import nail from '../../../assets/products/pexels-linda-markaj-449376348-15491630.jpg';
import longhair from '../../../assets/products/pexels-criativithy-894081-1821095.jpg';*/
import {useEffect, useState} from "react";
import {Product} from "../../common/Product/Product.tsx";

type ProductData = {
    id: number,
    name: string,
    price: string,
    currency: string,
    image: string
}


export function Home() {

    const[products, setProducts] = useState<ProductData[]>([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch('./product-data.json');
                const jsonData = await response.json();
                // console.log(jsonData);
                setProducts(jsonData);
                console.log(products)
            } catch (error) {
                console.error('Error fetching data:', error);

            }
        }
        fetchData();
    }, []);

    return (
        /* <div>
             <div className="flex flex-wrap ml-[1px] mt-5 mb-5
                             justify-center items-center mx-auto">
                 <div className="w-28 h-32 mr-2 mb-2 justify-center items-center border-gray-500 border-[0.5px]">
                     <div>
                         <img className="h-[148px] w-[188px]" src={hair as string} alt=""/>
                     </div>
                     <div className="flex">
                         <div>
                             <h3 className="text-[#1f9e4b] text-[12px] pl-2">
                                 Hair Highlight</h3>
                         </div>
                         <div className="bg-yellow-300 ml-1 p-[0.3px] rounded-lg pr-2">
                             <h3 className="text-[12px] pl-1">200 <small className="text-[7px]">LKR</small></h3>
                         </div>
                     </div>
                     <div className="flex justify-center">
                         <button
                             className="w-full mt-1 p-[2.4px] bg-[#1f9e4b] text-[8px] border-gray-500 border-[0.5px]">Add
                             to Cart
                         </button>
                     </div>
                 </div>

                 <div className="w-28 h-32 mr-2 mb-2 justify-center items-center border-gray-500 border-[0.5px]">
                     <div>
                         <img className="h-[148px] w-[188px]" src={nail as string} alt=""/>
                     </div>
                     <div className="flex">
                         <div>
                             <h3 className="text-[#1f9e4b] text-[12px] pl-2">
                                 Nail painting</h3>
                         </div>
                         <div className="bg-yellow-300 ml-1 p-[0.3px] rounded-lg pr-2">
                             <h3 className="text-[12px] pl-1">200 <small className="text-[7px]">LKR</small></h3>
                         </div>
                     </div>
                     <div className="flex justify-center">
                         <button
                             className="w-full mt-1 p-[2.4px] bg-[#1f9e4b] text-[8px] border-gray-500 border-[0.5px]">Add
                             to Cart
                         </button>
                     </div>
                 </div>


                 <div className="w-28 h-32 mr-2 mb-2 justify-center items-center border-gray-500 border-[0.5px]">
                     <div>
                         <img className="h-[148px] w-[188px]" src={longhair as string} alt=""/>
                     </div>
                     <div className="flex">
                         <div>
                             <h3 className="text-[#1f9e4b] text-[12px] pl-2">
                                 Hair Decoration</h3>
                         </div>
                         <div className="bg-yellow-300 ml-1 p-[0.3px] rounded-lg pr-2">
                             <h3 className="text-[12px] pl-1">200 <small className="text-[7px]">LKR</small></h3>
                         </div>
                     </div>
                     <div className="flex justify-center">
                         <button
                             className="w-full mt-1 p-[2.4px] bg-[#1f9e4b] text-[8px] border-gray-500 border-[0.5px]">Add
                             to Cart
                         </button>
                     </div>
                 </div>

             </div>
         </div>
 */

        <div className="py-10 px-4 bg-white-50">
            <div className="flex flex-wrap justify-center gap-4">
                {
                    products.map((product) => (
                        <Product key={product.id} data={product}/>
                    ))
                }
            </div>
        </div>

    );
}