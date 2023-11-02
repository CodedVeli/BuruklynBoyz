import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";

const Photo = () => {
  return (
    <div className="  bg-black">
      <div className=" flex flex-row items-center justify-center pb-7 ">
        <img
          className=" w-[900px] h-auto rounded-2xl"
          src={photo1}
          alt="phot01"
        />
        <img
          className=" w-[900px] h-[1050px] rounded-2xl"
          src={photo2}
          alt="photo2"
        />
      </div>
      <div
        className=" h-screen flex"
        style={{
          backgroundImage: `url("/photolink.jpg")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className=" flex flex-col items-center justify-center text-white pl-7 mt-[800px] space-y-3 ">
          <p>LIMITED EDITION</p>
          <h1>BUJE COLLECTION</h1>
          <button className=" border-4 border-blue-600 text-blue-600 p-2 text-3xl">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Photo;
