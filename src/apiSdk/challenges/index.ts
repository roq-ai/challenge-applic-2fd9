import queryString from 'query-string';
import { ChallengeInterface, ChallengeGetQueryInterface } from 'interfaces/challenge';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getChallenges = async (
  query?: ChallengeGetQueryInterface,
): Promise<PaginatedInterface<ChallengeInterface>> => {
  return fetcher('/api/challenges', {}, query);
};

export const createChallenge = async (challenge: ChallengeInterface) => {
  return fetcher('/api/challenges', { method: 'POST', body: JSON.stringify(challenge) });
};

export const updateChallengeById = async (id: string, challenge: ChallengeInterface) => {
  return fetcher(`/api/challenges/${id}`, { method: 'PUT', body: JSON.stringify(challenge) });
};

export const getChallengeById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/challenges/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteChallengeById = async (id: string) => {
  return fetcher(`/api/challenges/${id}`, { method: 'DELETE' });
};
