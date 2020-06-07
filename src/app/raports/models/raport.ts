export interface Raport {
  id: number;
  userEmail: string;
  user: string;
  month: string;
  hoursInMonth: number;
  workedHours: number;
  projects: {
    name: string;
    workedHours: number;
  }[];
  isClosed: boolean;
  isAccepted: boolean;
}
