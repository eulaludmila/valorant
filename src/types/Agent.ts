export interface IAgent {
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