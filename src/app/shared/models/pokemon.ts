export interface Pokemon {
  species: object;
  count: number;
  next: string;
  results?: [];
  name: string;
  id: number;
  sprites: Sprites;
}
export interface Sprites {
  back_default: string;
  front_default: string;
}
