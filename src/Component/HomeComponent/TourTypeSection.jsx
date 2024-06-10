import { Link } from "react-router-dom";

import { FaCity } from "react-icons/fa";
import { GiForest } from "react-icons/gi";
import { SiAdventofcode } from "react-icons/si";
import { MdOutlineAgriculture } from "react-icons/md";
import { MdManageHistory } from "react-icons/md";
import { FaUmbrellaBeach } from "react-icons/fa6";
const TourTypeSection = () => {
    const tourTypes = [
        { name: 'City', icon: <FaCity className="flex justify-center items-center text-fuchsia-600 text-center w-full text-lg" />, image: "https://example.com/photo6.jpg" },
        { name: 'Wildlife', icon: <GiForest className="flex justify-center items-center text-fuchsia-600 text-center w-full text-lg" />, image: "https://example.com/photo5.jpg" },
        { name: 'Cultural', icon: <MdOutlineAgriculture className="flex justify-center items-center text-fuchsia-600 text-center w-full text-lg" />, image: "https://example.com/photo4.jpg" },
        { name: 'Adventure', icon: <SiAdventofcode className="flex justify-center items-center text-fuchsia-600 text-center w-full text-lg" />, image: ' "https://example.com/photo3.jpg"' },
        { name: 'Historical', icon: <MdManageHistory className="flex justify-center items-center text-fuchsia-600 text-center w-full text-lg" />, image: 'https://example.com/photo2.jpg' },
        { name: 'Beach', icon: <FaUmbrellaBeach className="flex justify-center items-center text-fuchsia-600 text-center w-full text-lg" />, image: 'https://i.ibb.co/30N26nq/sea-beach.jpg' },
    ];
    


    return (
        <div className="rounded-lg py-12 mb-40">
            <div className="container mx-auto text-center">
                <h2 className="text-white text-3xl mb-4">Find a Tour by</h2>
                <h3 className="text-blue-500 text-2xl mb-8">TOUR TYPE</h3>
                <div className="flex  justify-center space-x-4 overflow-x-auto">
                    {tourTypes.map((tourType, index) => (
                        <Link to={`/TourTypePage/${tourType?.name}`} key={index}>
                            <div className="flex-shrink-0  cursor-pointer">
                                <div style={{ backgroundImage: `url(${tourType?.image})`, backgroundSize: 'cover' }} className="   hover:scale-105 transition-transform duration-300 h-32 w-32 flex flex-col justify-center items-center rounded-full  p-6">
                                    {tourType?.icon}
                                    <span className="text-black font-semibold text-lg">{tourType.name}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TourTypeSection;
