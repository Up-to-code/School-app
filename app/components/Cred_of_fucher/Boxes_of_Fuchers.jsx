function Boxes_of_Fuchers({ children, word }) {
  return (
    <div>
      <div className="relative my-10  ">
        <div className="bg-white  min-h-[150px] max-w-xs m-auto rounded shadow py-2 px-4 ">
          <div className="text-white  m-auto font-bold text-lg  flex flex-col justify-center items-center absolute  top-[-35px] bg-red-400 w-max click_icone_in_fucher rounded-full">
            <span className="text-xl ">{children}</span>
            <h2>{word}</h2>
          </div>

          <p className="pt-9 text-center ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam in
            ab omnis beatae dignissimos iure iusto, quia vel est consequatur.
            Dolore pariatur explicabo cupiditate impedit. Eos quae quo aliquam
            a.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Boxes_of_Fuchers;
