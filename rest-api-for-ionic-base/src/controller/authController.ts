import { Request, Response } from 'express';
import User from '../db/models/user';
import { hashPass } from '../utils/password';
import responseData from '../utils/responseData';

const register = async (req: Request, res: Response): Promise<Response> => {
 try {
  const { name, email, password, phoneNumber, role } = req.body;
  const hashed = await hashPass(password);
  const user = await User.create({
   name,
   email,
   password: hashed,
   phoneNumber,
   role: role || 'customer',
  });

  return res
   .status(201)
   .send(responseData(201, 'Registration successful', null, user));
 } catch (error: any) {
  return res.status(500).send(responseData(500, '', error, null));
 }
};

export default { register };
