import Image from 'next/image';
import Button from '../components/BasicButton/button';
import Logo from '../components/logo/logo'
import styles from './page.module.css';

export default function Home() {
  //TODO: Turn everything here into components to be re-used
  return (
    <main className={styles.main}>
      <Logo/>
      <div className={styles.crt}>
        <Button name="About" />
        <Button name="Blog" />
        <Button name="Links" />
        <Button name="Contact" />
      </div>
    </main>
  );
}
