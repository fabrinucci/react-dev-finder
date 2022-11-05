import { urlFetch } from '../constants';

export const getGitHubUser = async (user) => {
  const res = await fetch(`${urlFetch}${user}`);
  const payload = await res.json();
  return payload;
}