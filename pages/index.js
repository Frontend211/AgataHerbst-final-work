import Head from 'next/head';
import Heading from "../components/Heading";
import styles from "../styles/Home.module.scss";

function Home() {
    return <>
      <div className={styles.wrapper}>
        <Head>
            <title>Home</title>
        </Head>
           <Heading text="Iris Backer" />
           </div>
           </>
}

export default Home;