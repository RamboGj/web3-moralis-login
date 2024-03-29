import styles from "../styles/Login.module.css"
import Image from "next/image"
import {useMoralis} from "react-moralis"
import icon from "../public/Moralis-Favicon.svg"

export default function Login() {
    const { authenticate, authError } = useMoralis()

    return (
        <div className={styles.login_container}>
            <div className={styles.login_card}>
                <Image src={icon} width={100} height={100}/>
                <div className={styles.sign_in_container}>
                    {authError && (
                        <p className={styles.error}>
                            {authError.name}
                            {authError.message}
                        </p>
                    )}
                    <button onClick={() => authenticate()}>Login with Moralis</button>
                </div>
            </div>
      </div>
    )
}