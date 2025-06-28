
import { useQuery } from '@tanstack/react-query';
// import { FacebookShareButton, FacebookIcon } from 'react-share';
import useAxiosCommon from '../../Pages/hooks/useAxiosCommon';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import {fadeIn} from '../HomeComponent/Variant/Variant'

const TouristStorySection = () => {
    const axiosCommon = useAxiosCommon()
    const {data:stories = []} = useQuery({
        queryKey: ['story'],
        queryFn: async () =>{
            const {data} = await axiosCommon.get('/story')
            return data
        }
    })
    
    return ( 
        <div
            

         className="container mx-auto text-center">
                <div className=" py-12 px-8 mb-40">
                <h2 className="text-white text-lg font-bold md:text-3xl mb-8">Tourist Stories </h2>
                {/* story card */}
              
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {stories.slice(0,4).map(story => (
                         <Link key={story?._id} to={`/story-details-page/${story?._id}`}>
                            <motion.div
                            variants={fadeIn('up',0.2)}
                            initial = 'hidden'
                            whileInView={'show'}
                            viewport={{once:false, amount: 0.7}}
                              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                            <img src={story?.spotImage} alt={story?.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-white text-xl mb-2">{story?.title}</h3>
                            
                                <div className="flex justify-between items-center">
                                  
                                    {/* <FacebookShareButton url={`https://yourwebsite.com${story.link}`} quote={story.title}>
                                        <FacebookIcon size={32} round />
                                    </FacebookShareButton> */}
                                </div>
                            </div>
                        </motion.div>
                         </Link>
                    ))}
                </div>
           
               <Link to='/all-story'> <button className="mt-12 btn btn-secondary text-white py-2 px-4 rounded">
                    All Stories
                </button></Link>
            </div>
        </div>
    );
};

export default TouristStorySection;
