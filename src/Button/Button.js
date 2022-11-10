import { forwardRef } from "react";
import { cx, css } from "@emotion/css";
import { PropTypes } from "prop-types";


const buttonStyles = (bgColor, color, width="150px", height="40px", bgColorHover, colorHover, borderRadius="8px") => css`
    background: ${bgColor};
    color: ${color};
    border-radius: ${borderRadius};
    width: ${width};
    height: ${height};
    text-align: center;
    &:hover {
        background: ${bgColorHover};
        color: ${colorHover};
    }
`;

const Button = forwardRef((props, ref) => {
    const {
        className,
        bgColor, 
        color, 
        width="150px", 
        height="40px", 
        bgColorHover,
        colorHover, 
        borderRadius="8px",
        ...otherProps
    } = props;

    return(
        <Button
            ref={ref}
            type="button"
            {...otherProps}
            className={cx(buttonStyles(bgColor, color, width, height, bgColorHover, colorHover, borderRadius), className)}
        >
        
        </Button>
    )
});


Button.propTypes = {
    className: PropTypes.string,
    bgColor: PropTypes.string,
    color: PropTypes.string,
    bgColorHover: PropTypes.string,
    colorHover: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    borderRadius: PropTypes.string,
}

export default Button;