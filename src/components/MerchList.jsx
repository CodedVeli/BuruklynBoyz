/* eslint-disable react/prop-types */
// import { useEffect,useState } from "react";
// import boyz from '../assets/images/boyz.jpg'

const MerchList = ({merchClick}) => {

    // const [merch, setMerch] = useState([])

    // useEffect(() => {
    //     const fetchData = async () => fetch(' http://localhost:3000/merch')
    //                     .then( async (response) => {
    //                         const resp = await response.json()
    //                         setMerch(resp)
    //                         console.log(resp)

    //                         }                     
    //                     )
    //    fetchData()
    //   }, [])


    const merchs = [
        {
            "id": 1,
            "name": "Buruklynn Boyz",
            "image_id": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIWrvK1_Cve2Sdpf6545uPsQAKVcP_gjP1AQ&usqp=CAU",
            "price": "1000"
        },
        {
            "id": 2,
            "name": "Buruklynn Boyz",
            "image_id": "https://img.freepik.com/free-psd/mockup-black-hoodie-pack-front-back_125540-3044.jpg?size=626&ext=jpg",
            "price": "1000"
        },
        {
            "id": 3,
            "name": "Buruklynn Boyz",
            "image_id": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNsb3RoaW5nfGVufDB8fDB8fHww",
            "price": "1000"
        },
        {
            "id": 4,
            "name": "Buruklynn Boyz",
            "image_id": "https://images.unsplash.com/photo-1589902860314-e910697dea18?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "price": "1000"
        },
        {
            "id": 5,
            "name": "Buruklynn Boyz",
            "image_id": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
            "price": "1000"
        },
        {
            "id": 6,
            "name": "Buruklynn Boyz",
            "image_id": "https://images.unsplash.com/photo-1571945153237-4929e783af4a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
            "price": "1000"
        }
        
    ]
    

        const handleMerch = () => {
            merchClick()
        }

    const renderMerch = merchs.map((element) => {
        return (
            <div key={element.id} className="relative">
            <img
            onClick={handleMerch}
                className="w-[500px] rounded-2xl "
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
           
            <div className=" flex flex-wrap gap-20 items-center justify-center mt-32 lg:p-0 p-5 ">
            {renderMerch}
            </div>
            <div className="flex flex-col items-center justify-center  space-y-7 mt-32">
                <h1 className="text-white text-2xl font-bold ml-12 lg:ml-0 lg:text-4xl flex flex-wrap ">
                    SKII MASK
                </h1>
                <h1 className="text-white lg:text-4xl font-bold ml-12 lg:ml-0 text-2xl flex flex-wrap ">
                    COMING SOON
                </h1>
            </div>
            <div className='  flex flex-col items-center justify-center space-y-7 mt-7'>
                <h1 className=' text-white font-bold ml-12 lg:ml-0 lg:text-2xl flex flex-wrap  '>
                    SIGN UP TO GET FIRST ACCESS TO THE COLLECTION & FUTURE BURUKLYN BOYZ UPDATES
                </h1>
<input
  className='bg-black border-b-2 border-blue-600 lg:text-3xl flex items-center justify-center text-white text-center'
  placeholder='Email'
/>
                <button className=' lg:text-2xl text-xl border-2 lg:border-4 border-blue-600 p-3 text-blue-600'>
                    SUBSCRIBE
                </button>
            </div>      

        </div>
    );
};

export default MerchList;