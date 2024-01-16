import s from "./Contacts.module.scss";

export const Contacts = () => (
    <div className={s.contacts}>
        <a className={`${s.phone} ${s.link}`} href="tel:+79398391297">
            <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M4.48572 1.54445L5.59257 1.21074C5.95787 1.10078 6.3507 1.12746 6.69778 1.2858C7.04486 1.44415 7.32248 1.72334 7.47886 2.07131L8.25486 3.79703C8.38954 4.09641 8.42708 4.43046 8.36221 4.75227C8.29734 5.07408 8.1333 5.36749 7.89315 5.59131L6.712 6.69188C6.55372 6.84217 6.67372 7.42788 7.252 8.43017C7.83086 9.43303 8.27829 9.8296 8.48457 9.76788L10.032 9.29474C10.3457 9.1988 10.6815 9.20341 10.9924 9.30794C11.3033 9.41246 11.5737 9.61166 11.7657 9.8776L12.8686 11.4062C13.0913 11.7148 13.1945 12.0939 13.1588 12.4728C13.1232 12.8518 12.9512 13.205 12.6749 13.4667L11.8223 14.2742C11.5471 14.5348 11.2076 14.7178 10.8386 14.8044C10.4696 14.891 10.0842 14.8782 9.72172 14.7673C7.93543 14.2205 6.28115 12.5976 4.73657 9.9216C3.18857 7.2416 2.604 4.98103 3.01143 3.13417C3.09361 2.76203 3.27354 2.41853 3.53269 2.1391C3.79183 1.85966 4.12081 1.65439 4.48572 1.54445Z"
                    fill="currentColor"
                />
            </svg>
        </a>

        <ul className={s.list}>
            <li>
                <a
                    className={s.link}
                    href="#"
                    aria-label="Ссылка на группу в VK">
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.00001 0.320068C3.75841 0.320068 0.320007 3.75847 0.320007 8.00007C0.320007 12.2417 3.75841 15.6801 8.00001 15.6801C12.2416 15.6801 15.68 12.2417 15.68 8.00007C15.68 3.75847 12.2416 0.320068 8.00001 0.320068ZM10.9536 8.98487C10.9536 8.98487 11.6328 9.65527 11.8 9.96647C11.8048 9.97287 11.8072 9.97927 11.8088 9.98247C11.8768 10.0969 11.8928 10.1857 11.8592 10.2521C11.8032 10.3625 11.6112 10.4169 11.5456 10.4217H10.3456C10.2624 10.4217 10.088 10.4001 9.87681 10.2545C9.71441 10.1409 9.55441 9.95447 9.39841 9.77287C9.16561 9.50247 8.96401 9.26887 8.76081 9.26887C8.735 9.26882 8.70935 9.27287 8.68481 9.28087C8.53121 9.33047 8.33441 9.54967 8.33441 10.1337C8.33441 10.3161 8.19041 10.4209 8.08881 10.4209H7.53921C7.35201 10.4209 6.37681 10.3553 5.51281 9.44407C4.45521 8.32807 3.50321 6.08967 3.49521 6.06887C3.43521 5.92407 3.55921 5.84647 3.69441 5.84647H4.90641C5.06801 5.84647 5.12081 5.94487 5.15761 6.03207C5.20081 6.13367 5.35921 6.53767 5.61921 6.99207C6.04081 7.73287 6.29921 8.03367 6.50641 8.03367C6.54526 8.03321 6.58342 8.02333 6.61761 8.00487C6.88801 7.85447 6.83761 6.89047 6.82561 6.69047C6.82561 6.65287 6.82481 6.25927 6.68641 6.07047C6.58721 5.93367 6.41841 5.88167 6.31601 5.86247C6.35745 5.80528 6.41206 5.7589 6.47521 5.72727C6.66081 5.63447 6.99521 5.62087 7.32721 5.62087H7.51201C7.87201 5.62567 7.96481 5.64887 8.09521 5.68167C8.35921 5.74487 8.36481 5.91527 8.34161 6.49847C8.33441 6.66407 8.32721 6.85127 8.32721 7.07207C8.32721 7.12007 8.32481 7.17127 8.32481 7.22567C8.31681 7.52247 8.30721 7.85927 8.51681 7.99767C8.54415 8.01481 8.57574 8.02396 8.60801 8.02407C8.68081 8.02407 8.90001 8.02407 9.49361 7.00567C9.67668 6.67788 9.83576 6.33725 9.96961 5.98647C9.98161 5.96567 10.0168 5.90167 10.0584 5.87687C10.0891 5.86122 10.1231 5.85326 10.1576 5.85367H11.5824C11.7376 5.85367 11.844 5.87687 11.864 5.93687C11.8992 6.03207 11.8576 6.32247 11.2072 7.20327L10.9168 7.58647C10.3272 8.35927 10.3272 8.39847 10.9536 8.98487Z"
                            fill="currentColor"
                        />
                    </svg>
                </a>
            </li>
            <li>
                <a
                    className={s.link}
                    href="#"
                    aria-label="Ссылка на канал в Youtube">
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.66665 9.99992L10.1266 7.99992L6.66665 5.99992V9.99992ZM14.3733 4.77992C14.46 5.09325 14.52 5.51325 14.56 6.04658C14.6066 6.57992 14.6266 7.03992 14.6266 7.43992L14.6666 7.99992C14.6666 9.45992 14.56 10.5333 14.3733 11.2199C14.2066 11.8199 13.82 12.2066 13.22 12.3733C12.9066 12.4599 12.3333 12.5199 11.4533 12.5599C10.5866 12.6066 9.79331 12.6266 9.05998 12.6266L7.99998 12.6666C5.20665 12.6666 3.46665 12.5599 2.77998 12.3733C2.17998 12.2066 1.79331 11.8199 1.62665 11.2199C1.53998 10.9066 1.47998 10.4866 1.43998 9.95325C1.39331 9.41992 1.37331 8.95992 1.37331 8.55992L1.33331 7.99992C1.33331 6.53992 1.43998 5.46659 1.62665 4.77992C1.79331 4.17992 2.17998 3.79325 2.77998 3.62659C3.09331 3.53992 3.66665 3.47992 4.54665 3.43992C5.41331 3.39325 6.20665 3.37325 6.93998 3.37325L7.99998 3.33325C10.7933 3.33325 12.5333 3.43992 13.22 3.62659C13.82 3.79325 14.2066 4.17992 14.3733 4.77992Z"
                            fill="currentColor"
                        />
                    </svg>
                </a>
            </li>
            <li>
                <a
                    className={s.link}
                    href="#"
                    aria-label="Ссылка на чат в Telegram">
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM8.287 5.906C7.509 6.23 5.953 6.9 3.621 7.916C3.243 8.066 3.044 8.214 3.026 8.358C2.996 8.601 3.301 8.697 3.716 8.828L3.891 8.883C4.299 9.016 4.849 9.171 5.134 9.177C5.394 9.183 5.683 9.077 6.002 8.857C8.181 7.386 9.306 6.643 9.376 6.627C9.426 6.615 9.496 6.601 9.542 6.643C9.589 6.684 9.584 6.763 9.579 6.784C9.549 6.913 8.352 8.025 7.733 8.601C7.54 8.781 7.403 8.908 7.375 8.937C7.31334 9.00001 7.25067 9.06202 7.187 9.123C6.807 9.489 6.523 9.763 7.202 10.211C7.529 10.427 7.791 10.604 8.052 10.782C8.336 10.976 8.62 11.169 8.988 11.411C9.081 11.471 9.171 11.536 9.258 11.598C9.589 11.834 9.888 12.046 10.255 12.012C10.469 11.992 10.69 11.792 10.802 11.192C11.067 9.775 11.588 6.706 11.708 5.441C11.7153 5.33584 11.711 5.2302 11.695 5.126C11.6856 5.04192 11.6449 4.96446 11.581 4.909C11.49 4.84619 11.3815 4.81365 11.271 4.816C10.971 4.821 10.508 4.982 8.287 5.906Z"
                            fill="currentColor"
                        />
                    </svg>
                </a>
            </li>
        </ul>
    </div>
);
