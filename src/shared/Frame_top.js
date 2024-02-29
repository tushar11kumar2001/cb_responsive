import "../css/Frame_top.css";

export const Frame_top = () => {
  return (
    <>
      <div className="m-2 ">
        <div className=" h-2 bg-black rounded-lg relative w-[95%] left-5">
          <div className="h-96 w-2 bg-red-500 rounded-lg absolute  frame_set"></div>
        </div>
      </div>
    </>
  );
};
