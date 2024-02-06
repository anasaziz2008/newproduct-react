import Image from "next/image";
import styles from "./page.module.css";
import { SidebarComponent } from "@/src/Sidebar";
import { DragComponent } from "@/src/drag";
import { NavbarComponent } from "@/src/navbar";
import { InformationComponent } from "@/src/information";

export default function Home() {
  return (
    <div className={styles.layout}>
      <SidebarComponent />

      <div>
        <NavbarComponent />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
          className={styles.whitebox}
          >
            <div className={styles.container}>
              <DragComponent />
              <InformationComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
