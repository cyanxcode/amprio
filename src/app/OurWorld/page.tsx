export default function OurWorld() {
  return (
    <>
      <div className="flex flex-col items-center gap-20 mt-10 mb-24">
        <div className="w-[96%] h-96 bg-black rounded-lg"></div>
        <div className="w-full bg-gradient-to-br from-[#023235] to-[#016f63] box-border">
          <div className="gold w-full h-2"></div>
          <h2 className="w-full flex justify-center items-start mt-10">
            <img src="/Lightbrary-bg.png" alt="" className="w-60" />
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 py-10 px-20 w-full justify-center ">
            <div className="h-[30vw] w-full bg-black"></div>
            <div className="h-[30vw] w-full bg-black"></div>
            <div className="h-[30vw] w-full bg-black"></div>
            <div className="h-[30vw] w-full bg-black"></div>
          </div>
          <div className="gold w-full h-2"></div>
        </div>
      </div>
    </>
  );
}
