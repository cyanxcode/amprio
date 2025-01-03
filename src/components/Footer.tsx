export default function Footer() {
  return (
    <>
      <div className="gold w-full h-2 mt-20"></div>
      <footer className="w-full min-h-96  bg-gradient-to-r from-[#023235] via-[#016f63] to-[#023235] p-10">
        <div className="flex w-full justify-center sm:items-start">
          <img src="/AmprioMainNoBg.png" alt="" className="w-64" />
        </div>
        <div className="w-full flex justify-between sm:items-center p-2 sm:p-5 flex-col sm:flex-row gap-5">
          <div className="flex flex-col items-center sm:items-start">
            <div className="text-white text-md sm:text-lg  cursor-pointer hover:underline">
              Our World
            </div>
            <div className="text-white text-md sm:text-lg  cursor-pointer hover:underline">
              Contact Us:
            </div>
            <div className="text-white text-md sm:text-lg cursor-pointer hover:underline">
              91+ 9897003003
            </div>
            <div className="text-white text-md sm:text-lg  cursor-pointer hover:underline">
              Instagram
            </div>
            <div className="text-white text-md sm:text-lg  cursor-pointer hover:underline">
              Youtube
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-white text-md sm:text-lg font-medium cursor-pointer hover:underline">
              Chandeliers
            </div>
            <div className="text-white text-md sm:text-lg font-medium cursor-pointer hover:underline">
              Wall Light
            </div>
            <div className="text-white text-md sm:text-lg font-medium cursor-pointer hover:underline">
              Designer
            </div>
            <div className="text-white text-md sm:text-lg font-medium cursor-pointer hover:underline">
              Architecural
            </div>
            <div className="text-white text-md sm:text-lg font-medium cursor-pointer hover:underline">
              Cob Light
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-white text-md sm:text-lg font-medium cursor-pointer hover:underline">
              Architecural
            </div>
            <div className="text-white text-md sm:text-lg font-medium cursor-pointer hover:underline">
              Cob Light
            </div>
            <div className="text-white text-md sm:text-lg font-medium cursor-pointer hover:underline">
              Chandeliers
            </div>
            <div className="text-white text-md sm:text-lg font-medium cursor-pointer hover:underline">
              Wall Light
            </div>
            <div className="text-white text-md sm:text-lg font-medium cursor-pointer hover:underline">
              Designer
            </div>
          </div>
          <div className="hidden md:flex"></div>
          <div className="hidden md:flex"></div>
        </div>
      </footer>
    </>
  );
}
