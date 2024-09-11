const CardLayout = (props) => {
    const { title , summary , image} = props;

    return (
       
            
                <div className="w-full bg-gray-900 hover:bg-gray-800 rounded shadow overflow-hidden flex flex-col md:flex-row">
                    <div className="w-full md:w-2/5 h-80">
                      <img src={image} alt={title}  className="object-center object-cover w-full h-full"/>

                    </div>

                    <div className="w-full md:w-2/5 text-left p-6 md:p-4 space-y-2">
                      <h1 className="text-xl text-white font-bold">{title}</h1>
                      <p className="text-base leading-relaxed text-gray-500 font-normal">{summary}</p>
                      

                    </div>
                 
                  

                </div>
              
            
           

        
    )
}
export default CardLayout;