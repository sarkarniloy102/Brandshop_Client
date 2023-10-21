import { useEffect } from "react";
import Banner from "../Banner/Banner";
import { useState } from "react";
import Brand from "../Brand/Brand";
import Footer from "../Footer/Footer";

const Home = () => {
    const [brands, setbrand] = useState([]);

    useEffect(() => {
        // Fetch data from the server when the component mounts
        fetch('http://localhost:5000/brand')
            .then(res => res.json())
            .then(data => {
                 console.log(data);
                // If you want to update the state with the fetched data, use setBrand
                setbrand(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    return (
        <div className="container mx-auto">
            <Banner></Banner>

            <h2 className="text-3xl font-extrabold my-10 text-center">Platform of Entertainment</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
            {
                brands.map((brand,idx)=> <Brand key={idx} name={brand.brand_name} image={brand.brand_image}></Brand> )
            }
            </div>
           <Footer></Footer>
        </div>
    );
};

export default Home;