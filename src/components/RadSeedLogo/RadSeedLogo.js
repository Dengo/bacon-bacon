import React from 'react';
import { IndexLink } from 'react-router';

const RadSeedLogo = (props) => {
  const {width, height} = props;
  const logoImage = require('./logo.svg');
  const styles = require('./RadSeedLogo.scss');

  return (
        <IndexLink to="/">
            <img className={styles.logo} src={logoImage} style={{border: 'none', width: width, height: height}}/>
        </IndexLink>
  );
};

RadSeedLogo.propTypes = {
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired
};

export default RadSeedLogo;
