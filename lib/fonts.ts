import localFont from 'next/font/local'

const pelak = localFont({
  src: [
    {
      path: './fonts/PelakFA-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/PelakFA-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/PelakFA-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/PelakFA-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/PelakFA-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/PelakFA-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/PelakFA-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './fonts/PelakFA-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-pelak',
  display: 'swap',
})

export { pelak }
