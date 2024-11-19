/* eslint-disable react/prop-types */
export const InstagramIcon = ({
  width = "30",
  height = "30",
  fill = "#FF5F2D",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 27 28"
      fill={fill}
    >
      <path
        d="M14.7041 0.837395C15.6771 0.833661 16.65 0.84344 17.6227 0.866727L17.8813 0.87606C18.18 0.886726 18.4746 0.900058 18.8306 0.916057C20.2492 0.982721 21.2171 1.20671 22.0664 1.53603C22.9464 1.87468 23.6877 2.33332 24.429 3.07461C25.1068 3.74072 25.6313 4.54647 25.9662 5.43583C26.2955 6.28512 26.5195 7.2544 26.5862 8.67299C26.6022 9.02764 26.6155 9.32363 26.6262 9.62228L26.6342 9.88093C26.6579 10.8531 26.6681 11.8256 26.6649 12.7981L26.6662 13.7927V15.5393C26.6695 16.5122 26.6593 17.4852 26.6355 18.4578L26.6275 18.7165C26.6169 19.0151 26.6035 19.3098 26.5875 19.6658C26.5209 21.0844 26.2942 22.0523 25.9662 22.9016C25.6324 23.7919 25.1077 24.5983 24.429 25.2641C23.7623 25.9419 22.9561 26.4664 22.0664 26.8014C21.2171 27.1307 20.2492 27.3547 18.8306 27.4214C18.4746 27.4374 18.18 27.4507 17.8813 27.4614L17.6227 27.4694C16.65 27.4931 15.6771 27.5033 14.7041 27.5L13.7095 27.5014H11.9643C10.9913 27.5047 10.0184 27.4944 9.04576 27.4707L8.78711 27.4627C8.4706 27.4512 8.15417 27.4379 7.83782 27.4227C6.41923 27.356 5.45128 27.1294 4.60066 26.8014C3.71095 26.4672 2.90506 25.9425 2.23944 25.2641C1.56087 24.5979 1.0358 23.7916 0.700856 22.9016C0.371539 22.0523 0.14755 21.0844 0.0808872 19.6658C0.0660385 19.3494 0.0527057 19.033 0.0408893 18.7165L0.0342231 18.4578C0.00964249 17.4852 -0.00146924 16.5123 0.000891365 15.5393V12.7981C-0.00282973 11.8256 0.00694859 10.8531 0.0302233 9.88093L0.0395561 9.62228C0.0502222 9.32363 0.0635548 9.02764 0.079554 8.67299C0.146217 7.25307 0.370206 6.28645 0.699522 5.43583C1.03467 4.54603 1.56076 3.74051 2.24078 3.07595C2.90594 2.39698 3.71132 1.87144 4.60066 1.53603C5.45128 1.20671 6.4179 0.982721 7.83782 0.916057L8.78711 0.87606L9.04576 0.869393C10.018 0.844825 10.9904 0.833713 11.9629 0.836062L14.7041 0.837395ZM13.3335 7.50372C12.4503 7.49123 11.5733 7.65441 10.7536 7.98379C9.93398 8.31316 9.18795 8.80216 8.55891 9.42236C7.92988 10.0426 7.43038 10.7816 7.08944 11.5965C6.74851 12.4115 6.57294 13.286 6.57294 14.1694C6.57294 15.0527 6.74851 15.9273 7.08944 16.7422C7.43038 17.5572 7.92988 18.2962 8.55891 18.9164C9.18795 19.5366 9.93398 20.0256 10.7536 20.355C11.5733 20.6843 12.4503 20.8475 13.3335 20.835C15.1016 20.835 16.7972 20.1327 18.0473 18.8825C19.2975 17.6323 19.9999 15.9367 19.9999 14.1687C19.9999 12.4007 19.2975 10.7051 18.0473 9.45491C16.7972 8.20473 15.1016 7.50372 13.3335 7.50372ZM13.3335 10.1703C13.8649 10.1605 14.3928 10.2566 14.8865 10.4532C15.3802 10.6497 15.8299 10.9427 16.2091 11.3149C16.5883 11.6872 16.8896 12.1313 17.0953 12.6212C17.301 13.1112 17.4069 13.6373 17.407 14.1687C17.4071 14.7001 17.3013 15.2262 17.0958 15.7163C16.8903 16.2063 16.5892 16.6505 16.2101 17.0229C15.8309 17.3953 15.3814 17.6884 14.8878 17.8851C14.3941 18.0818 13.8662 18.1781 13.3349 18.1685C12.2741 18.1685 11.2567 17.7471 10.5066 16.997C9.75648 16.2469 9.33508 15.2295 9.33508 14.1687C9.33508 13.1079 9.75648 12.0905 10.5066 11.3404C11.2567 10.5903 12.2741 10.1689 13.3349 10.1689L13.3335 10.1703ZM20.3332 5.50382C19.9031 5.52104 19.4963 5.70401 19.198 6.01442C18.8998 6.32484 18.7332 6.73861 18.7332 7.16907C18.7332 7.59954 18.8998 8.0133 19.198 8.32372C19.4963 8.63413 19.9031 8.8171 20.3332 8.83432C20.7752 8.83432 21.1991 8.65873 21.5116 8.34619C21.8242 8.03364 21.9998 7.60974 21.9998 7.16774C21.9998 6.72573 21.8242 6.30183 21.5116 5.98929C21.1991 5.67674 20.7752 5.50116 20.3332 5.50116V5.50382Z"
        fill={fill}
      />
    </svg>
  );
};