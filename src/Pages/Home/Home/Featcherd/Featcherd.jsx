import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import featuredimg from '../../../../assets/home/featured.jpg'
import './featured.css'


const Featcherd = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
            subHeading="check it out"
            heading="Feachured Item"
            >

            </SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-60">
                <div>
                    <img src={featuredimg} alt="" />
                </div>
                <div className="ml-4">
                    <p>Agu 20,2024</p>
                    <p className="uppercase">Where can I get some ?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Sequi ut perspiciatis optio, tempore explicabo obcaecati 
                        laudantium, assumenda soluta incidunt minus maiores vel, 
                        voluptas officiis sint. Minima iusto nihil in iste.</p>
                        <button className="btn btn-outline border-0 border-b-4 text-green-500">Order Now</button>
                </div>
            </div>
            
        </div>
    );
};

export default Featcherd;