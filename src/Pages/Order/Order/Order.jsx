
import { useState } from 'react';
import orderCover from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import UseMenu from '../../../hooks/UseMenu';

import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
    const categories = ['salad','pizza','soap','dessert','drinks'];

  const {category} = useParams();
    // const [tabIndex,setTabIndex]= useState(0);
    const initialIndex = categories.indexOf(category);
    const [tabIndex,setTabIndex] = useState(initialIndex)
    const [menu] = UseMenu();
 
    const desserts = menu.filter(item =>item.category === 'dessert');
    const soup = menu.filter(item =>item.category === 'soup');
    const salad = menu.filter(item =>item.category === 'salad');
    const pizza = menu.filter(item =>item.category === 'pizza');
    const drinks = menu.filter(item =>item.category === 'drinks');
    const offered = menu.filter(item =>item.category === 'offered');


    return (
        <div>
                 <Helmet>
                <title>Bistro | Order Food</title>
            </Helmet>
            <Cover img={orderCover} title="Order Food"></Cover><div className="tabs tabs-lifted">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Drinks</Tab>
                        <Tab>Offered</Tab>
                      
                    </TabList>
                    <TabPanel>
                        <OrderTab items={salad}></OrderTab>
                 
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={pizza}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                    <OrderTab items={desserts}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                    <OrderTab items={offered}></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>

        </div>
    );
};

export default Order;