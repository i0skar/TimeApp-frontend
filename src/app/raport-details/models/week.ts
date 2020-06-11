export interface Week {
  week: number;
  hoursInWeek: number;
  workedHours: number;
  projects: {
    name: string;
    workedHours: number;
  }[];
  id?: number;
}
