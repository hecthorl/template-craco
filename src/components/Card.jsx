const Card = () => {
   return (
      <section className="text-gray-400 bg-gradient-to-r from-gray-500 to-gray-700 body-font">
         <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
               <div className="p-4 md:w-1/2 lg:w-1/3">
                  <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                     <img
                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                        src="https://dummyimage.com/720x400"
                        alt="blog"
                     />
                     <div className="p-6">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                           CATEGORY
                        </h2>
                        <h1 className="title-font text-lg font-medium text-white mb-3">
                           The Catalyzer
                        </h1>
                        <p className="leading-relaxed mb-3">
                           Photo booth fam kinfolk cold-pressed sriracha
                           leggings jianbing microdosing tousled waistcoat.
                        </p>
                        <div className="flex items-center flex-wrap ">
                           <button className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">
                              Learn More {'->'}
                           </button>
                           <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                              1.2K
                           </span>
                           <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                              6
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="p-4 md:w-1/2 lg:w-1/3">
                  <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                     <img
                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                        src="https://dummyimage.com/721x401"
                        alt="blog"
                     />
                     <div className="p-6">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                           CATEGORY
                        </h2>
                        <h1 className="title-font text-lg font-medium text-white mb-3">
                           The 400 Blows
                        </h1>
                        <p className="leading-relaxed mb-3">
                           Photo booth fam kinfolk cold-pressed sriracha
                           leggings jianbing microdosing tousled waistcoat.
                        </p>
                        <div className="flex items-center flex-wrap">
                           <button className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">
                              Learn More {'->'}
                           </button>
                           <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                              1.2K
                           </span>
                           <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                              6
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="p-4 md:w-1/2 lg:w-1/3">
                  <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                     <img
                        className="lg:h-48 md:h-36 w-full object-center object-cover"
                        src="https://dummyimage.com/722x402"
                        alt="blog"
                     />
                     <div className="p-6">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                           CATEGORY
                        </h2>
                        <h1 className="title-font text-lg font-medium text-white mb-3">
                           Shooting Stars
                        </h1>
                        <p className="leading-relaxed mb-3">
                           Photo booth fam kinfolk cold-pressed sriracha
                           leggings jianbing microdosing tousled waistcoat.
                        </p>
                        <div className="flex items-center flex-wrap ">
                           <button className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">
                              Learn More {'->'}
                           </button>
                           <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                              1.2K
                           </span>
                           <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                              6
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Card;
/**
 *    <div classNameName="md:bg-pink-200 bg-pink-200 max-w-custom lg:w-1/4 rounded-lg h-auto shadow-3xl">
         <img
            src="https://i.picsum.photos/id/892/600/300.jpg?hmac=edJ_RFuf-o1manb6FcYmStXK-htcPKQ0D5ewHkQWPNU"
            classNameName="mx-auto max-w-full min-h-1/3 rounded-t-lg"
            alt="img"
         />
         <div classNameName="px-5 pb-6 max-h-full">
            <h2 classNameName="py-3 text-3xl font-akaya text-gray-900 font-bold">
               Una imagen!
            </h2>
            <p classNameName="text-xl text-gray-800 text-justify">
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
               magnam nostrum odio hic esse repellendus cumque sit facilis nam
               consectetur omnis aut nobis odit perferendis sequi quis,
               molestias fuga culpa!
            </p>
         </div>
      </div>
 */
