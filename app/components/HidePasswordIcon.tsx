import React from "react";

const HidePasswordIcon = ({
  fill,
  className,
}: {
  fill?: string;
  className?: string;
}) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <g id="Icons / Hide Password">
      <path
        id="Subtract"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.5672 6.4323C13.7562 6.15136 12.8939 6 11.9998 6C9.27533 6 6.84587 7.40529 5.26482 9.6C5.02019 9.93958 4.79587 10.2981 4.59391 10.6732C4.14833 11.5007 4.14841 12.4994 4.59401 13.327C4.94968 13.9876 5.3747 14.5966 5.85788 15.1416L8.10086 12.8987C8.03455 12.6098 7.99951 12.309 7.99951 12C7.99951 9.79086 9.79037 8 11.9995 8C12.3085 8 12.6093 8.03503 12.8982 8.10135L14.5672 6.4323ZM14.2836 8.71586L15.9413 7.05824C17.3938 7.88989 18.6068 9.16685 19.4344 10.727C19.8574 11.5244 19.8668 12.4792 19.4378 13.2733C18.3213 15.3396 15.9143 18 11.9998 18C10.0809 18 8.30844 17.3029 6.8756 16.1239L8.71538 14.2841C9.43808 15.3213 10.6395 16 11.9995 16C14.2087 16 15.9995 14.2091 15.9995 12C15.9995 10.64 15.3208 9.43857 14.2836 8.71586Z"
        fill={fill}
      />
      <path
        id="Vector 2.9"
        d="M17.5 5.5L5.5 17.5C5.22386 17.7761 5.22386 18.2239 5.5 18.5C5.77614 18.7761 6.22386 18.7761 6.5 18.5L18.5 6.5C18.7761 6.22386 18.7761 5.77614 18.5 5.5C18.2239 5.22386 17.7761 5.22386 17.5 5.5Z"
        fill={fill}
      />
      <path
        id="Subtract_2"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.1768 12.8223L12.8233 10.1758C13.5172 10.4896 14 11.1879 14 11.999C14 13.1036 13.1046 13.999 12 13.999C11.1889 13.999 10.4906 13.5162 10.1768 12.8223Z"
        fill={fill}
      />
    </g>
  </svg>
);

export default HidePasswordIcon;
