import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-[#0A192F] py-10 md:py-20 lg:py-0">
      <div className="container px-4 mx-auto relative before:absolute before:content-[''] before:left-56 before:bottom-10 before:h-[100px] before:w-[100px] before:bg-[url('/particleTwo.png')] before:bg-contain before:animate-bounce">
        <div className="grid gap-7 lg:gap-0 lg:grid-cols-[auto_35%] items-center">
          <div className="lg:pr-10 text-center lg:text-left">
            <h4 className="uppercase font-mono text-gray-50">
              I am Frontend Web Developer
            </h4>
            <h1 className="text-gray-100 my-3   font-bold text-3xl md:text-4xl lg:text-6xl">
              Creative Design <br className="hidden lg:block" /> and
              <span className="text-teal-600"> Web Solutions</span>
            </h1>
            <p className="mb-5 text-gray-100 font-mono text-lg">
              I am a frontend web developer with 3+ year of work experience. I
              can provide clean code and pixel perfect design. I also make
              website more & more interactive with web animations.
            </p>
            <button className="p-2 px-3 border-none bg-teal-500 hover:bg-teal-600 text-white capitalize font-mono text-lg text-center">
              Contact Me
            </button>
          </div>
          <div className="mx-auto lg:w-full relative z-[1] after:absolute after:content-[''] after:bg-[url('/hero-shape.png')] after:animate-moving  after:z-[-1] after:bg-contain lg:after:h-[300px] lg:after:w-[300px] after:left-0 after:top-0">
            <Image
              src="/mehedi.png"
              height={300}
              width={300}
              alt="Hero Image"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
