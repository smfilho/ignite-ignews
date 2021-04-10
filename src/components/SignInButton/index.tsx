import { FaGithub } from 'react-icons/fa';
import {} from 'react-icons/fi';
import styles from './styles.module.scss';

export function SignInButton() {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <button type='button' className={styles.signInButton}>
      <FaGithub color='#04d361' />
      Logged User
    </button>
  ) : (
    <button type='button' className={styles.signInButton}>
      <FaGithub color='#eba417' />
      Sign in with GitHub
    </button>
  );
}
