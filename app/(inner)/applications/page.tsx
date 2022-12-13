'use client';

import { useQuery } from '@tanstack/react-query';
import type { NextPage } from 'next';
import fetchApplications from '../../../api/fetchApplications';
import Application, { IApplication } from '../../../components/Application';
import Spinner from '../../../components/Spinner';

const Applications: NextPage = () => {
  const { isLoading, error, data, isFetching } = useQuery<
    IApplication[],
    Error
  >({
    queryKey: ['applications'],
    queryFn: fetchApplications,
  });

  if (isLoading) return <Spinner isLoading={isFetching} color={'#6a429c'} />;

  if (error) return <div>{'An error has occurred: ' + error.message}</div>;

  return (
    <>
      <h1 className="text-3xl font-bold underline">Manage profiles</h1>
      <ul className="mt-3 p-3">
        {data?.map((application) => (
          <Application key={application.id} {...application} />
        ))}
      </ul>
    </>
  );
};

export default Applications;
