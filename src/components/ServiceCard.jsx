
const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className="flex-1  w-full  sm:min-w-[250px]  flex-col bg-white px-10 py-16 rounded-[20px] shadow-3xl ">
        <div className="flex bg-coral-red p-2 rounded-full w-11 h-11 mb-6 justify-center items-center">
          <img src={imgURL} alt="service" className="  w-[45px]" />
        </div>

        <h3 className="mb-6 font-palanquin font-bold leading-8 text-3xl">{label}</h3>
        <p className="font-montserrat text-slate-gray text-lg break-words  ">{subtext}</p>
     
    </div>
  )
}

export default ServiceCard