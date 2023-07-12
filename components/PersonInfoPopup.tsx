import { IPerson } from "@/assets";
import styles from "@/styles/components/personInfopopup.module.scss";
import Image from "next/image";

interface IPersonInfoPopup {
    info: IPerson
}

export const PersonInfoPopup = ({info}: IPersonInfoPopup): JSX.Element => {
    return (
        <div className={styles.pip_wrapper}>
            <div className={styles.pip_content}>
                <div className={styles.pip_strip}>
					<div className={styles.bg_image} id="image-wrapper" style={{backgroundImage: `url('${info.image}')`}}></div>
                    <div className={styles.pip_strip_img}>
                        {/* image here */}
                        <Image src={info.image} alt={`@${info.name}_pic`} fill /> 
                    </div>       
                </div>
                <div className={styles.pip_strip}>
                    {/* name */}
                    <h3>{info.name}</h3>
					<hr />
                </div>
                <div className={styles.pip_strip}>
                    {/* bio */}
                    <ul>
                        <li><strong>Age: </strong>{info.age}</li>
                        <li><strong>Village: </strong>{info.village}</li>
                        <li><strong>Primary School: </strong>{info.primary_sch}</li>
                    </ul>
                </div>
                <div className={styles.pip_strip}>
                    <p>{info.description}</p>
                </div>
                <div className={styles.pip_strip}>
                    <a href={`/story/${info.uid}`}>View Story</a>
                </div>
            </div>
        </div>
    )
}
