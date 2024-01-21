const Hero = () => {
  return (
    <>
      <header className="text-7xl font-extrabold leading-[79.92px] bg-clip-text z-[1] max-md:max-w-full max-md:text-4xl text-neutral-200">
      <h1>Principles of notetaking</h1>
    </header>
      <form className="flex-col text-slate-400 text-2xl leading-7 relative overflow-hidden min-h-[613px] items-stretch pl-11 pr-9 pt-5 pb-96 max-md:max-w-full max-md:pb-10 max-md:px-5">
      <img
        loading="lazy"
        srcSet="assets/isometric_tile-crystal_1.png"
        className="absolute h-full w-full object-cover object-center inset-0"
        alt="Placeholder image"
      />
      <p className="text-neutral">Some things I’ve been revisiting and thinking about.</p>
    </form>
    </>
  );
};

export default Hero