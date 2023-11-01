import videoSource from '../assets/buru.mp4'; 
import photo1 from '../assets/photo1.jpg'
import photo2 from '../assets/photo2.jpg'
import merch1 from '../assets/images/merch1.jpg'
import merch2 from '../assets/images/merch2.jpg'
import merch3 from '../assets/images/merch3.jpg'
import { useNavigate } from 'react-router-dom';


const Video = () => {
    const navigate = useNavigate();


    return (
        <div className=' bg-black w-screen pb-7  '>
           <div className=' flex items-start justify-start pb-7'>
           <video
                src={videoSource}
                loop                
                autoPlay
                muted                
                className=' w-screen  h-full mt-36 lg:mt-0 ' 
            />
           </div>
            <div className='  flex flex-col items-center justify-center space-y-7 mt-7'> 
               <h1 className=' text-white font-bold ml-12 lg:ml-0 lg:text-2xl flex flex-wrap  '>
               SIGN UP TO GET FIRST ACCESS TO THE COLLECTION & FUTURE BURUKLYN BOYZ UPDATES
               </h1>
              <input className=' bg-black border-b-2 border-blue-600 lg:text-3xl flex items-center justify-center text-white ' placeholder=' Email' />
              <button className=' lg:text-2xl border-4 border-blue-600 p-3 text-blue-600'>
                SUBSCRIBE
              </button>
            </div>
            <div className=' flex flex-row items-center justify-center pb-7 '>
            <img className=' w-[900px] h-auto rounded-2xl' src={photo1} alt='phot01'     />
            <img className=' w-[900px] h-[1050px] rounded-2xl' src={photo2}  alt='photo2' />
        </div>
       <div className=' h-screen flex' style={{ backgroundImage: `url("/photolink.jpg")`,
    backgroundPosition: "center",
    backgroundSize:"cover"}}>
        <div className=' flex flex-col items-center justify-center text-white pl-7 mt-[800px] space-y-3 '>
            <p  >
            LIMITED EDITION
            </p>
            <h1>BUJE COLLECTION</h1>
            <button onClick={() => navigate("/merch")} className=' hover:bg-blue-600 hover:text-white border-4 border-blue-600 text-blue-600 p-2 text-3xl'>
                SHOP NOW
            </button>
        </div>
       
       </div>
       <div className=' flex flex-row items-center justify-center pt-12 gap-10 pb-7 '>
            <img className=' w-[500px] h-auto rounded-2xl' src={merch1} alt='phot01'     />
            <img className=' w-[500px] h-[850px] rounded-2xl' src={merch2}  alt='photo2' />
            <img className=' w-[500px] h-[850px] rounded-2xl ' src={merch3}  alt='photo2' />

        </div>
        <div className='  flex flex-col items-center justify-center space-y-7 mt-7'> 
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
}

export default Video;
