import styles from "./page.module.css";
import Header from "./components/header";
import LeftHeader from "./components/left-header";
export default function Home() {

  return (
    <div className={styles.page}>
      <img
        className={styles.logo}
        src="/images/logo.png"
        alt="Logo"
      />

      <Header></Header>
     {/* //TODO: Image will go here */


     }  

    <img src="/images/temp_photo.jpg" className={styles.homepage_photo}  ></img>

      <LeftHeader></LeftHeader>
    </div>
  );
}
