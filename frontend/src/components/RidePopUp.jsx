
const RidePopUp = (props) => {
  return (
    <div>
    <h5 className="p-1 w-[93%] text-center absolute top-0 " onClick={() => {
        props.setRidePopupPanel(true)
    }}><i className=" text-3xl text-gray-500 ri-arrow-down-wide-line "></i></h5>
    <h3 className="text-2xl font-semibold mb-5">New Ride Available!</h3>

     <div className="flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4 ">
        <div className="flex items-center gap-3 ">
            <img className="h-12 w-10 rounded-full object-cover" src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww" alt="" />
            <h2 className="text-lg font-medium">Ashish behera</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2KM</h5>
     </div>

    <div className="flex gap-2 justify-between flex-col items-center">
       
        <div className="w-full mt-5">
            <div className="flex items-center gap-5 p-3 border-b-2">
                <i className="text-lg ri-map-pin-2-fill"></i>
                <div>
                    <h3 className="text-lg font-medium">562/11-A</h3>
                    <p className="text-sm -mt-1 text-gray-600">BTM 1st Stage, Bangaluru</p>
                </div>
            </div>
            <div className="flex items-center gap-5 p-3 border-b-2">
                <i className="text-lg ri-map-pin-2-fill"></i>
                <div>
                    <h3 className="text-lg font-medium">562/11-A</h3>
                    <p className="text-sm -mt-1 text-gray-600">BTM 1st Stage, Bangaluru</p>
                </div>
            </div>
            <div className="flex items-center gap-5 p-3 border-b-2">
                <i className=" ri-currency-line"></i>
                <div>
                    <h3 className="text-lg font-medium">₹193.20</h3>
                    <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
                </div>
            </div>
        </div>
       <div className=" mt-5 flex items-center justify-between w-full">
       <button onClick={()=>{
            props.setRidePopupPanel(false)
        }} className=" mt-1 bg-gray-300 text-gray-700 font-semibold p-3 px-10 rounded-lg">Ignore</button>
       <button onClick={()=>{
            props.setConfirmRidePopUpPanel(true)
        }} className="  bg-green-600 text-white font-semibold p-3 px-10 rounded-lg">Accept</button>
         
       </div>
    </div>
</div>
  )
}

export default RidePopUp
