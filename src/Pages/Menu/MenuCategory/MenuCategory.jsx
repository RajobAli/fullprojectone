import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({items,title,img}) => {
    return (
        <div className="pt-8">
            {
            title && <Cover img={img} title={title}></Cover>
            }
               <div className="grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 mt-16 gap-4 my-4">
            {
               items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
            }
         </div>

        </div>
    );
};

export default MenuCategory;