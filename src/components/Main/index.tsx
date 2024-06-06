import Image from 'next/image'
import styles from './styles.module.scss'
import { Agents } from '../Agents'

export const Main = () => {
  return (
    <main className={styles.container}>
      <div className={styles.title}>
        <Image src="/background-logo.svg" width={140} height={99} alt="logo do backround do valorant" />
        <h1> AGENTES </h1>
      </div>
      <Agents />
    </main>
  )
}