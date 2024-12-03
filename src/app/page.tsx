import styles from "./page.module.css";
import Header from "./components/header";
import LeftHeader from "./components/left-header";
export default function Home() {

  return (
    <div className={styles.page}>
      <Header></Header>
     {/* //TODO: Image will go here */}
      <LeftHeader></LeftHeader>
    </div>
  );
}
