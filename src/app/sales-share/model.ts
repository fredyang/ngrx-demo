export interface UserInfo {
  userName: string;
  firstName: string;
  lastName: string;
}

export interface SalesState {
  user: UserInfo | null;
  orders: string[];
  preferences: string[];
  sessionValidSince: Date | null;
}
