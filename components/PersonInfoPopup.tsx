import { IPerson } from "@/assets";
import styles from "@/styles/components/personInfopopup.module.scss";

interface IPersonInfoPopup {
    info: IPerson
}

export const PersonInfoPopup = ({info}: IPersonInfoPopup): JSX.Element => {
    return (
        <div className={styles.pip_wrapper}>
            <div className={styles.pip_content}>
                <div className={styles.pip_strip}>
                    {/* image here */}
                </div>
                <div className={styles.pip_strip}></div>
                <div className={styles.pip_strip}></div>
            </div>
        </div>
    )
}