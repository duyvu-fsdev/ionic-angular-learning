import Validator from 'validatorjs';
import { Request, Response, NextFunction } from 'express';
import User from '../../db/models/user';
import responseData from '../../utils/responseData';

const registerValidation = async (req: Request, res: Response, next: NextFunction) => {
 try {
  const { name, email, password, confirmPassword } = req.body;
  const data = { name, email, password, confirmPassword };
  const rules: Validator.Rules = {
   name: 'required|string|max:50',
   email: 'required|email',
   password: 'required|min:6',
   confirmPassword: 'required|same:password',
  };
  const validate = new Validator(data, rules);

  if (validate.fails()) {
   return res.status(400).send(responseData(400, 'Bad Request', validate.errors, null));
  }
  const user = await User.findOne({ where: { email: data.email } });
  if (user) {
   const errorData = { errors: { email: ['Email already used'] } };
   return res.status(400).send(responseData(400, 'BadRequest', errorData, null));
  }
  next();
 } catch (error: any) {
  return res.status(500).send(responseData(500, '', error, null));
 }
};

export default { registerValidation };
