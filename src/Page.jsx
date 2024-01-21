import Hero from './views/Hero.jsx'
import FirstPage from './views/FirstPage.jsx'
import SecondPage from './views/SecondPage.jsx'
import ThirdPage from './views/ThirdPage.jsx'
import FourthPage from './views/FourthPage.jsx'
import FifthPage from './views/FifthPage.jsx'

const Page = () => {
  return (
    <div className="bg-slate-950 flex flex-col justify-center items-center px-16 py-12 max-md:px-5">
      <span className="flex w-[955px] max-w-full flex-col items-center mt-28 mb-44 max-md:my-10">
        <Hero />
        <FirstPage />
        <SecondPage />
        <ThirdPage />
        <FourthPage />
        <FifthPage />
      </span>
    </div>
  );
}

export default Page;


