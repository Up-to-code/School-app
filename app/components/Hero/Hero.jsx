
import Button_Auth_Google from "../Google/Button_Auth_Google";

function Hero() {

  return (
    <>
      <header className="bg-Image cleick text-white ">
        <div className="someBlick h-full flex justify-center items-center  flex-col">
          <h1 className="text-white text-4xl font-bold max-w-[250px] text-center   ">
            Welcome to you`r schoole
          </h1>
          <div className="flex gap-3 my-4">
            <Button_Auth_Google />
          </div>
        </div>
      </header>
    </>
  );
}

export default Hero;
