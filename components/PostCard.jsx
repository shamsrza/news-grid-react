import React from 'react';

import moment from 'moment';
import Link from 'next/link';

// const PostCard1 = ({post}) => {
//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 lg:col-span-2 ... bg-white rounded">
//     <div className=" h-auto p-[15px]">
//       <img
//         src={post.featuredImage.url}
//         alt={post.title}
//         className="h-full rounded object-cover"
//       />
//     </div>
  
//     <div className="p-[15px]">
//       <div className={`text-white px-[10px] py-[6px] text-[8px] uppercase rounded-2xl inline-block mb-4 bg-${post.categories[0].name}` }>
//         {post.categories[0].name}
//       </div>
//       <h3 className={`transition duration-100 text-left mb-2 cursor-pointer text-l font-semibold leading-tight`}>
//         <Link href={`/post/${post.slug}`}>{post.title}</Link>
//       </h3>
  
//       <div className="flex flex-row align-center justify-left gap-2 mb-4 h-4">
//         <div className='flex flex-row'>
//           <img
//             src={post.author.photo.url}
//             alt={post.author.name}
//             height="15px"
//             width="15px"
//             className="align-middle rounded-full mr-1"
//           />
//           <p className="text-[11px] font-bold">{post.author.name}</p>              
//         </div>
  
//         <div className="flex flex-row h-full text-[11px] text-gray-700">
//           <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className=" h-full w-5 text-red-600"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//               />
//             </svg>  
//             <span>
//               {moment(post.createdAt).format('MMM DD, YYYY')}
//             </span>             
//         </div>
//       </div>
//        <div>
//         <p className="text-[14px]">{post.excerpt}</p>
//         <Link href={`/post/${post.slug}`}>
//           <div className={`flex items-center my-4 text-${post.categories[0].name} text-[10px] uppercase cursor-pointer font-bold`}>
//             continue reading
//             <div className='loader rounded-full flex space-x-2 ml-2'>
//               <div class={`w-[6px] h-[6px] bg-${post.categories[0].name} rounded-full animate-bounce`}></div>
//               <div class={`w-[6px] h-[6px] bg-${post.categories[0].name} rounded-full animate-bounce `}></div>
//               <div class={`w-[6px] h-[6px] bg-${post.categories[0].name} rounded-full animate-bounce`}></div>
//             </div>
//           </div>
//         </Link>
//       </div>
//     </div>
//   </div>   
//   )
// }

// const PostCard2 = ({post}) => {
//   return(
//     <div className="... bg-white rounded">
//     <div className="p-[15px]">
//       <div className={`text-white px-[10px] py-[6px] text-[8px] uppercase rounded-2xl inline-block mb-4 bg-${post.categories[0].name}` }>
//         {post.categories[0].name}
//       </div>
//       <h3 className={`transition duration-100 text-left mb-2 cursor-pointer text-l font-semibold leading-tight`}>
//         <Link href={`/post/${post.slug}`}>{post.title}</Link>
//       </h3>
  
//       <div className="flex flex-row align-center justify-left gap-2 mb-4 h-4">
//         <div className='flex flex-row'>
//           <img
//             src={post.author.photo.url}
//             alt={post.author.name}
//             height="15px"
//             width="15px"
//             className="align-middle rounded-full mr-1"
//           />
//           <p className="text-[11px] font-bold">{post.author.name}</p>              
//         </div>
  
//         <div className="flex flex-row h-full text-[11px] text-gray-700">
//           <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className=" h-full w-5 text-red-600"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//               />
//             </svg>  
//             <span>
//               {moment(post.createdAt).format('MMM DD, YYYY')}
//             </span>             
//         </div>
//       </div>
//        <div>
//         <p className="text-[14px]">{post.excerpt}</p>
//         <Link href={`/post/${post.slug}`}>
//           <div className={`flex items-center my-4 text-${post.categories[0].name} text-[10px] uppercase cursor-pointer font-bold`}>
//             continue reading
//             <div className='loader rounded-full flex space-x-2 ml-2'>
//               <div class={`w-[6px] h-[6px] bg-${post.categories[0].name} rounded-full animate-bounce`}></div>
//               <div class={`w-[6px] h-[6px] bg-${post.categories[0].name} rounded-full animate-bounce `}></div>
//               <div class={`w-[6px] h-[6px] bg-${post.categories[0].name} rounded-full animate-bounce`}></div>
//             </div>
//           </div>
//         </Link>
//       </div>
//     </div>
//   </div>
//   )
// }

const PostCard = ({post}) => {
  // console.log(post);
  return (
    // <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:col-span-3">
    
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:col-span-2 ... bg-white rounded">
    <div className=" h-auto p-[15px]">
      <img
        src={post.featuredImage.url}
        alt={post.title}
        className="h-full rounded object-cover"
      />
    </div>
  
    <div className="p-[15px]">
      <div className={`text-white px-[10px] py-[6px] text-[8px] uppercase rounded-2xl inline-block mb-4 bg-${post.categories[0].name}` }>
        {post.categories[0].name}
      </div>
      <h3 className={`transition duration-100 text-left mb-2 cursor-pointer text-l font-semibold leading-tight`}>
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h3>
  
      <div className="flex flex-row align-center justify-left gap-2 mb-4 h-4">
        <div className='flex flex-row'>
          <img
            src={post.author.photo.url}
            alt={post.author.name}
            height="15px"
            width="15px"
            className="align-middle rounded-full mr-1"
          />
          <p className="text-[11px] font-bold">{post.author.name}</p>              
        </div>
  
        <div className="flex flex-row h-full text-[11px] text-gray-700">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" h-full w-5 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>  
            <span>
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </span>             
        </div>
      </div>
       <div>
        <p className="text-[14px]">{post.excerpt}</p>
        <Link href={`/post/${post.slug}`}>
          <div className={`flex items-center my-4 text-${post.categories[0].name} text-[10px] uppercase cursor-pointer font-bold`}>
            continue reading
            <div className='loader rounded-full flex space-x-2 ml-2'>
              <div class={`w-[6px] h-[6px] bg-${post.categories[0].name} rounded-full animate-bounce`}></div>
              <div class={`w-[6px] h-[6px] bg-${post.categories[0].name} rounded-full animate-bounce `}></div>
              <div class={`w-[6px] h-[6px] bg-${post.categories[0].name} rounded-full animate-bounce`}></div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  </div>  
    
    
    //  <div className="... bg-black rounded"> </div> 
    //   </div> 
    //   <div className="... bg-red-500">02</div>
    //   <div className="... bg-red-500">03</div>
    //   <div className="... bg-red-500">04</div>
    //   <div className="... bg-red-500">05</div>
    //   <div className="... bg-red-500">06</div>
    //   <div className="lg:col-span-2 ... bg-red-500">07</div> 
    // </div>
  );
}

export default PostCard
