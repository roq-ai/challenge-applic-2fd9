import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ChallengeResponseInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  text: string;
  created_by: string;

  user?: UserInterface;
  _count?: {};
}

export interface ChallengeResponseGetQueryInterface extends GetQueryInterface {
  id?: string;
  text?: string;
  created_by?: string;
}
