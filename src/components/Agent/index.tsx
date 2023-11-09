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
  }
}

export const Agent = ({ agent }: AgentProps) => {
  return (
    <a href="#" className={styles.agent}>
      <div>
        <p>{agent.role.displayName}</p>
        <strong>{agent.displayName}</strong>
      </div>
      <ul>
        {
          agent.abilities.map((abilitie, index) => 
            <li key={index}>
              <Image src={abilitie.displayIcon} width={36} height={36} alt={'Icone da habilidade ' + abilitie.displayName} />
            </li>
          )}

      </ul>
    </a>
  )
}