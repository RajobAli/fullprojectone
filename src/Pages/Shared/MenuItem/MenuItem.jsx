

const MenuItem = ({item}) => {
    const {name,image,price,category,recipe} = item;
    return (
        <div className="md:flex lg:flex space-x-2">
         <img style={{borderRadius:'0 200px 200px 200px'}} className="w-[120px]" src={image} alt="" />
         <div>
            <h3 className="uppercase">{name}-------</h3>
            <p>{price}</p>
         
            <p>{category}</p>
            <p className="text-green-500">{recipe}</p>
         </div>
            
        </div>
    );
};

export default MenuItem;