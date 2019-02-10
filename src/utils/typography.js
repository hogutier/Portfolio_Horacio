import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.33,
  headerFontFamily: ['Montserrat', 'sans-serif'],
  bodyFontFamily: ['Montserrat', 'sans-serif'],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    h1: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
      ...adjustFontSizeTo('48px')
    },
    h2: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
      ...adjustFontSizeTo('36px')
    },
    h3: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
      ...adjustFontSizeTo('24px')
    },
    h4: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
      ...adjustFontSizeTo('22px')
    },
    h5: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
      ...adjustFontSizeTo('20px')
    },
    h6: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
      ...adjustFontSizeTo('18px')
    },
    p: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
      ...adjustFontSizeTo('16px')
    }
  })
})

export default typography
