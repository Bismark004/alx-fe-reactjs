const CardLayout = (props) => {
    const { title , summary , image} = props;

    return (
       
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="w-full bg-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
                    <div className="w-full md:w-2/5 h-80">
                      <img src={image} alt={title}  className="object-center object-cover w-full h-full"/>

                    </div>

                    <div className="w-full md:w-2/5 text-left p-6 md:p-4 space-y-2">
                      <h1 className="text-xl text-white font-bold">{title}</h1>
                      <p className="text-base leading-relaxed text-gray-500 font-normal">{summary}</p>
                      

                    </div>
                 
                  

                </div>
              
            </div>
           

        
    )
}
export default CardLayout;