import md5 from 'md5';

const gravatar = (email) => {
  const base = 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=retro&f=y';
  const formattedEmail = email.trim().toLowerCase();
  const hash = md5(formattedEmail, { encoding: 'binary' });
  return `${base} ${hash}`;
};

export default gravatar;
