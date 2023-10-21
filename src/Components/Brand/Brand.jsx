import { NavLink } from "react-router-dom";
// import ProductBasedBrand from "../ProductBasedBrand/ProductBasedBrand";

const Brand = ({ name, image }) => {
    console.log(name, image);
    // const handlebrand = () => {
    //     <ProductBasedBrand></ProductBasedBrand>
    // }
    return (
        <div>
            <NavLink to={`/brand/${name}`}>
                <div  className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img  src={image} alt="entertainment" className="rounded-xl h-52" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{name}</h2>
                        <p>Todays a good day to have a good day.</p>
                        {/* <div className="card-actions">
                            <button  onClick={handlebrand} className="btn btn-primary">See More</button>
                        </div> */}
                    </div>
                </div>
                </NavLink>
        </div>
    );
};

export default Brand;