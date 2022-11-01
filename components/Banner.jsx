import React from 'react';
import moment from 'moment';
import Link from 'next/link';

const Banner = ({post}) => {
  return (
    <div className="container mx-auto px-10">
       <div className="grid grid-cols-2 justify-center items-center h-[50vh]">
           <div className="z-10 w-[80vw] lg:w-[30vw]">
           <div className={`text-white px-[10px] py-[6px] text-[8px] uppercase rounded-2xl inline-block mb-4 bg-${post.categories[0].name}`}>
               {post.categories[0].name}
            </div>  
                      
            <h3 className={`font-bold tracking-tighter leading-7 text-[29px] lg:text-[32px] mb-4 transition duration-100 text-left mb-2 cursor-pointer text-l font-semibold leading-tight`}>
             <Link href={`/post/${post.slug}`}>{post.title}</Link>
            </h3>
            <p className="mb-6 text-[14px]">{post.excerpt}</p>

            <Link href={`/post/${post.slug}`}>
                <div className="bg-red-700 py-3 rounded cursor-pointer uppercase font-bold text-[12px] lg:text-[14px] text-center w-1/3">Read More</div>
            </Link>
           </div>
       </div>            
    </div>
  )
}

export default Banner
