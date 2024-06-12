
import { useQuery } from '@tanstack/react-query';
// import { FacebookShareButton, FacebookIcon } from 'react-share';
import useAxiosCommon from '../../Pages/hooks/useAxiosCommon';
import { Link } from 'react-router-dom';
import Loading from './Loading/Loading';

const TouristStorySection = () => {
    const axiosCommon = useAxiosCommon()
    const {data:stories = [], isLoading} = useQuery({
        queryKey: ['story'],
        queryFn: async () =>{
            const {data} = await axiosCommon.get('/story')
            return data
        }
    })
    if(isLoading){
        return <Loading></Loading>
    }
    return ( 
        <div className="container mx-auto text-center">
                <div className=" py-12 px-8 mb-40">
                <h2 className="text-white text-lg font-bold md:text-3xl mb-8">Tourist Stories </h2>
                {/* story card */}
              
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {stories.slice(0,4).map(story => (
                         <Link key={story?._id} to={`/story-details-page/${story?._id}`}>
                            <div  className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                            <img src={story?.spotImage} alt={story?.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-white text-xl mb-2">{story?.title}</h3>
                            
                                <div className="flex justify-between items-center">
                                  
                                    {/* <FacebookShareButton url={`https://yourwebsite.com${story.link}`} quote={story.title}>
                                        <FacebookIcon size={32} round />
                                    </FacebookShareButton> */}
                                </div>
                            </div>
                        </div>
                         </Link>
                    ))}
                </div>
           
                <button className="mt-8 btn btn-secondary text-white py-2 px-4 rounded">
                    <a href="/all-stories">All Stories</a>
                </button>
            </div>
        </div>
    );
};

export default TouristStorySection;
