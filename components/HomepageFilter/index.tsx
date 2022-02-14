import * as React from 'react';
import DesktopFilter from './DesktopFilter';
import MobileFilter from './MobileFilter';

const HomepageFilter: React.FC = () => {
  return (
    <>
      <DesktopFilter />
      <MobileFilter />
    </>
  );
};

export default HomepageFilter;
