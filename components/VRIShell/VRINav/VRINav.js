import { useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import styles from './VRINav.module.scss';

export default function VRINav() {
    const [isCollapsed, setIsCollapsed] = useState(true),
        Links = () => (
            <ul>
                <li>
                    <Link href="/home">Home</Link>
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
        );

    function handleNavbarTogglerClick() {
        setIsCollapsed(!isCollapsed);
    }
    return (
        <header className={styles.vriHeader}>
            <nav className={styles.vriNav}>
                <div className={styles.vriNavLeft}>
                    <div>
                        <a>
                            <img
                                src="https://images.ctfassets.net/qk4l4jfatr3e/4HctpEJK7WfjxbViWXZgnR/cc954a2ecb67d4f56fd50dd37b7ea36f/viome-white.svg"
                                alt="Logo - Viome - White"
                            />
                        </a>
                    </div>
                    <div>
                        <h3>Life Sciences</h3>
                    </div>
                </div>
                <div className={styles.vriNavRight}>
                    <button
                        className={styles.navbarToggler}
                        onClick={handleNavbarTogglerClick}
                        type="button"
                    >
                        <div className={styles.navbarMenu}>
                            <div
                                className={classNames(
                                    styles.navbarBar,
                                    styles.navbarBar__top,
                                    !isCollapsed && styles.navbarBarCollapsed,
                                )}
                            />
                            <div
                                className={classNames(
                                    styles.navbarBar,
                                    styles.navbarBar__bottom,
                                    !isCollapsed &&
                                        styles.navbarBarCollapsedAlt,
                                )}
                            />
                        </div>
                    </button>
                    <div className={styles.vriMainNavbar}>
                        <Links />
                    </div>
                </div>
            </nav>
            <div
                className={classNames(
                    styles.vriDropdown,
                    !isCollapsed && styles.vriDropdown__isVisible,
                )}
            >
                <Links />
            </div>
        </header>
    );
}
