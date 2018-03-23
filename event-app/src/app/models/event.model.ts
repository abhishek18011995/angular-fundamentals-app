import { EventSessions } from './eventSession.model';
import { EventLocation } from './eventLocation.model';

export interface Event {
    id: number;
    name: string;
    date: string;
    time: string;
    price: number;
    imageUrl: string;
    location: EventLocation;
    sessions: EventSessions[];
}

