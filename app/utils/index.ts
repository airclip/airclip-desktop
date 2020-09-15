const EMAIL_RE = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export function isDev(): boolean {
  return process.env.NODE_ENV === 'development';
}

export function isProd(): boolean {
  return process.env.NODE_ENV === 'production';
}

export const validateEmail = (text: string) => {
  return EMAIL_RE.test(text);
};
