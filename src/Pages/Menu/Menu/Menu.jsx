
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import offeredImg from '../../../assets/menu/menu-bg.png'
// import PopularMenu from '../../Home/PopularMenu/PopularMenu';
import UseMenu from '../../../hooks/UseMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = UseMenu();
    const desserts = menu.filter(item =>item.category === 'dessert');
    const soup = menu.filter(item =>item.category === 'soup');
    const salad = menu.filter(item =>item.category === 'salad');
    const pizza = menu.filter(item =>item.category === 'pizza');
    const offered = menu.filter(item =>item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
          <Cover img={menuImg} title="Our Menu"></Cover>
          {/* main cover  */}
          <SectionTitle subHeading="Dont Miss" heading="Today's Offer"></SectionTitle>
           {/* <PopularMenu></PopularMenu>
          <Cover img={menuImg} title="Our Menu"></Cover>
          <PopularMenu></PopularMenu>
          <Cover img={menuImg} title="Our Menu"></Cover>
          <PopularMenu></PopularMenu>  */}
          {/* Offered */}
          <MenuCategory items={offered}></MenuCategory>
          {/* desert menu items */}
          <MenuCategory 
          items={desserts} title="Dessert" img={dessertImg}></MenuCategory>
        
        <MenuCategory items={pizza} title="Pizza" img={pizzaImg}></MenuCategory>
        <MenuCategory items={salad} title="Salad" img={saladImg}></MenuCategory>
    
        <MenuCategory items={soup} title="Soup" img={soupImg}></MenuCategory>
        <MenuCategory items={offered} title="Offered" img={offeredImg}></MenuCategory>
            
        </div>
    );
};

export default Menu;