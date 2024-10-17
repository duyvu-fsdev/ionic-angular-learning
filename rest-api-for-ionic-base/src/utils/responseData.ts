export const errorGenerate = (code?: number, errorMessages?: string | string[]) => {
 return { code: code || 500, errorMessages: errorMessages || 'An unexpected error occurred' };
};

export const errorCatchGenerate = (code: number, errorMessages: string | string[]) => {
 return { code, errorMessages };
};

export const responseData = (
 status: 'success' | 'error',
 message: string,
 data: any | null,
 errors: { code: number; errorMessages: string | string[] } | null,
) => {
 return errors != null
  ? { status: status, message, data: null, errors }
  : { status, message, data: data, errors: null };
};
