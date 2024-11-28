export interface RocketDto {
  id: string;
  agencyId: string;
  name: string;
  capacity: number;
  range: string;
}
export const NULL_ROCKET: RocketDto = {
  id: '',
  agencyId: '',
  name: 'Not found',
  capacity: 0,
  range: '',
};