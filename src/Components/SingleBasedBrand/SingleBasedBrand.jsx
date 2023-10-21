import { AiFillStar } from 'react-icons/ai'

import { NavLink } from 'react-router-dom';
import SingleProductDetails from '../SingleProductDetails/SingleProductDetails';

const SingleBasedBrand = ({ singlebrand }) => {

    const { product, brand, type, price, description, rating, image } = singlebrand;
    //console.log(singlebrand);
    const handledetails=(description)=>{
        console.log(description);
        <SingleProductDetails description={description}></SingleProductDetails>
    }

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={image} alt="movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl mb-4">
                        {product}
                        <div className="badge badge-secondary">{brand}</div>
                    </h2>
                    <div className="card-actions ">
                        <div className="badge badge-outline text-xl   px-4 py-3">{type}</div>
                        <div className="badge badge-outline text-xl   px-4 py-3">{rating}<AiFillStar></AiFillStar> /5.0</div>
                        <div className="badge badge-outline text-xl px-4 py-3">{price}</div>
                    </div>
                    {<NavLink to={'/singleproductdetails'}  onClick={()=>{handledetails(description)}} className='btn mt-3  hover:bg-pink-600'>  Details</NavLink>}
                </div>
            </div>

        </div>
    );
};

export default SingleBasedBrand;