import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children , signInWithGoogle, isGoogleSignIn} , {...otherProps}) => (
  <button  className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
   onClick={signInWithGoogle} {...otherProps}
  >
    { children }
  </button>
)

export default CustomButton;