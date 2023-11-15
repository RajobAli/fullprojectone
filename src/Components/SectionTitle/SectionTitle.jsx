

const SectionTitle = ({heading,subHeading}) => {

    return (
       
        <div className="mx-auto text-center md:w-4/12">
            <p className="text-yellow-600 mb-2 text-2xl">---{subHeading}---</p>
            <h3 className="text-3xl uppercase mb-4 py-2 font-bold border-y-2">{heading}</h3>
   
  
            
        </div>
        
    );
};

export default SectionTitle;