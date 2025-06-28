/*import hair from '../../../assets/products/pexels-chloekalaartist-1321916.jpg';
import nail from '../../../assets/products/pexels-linda-markaj-449376348-15491630.jpg';
import longhair from '../../../assets/products/pexels-criativithy-894081-1821095.jpg';*/
import {useEffect} from "react";
import {Product} from "../../common/Product/Product.tsx";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../../store/store.ts";
import {getAllProducts} from "../../../slices/productsSlice.ts";

type ProductData = {
    id: number,
    name: string,
    price: string,
    currency: string,
    image: string
}


export function Home() {
    const dispatch = useDispatch<AppDispatch>();
    const {list} = useSelector((state:RootState) => state.products);
    // const[products, setProducts] = useState<ProductData[]>([]);

    useEffect(() => {
        dispatch(getAllProducts())
    }, []);

    return (

        <div className="py-10 px-4 bg-white-50">
            <div className="flex flex-wrap justify-center gap-4">
                {
                    list.map((product) => (
                        <Product key={product.id} data={product}/>
                    ))
                }
            </div>
        </div>

    );
}