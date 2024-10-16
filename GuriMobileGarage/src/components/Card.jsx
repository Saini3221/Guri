function Card({ img, phoneName, price }) {
  return (
    <div className="flex flex-col">
      <div className="flex bg-slate-100 justify-center items-center w-[40vh] h-[48vh]  rounded-lg">
        <div className="flex flex-col justify-between ">
          <div className="flex justify-center items-center mx-[2vh] border rounded-md border-black w-[28%]">
            <h1>Sale</h1>
          </div>

          <img src={img} alt={phoneName} className="w-[30vh] m-[4vh] " />
        </div>
      </div>

      <div className=" text-white">
        <p>{phoneName}</p>
        <p>{price}</p>
      </div>
    </div>
  );
}

export default Card;
