import { getSession } from 'next-auth/react';

const fetchDashboard = async () => {
  const session = await getSession();
  const email = session?.user?.email;

  if (!email) throw new Error('No email');

  const res = await fetch('/api/dashboard', {
    method: 'POST',
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify({ email }),
  }).then((res) => res.json());

  return res;
};

export default fetchDashboard;
