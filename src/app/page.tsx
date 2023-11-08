import { Main } from '@/components/Main'
import styles from './page.module.scss'
import Header from '@/components/Header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
    </div>
  )
}
