import axios from 'axios';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';
import { setCookie } from 'nookies';
import httpClient from '../../axios/customHttp';

/* JWT secret key */
const KEY = process.env.JWT_KEY!;
/* Users collection sample */
const USERS = [
  {
    id: 1,
    email: 'example1@example.com',
    password: '$2y$10$mj1OMFvVmGAR4gEEXZGtA.R5wYWBZTis72hSXzpxEs.QoXT3ifKSq', // password
    createdAt: '2020-06-14 18:23:45',
  },
  {
    id: 2,
    email: 'example2@example.com',
    password: '$2y$10$mj1OMFvVmGAR4gEEXZGtA.R5wYWBZTis72hSXzpxEs.QoXT3ifKSq', // password
    createdAt: '2020-06-14 18:23:45',
  },
  {
    id: 3,
    email: 'example3@example.com',
    password: '$2y$10$mj1OMFvVmGAR4gEEXZGtA.R5wYWBZTis72hSXzpxEs.QoXT3ifKSq', // password
    createdAt: '2020-06-14 18:23:45',
  },
  {
    id: 4,
    email: 'example4@example.com',
    password: '$2y$10$mj1OMFvVmGAR4gEEXZGtA.R5wYWBZTis72hSXzpxEs.QoXT3ifKSq', // password
    createdAt: '2020-06-14 18:23:45',
  },
];

export default async function auth(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { method } = request;
  try {
    switch (method) {
      case 'POST':
        const { email, password } = request.body;

        if (!email || !password) {
          return response.status(400).json({
            status: 'error',
            error: 'Request missing username or password',
          });
        }

        const authRes = await axios
          .post(
            '/login',
            {
              email,
              password,
            },
            {
              url: process.env.NEXT_PUBLIC_API_SAME_URL,
            }
          )
          .then((res) => {
            // we get access token from login response
            // and write it to cookies
            setCookie(null, 'OuterviewAuthToken', res.data.accessToken, {
              maxAge: 24 * 60 * 60 * 1000,
              path: '/',
            });

            console.log('[---------res]', res);

            return res.data;
          })
          .catch((err) => {
            console.log('err');
          });

        response.status(200).json(authRes);

        break;
      case 'PUT':
        break;
      case 'PATCH':
        break;
      default:
        break;
    }
  } catch (error) {
    throw error;
  }
}
