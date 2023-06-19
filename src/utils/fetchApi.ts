import { options } from './constants';

export async function fecthApi(EP: string) {
  const response = await fetch(EP, options);
  const data = response.json();
  return data;
}
