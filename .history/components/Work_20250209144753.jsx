import { assets, workData } from '@/assets/assets';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import { CgWebsite } from 'react-icons/cg';

const Work = ({ isDark }) => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My Portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My Latest Projects</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
      Here are some of my recent projects, showcasing my expertise in web
       development, full-stack solutions, and API integration. These projects
        demonstrate my ability to build high-performance applications
         with intuitive user experiences, modern design principles, and secure 
         architecture.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-10">
  {workData.map((work, index) => (
    <div
      key={index}
      className="flex flex-col bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden group cursor-pointer"
    >
      <div
        className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 mb-4"
        style={{ backgroundImage: `url(${work.bgImage})` }}
      ></div>

      <div
        className="p-5 w-full flex flex-col flex-grow transition-all duration-500 group-hover:-translate-y-2"
      >
        <h2 className="font-semibold text-lg dark:text-white text-center">
          {work.title}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 text-justify flex-grow">
          {work.description}
        </p>

        <div className="mt-10 flex justify-between items-center">
          <Link
            href={work.website}
            target="_blank"
            className="flex items-center gap-2 text-sm text-gray-800 dark:text-white hover:text-blue-500 transition-colors"
          >
            <CgWebsite className="text-xl" /> Live Demo
          </Link>

          <Link
            href={work.github}
            target="_blank"
            className="flex items-center gap-2 text-sm text-gray-800 dark:text-white hover:text-gray-600 transition-colors"
          >
            <BsGithub className="text-xl" /> GitHub
          </Link>
        </div>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default Work;
