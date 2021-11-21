// Mobile - 320px
// Tablet - 768px
// Desktop - 1024px
// Desktop Large - 1200px

const size = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px',
  desktopL: '1200px',
};

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktopL})`,
};
