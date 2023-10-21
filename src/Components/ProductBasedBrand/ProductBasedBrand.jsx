import { useLoaderData } from "react-router-dom";
import SingleBasedBrand from "../SingleBasedBrand/SingleBasedBrand";
import Swal from 'sweetalert2';


const ProductBasedBrand = () => {
    const loadedbrand = useLoaderData();

    if (loadedbrand.length === 0) {
        // Display Swal alert if the condition is met
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">No data available</a>'
        });

        // Return null or an empty component to prevent rendering anything in the DOM
        return <div>no data available</div>;
    }

    return (
        <div className="my-10 mx-3 lg:mx-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {loadedbrand.map((loadbrand, idx) => (
                    <SingleBasedBrand key={idx} singlebrand={loadbrand}></SingleBasedBrand>
                ))}
            </div>
        </div>
    );
};

export default ProductBasedBrand;
