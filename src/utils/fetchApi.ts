import { options } from './constants';

export async function fecthApi<T>(EP: string): Promise<T> {
  try {
    const response = await fetch(EP, options);
    const data = response.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
