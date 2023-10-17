import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center text-white h-screen justify-center px-2">
      <h1 className="text-5xl font-bold mb-20">ChatGpt</h1>
      <div className="flex space-x-2 text-center">
        {/**first col */}
        <div>
          <div className=" flex flex-col justify-center items-center mb-5">
            {/* Sun icon */}
            <SunIcon className="h-8 w-8 " />
            <h2>Example</h2>
            {/* <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#f9a826]"></div> */}
          </div>
          <div className="space-y-2">
            <p className="infoText">"Explain Something to me"</p>
            <p className="infoText">
              "What is the difference between a dog and a car?"
            </p>
            <p className="infoText">"What is the color of the sun?"</p>
          </div>
        </div>
        {/**End first col */}
        {/**start 2nd col */}
        <div>
          <div className=" flex flex-col justify-center items-center mb-5">
            {/* Sun icon */}
            <BoltIcon className="h-8 w-8 " />
            <h2>Capabilities</h2>
            {/* <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#f9a826]"></div> */}
          </div>
          <div className="space-y-2">
            <p className="infoText">"Explain Something to me"</p>
            <p className="infoText">
              "What is the difference between a dog and a car?"
            </p>
            <p className="infoText">"What is the color of the sun?"</p>
          </div>
        </div>
        {/**end 2nd col */}
        {/**3rd col */}
        <div>
          <div className=" flex flex-col justify-center items-center mb-5">
            {/* Sun icon */}
            <ExclamationTriangleIcon className="h-8 w-8 " />
            <h2>Limitation</h2>
            {/* <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#f9a826]"></div> */}
          </div>
          <div className="space-y-2">
            <p className="infoText">"Explain Something to me"</p>
            <p className="infoText">
              "What is the difference between a dog and a car?"
            </p>
            <p className="infoText">"What is the color of the sun?"</p>
          </div>
        </div>
        {/**end 3rd col */}
      </div>
    </div>
  );
}
