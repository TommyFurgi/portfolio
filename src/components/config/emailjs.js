const trimEnv = (value) => (value || '').replace(/^['"]|['"]$/g, '').trim();

export const EMAILJS_SERVICE_ID = trimEnv(process.env.REACT_APP_EMAILJS_SERVICE_ID);
export const EMAILJS_TEMPLATE_ID = trimEnv(process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
export const EMAILJS_PUBLIC_KEY = trimEnv(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

export const isEmailJsConfigured = () => (
  Boolean(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY)
);
