/* eslint-disable react/prop-types */
export const TwitterIcon = ({
  width = "30",
  height = "30",
  fill = "#FF5F2D",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 31 31"
      fill="none"
    >
      <g opacity="0.3">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.6685 24.5416L8.01794 6.45831H10.662L23.2944 24.5416H20.6685Z"
          fill="white"
        />
        <path
          d="M11.3348 5.16663H5.53784L19.9954 25.8332H25.7717L11.3348 5.16663Z"
          fill={fill}
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.0852 15.965L14.6223 18.135L6.94979 27.1249H3.53979L13.0852 15.965Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.7883 3.875L17.7983 14.415L16.2742 12.2321L23.43 3.875H26.7883Z"
        fill={fill}
      />
      <path
        d="M10.6627 6.45833L23.2939 24.5416H20.6693L8.0187 6.45833H10.6627ZM12.0099 3.875H3.05872L19.3246 27.1249H28.25L12.0099 3.875Z"
        fill={fill}
      />
    </svg>
  );
};
