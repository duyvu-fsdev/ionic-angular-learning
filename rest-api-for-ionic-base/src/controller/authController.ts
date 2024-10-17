import { Request, Response } from 'express';
import User from '../db/models/user';
import { hashPass, passwordIsMatch } from '../utils/password';
import { errorGenerate, responseData } from '../utils/responseData';

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

  const { password: p, ...data } = user.dataValues;

  return res.status(201).send(responseData('success', 'Registration successful', { user: data }, null));
 } catch (error: any) {
  return res.status(500).send(responseData('error', '', null, errorGenerate()));
 }
};

const login = async (req: Request, res: Response): Promise<Response> => {
 try {
  const { email, password } = req.body;
  const currentUser = await User.findOne({
   raw: true,
   where: { email: email },
  });
  if (!currentUser) {
   const errors = errorGenerate(404, 'Email does not exist');
   return res.status(404).send(responseData('error', 'Not Found', null, errors));
  }
  if (!(await passwordIsMatch(password, currentUser.password))) {
   const errors = errorGenerate(401, 'Wrong password');
   return res.status(401).send(responseData('error', 'Unauthorized', null, errors));
  }
  const { password: p, ...data } = currentUser;
  return res.status(201).send(responseData('success', 'Ok', { currentUser: data }, null));
 } catch (error) {
  return res.status(500).send(responseData('error', '', null, errorGenerate()));
 }
};

export default { register, login };
