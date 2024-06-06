import { IAgent } from "@/types/Agent"

const LOCAL_KEY = '@valorant-agents'

export const loadAgents = async () => {
  const localData = window.localStorage.getItem(LOCAL_KEY)
  if(localData !== null){
    return JSON.parse(localData)
  }

  const route = 'https://valorant-api.com/v1/agents?language=pt-BR'
  const response = await fetch(route).then(result => result.json())
  let data = response.data as IAgent[]
  const dataFilter = data.filter(agent => agent.fullPortrait && agent.fullPortrait !== null)

  window.localStorage.setItem(LOCAL_KEY, JSON.stringify(dataFilter))
  return dataFilter
}