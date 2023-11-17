
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import PopularMenu from '../../Home/PopularMenu/PopularMenu';
import UseMenu from '../../../hooks/UseMenu';

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
          <PopularMenu></PopularMenu>
          <Cover img={menuImg} title="Our Menu"></Cover>
          <PopularMenu></PopularMenu>
          <Cover img={menuImg} title="Our Menu"></Cover>
          <PopularMenu></PopularMenu>
            
        </div>
    );
};

export default Menu;