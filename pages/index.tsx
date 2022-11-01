import Head from 'next/head';
import {PostCard, PostCardNoImage, Categories, PostWidget, Header, PostCardSecond, Banner } from '../components';
import {getPosts} from '../services';


// const posts =[
//   {title: 'React Testing', excerpt: 'Learn React testing'},
//   {title: 'React with Tailwind', excerpt: 'Learn React with Tailwind'},
//   {title: 'React Testing', excerpt: 'Learn React testing'},
//   {title: 'React with Tailwind', excerpt: 'Learn React with Tailwind'},
//   {title: 'React Testing', excerpt: 'Learn React testing'},
//   {title: 'React with Tailwind', excerpt: 'Learn React with Tailwind'},
// ];

export default function Home({posts}) {
const postsId = posts.id;
  
console.log(posts);

  return (
    <div className="mx-auto mb-8 w-full">

      <Head>
        <title>NewsGrid | Latest News </title>
        <link rel="icon" href="/images/icon.png" />
      </Head>

      {/* Banner */}
      <div className="overflow-x-hidden text-white h-[50vh] bg-black relative before:content-[''] before:w-full before:h-[50vh] before:absolute before:mb-96 before:opacity-50 before:bg-[url('/images/featured.jpg')] before:bg-no-repeat before:bg-cover before:bg-center ...">
        {posts.map((post) => (
              ((post.node.slug == 'cowboys'))
              ? (<Banner post={ post.node } key={ post.title } /> ) 
                : null
        ))}     
      </div>   
     
     
      {/* Grid */}
      <div className="container mx-auto px-10 my-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:col-span-3 ">


          <div className='grid gap-4 lg:col-span-2 shadow-lg'>
            {posts.map((post) => (
              ((post.node.slug == 'uci-cwc-2023'))
              ? (<PostCard post={ post.node } key={ post.title } /> ) 
                : null
              ))}             
          </div>

               
          <div className='grid gap-4 lg:col-span-1 shadow-lg'>
            {posts.map((post) => (
              ((post.node.slug == 'meta'))
              ? (<PostCardNoImage post={ post.node } key={ post.title }/> ) 
                : null
              ))}              
          </div>


            {posts.map((post) => (
              ((post.node.slug == 'cristiano-ronaldo-manchester-united') || (post.node.slug == 'angela-lansbury-dead') || (post.node.slug == 'meta-vr-headset' ))
              ? (<PostCardSecond post={ post.node } key={ post.title } /> ) 
                : null
              ))}             

          <div className='grid gap-4 lg:col-span-1 shadow-lg '>
            {posts.map((post) => (
              ((post.node.slug == 'cristiano-ronaldo'))
              ? (<PostCardNoImage post={ post.node } key={ post.title} /> ) 
                : null
              ))}              
          </div>
          <div className='grid gap-4 lg:col-span-2 shadow-lg'>
            {posts.map((post) => (
              ((post.node.slug == 'five-hours-sleep'))
              ? (<PostCard post={ post.node } key={ post.title } /> ) 
                : null
              ))}             
          </div>

       </div> 

          <div className="grid lg:grid-cols-1 gap-4 lg:sticky relative top-8 h-24">
            <PostWidget />
            <Categories/>
          </div>
        </div>

        {/* <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 cols-span-1">
            { posts.map((post) => (<PostCard post={ post } key={ post.title }/>)) }
          </div>
          <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
              <PostWidget/>
              <Categories/>
            </div>
          </div>
        </div> */}

      </div>

      {/* Footer */}
      <div className="footer w-full bg-green-700">Footer</div>
    </div>
  )
}

export async function getStaticProps() {
   const posts = (await getPosts ()) || [];

   return {
      props: {posts}
   }
}


