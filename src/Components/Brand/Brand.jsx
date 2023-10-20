
const Brand = ({ name, image }) => {
    console.log(name, image);
    return (
        <div>
            <div >
                <div className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={image} alt="entertainment" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{name}</h2>
                        <p>Todays a good day to have a good day.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">See More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brand;