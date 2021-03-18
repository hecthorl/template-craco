const cssnano = require('cssnano');

module.exports = {
   style: {
      postcss: {
         plugins: [
            require('tailwindcss'),
            require('autoprefixer'),
            cssnano({
               preset: [
                  'default',
                  {
                     discardComments: {
                        removeAll: true,
                     },
                  },
               ],
            }),
         ],
      },
   },
};
