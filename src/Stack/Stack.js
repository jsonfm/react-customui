import { forwardRef } from "react";
import { cx, css } from '@emotion/css'
import { PropTypes } from 'prop-types'


const stackStyles = (width, heigth, bgColor, flexDirection, alignContent, alignItems, justifyContent, gap) => css`
  width: ${width || "100%"};
  height: ${heigth || "100%"};
  display: flex;
  background-color: ${bgColor};
  flex-direction: ${flexDirection};
  align-content: ${alignContent};
  align-items: ${alignItems};
  justify-content: ${justifyContent};
  gap: ${gap};
`

const Stack = forwardRef((props, ref) => {
  const {
    className,
    width,
    heigth,
    bgColor,
    flexDirection,
    alignContent,
    alignItems,
    justifyContent,
    gap,
    ...otherProps} = props;

  return(
    <section 
      ref={ref}
      {...otherProps}
      className={ cx(stackStyles(width, heigth, bgColor, flexDirection, alignContent, alignItems, justifyContent, gap), className) }
    />
  );
});

Stack.propTypes = {
  width: PropTypes.string,
  heigth: PropTypes.string,
  bgColor: PropTypes.string,
  className: PropTypes.string,
  gap: propTypes.PropTypes.string,
  flexDirection: PropTypes.oneOf(['column', 'column-reverse', 'row', 'row-reverse']),
  alignContent: PropTypes.oneOf(['center', "flex-start", 'flex-end', 'space-around', 'space-between', 'stretch']),
  alignItems: PropTypes.oneOf(['center', "flex-start", 'flex-end', 'stretch']),
  justifyContent:PropTypes.oneOf(['center', "flex-start", 'flex-end', 'space-around', 'space-between', 'space-evenly'])
};

export default Stack;