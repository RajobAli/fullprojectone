import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import Featcherd from "./Featcherd/Featcherd";
import Testimonial from "./Testimonial/Testimonial";



const Home = () => {
    return (
        <div>
              <Helmet>
                <title>Bistro | Home</title>
            </Helmet>
        <Banner></Banner>
        <Category></Category>
        <PopularMenu></PopularMenu>
        <Featcherd></Featcherd>
        <Testimonial></Testimonial>
    
            
        </div>
    );
};

export default Home;