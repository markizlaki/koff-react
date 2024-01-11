import s from "./Phone.module.scss";

export const Phone = () => (
  <a className={s.phone} href="tel:+7 (939) 839 12 97">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none">
      <path
        d="M4.48572 1.54445L5.59257 1.21074C5.95787 1.10078 6.3507 1.12746 6.69778 1.2858C7.04486 1.44415 7.32248 1.72334 7.47886 2.07131L8.25486 3.79703C8.38954 4.09641 8.42708 4.43046 8.36221 4.75227C8.29734 5.07408 8.1333 5.36749 7.89315 5.59131L6.712 6.69188C6.55372 6.84217 6.67372 7.42788 7.252 8.43017C7.83086 9.43303 8.27829 9.8296 8.48457 9.76788L10.032 9.29474C10.3457 9.1988 10.6815 9.20341 10.9924 9.30794C11.3033 9.41246 11.5737 9.61166 11.7657 9.8776L12.8686 11.4062C13.0913 11.7148 13.1945 12.0939 13.1588 12.4728C13.1232 12.8518 12.9512 13.205 12.6749 13.4667L11.8223 14.2742C11.5471 14.5348 11.2076 14.7178 10.8386 14.8044C10.4696 14.891 10.0842 14.8782 9.72172 14.7673C7.93543 14.2205 6.28115 12.5976 4.73657 9.9216C3.18857 7.2416 2.604 4.98103 3.01143 3.13417C3.09361 2.76203 3.27354 2.41853 3.53269 2.1391C3.79183 1.85966 4.12081 1.65439 4.48572 1.54445Z"
        fill="white"
      />
    </svg>
    <span>+7 (939) 839 12 97</span>
  </a>
);
