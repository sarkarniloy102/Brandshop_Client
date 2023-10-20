

const SingleBasedBrand = ({ singlebrand }) => {

    const { _id, product, brand, type, price, description, rating, image } = singlebrand;
    //console.log(singlebrand);
    return (
        <div>
            <img src={image} alt="" />

        </div>
    );
};

export default SingleBasedBrand;