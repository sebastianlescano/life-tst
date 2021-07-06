import Link from 'next/link';
import styles from './VRIFooter.module.scss';

export default function VRIFooter() {
    return (
        <footer className={styles.vriFooter}>
            <div className={styles.vriFooterWrapper}>
                <Link href="https://beta.viome.com">
                    <a>
                        <img
                            src="https://images.ctfassets.net/qk4l4jfatr3e/1SMJ6OQPL8kTNsze9cXpzS/a0d3137c8503f29d9caabd319a566db8/viome-dark-logo.svg"
                            alt="Viome footer logo"
                        />
                    </a>
                </Link>
                <p className={styles.vriCopyright}>
                    &copy; {new Date().getFullYear()}
                </p>
            </div>
            <div className={styles.vriFooterNav}>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/tests">Tests</Link>
                    </li>
                    <li>
                        <Link href="/studies">Studies</Link>
                    </li>
                    <li>
                        <Link href="/grants">Grants</Link>
                    </li>
                </ul>
            </div>
            <p className={styles.vriCopyright}>
                &copy; {new Date().getFullYear()}
            </p>
        </footer>
    );
}
