import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

// import { grpahCMSImageLoader } from '../util';
import { getSimilarPosts, getRecentPosts } from '../services';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  console.log (relatedPosts)
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-6 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4 text-center">{slug ? 'Related Posts' : 'Recent Posts'}</h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <Image
              // loader={grpahCMSImageLoader}
              alt={post.title}
              height="70px"
              width="70px"
              unoptimized
              className="align-middle rounded-xl"
              src={post.featuredImage.url}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 text-[11px]">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
            <Link href={`/post/${post.slug}`} key={post.title} className="text-md">{post.title}</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;