export type Coordinates = {
    lat: number,
    lng: number
}
export type Company = {
    name: string,
    catchPhrase: string,
    bs: string
  }

export type Input = {
    id: string,
    type: string,
    required: boolean,
    placeholder: string
    value: string
}
export type ButtonType = {
    id: number,
    name: string,
    active: boolean,
  }