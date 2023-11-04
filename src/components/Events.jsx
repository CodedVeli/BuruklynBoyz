/* eslint-disable react/prop-types */
import ebl from '../assets/ebl.jpg'
import event1 from '../assets/event1.jpg'
import event2 from '../assets/event2.jpg'
import event3 from '../assets/event3.jpg'
import event4 from '../assets/event4.jpg'
import spotify from '../assets/spotify.jpg'

 

const Events = ({merchClick}) => {

    const events = [
        {
            id: 1,
            title: event1,
            price: 1000,
        },
        {
            id: 2,
            title: event2,
            price: 450
        },
        {
            id: 3,
            title: event3,
            price: 1000
        },
        {
            id: 4,
            title: event4,
            price: 1000
        },
        {
            id: 5,
            title: ebl,
            price: 2000
        },
        {
            id: 6,
            title: spotify,
            price:'free'
        },
    ]
    const handleEvent = () => {
        merchClick()
    }


    const renderevents =  events.map((event) => {
            return (
                <div key={event.id}  className="relative">
                    <img onClick={handleEvent} src={event.title} alt='event' className="w-[500px] rounded-2xl" />
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center lg:hover:bg-gradient-to-b from-black   via-transparent to-black  opacity-0 transition duration-300 ease-in-out lg:hover:opacity-100">
                <button onClick={handleEvent}  className=" text-blue-600 border-4 border-blue-500 font-semibold p-4 text-2xl">Grab Your Ticket</button>
            </div>
                    <h1 className='text-2xl font-bold text-white'>Ksh {event.price}</h1>
                </div>
            )
        })
       
    

    return (
        <div className=' className="  bg-black h-full pb-8 '>
            <h1 className='text-5xl font-bold text-white text-center mt-32'>Events</h1>
            <div  className=" flex flex-wrap gap-20 items-center justify-center mt-32 lg:p-0 p-5 ">
            {renderevents}
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

export default Events;