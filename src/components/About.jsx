const About = () => {
  return (
    <div className="hero min-h-screen bg-gray-800">
      <div className="grid grid-cols-2 gap-40">
        <div className="card w-auto p-10  text-neutral-content">
          <div className="card-body items-start text-start">
            <h2 className="card-title"> ABOUT US</h2>
            <h3 className="card-title text-4xl py-5">
              We work with local and international clients to build their dream
              products.
            </h3>
            <p>
              Our mission at LLC is to provide our clients with best solutions
              on their budget and timeline. We spend countless hours meeting
              with our clients to better understand their needs. Better
              understanding the needs helps us deliver products to our clients
              in timely manner.
            </p>
          </div>
        </div>
        <div className="w-64 carousel rounded-box">
          <div className="carousel-item w-full">
            <img
              src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          <div className="carousel-item w-full">
            <img
              src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          <div className="carousel-item w-full">
            <img
              src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          <div className="carousel-item w-full">
            <img
              src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          <div className="carousel-item w-full">
            <img
              src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          <div className="carousel-item w-full">
            <img
              src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          <div className="carousel-item w-full">
            <img
              src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
