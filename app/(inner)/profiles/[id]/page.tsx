'use client';

import { NextPage } from 'next';
import { useSearchParams } from 'next/navigation';
import { ParsedUrlQuery } from 'querystring';
import { useEffect, useState } from 'react';

interface IProfile {
  id: number;
  userId: number;
  name: string;
  title: string;
  email: string;
  website: string;
  location: string;
  summary: string;
  details: string[];
  hardSkills: string[];
  softSkills: string[];
  experience: object[];
  education: object[];
  socials: object[];
}

const SingleProfile: NextPage<{ params: ParsedUrlQuery }> = ({ params }) => {
  const id = params.id;
  const [profile, setProfile] = useState<IProfile>();

  useEffect(() => {
    if (!id) return;

    const fetchProfile = async () => {
      try {
        await fetch(`/api/profiles/${id}`)
          .then((response) => response.json())
          .then((data) => setProfile(data));
      } catch (err) {
        console.error(err);
      }
    };

    fetchProfile();
  }, [id]);

  return (
    <>
      <p>Profile Id: {id}</p>
      <p>{profile?.name}</p>
      <p>{profile?.title}</p>
      <p>{profile?.email}</p>
      <p>{profile?.website}</p>
      <p>{profile?.location}</p>
      <p>{profile?.summary}</p>

      <ul className="mt-3">
        {profile && profile.details.map((item) => <li key={item}>{item}</li>)}
      </ul>
      <ul className="mt-3">
        {profile &&
          profile.hardSkills.map((item) => <li key={item}>{item}</li>)}
      </ul>
      <ul className="mt-3">
        {profile &&
          profile.softSkills.map((item) => <li key={item}>{item}</li>)}
      </ul>
      <ul className="mt-3">
        {profile &&
          profile.experience.map((item, i) => (
            <li key={i}>{JSON.stringify(item)}</li>
          ))}
      </ul>
      <ul className="mt-3">
        {profile &&
          profile.education.map((item, i) => (
            <li key={i}>{JSON.stringify(item)}</li>
          ))}
      </ul>
      <ul className="mt-3">
        {profile &&
          profile.socials.map((item, i) => (
            <li key={i}>{JSON.stringify(item)}</li>
          ))}
      </ul>
    </>
  );
};

export default SingleProfile;
