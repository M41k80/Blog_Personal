function ServiceCard({data, index}){
    return (

        <div 
         onMouseEnter={()=>{
            const div_title = document.getElementById(index);
            div_title.classList.add('text-violet-700');
           
        }}
        onMouseLeave={()=>{
            const div_title = document.getElementById(index);
            div_title.classList.remove('text-violet-700');
           
        }} 
        className="w-full relative p-8 h-96 lg:h-[200pm] bg-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition duration-300 ease-in-out">
            <div className="w-full">
                <img src={data.img} className="w-10 h-10" />
                <h2 className="text-xl font-semibold text-gray-900 pt-10">{data.title}</h2>
                <p className="text-lg font-regular text-gray-500 pt-4">{data.title}</p>    
            </div>
            <div className="absolute bottom-0 left-0 p-8">
                    <h2 id={index} className="iteams-end text-xl font-semibold pt-8">Learn More</h2>
            </div>
        </div>
    )
}

export default ServiceCard;