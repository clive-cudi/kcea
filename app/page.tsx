import Image from 'next/image'
import styles from './page.module.scss';
import { Navbar, LandingSection, CardsSection } from '@/components';

export default function Home() {
  return (
    <main className={`app ${styles.app}`} id='app'>
      <div className={`content ${styles.content}`}>
        <Navbar />
        <LandingSection />
        <CardsSection />
      </div>
    </main>
  )
}
