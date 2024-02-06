"use client";
import styles from "./sidebar.module.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { DashboardComponent } from "./dashboard";
import { CustomerComponent } from "./customer";
import { VendorComponent } from "./Vendor";
import { ProductComponent } from "./Product";
import { InvoiceComponent } from "./invoice";
import { BillComponent } from "./bill";
import { SignoutComponent } from "./signout";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";

export const SidebarComponent = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const handleAccordionToggle = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className={styles.sidebar1}>
        <div className={styles.brandname}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M12.7333 1L3.73334 5V11C3.73334 16.55 7.57334 21.74 12.7333 23C17.8933 21.74 21.7333 16.55 21.7333 11V5L12.7333 1ZM12.7333 4.9C13.3267 4.9 13.9067 5.07595 14.4 5.40559C14.8934 5.73524 15.2779 6.20377 15.505 6.75195C15.732 7.30013 15.7914 7.90333 15.6757 8.48527C15.5599 9.06721 15.2742 9.60176 14.8547 10.0213C14.4351 10.4409 13.9006 10.7266 13.3186 10.8424C12.7367 10.9581 12.1335 10.8987 11.5853 10.6716C11.0371 10.4446 10.5686 10.0601 10.2389 9.56671C9.90928 9.07336 9.73334 8.49334 9.73334 7.9C9.73334 7.10435 10.0494 6.34129 10.612 5.77868C11.1746 5.21607 11.9377 4.9 12.7333 4.9ZM12.7333 12.8C14.7333 12.8 18.7333 13.89 18.7333 15.88C18.0766 16.8701 17.185 17.6823 16.1381 18.2442C15.0912 18.806 13.9215 19.1 12.7333 19.1C11.5452 19.1 10.3755 18.806 9.32861 18.2442C8.2817 17.6823 7.39011 16.8701 6.73334 15.88C6.73334 13.89 10.7333 12.8 12.7333 12.8Z"
              fill="#155932"
            />
          </svg>
          <strong>Aziz Bhai Invioce Admin</strong>
        </div>

        <hr
          style={{
            color: "white",
            width: "242.667px",
            height: "1px",
            marginTop: "-5px",
          }}
        />

        <div>
          <DashboardComponent />
          <br />
          <CustomerComponent />
          <br />
          <VendorComponent />
          <br />
          <ProductComponent />
          <br />
          <InvoiceComponent />
          <br />
          <BillComponent />
        </div>
        <SignoutComponent />
      </div>

      <div className={styles.two}>
        <nav
          className="d-lg-none align-items-center"
          style={{
            color: "white",
            width: "100vw",
            height: "70px",
            position: "fixed",
            zIndex: "100",
            backgroundColor: "white",
          }}
        >
          <div className=" d-flex align-items-center ">
            <button
              style={{
                width: "70px",
                color: "#1f2129",
                height: "70px",
                border: "none",
                margin: "0",
              }}
              className="d-lg-none"
              onClick={handleShow}
            >
              <IoMdMenu style={{ fontSize: "40px" }} />
            </button>
            <p
              style={{
                color: "#000",
                fontFamily: "Lato",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal",
              }}
            >
              Add Product
            </p>
          </div>
        </nav>

        <div>
          <Offcanvas
            show={show}
            onHide={handleClose}
            responsive="lg"
            className={styles.sidebar2}
          >
            <div className={styles.brandname}>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M12.7333 1L3.73334 5V11C3.73334 16.55 7.57334 21.74 12.7333 23C17.8933 21.74 21.7333 16.55 21.7333 11V5L12.7333 1ZM12.7333 4.9C13.3267 4.9 13.9067 5.07595 14.4 5.40559C14.8934 5.73524 15.2779 6.20377 15.505 6.75195C15.732 7.30013 15.7914 7.90333 15.6757 8.48527C15.5599 9.06721 15.2742 9.60176 14.8547 10.0213C14.4351 10.4409 13.9006 10.7266 13.3186 10.8424C12.7367 10.9581 12.1335 10.8987 11.5853 10.6716C11.0371 10.4446 10.5686 10.0601 10.2389 9.56671C9.90928 9.07336 9.73334 8.49334 9.73334 7.9C9.73334 7.10435 10.0494 6.34129 10.612 5.77868C11.1746 5.21607 11.9377 4.9 12.7333 4.9ZM12.7333 12.8C14.7333 12.8 18.7333 13.89 18.7333 15.88C18.0766 16.8701 17.185 17.6823 16.1381 18.2442C15.0912 18.806 13.9215 19.1 12.7333 19.1C11.5452 19.1 10.3755 18.806 9.32861 18.2442C8.2817 17.6823 7.39011 16.8701 6.73334 15.88C6.73334 13.89 10.7333 12.8 12.7333 12.8Z"
                    fill="#155932"
                  />
                </svg>
                <strong>Aziz Bhai Invoice Admin</strong>
              </div>

              {/* Close icon */}
              <IoIosCloseCircleOutline
                className="d-md-none"
                onClick={handleClose}
                style={{
                  height: "25px",
                  width: "25px",
                  cursor: "pointer", // Adding cursor style for better UX
                }}
              >
                x
              </IoIosCloseCircleOutline>
            </div>

            <hr
              style={{
                color: "white",
                width: "100%",
                height: "1px",
                marginTop: "-5px",
              }}
            />

            <div>
              <DashboardComponent />
              <br />
              <CustomerComponent />
              <br />
              <VendorComponent />
              <br />
              <ProductComponent />
              <br />
              <InvoiceComponent />
              <br />
              <BillComponent />
            </div>
            <SignoutComponent />
          </Offcanvas>
        </div>
      </div>
    </div>
  );
};
