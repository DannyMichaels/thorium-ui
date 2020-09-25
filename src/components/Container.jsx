/* React */
import React from 'react';
/* Style */
import { containerStyle } from '../styles/containerStyle';
/* Utils */
import mapPropsToAttrs from '../utils/mapPropsToAttrs';
/* Breakpoint configuration */
import { config } from '../config';
import { useViewportSizeName } from '../utils/hooks/useViewportSizeName';

/**
 * A responsive, centered and padded wrapper for page contents.
 */
export const Container = (props) => {
  const vpSizeName = useViewportSizeName();
  const vpWidth = window.innerWidth;

  return (
    <div
      data-testid='container'
      {...mapPropsToAttrs(props)}
      style={{
        ...containerStyle,
        maxWidth: vpWidth / config.containerSizes[vpSizeName] || '100%',
        ...props.style
      }}
    >
      {props.children}
    </div>
  );
};

export default Container;
