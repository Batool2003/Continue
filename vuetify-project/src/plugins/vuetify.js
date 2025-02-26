import { createVuetify } from 'vuetify'
import 'vuetify/styles'

const customTheme = {
  dark: false, // أو true إذا كنت تريد الوضع الداكن
  colors: {
    primary: '#2C3E50', // أزرق داكن (أناقة واحترافية)
    secondary: '#D4AF37', // ذهبي (لمسة فاخرة وجذابة)
    background: '#F0F0F0', // رمادي فاتح (إضاءة ووضوح)
    accent: '#D84315', // برتقالي محروق (لإبراز العناصر المهمة)
  }
}

export default createVuetify({
  theme: {
    themes: {
      light: customTheme, // تحديد الثيم للضوء
      dark: customTheme,  // تحديد الثيم للوضع الداكن
    },
  },
})

