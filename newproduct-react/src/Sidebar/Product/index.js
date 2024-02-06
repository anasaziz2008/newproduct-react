import styles from "./product.module.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion, CardBody } from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";

export const ProductComponent = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(true);

  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () => console.log());

    return (
      <div type="button" onClick={decoratedOnClick} className={styles.header}>
        {children}
      </div>
    );
  }

  const handleAccordionToggle = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };
  return (
    <div>
      <div>
        <Accordion>
          <Card className={styles.accbody}>
            <Card.Header  className={styles.accbody}>
              <CustomToggle eventKey="0">
                <div onClick={handleAccordionToggle}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M11.6667 8C13.3235 8 14.6667 6.65685 14.6667 5C14.6667 3.34315 13.3235 2 11.6667 2C10.0098 2 8.66669 3.34315 8.66669 5C8.66669 6.65685 10.0098 8 11.6667 8Z"
                    fill="white"
                  />
                  <path
                    d="M21.1926 12.8589C22.1281 11.6709 22.5871 10.2139 22.4518 8.85986L22.2419 6.77051C22.0056 4.40772 20.259 2.66113 17.8932 2.42481L16.4533 2.28467C15.9011 2.2251 15.4152 2.6333 15.3615 3.18311C15.3078 3.73242 15.7101 4.22168 16.2599 4.2749L17.697 4.41504C19.1296 4.55811 20.1086 5.53711 20.2516 6.97022L20.4616 9.05957C20.5461 9.90235 20.2394 10.8364 19.6266 11.6147L19.343 11.9688C17.1638 14.7178 14.6721 17.2061 11.9362 19.3657C11.152 19.9854 10.1428 20.1265 9.54852 19.7261C7.70819 18.5088 6.1579 16.9585 4.93524 15.1104C4.78387 14.8857 4.70673 14.606 4.70673 14.2798C4.70673 13.7725 4.92352 13.2075 5.30194 12.7295C6.34735 11.4048 7.46161 10.1489 8.61395 8.99707C9.00458 8.60694 9.00458 7.97363 8.61395 7.58301C8.22333 7.19238 7.59052 7.19238 7.19989 7.58301C5.99237 8.78955 4.82587 10.1045 3.7326 11.4893C3.07098 12.3252 2.70673 13.3159 2.70673 14.2798C2.70673 15.002 2.90399 15.6763 3.27264 16.2217C4.63885 18.2876 6.37909 20.0278 8.43719 21.3887C8.99042 21.7627 9.66473 21.96 10.3869 21.96C11.3508 21.96 12.3415 21.5957 13.1765 20.9351C16.0329 18.6802 18.6349 16.0815 20.9069 13.2153L21.1926 12.8589Z"
                    fill="white"
                  />
                  <path
                    d="M18.3738 7.70709C18.7644 7.31659 18.7644 6.68341 18.3738 6.29291C17.9833 5.90234 17.3501 5.90234 16.9596 6.29291C16.569 6.68341 16.569 7.31659 16.9596 7.70709C17.3501 8.0976 17.9833 8.0976 18.3738 7.70709Z"
                    fill="white"
                  />
                </svg>
                &nbsp; Product
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  style={{
                    transform: isAccordionOpen
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                      float: 'right'
                  }}
                >
                  <path
                    d="M2.30267 10.707C2.4902 10.8945 2.74451 10.9998 3.00967 10.9998C3.27484 10.9998 3.52915 10.8945 3.71667 10.707L8.66667 5.75699L13.6167 10.707C13.8053 10.8891 14.0579 10.9899 14.3201 10.9877C14.5823 10.9854 14.8331 10.8802 15.0185 10.6948C15.2039 10.5094 15.3091 10.2586 15.3113 9.99639C15.3136 9.73419 15.2128 9.48159 15.0307 9.29299L9.37367 3.63599C9.18615 3.44852 8.93184 3.3432 8.66667 3.3432C8.40151 3.3432 8.1472 3.44852 7.95967 3.63599L2.30267 9.29299C2.1152 9.48052 2.00989 9.73482 2.00989 9.99999C2.00989 10.2652 2.1152 10.5195 2.30267 10.707Z"
                    fill="#A2A2A2"
                  />
                </svg>
                </div>
              </CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <div>
                <Card.Body  className={styles.body}>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                  >
                    <path
                      d="M12.6667 8.66666H9.33333V12C9.33333 12.3667 9.03333 12.6667 8.66667 12.6667C8.3 12.6667 8 12.3667 8 12V8.66666H4.66667C4.3 8.66666 4 8.36666 4 7.99999C4 7.63333 4.3 7.33333 4.66667 7.33333H8V3.99999C8 3.63333 8.3 3.33333 8.66667 3.33333C9.03333 3.33333 9.33333 3.63333 9.33333 3.99999V7.33333H12.6667C13.0333 7.33333 13.3333 7.63333 13.3333 7.99999C13.3333 8.36666 13.0333 8.66666 12.6667 8.66666Z"
                      fill="white"
                    />
                  </svg>
                  &nbsp;Add
                </Card.Body>
                <Card.Body className={styles.body}>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.39935 0.833328H11.9333C12.6113 0.833328 13.078 0.833328 13.4707 0.969328C13.8377 1.09893 14.1698 1.31144 14.4413 1.59033C14.7128 1.86922 14.9163 2.20698 15.036 2.57733C15.1667 2.97533 15.166 3.44866 15.166 4.15066V13.5827C15.166 14.56 14.0147 15.1413 13.2567 14.4473C13.2324 14.4241 13.2 14.4111 13.1663 14.4111C13.1327 14.4111 13.1003 14.4241 13.076 14.4473L12.7533 14.742C12.1347 15.3087 11.1973 15.3087 10.5787 14.742C10.4667 14.6374 10.3192 14.5793 10.166 14.5793C10.0128 14.5793 9.86533 14.6374 9.75335 14.742C9.13468 15.3087 8.19735 15.3087 7.57868 14.742C7.46671 14.6374 7.31922 14.5793 7.16602 14.5793C7.01281 14.5793 6.86533 14.6374 6.75335 14.742C6.13468 15.3087 5.19735 15.3087 4.57868 14.742L4.25668 14.4473C4.23233 14.4239 4.19983 14.4108 4.16602 14.4108C4.1322 14.4108 4.0997 14.4239 4.07535 14.4473C3.31735 15.1407 2.16602 14.56 2.16602 13.5827V4.15133C2.16602 3.44866 2.16602 2.97533 2.29602 2.57733C2.41566 2.20695 2.61915 1.86918 2.89065 1.59028C3.16214 1.31138 3.49432 1.09889 3.86135 0.969328C4.25468 0.832662 4.72135 0.833328 5.39935 0.833328ZM5.49668 1.83333C4.68268 1.83333 4.40202 1.84 4.19002 1.914C3.96851 1.9932 3.76823 2.12239 3.60475 2.29154C3.44126 2.46069 3.31896 2.66525 3.24735 2.88933C3.17335 3.11466 3.16735 3.41199 3.16735 4.24666V13.5827C3.16735 13.6627 3.20668 13.7107 3.25668 13.734C3.2795 13.7449 3.30493 13.749 3.33002 13.746C3.35708 13.7416 3.38206 13.7288 3.40135 13.7093C3.60996 13.5173 3.88314 13.4107 4.16668 13.4107C4.45023 13.4107 4.72341 13.5173 4.93202 13.7093L5.25402 14.004C5.36599 14.1086 5.51348 14.1667 5.66668 14.1667C5.81988 14.1667 5.96737 14.1086 6.07935 14.004C6.37564 13.731 6.76379 13.5794 7.16668 13.5794C7.56957 13.5794 7.95772 13.731 8.25402 14.004C8.36599 14.1086 8.51348 14.1667 8.66668 14.1667C8.81988 14.1667 8.96737 14.1086 9.07935 14.004C9.37564 13.731 9.76379 13.5794 10.1667 13.5794C10.5696 13.5794 10.9577 13.731 11.254 14.004C11.366 14.1086 11.5135 14.1667 11.6667 14.1667C11.8199 14.1667 11.9674 14.1086 12.0793 14.004L12.4013 13.7093C12.61 13.5173 12.8831 13.4107 13.1667 13.4107C13.4502 13.4107 13.7234 13.5173 13.932 13.7093C13.9607 13.736 13.9853 13.744 14.004 13.746C14.0289 13.7489 14.0541 13.7447 14.0767 13.734C14.1267 13.7107 14.1667 13.662 14.1667 13.5827V4.24666C14.1667 3.41199 14.16 3.11466 14.0867 2.88866C14.0148 2.66457 13.8923 2.46005 13.7286 2.29101C13.5649 2.12197 13.3644 1.99296 13.1427 1.914C12.9313 1.84066 12.6507 1.83399 11.8367 1.83399L5.49668 1.83333ZM4.83335 5C4.83335 4.86739 4.88603 4.74021 4.9798 4.64644C5.07356 4.55267 5.20074 4.49999 5.33335 4.49999H5.66668C5.79929 4.49999 5.92647 4.55267 6.02024 4.64644C6.114 4.74021 6.16668 4.86739 6.16668 5C6.16668 5.1326 6.114 5.25978 6.02024 5.35355C5.92647 5.44732 5.79929 5.5 5.66668 5.5H5.33335C5.20074 5.5 5.07356 5.44732 4.9798 5.35355C4.88603 5.25978 4.83335 5.1326 4.83335 5ZM7.16668 5C7.16668 4.86739 7.21936 4.74021 7.31313 4.64644C7.4069 4.55267 7.53407 4.49999 7.66668 4.49999H12C12.1326 4.49999 12.2598 4.55267 12.3536 4.64644C12.4473 4.74021 12.5 4.86739 12.5 5C12.5 5.1326 12.4473 5.25978 12.3536 5.35355C12.2598 5.44732 12.1326 5.5 12 5.5H7.66668C7.53407 5.5 7.4069 5.44732 7.31313 5.35355C7.21936 5.25978 7.16668 5.1326 7.16668 5ZM4.83335 7.33333C4.83335 7.20072 4.88603 7.07354 4.9798 6.97978C5.07356 6.88601 5.20074 6.83333 5.33335 6.83333H5.66668C5.79929 6.83333 5.92647 6.88601 6.02024 6.97978C6.114 7.07354 6.16668 7.20072 6.16668 7.33333C6.16668 7.46594 6.114 7.59311 6.02024 7.68688C5.92647 7.78065 5.79929 7.83333 5.66668 7.83333H5.33335C5.20074 7.83333 5.07356 7.78065 4.9798 7.68688C4.88603 7.59311 4.83335 7.46594 4.83335 7.33333ZM7.16668 7.33333C7.16668 7.20072 7.21936 7.07354 7.31313 6.97978C7.4069 6.88601 7.53407 6.83333 7.66668 6.83333H12C12.1326 6.83333 12.2598 6.88601 12.3536 6.97978C12.4473 7.07354 12.5 7.20072 12.5 7.33333C12.5 7.46594 12.4473 7.59311 12.3536 7.68688C12.2598 7.78065 12.1326 7.83333 12 7.83333H7.66668C7.53407 7.83333 7.4069 7.78065 7.31313 7.68688C7.21936 7.59311 7.16668 7.46594 7.16668 7.33333ZM4.83335 9.66666C4.83335 9.53405 4.88603 9.40688 4.9798 9.31311C5.07356 9.21934 5.20074 9.16666 5.33335 9.16666H5.66668C5.79929 9.16666 5.92647 9.21934 6.02024 9.31311C6.114 9.40688 6.16668 9.53405 6.16668 9.66666C6.16668 9.79927 6.114 9.92645 6.02024 10.0202C5.92647 10.114 5.79929 10.1667 5.66668 10.1667H5.33335C5.20074 10.1667 5.07356 10.114 4.9798 10.0202C4.88603 9.92645 4.83335 9.79927 4.83335 9.66666ZM7.16668 9.66666C7.16668 9.53405 7.21936 9.40688 7.31313 9.31311C7.4069 9.21934 7.53407 9.16666 7.66668 9.16666H12C12.1326 9.16666 12.2598 9.21934 12.3536 9.31311C12.4473 9.40688 12.5 9.53405 12.5 9.66666C12.5 9.79927 12.4473 9.92645 12.3536 10.0202C12.2598 10.114 12.1326 10.1667 12 10.1667H7.66668C7.53407 10.1667 7.4069 10.114 7.31313 10.0202C7.21936 9.92645 7.16668 9.79927 7.16668 9.66666Z"
                      fill="white"
                    />
                  </svg>
                  &nbsp;List
                </Card.Body>
              </div>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </div>
  );
};