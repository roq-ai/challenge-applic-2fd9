import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ChallengeInterface {
  id?: string;
  description: string;
  creator_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface ChallengeGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  creator_id?: string;
}
