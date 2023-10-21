import { useLoaderData } from "react-router-dom";
import Cart from "./Cart";

const MyCart = () => {
    const loadedcart = useLoaderData();
    console.log(loadedcart);
    return (
        <div className="my-10 mx-3 lg:mx-10">

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
                {
                    loadedcart.map((loadbrand, idx) => <Cart key={idx} singlebrand={loadbrand}></Cart>)
                }

            </div>
        </div>
    );
};

export default MyCart;