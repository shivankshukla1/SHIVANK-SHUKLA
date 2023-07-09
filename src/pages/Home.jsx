import React from 'react'
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon} from 'react-share';
export const Home = () => {
    
    const refreshPage = () =>{
        window.location.reload(); 
    }
    const ID = Math.floor(Math.random() * (1000 - 1 + 1) + 1);
    const URL = "https://picsum.photos/id/" + ID + "/400"; 
    console.log(URL);
    return (
    <div  class="max-w-screen-xl flex flex-nowrap items-center justify-center mx-auto p-4">
    <div className="max-w-md rounded-md shadow-md bg-gray-50 text-gray-800">
        <img src= {URL} alt="" className="object-cover object-center w-full rounded-t-md h-128 bg-gray-500" />
        <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
                <h2 className="text-xl md:text-3xl font-semibold tracki">Your Random Photo</h2>
            </div>
            <button onClick={refreshPage}type="button" className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md bg-violet-600 text-gray-50">Refresh this page</button>
            <div className='grid grid-cols-3'>
                <div className='mx-auto'>
                    <FacebookShareButton
                        url={URL}
                        quote={'This is the random image'}
                        hashtag="#muo"
                    >
                        <FacebookIcon size={45} round />
                    </FacebookShareButton>  
                </div>
   
                <div className='mx-auto'>
                    <TwitterShareButton
                    url={URL}
                    quote={'This is the random image'}
                    >
                    <TwitterIcon size={45} round />
                    </TwitterShareButton> 
                </div>
                    
                <div className='mx-auto'>
                    <WhatsappShareButton
                    url={URL}
                    quote={'This is the random image'}
                    >
                    <WhatsappIcon size={45} round />
                    </WhatsappShareButton>
                </div>
                     
        </div>
        </div>
    </div>
    </div>

  )
}
