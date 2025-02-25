export type ContestStatus = 'ongoing' | 'upcoming' | 'finished'
export type Level = 'Level1' | 'Level2' | 'Level3' | 'Level4' | 'Level5'

export interface Contest {
  id: number
  title: string
  startTime: Date
  endTime: Date
  group: { id: string; groupName: string }
  status: ContestStatus
}

export interface WorkbookProblem {
  order: number
  problemId: number
  title: string
  difficulty: Level
}
