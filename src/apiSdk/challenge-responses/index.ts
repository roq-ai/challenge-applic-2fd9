import queryString from 'query-string';
import { ChallengeResponseInterface, ChallengeResponseGetQueryInterface } from 'interfaces/challenge-response';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getChallengeResponses = async (
  query?: ChallengeResponseGetQueryInterface,
): Promise<PaginatedInterface<ChallengeResponseInterface>> => {
  return fetcher('/api/challenge-responses', {}, query);
};

export const createChallengeResponse = async (challengeResponse: ChallengeResponseInterface) => {
  return fetcher('/api/challenge-responses', { method: 'POST', body: JSON.stringify(challengeResponse) });
};

export const updateChallengeResponseById = async (id: string, challengeResponse: ChallengeResponseInterface) => {
  return fetcher(`/api/challenge-responses/${id}`, { method: 'PUT', body: JSON.stringify(challengeResponse) });
};

export const getChallengeResponseById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/challenge-responses/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteChallengeResponseById = async (id: string) => {
  return fetcher(`/api/challenge-responses/${id}`, { method: 'DELETE' });
};
