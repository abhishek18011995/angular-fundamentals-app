import { Injectable } from '@angular/core';
import { EventSessions } from '../../../models/eventSession.model';

@Injectable()
export class VoterService {

  constructor() { }

  addVote(session: EventSessions, voterName) {
    if (voterName) {
      session.voters.push(voterName);
    }
  }

  deleteVote(session: EventSessions, voterName) {
    session.voters = session.voters.filter(voter => voter !== voterName);
  }

  isUserVoted(session: EventSessions, voterName) {
    return session.voters.includes(voterName);
  }

}
