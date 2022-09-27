import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { json } from 'stream/consumers';
import NavLink from '../../components/atoms/NavLink';
import Layout from '../../components/Layout';
import { useProvideAuth } from '../../hooks/useProvideAuth';
import { useUser } from '../../hooks/useUser';

// interface IDashboard {
//   applications: object[];
//   avatar: string;
//   email: string;
//   id: number;
//   profiles: {
//     id: number;
//     name: string;
//     avatar: string;
//     username: string;
//     position: string;
//     applicationsCount: number;
//   }[];
//   username: string;
// }

// const Dashboard: NextPage = () => {
//   const { getDashboard } = useUser();
//   const [dashboard, setDashboard] = useState<IDashboard>();

//   const { refresh } = useProvideAuth();

// useEffect(() => {
//   const fetchUser = async () => {
//     const dashboardData = await getDashboard();
//     setDashboard(dashboardData);
//   };

//   fetchUser();
// }, [getDashboard]);

//   return (
//     // <Layout>
//       <>
//         <h1 className="text-3xl font-bold underline">
//           {`${dashboard?.username}'s profiles`}
//         </h1>
//         <button
//           onClick={async () => {
//             await refresh();
//           }}
//         >
//           refresh
//         </button>
//         <div className={'flex mt-3'}>
//           {dashboard &&
//             dashboard.profiles.map((profile, i) => {
//               return (
//                 // TODO: move to component
//                 <div
//                   key={`${profile.id}_${i}`}
//                   className={'p-3 mr-5 border rounded-md'}
//                 >
//                   <h3 className={'font-bold'}>{profile.name}</h3>
//                   <Image src={profile.avatar} alt={profile.username} />
//                   <h3>{profile.username}</h3>
//                   <p>{profile.position}</p>
//                   <p>
//                     Active applications:{' '}
//                     <span>{profile.applicationsCount}</span>
//                   </p>
//                   <Link href={'/profile'}>
//                     <a
//                       className={
//                         'block mt-2 text-blue-500 underline text-right'
//                       }
//                     >
//                       edit
//                     </a>
//                   </Link>
//                 </div>
//               );
//             })}

//           <Link href={'/addProfile'}>
//             <a
//               className={
//                 'flex justify-center items-center p-3 mr-5 text-blue-500 underline border rounded-md cursor-pointer'
//               }
//             >
//               + add profile
//             </a>
//           </Link>
//         </div>

//         <br />

//         <h2 className="text-xl font-bold underline">Upcoming events:</h2>
//         <ul>
//           <li className="flex justify-between items-center border mt-1 p-2">
//             <span>
//               Interview at <a className={'text-blue-500 underline'}>Google</a>
//             </span>
//             <span className={'text-green-400'}>Phone screen</span>{' '}
//             <span>45 min with recruiter</span>
//             <span className="text-xs text-gray-500 italic">
//               01/01/2001 12:00 PST
//             </span>
//           </li>
//           <li className="flex justify-between items-center border mt-1 p-2">
//             <span>
//               Interview at <a className={'text-blue-500 underline'}>Facebook</a>
//             </span>
//             <span className={'text-orange-400'}>Technical Interview</span>{' '}
//             <span>90 min with Dev lead</span>
//             <span className="text-xs text-gray-500 italic">
//               01/02/2001 12:00 PST
//             </span>
//           </li>
//           <li className="flex justify-between items-center border mt-1 p-2">
//             <span>
//               Interview at <a className={'text-blue-500 underline'}>Netflix</a>
//             </span>
//             <span className={'text-purple-400'}>Behavioural</span>{' '}
//             <span>45 min with CEO</span>
//             <span className="text-xs text-gray-500 italic">
//               01/03/2001 12:00 PST
//             </span>
//           </li>
//         </ul>
//         <Link href={'/addEvent'}>
//           <a className="block mt-3 text-right text-blue-500 underline cursor-pointer">
//             + add event
//           </a>
//         </Link>

//         {/* APPLICATIONS */}
//         <h2 className="text-xl font-bold underline">Your applications:</h2>
//         <ul className="flex mt-3">
//           <li className="p-3 mr-5 border rounded-md">
//             <p className="font-bold">Google</p>
//             <p>software engineer II</p>
//             <p>
//               status:{' '}
//               <span className="text-white bg-green-400">in progress</span>
//             </p>
//             <Link href={'/application'}>
//               <a className={'block mt-2 text-blue-500 underline text-right'}>
//                 edit
//               </a>
//             </Link>
//           </li>
//           <li className="p-3 mr-5 border rounded-md">
//             <p className="font-bold">Netflix</p>
//             <p>FE Team Lead</p>
//             <p>
//               status:{' '}
//               <span className="text-white bg-green-400">in progress</span>
//             </p>
//             <Link href={'/application'}>
//               <a className={'block mt-2 text-blue-500 underline text-right'}>
//                 edit
//               </a>
//             </Link>
//           </li>
//           <li className="p-3 mr-5 border rounded-md">
//             <p className="font-bold">Facebook</p>
//             <p>Senior developer</p>
//             <p>
//               status:{' '}
//               <span className="text-white bg-green-400">in progress</span>
//             </p>
//             <Link href={'/application'}>
//               <a className={'block mt-2 text-blue-500 underline text-right'}>
//                 edit
//               </a>
//             </Link>
//           </li>
//           <li className="p-3 mr-5 border rounded-md">
//             <p className="font-bold">Amazon</p>
//             <p>software engineer II</p>
//             <p>
//               status: <span className="text-white bg-red-400">awaits</span>
//             </p>
//             <Link href={'/application'}>
//               <a className={'block mt-2 text-blue-500 underline text-right'}>
//                 edit
//               </a>
//             </Link>
//           </li>
//           <li className="p-3 mr-5 border rounded-md">
//             <Link href={'/addApplication'}>
//               <a
//                 className={
//                   'flex justify-center items-center mr-5 text-blue-500 underline cursor-pointer'
//                 }
//               >
//                 + add application
//               </a>
//             </Link>
//           </li>
//         </ul>
//       </>
//     // </Layout>
//   );
// };

const Dashboard: NextPage = () => {
  const { error, isLoading, getDashboard } = useUser();
  const [dashboard, setDashboard] = useState();
  const auth = useProvideAuth();

  const fetchUser = useCallback(async () => {
    const res = await getDashboard();
    setDashboard(res);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  if (error) return <p>Error... {JSON.stringify(error)}</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <Layout>
      <>
        <div>
          <button className="p-2 bg-gray-400" onClick={() => auth.refresh()}>
            refresh
          </button>
        </div>
        <div>dashboard: {JSON.stringify(dashboard)}</div>
      </>
    </Layout>
  );
};

export default Dashboard;
