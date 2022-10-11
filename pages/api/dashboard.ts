import { NextApiRequest, NextApiResponse } from 'next';
import { axiosPrivate } from '../../utils/http/axios';

const dashboard = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { data } = await axiosPrivate.get('/dashboard');

    res.send(data);
  } catch (err) {
    // where am I???
    res.status(400).json(err);
  }
};

export default dashboard;
