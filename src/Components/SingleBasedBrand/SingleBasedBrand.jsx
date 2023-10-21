import { AiFillStar } from 'react-icons/ai'
import Swal from 'sweetalert2'
const SingleBasedBrand = ({ singlebrand }) => {

    const { _id, product, brand, type, price, description, rating, image } = singlebrand;
    //console.log(singlebrand);

    const handleaddcart = () => {
        console.log(singlebrand);
        console.log("adding");
        // send data to the server
        fetch('http://localhost:5000/mycart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(singlebrand)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Movie Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }



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

                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn" onClick={() => document.getElementById(_id).showModal()}>Details</button>
                    <dialog id={_id} className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box text-center">
                            <img className='h-80 mx-auto my-3' src={image} alt="" />
                            <h3 className="font-bold text-2xl">{product}</h3>
                            <p className="py-4">{description}</p>
                            <button onClick={handleaddcart} className="btn btn-accent text-white">Add to cart </button>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button  className="btn ">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>

        </div>
    );
};

export default SingleBasedBrand;