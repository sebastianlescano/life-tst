import Metadata from './Metadata';
import VRINav from './VRINav/VRINav';
import VRIFooter from './VRIFooter/VRIFooter';
import styles from './VRIShell.module.scss';

export default function VRILayout({ children }) {
    return (
        <>
            <Metadata />
            <main className={(styles.vriShell, 'vri')}>
                <VRINav />
                <div>{children}</div>
                <VRIFooter />
            </main>
        </>
    );
}
