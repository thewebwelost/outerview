const fetchDashboard = async ({ queryKey }: any) => {
  const email = queryKey[1];
  if (email) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/dashboard`,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify({ email }),
      }
    ).then((res) => res.json());

    return res;
  }

  return {};
};

export default fetchDashboard;
