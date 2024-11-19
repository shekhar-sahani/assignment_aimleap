/* eslint-disable react/prop-types */
export const EmailIcon = ({
  width = "30",
  height = "30",
  fill = "#FF5F2D",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 33 27"
      fill="none"
    >
      <path
        d="M2.29871 5.34922C2.29871 4.50727 2.63317 3.69979 3.22853 3.10444C3.82388 2.50909 4.63135 2.17462 5.47331 2.17462H27.6955C28.5375 2.17462 29.345 2.50909 29.9403 3.10444C30.5357 3.69979 30.8701 4.50727 30.8701 5.34922V21.2222C30.8701 22.0642 30.5357 22.8717 29.9403 23.467C29.345 24.0624 28.5375 24.3968 27.6955 24.3968H5.47331C4.63135 24.3968 3.82388 24.0624 3.22853 23.467C2.63317 22.8717 2.29871 22.0642 2.29871 21.2222V5.34922Z"
        stroke={fill}
        strokeWidth="3.23232"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.29865 5.34917L16.5844 14.873L30.8701 5.34917"
        stroke={fill}
        strokeWidth="3.23232"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
