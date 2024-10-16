import bcrypt from 'bcryptjs';

var salt = bcrypt.genSaltSync(10);

export const hashPass = async (password: string): Promise<string> => {
 const result = await bcrypt.hash(password, 10);
 return result;
};

export const PasswordCompare = async (
 password: string,
 passwordHash: string,
): Promise<boolean> => {
 const matched = await bcrypt.compare(password, passwordHash);

 return matched;
};
