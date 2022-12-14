import { getSession } from 'next-auth/react';

const fetchApplications = async () => {
  const session = await getSession();

  if (!session) throw new Error('No session found fetching applications');

  const res = await fetch('/api/applications', {
    method: 'POST',
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify({ email: session.user?.email }),
  }).then((res) => res.json());

  return res;
};

export default fetchApplications;
