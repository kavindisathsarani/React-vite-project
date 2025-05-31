import hair from '../../../assets/products/pexels-chloekalaartist-1321916.jpg';
import nail from '../../../assets/products/pexels-linda-markaj-449376348-15491630.jpg';
import longhair from '../../../assets/products/pexels-criativithy-894081-1821095.jpg';


export function Home() {
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

        <div className="py-10 px-4 bg-gray-50">
            <div className="flex flex-wrap justify-center gap-4">
                {/* Card 1 */}
                <div className="w-48 bg-white rounded-lg shadow-md p-2 border border-gray-300">
                    <img
                        className="h-32 w-full object-cover rounded-md"
                        src={hair as string}
                        alt="Hair Highlight"
                    />
                    <div className="mt-2">
                        <div className="flex justify-between items-center">
                            <h3 className="text-green-700 text-sm font-medium">Hair Highlight</h3>
                            <div className="bg-yellow-300 text-sm text-gray-800 px-2 py-0.5 rounded-md">
                                2000 <small className="text-[10px]">LKR</small>
                            </div>
                        </div>
                        <button
                            className="w-full mt-2 bg-green-700 hover:bg-green-800 text-white text-xs py-1 rounded-md transition duration-200">
                            Add to Cart
                        </button>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="w-48 bg-white rounded-lg shadow-md p-2 border border-gray-300">
                    <img
                        className="h-32 w-full object-cover rounded-md"
                        src={nail as string}
                        alt="Nail Painting"
                    />
                    <div className="mt-2">
                        <div className="flex justify-between items-center">
                            <h3 className="text-green-700 text-sm font-medium">Nail Painting</h3>
                            <div className="bg-yellow-300 text-sm text-gray-800 px-2 py-0.5 rounded-md">
                                2500 <small className="text-[10px]">LKR</small>
                            </div>
                        </div>
                        <button
                            className="w-full mt-2 bg-green-700 hover:bg-green-800 text-white text-xs py-1 rounded-md transition duration-200">
                            Add to Cart
                        </button>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="w-48 bg-white rounded-lg shadow-md p-2 border border-gray-300">
                    <img
                        className="h-32 w-full object-cover rounded-md"
                        src={longhair as string}
                        alt="Hair Decoration"
                    />
                    <div className="mt-2">
                        <div className="flex justify-between items-center">
                            <h3 className="text-green-700 text-sm font-medium">Hair Decoration</h3>
                            <div className="bg-yellow-300 text-sm text-gray-800 px-2 py-0.5 rounded-md">
                                2800 <small className="text-[10px]">LKR</small>
                            </div>
                        </div>
                        <button
                            className="w-full mt-2 bg-green-700 hover:bg-green-800 text-white text-xs py-1 rounded-md transition duration-200">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}