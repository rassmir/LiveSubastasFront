module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '40px': '40px',
      },
      width:{
        '700px': '700px'
      },
      colors: {
        primary:'#FF7400',
        hprimary:'#FD8C2D',
        secondary:'rgb(251, 246, 244)',
        default:'rgb(101, 101, 101)'
      },
      fontFamily: {
        'Poppins-Th': ['Poppins Th'],
        'Poppins-El': ['Poppins El'],
        'Poppins-Lt': ['Poppins Lt'],
        'Poppins-Rg': ['Poppins Rg'],
        'Poppins-Md': ['Poppins Md'],
        'Poppins-Sb': ['Poppins Sb'],
        'Poppins-Bd': ['Poppins Bd'],
        'Poppins-Eb': ['Poppins Eb'],
        'Poppins-Bk': ['Poppins Bk'],
      },
    },
  },
  plugins: [],
}