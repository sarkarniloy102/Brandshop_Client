import { AiFillStar } from 'react-icons/ai'
const Cart = ({singlebrand}) => {
    const {  product, brand, type, price,  rating, image } = singlebrand;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl ">
                <figure><img className='h-80' src={image} alt="movie" /></figure>
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
                </div>
            </div>
        </div>
    );
};

export default Cart;