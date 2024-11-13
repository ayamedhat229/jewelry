/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js" // add this line
  ],
  theme: {
    extend: {
      colors: {
        navbar: ' #EAE9E1',
        customLight: '#EAE9E1', // Example light color
        homeThree: '#f0f0f0', // Define a color for light mode
        homeFour: '#FBF8F3',  // Define a darker color for dark mode   // Example blue color
        footer: '#CEE7DC', // Example darker blue for dark mode
        aboutLight :'#EAE9E1',
        textSlate: ' #2B2024',
        salteCard:'#FFF5EB',
        aboutThree:'#FDE0D2',
        aboutFour:'#FFF9F2',
        productDark:'#0d0d0de0',
        productLight:'rgba(38, 38, 38, 0.699)',
        verifyCard:'#ABC0B6',
        fonts:{
            fontClamp:'line-clamp-10'
        }
       
      },
    },
  },
  plugins: [
    require('flowbite/plugin') 
  ],
   darkMode:'class'
}

