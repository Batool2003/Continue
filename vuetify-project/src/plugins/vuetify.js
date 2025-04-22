import { createVuetify } from 'vuetify'
import 'vuetify/styles'

const customTheme = {
  dark: false, 
  colors: {
    primary: '#2C3E50', 
    secondary: '#D4AF37', 
    background: '#F0F0F0', 
    accent: '#D84315', 
  },
  typography: {
    fontFamily: 'Cairo, sans-serif', // استبدل بـ أي خط تريده
  }
}

export default createVuetify({
  theme: {
    themes: {
      light: customTheme, 
      dark: customTheme,  
    },
  },
})
