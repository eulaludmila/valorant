import Image from 'next/image'
import styles from './styles.module.scss'

interface AgentProps {
  agent: {
    displayName: string
    role: {
      displayName: string
    },
    abilities: {
      displayIcon: string
      displayName: string
    }[]
    fullPortrait: string
  }
}

export const Agent = ({ agent }: AgentProps) => {
  return (
    <a href="#" className={styles.agent}>
      <div className={styles.text}>
        <p>{agent.role.displayName}</p>
        <strong>{agent.displayName}</strong>
      </div>
      <ul className={styles.abilities}>
        {
          agent.abilities.map((abilitie, index) => 
            <li key={index}>
              <Image src={abilitie.displayIcon} width={36} height={36} alt={'Icone da habilidade ' + abilitie.displayName} />
            </li>
          )}

      </ul>

      <div className={styles.background}>
          <span style={{backgroundImage: `url(${agent.fullPortrait})`}}/>
      </div>
    </a>
  )
}