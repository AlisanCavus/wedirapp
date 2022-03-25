

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: "'Poppins', 'sans-serif'"
    },
    screens: {
      'xs': { 'min':'0px', 'max': '279px'},
      // => @media (min-width: 0px and max-width: 279px) { ... }
      'sm': {'min': '280px', 'max': '576px'},
      // => @media (min-width: 280px and max-width: 576px) { ... }

      'md': {'min': '577px', 'max': '768px'},
      // => @media (min-width: 576px and max-width: 768px) { ... }

      'lg': {'min': '769px', 'max': '992px'},
      // => @media (min-width: 768px and max-width: 992px) { ... }

      'xl': {'min': '993px', 'max': '1200px'},
      // => @media (min-width: 992px and max-width: 1200px) { ... }

      '2xl': {'min': '1201px'},
      // => @media (min-width: 1200px) { ... }
    },
    extend: {
      backgroundImage: {
        'wedir': "url('https://images.pexels.com/photos/1431822/pexels-photo-1431822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
    }
  }
}
}