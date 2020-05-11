export interface IUser {
  username: string;
  roles: number[];
  widgets: number[];
  language: string;
}

export interface RootState {}

export interface UserState {
  token: string | null;
  user: IUser | null;
}
