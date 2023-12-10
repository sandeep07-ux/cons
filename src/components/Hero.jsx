const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqKIS4-riJ4ZgDKMK0Oh2qapWQJ2rwDfKEtA&usqp=CAU)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            soluta aliquam corporis praesentium repudiandae. Obcaecati, sit ex?
            Id quidem voluptas quo voluptatibus at, iure rem provident, ab,
            saepe quod odio?
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
