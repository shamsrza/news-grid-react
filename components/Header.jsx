import React, {useState, useEffect} from 'react'
import Link from 'next/link';
import { getCategories } from '../services'


const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, []);

  return (
    <div className="container mx-auto px-10 flex relative">
    <div className="w-full inline-block py-5">
      <div className="md:float-left block">
        <Link href="/">
          <span className="cursor-pointer">
            <img src="/images/logo.png" alt="" className="w-[150px]" />
          </span>
        </Link>
      </div>
    </div>
    {/* Categories */}
    <div className="p-10 hidden md:float-left md:contents">
      <div className="dropdown inline-block rounded">
        <button className="mt-3 text-black-600 hover:text-white hover:bg-red-700 font-semibold py-2 px-4 rounded inline-flex items-center">
          <span className="mr-1">Categories</span>
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
          </svg>
        </button>
        <ul className="dropdown-menu hidden text-gray-700 pt-1 z-10 absolute rounded-[15px]">
          {categories.map((category)=>(
              <li className="">
                  <Link key={category.slug} href={`/category/${category.slug}`}>
                      <span className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap z-10 cursor-pointer">
                          {category.name}
                      </span>
                  </Link>
              </li>                
          ))}

        </ul>
      </div>
    </div>
  </div>
  );
}

export default Header
