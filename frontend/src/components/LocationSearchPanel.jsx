
const LocationSearchPanel = (props) => {


  const locations = [
    "24B, Near kappors cafe , BTM BAngalore",
    "22B, Near kappors cafe , BTM BAngalore"
  ]

  return (
    <div>
      {/* this is ample datat */}
      {
        locations.map(function(elem,index){
         return   <div key={index} onClick={()=>{
          props.setvehiclePanelOpen(true)
          props.setPanelOpen(false)
         }}  className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl my-2 items-center justify-start">
            <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full"><i className="ri-map-pin-line text-full"></i></h2>
            <h4 className="font-medium">{elem}</h4>
          </div>
        })
      }


    </div>
  )
}

export default LocationSearchPanel
