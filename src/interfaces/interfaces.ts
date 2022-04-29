import {Coordinates, Company} from '../types/types'

interface IAddres {
    street: string,
      suite: string,
      city: string,
      zipcode: number,
      geo?: Coordinates
}
export interface IUser {
    id: number,
    name: string,
    username: string,
    email: string,
    address?: IAddres,
    phone?: number,
    website?: string,
    company?: Company
  }

export interface ILoginState {
  login: string,
  password: string
}

export interface IInitialState {
    users: IUser[];
    status: string;
}