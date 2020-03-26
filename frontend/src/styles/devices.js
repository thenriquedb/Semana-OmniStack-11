const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

const device = {
  mobile: `(min-width: ${size.mobileS}) and (max-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.mobileL}) and (max-width: ${size.tablet})`,
  desktop: `(min-width: ${size.tablet}) and (max-width: ${size.desktop})`,
};

export default device;
