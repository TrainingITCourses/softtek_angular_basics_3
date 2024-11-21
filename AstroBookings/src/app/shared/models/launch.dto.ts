import { LaunchStatus } from './launch-status.enum';

/**
 * Represents a launch Data Transfer Object (DTO).
 */
export type LaunchDto = {
  id: string;
  agencyId: string;
  rocketId: string;
  date: Date;
  mission: string;
  destination: string;
  pricePerSeat: number;
  status: LaunchStatus;
};
