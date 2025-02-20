export interface UserInfo {
  userName: string;
  firstName: string;
  lastName: string;
}

export interface SalesState {
  user: UserInfo | null;
  orders: string[];
  preferences: string[];
  sessionRenewAt: Date | null;
  loginAt: Date | null;
}
