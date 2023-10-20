import { useLoaderData } from "react-router-dom";
import SingleBasedBrand from "../SingleBasedBrand/SingleBasedBrand";


const ProductBasedBrand = () => {

   const loadedbrand = useLoaderData();

   const brandValues = Object.values(loadedbrand);
   console.log(brandValues)
   
   console.log(typeof loadedbrand);
    return (
        <div>
            <h2>here is your brand</h2>
            <div>
                {
                    loadedbrand.map((loadbrand,idx) =>  <SingleBasedBrand key={idx} singlebrand={loadbrand}></SingleBasedBrand>)
                }
                
            </div>
        </div>
    );
};

export default ProductBasedBrand;