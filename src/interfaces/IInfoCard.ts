export interface IInfoCard {
  source: string,
  number: string | number,
  name: string,
  href: string,
  bgColorIndex: string
  types?: string,
  weight?: string | number,
  sprites?: string[],
  movements?: string | string[]
}