/* eslint-disable react/prop-types */
export const ValidIcon = ({
  width = "20px",
  height = "20px",
  fill = "#22c55e",
}) => {
  return (
    <svg
      className="absolute top-11 right-3   "
      height={height}
      width={width}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
