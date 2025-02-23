export interface UserInfo {
  userName: string;
  firstName: string;
  lastName: string;
}

export interface SalesState {
  user: UserInfo | null;
  orders: string[] | null;
  preferences: string[] | null;
  refreshSessionAt: Date | null;
}
