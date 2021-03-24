module.exports = {
   purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
      extend: {
         colors: {
            cyan: {
               DEFAULT: '#00FFFF',
               50: '#E5FFFF',
               100: '#CCFFFF',
               200: '#99FFFF',
               300: '#66FFFF',
               400: '#33FFFF',
               500: '#00FFFF',
               600: '#00CCCC',
               700: '#009999',
               800: '#006666',
               900: '#003333',
            },
            red: {
               DEFAULT: '#FF0000',
               50: '#FFE5E5',
               100: '#FFCCCC',
               200: '#FF9999',
               300: '#FF6666',
               400: '#FF3333',
               500: '#FF0000',
               600: '#CC0000',
               700: '#990000',
               800: '#660000',
               900: '#330000',
            },
         },
         // fontFamily: {
         //    akaya: 'Akaya Telivigala',
         // },
         animation: {
            fading: 'fade-in-down 0.8s ease',
            // fadingout: 'fade-up-out 0.8s ease',
            switching: 'fade-in-left 0.8 ease',
         },
         keyframes: {
            'fade-in-down': {
               from: {
                  // transform: 'translate3d(0,-100% , 0)',
                  transform: 'translateY(-100%)',
               },

               to: {
                  transform: 'translateY(0)',
               },
            },
            'fade-in-left': {
               from: {
                  transform: 'translate3d(-100%, 0, 0)',
               },
               to: {
                  transform: 'translate3d(0, 0, 0)',
               },
            },
            // 'fade-up-out': {
            //    from: {
            //       opacity: 1,
            //    },

            //    to: {
            //       opacity: 1,
            //       transform: 'translateY(-100%)',
            //    },
            // },
         },

         boxShadow: {
            '3xl': '6px 6px 10px 0px rgb(0 0 0 / 44%)',
         },
         minHeight: {
            '1/2': '50%',
            '1/3': '33.3%',
            56: '56px',
         },
         maxWidth: {
            custom: '600px',
         },
         backdropFilter: {
            // defaults to {}
            none: 'none',
            blur: 'blur(20px)',
         },
      },
   },
   variants: {
      extend: {
         filter: ['responsive'], // defaults to ['responsive']
         backdropFilter: ['responsive'], // defaults to ['responsive']
      },
   },
   plugins: [require('@tailwindcss/forms'), require('tailwindcss-filters')],
};
