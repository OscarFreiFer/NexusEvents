import { Venue } from './venue';

export interface Events {
    id?: number;
    name?: string | null;
    description?: string | null;
    startDate: Date;
    endDate: Date;
    userId: number;
    imageUrl?: string | null;
    spaceId: number;
    space?: Venue;
}
