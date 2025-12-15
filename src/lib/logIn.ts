export const logIn = async (emailAddress: string, password: string): Promise<unknown> => {
  const url = 'https://api.qccareerschool.com/qccareerschool/login';
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ emailAddress, password }),
    credentials: 'include',
  });
  if (!response.ok) {
    throw Error('Server error');
  }
  return response.json();
};
