
const Banner = () => {
    return (
        <div className=" carousel w-full">
        <div id="slide1" className="carousel-item relative h-[50%] w-full">
          <img src="https://i.ibb.co/7XkqCr0/6137891.jpg" className=" w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative h-[50%] w-full">
          <img src="https://i.ibb.co/5shmrfX/nsmm.webp" className=" w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative h-[50%] w-full">
          <img src="https://i.ibb.co/7XkqCr0/6137891.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative h-[50%] w-full">
          <img src="https://i.ibb.co/hfJCrSx/c11824e23db7d247758f4cb77d7c8038.jpg" className="h-[50%] w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;