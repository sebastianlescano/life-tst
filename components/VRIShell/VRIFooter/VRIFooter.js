import Link from 'next/link';
import styles from './VRIFooter.module.scss';

export default function VRIFooter() {
    return (
        <footer className={styles.vriFooter}>
            <div className={styles.vriFooterWrapper}>
                <img src={fields.file.url} alt={fields.title} />
                <p className={styles.vriCopyright}>
                    &copy; {new Date().getFullYear()}
                </p>
            </div>
            <div className={styles.vriFooterNav}>
                <ul>
                    {topLinks.map((topLink) => (
                        <li key={topLink.fields.title}>
                            <Link href={topLink.fields.url}>
                                {topLink.fields.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <p className={styles.vriCopyright}>
                &copy; {new Date().getFullYear()}
            </p>
        </footer>
    );
}
