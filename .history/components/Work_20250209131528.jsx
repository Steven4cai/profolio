<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-10">
  {workData.map((work, index) => (
    <div
      key={index}
      className="flex flex-col bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden group cursor-pointer"
    >
      {/* 背景图片部分 */}
      <div
        className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${work.bgImage})` }}
      ></div>

      {/* 文字部分 */}
      <div
        className="p-5 w-full flex flex-col flex-grow transition-all duration-500 group-hover:-translate-y-2"
      >
        <h2 className="font-semibold text-lg dark:text-white text-center">
          {work.title}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 text-justify flex-grow">
          {work.description}
        </p>

        {/* 按钮部分 */}
        <div className="mt-4 flex justify-between items-center">
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
