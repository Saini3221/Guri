function NotFound() {
  return (
    <div>
      <>
  {/* MDI Icons */}
  <link
    rel="stylesheet"
    href="https://cdn.materialdesignicons.com/6.5.95/css/materialdesignicons.min.css"
  />
  {/* Page Container */}
  <div className="flex items-center justify-center min-h-screen bg-white py-48">
    <div className="flex flex-col">
      {/* Notes */}
      <span className="text-center font-bold my-10 opacity-30">
        MDI (npm i @mdi/font) reuqired for all icons
        <hr className="my-4" />
        <a
          href="https://egoistdeveloper.github.io/twcss-to-sass/"
          target="_blank"
          className="text-blue-600"
        >
          Convetert to SASS
        </a>
      </span>
      {/* Error Container */}
      <div className="flex flex-col items-center">
        <div className="text-indigo-500 font-bold text-7xl">404</div>
        <div className="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10">
          This page does not exist
        </div>
        <div className="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
          The page you are looking for could not be found.
        </div>
      </div>
      {/* Continue With */}
      <div className="flex flex-col mt-48">
        <div className="text-gray-400 font-bold uppercase">Continue With</div>
        <div className="flex flex-col items-stretch mt-5">
          {/* Nav Item #1 */}
          <div
            className="flex flex-row group px-4 py-8
              border-t hover:cursor-pointer
              transition-all duration-200 delay-100"
          >
            {/* Nav Icon */}
            <div className="rounded-xl bg-blue-100 px-3 py-2 md:py-4">
              <i
                className="mdi mdi-home-outline mx-auto 
                      text-indigo-900 text-2xl md:text-3xl"
              />
            </div>
            {/* Text */}
            <div className="grow flex flex-col pl-5 pt-2">
              <div className="font-bold text-sm md:text-lg lg:text-xl group-hover:underline">
                Home Page
              </div>
              <div
                className="font-semibold text-sm md:text-md lg:text-lg
                      text-gray-400 group-hover:text-gray-500
                      transition-all duration-200 delay-100"
              >
                Everything starts here
              </div>
            </div>
            {/* Chevron */}
            <i
              className="mdi mdi-chevron-right text-gray-400 mdi-24px my-auto pr-2
                  group-hover:text-gray-700 transition-all duration-200 delay-100"
            />
          </div>
          {/* Nav Item #2 */}
          <div
            className="flex flex-row group px-4 py-8
              border-t hover:cursor-pointer
              transition-all duration-200 delay-100"
          >
            {/* Nav Icon */}
            <div className="rounded-xl bg-blue-100 px-3 py-2 md:py-4">
              <i
                className="mdi mdi-book-open-page-variant-outline mx-auto 
                      text-indigo-800 text-2xl md:text-3xl"
              />
            </div>
            {/* Text */}
            <div className="grow flex flex-col pl-5 pt-2">
              <div className="font-bold text-sm md:text-lg lg:text-xl group-hover:underline">
                Blog
              </div>
              <div
                className="font-semibold text-sm md:text-md lg:text-lg
                      text-gray-400 group-hover:text-gray-500
                      transition-all duration-200 delay-100"
              >
                Read our awesome articles
              </div>
            </div>
            {/* Chevron */}
            <i
              className="mdi mdi-chevron-right text-gray-400 mdi-24px my-auto pr-2
                  group-hover:text-gray-700 transition-all duration-200 delay-100"
            />
          </div>
          {/* Nav Item #3 */}
          <div
            className="flex flex-row group px-4 py-8
              border-t hover:cursor-pointer
              transition-all duration-200 delay-100"
          >
            {/* Nav Icon */}
            <div className="rounded-xl bg-blue-100 px-3 py-2 md:py-4">
              <i
                className="mdi mdi-archive-settings-outline 
                      mx-auto text-indigo-800 text-2xl md:text-3xl"
              />
            </div>
            {/* Text */}
            <div className="grow flex flex-col pl-5 pt-2">
              <div className="font-bold text-sm md:text-lg lg:text-xl group-hover:underline">
                Archive
              </div>
              <div
                className="font-semibold text-sm md:text-md lg:text-lg
                      text-gray-400 group-hover:text-gray-500
                      transition-all duration-200 delay-100"
              >
                Archived posts but still readable
              </div>
            </div>
            {/* Chevron */}
            <i
              className="mdi mdi-chevron-right text-gray-400 mdi-24px my-auto pr-2
                  group-hover:text-gray-700 transition-all duration-200 delay-100"
            />
          </div>
          {/* Nav Item #3 */}
          <div
            className="flex flex-row group px-4 py-8
              border-t hover:cursor-pointer
              transition-all duration-200 delay-100"
          >
            {/* Nav Icon */}
            <div className="rounded-xl bg-blue-100 px-3 py-2 md:py-4">
              <i
                className="mdi mdi-at mx-auto 
                      text-indigo-800 text-2xl md:text-3xl"
              />
            </div>
            {/* Text */}
            <div className="grow flex flex-col pl-5 pt-2">
              <div className="font-bold text-sm md:text-lg lg:text-xl group-hover:underline">
                Contact
              </div>
              <div
                className="font-semibold text-sm md:text-md lg:text-lg
                      text-gray-400 group-hover:text-gray-500
                      transition-all duration-200 delay-100"
              >
                Contact us for your questions
              </div>
            </div>
            {/* Chevron */}
            <i
              className="mdi mdi-chevron-right text-gray-400 mdi-24px my-auto pr-2
                  group-hover:text-gray-700 transition-all duration-200 delay-100"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    </div>
  )
}

export default NotFound