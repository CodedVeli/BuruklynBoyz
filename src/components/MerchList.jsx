/* eslint-disable react/prop-types */
import { useEffect,useState } from "react";
// import boyz from '../assets/images/boyz.jpg'

const MerchList = ({merchClick}) => {

    const [merch, setMerch] = useState([])

    useEffect(() => {
        const fetchData = async () => fetch(' http://localhost:3000/merch')
                        .then( async (response) => {
                            const resp = await response.json()
                            setMerch(resp)
                            console.log(resp)

                            }                     
                        )
       fetchData()
      }, [])

        const handleMerch = () => {
            merchClick()
        }

    const renderMerch = merch.map((element) => {
        return (
            <div key={element.id} className="relative">
            <img
                className="w-[500px] rounded-2xl"
                src={element.image_id}
                alt={element.name}
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center hover:bg-gradient-to-b from-black   via-transparent to-black  opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                <button onClick={handleMerch} className=" text-blue-600 border-4 border-blue-500 font-semibold p-4">Add to Cart</button>
            </div>
            <h1 className="text-white text-2xl font-bold">{element.name}</h1>
            <h1 className="text-white text-2xl">Ksh{element.price}</h1>
        </div>
        )
    })
    return (
        <div className="  bg-black h-full pb-8 ">

            <div className=" flex flex-wrap gap-20 items-center justify-center mt-32 ">
            {renderMerch}
            </div>
            <div className='  flex flex-col items-center justify-center space-y-7 pt-16'> 
               <h1 className=' text-white font-bold ml-12 lg:ml-0 lg:text-2xl flex flex-wrap  '>
               SIGN UP TO GET FIRST ACCESS TO THE COLLECTION & FUTURE BURUKLYN BOYZ UPDATES
               </h1>
              <input className=' bg-black border-b-2 border-blue-600 lg:text-3xl flex items-center justify-center text-white ' placeholder=' Email' />
              <button className=' lg:text-2xl border-4 border-blue-600 p-3 text-blue-600'>
                SUBSCRIBE
              </button>
            </div>           

        </div>
    );
};

export default MerchList;