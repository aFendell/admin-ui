export type Method = 'GET' | 'POST';

export const defaultFetchOptions: Partial<RequestInit> = {
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json',
  },
} as const;

export const fetchData = async <TData>(url: string, method: Method = 'GET') => {
  let errorMessage = undefined;
  let data: TData | undefined = undefined;

  try {
    const res = await fetch(url, {
      method,
      ...defaultFetchOptions,
    });

    if (!res.ok) throw new Error('Faild to fetch data');

    data = await res.json();
  } catch (error) {
    if (error instanceof Error) {
      errorMessage = error.message;
    } else {
      errorMessage = 'Faild to fetch data';
    }
  }

  return { data, errorMessage };
};
