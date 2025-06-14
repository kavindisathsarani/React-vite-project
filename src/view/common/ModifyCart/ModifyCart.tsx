import {useEffect, useState} from "react";
import type {CartItem} from "../../../model/CartItem.ts";

interface ModifyCartProps {
    data:any
}

export const itemList:CartItem[] = [];
export function ModifyCart({ data }: ModifyCartProps)  {

    const [itemCount, setItemCount] = useState(1);

    useEffect(() => {

       let existingItem= itemList.find(item=>
            item.product.id === data.product.id);

       if (existingItem) {
           existingItem.itemCount = itemCount;
       }else{
           itemList.push({
               product:data.product,
               itemCount:itemCount
           });
       }


       console.log(itemList);
    },[itemCount, data]);
    const decreaseItemCount = () => {
       setItemCount(prevValue =>
           prevValue > 1
               ? prevValue - 1
               : (
                   alert("Item count cannot be less than 1!"), prevValue))

       }


    const IncreaseItemCount = () => {
        setItemCount(prevCount =>
            prevCount + 1);
    }

    return (
       <div className="w-full mt-1 p-[2.4px] text-[8px] text-center">
           <button className="float-right text-[20px] bg-yellow-300 rounded-lg h-8 w-8"
           onClick={decreaseItemCount}>-</button>
           <small
           className="text-[20px]">{itemCount}</small>
           <button className="float-left text-[20px] bg-yellow-300 rounded-lg h-8 w-8"
            onClick={IncreaseItemCount}>+</button>
       </div>
    );
}