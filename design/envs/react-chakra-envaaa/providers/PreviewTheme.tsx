import PropTypes from 'prop-types';
import React from 'react';

const PreviewTheme = ({ children }: { children: React.ReactNode }) => {
  console.log('adasd');
  return (
    <div>
      <p>asdasd</p>
      {children}
    </div>
  );
};

PreviewTheme.propTypes = {
  children: PropTypes.node,
};

export default PreviewTheme;
