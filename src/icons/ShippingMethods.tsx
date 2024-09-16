import { createSvgIcon, SvgIconProps } from "@material-ui/core";
import React from "react";

const ShippingMethodsIcons = createSvgIcon(
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M12.4476 8.88049C12.5081 8.37806 12.9344 8 13.4405 8H15.8867L15.4413 10.467C15.109 12.3074 16.5233 14 18.3936 14H20.8289C22.2801 14 23.5233 12.9612 23.7812 11.533L24.4191 8H26.7449C27.3446 8 27.8094 8.52414 27.7378 9.11951L26.0526 23.1195C25.9921 23.6219 25.5658 24 25.0598 24H11.7553C11.1556 24 10.6908 23.4759 10.7625 22.8805L12.4476 8.88049ZM17.4095 10.8223L17.9191 8H22.3867L21.813 11.1777C21.727 11.6537 21.3126 12 20.8289 12H18.3936C17.7702 12 17.2987 11.4358 17.4095 10.8223ZM13.4405 6C11.9223 6 10.6434 7.13417 10.462 8.64148L8.7768 22.6415C8.5618 24.4276 9.95629 26 11.7553 26H25.0598C26.5779 26 27.8568 24.8658 28.0383 23.3585L29.7234 9.35852C29.9384 7.57241 28.5439 6 26.7449 6H13.4405ZM3 9.78943C2.44772 9.78943 2 10.2371 2 10.7894C2 11.3417 2.44772 11.7894 3 11.7894H8.57143C9.12371 11.7894 9.57143 11.3417 9.57143 10.7894C9.57143 10.2371 9.12371 9.78943 8.57143 9.78943H3ZM2 15.5264C2 14.9741 2.44772 14.5264 3 14.5264H7.64286C8.19514 14.5264 8.64286 14.9741 8.64286 15.5264C8.64286 16.0787 8.19514 16.5264 7.64286 16.5264H3C2.44772 16.5264 2 16.0787 2 15.5264ZM3 19.2632C2.44772 19.2632 2 19.7109 2 20.2632C2 20.8155 2.44772 21.2632 3 21.2632H6.71429C7.26657 21.2632 7.71429 20.8155 7.71429 20.2632C7.71429 19.7109 7.26657 19.2632 6.71429 19.2632H3Z"
    fill="currentColor"
  />,
  "ShippingMethods",
);

export default function ShippingMethods(props: SvgIconProps) {
  return <ShippingMethodsIcons {...props} viewBox="0 0 32 32" />;
}
