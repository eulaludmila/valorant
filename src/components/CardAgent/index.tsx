import Image from 'next/image'
import type { IAgent } from '@/types/Agent'

import styles from './styles.module.scss'

export const CardAgent = (agent : IAgent) => {

  return (
    <a href="#" className={styles.agent}>
      <div className={styles.text}>
        <p>{agent.role?.displayName}</p>
        <strong>{agent.displayName}</strong>
      </div>
      <ul className={styles.abilities}>
        {
          agent.abilities.map((ability, index) => ability.displayIcon && (
            <li key={index}>
              <Image src={ability.displayIcon} width={36} height={36} alt={'Icone da habilidade ' + ability.displayName} />
            </li>
          ))}

      </ul>

      <div className={styles.background}>
          <span style={{backgroundImage: `url(${agent.fullPortrait})`}}/>
      </div>
    </a>
  )
}