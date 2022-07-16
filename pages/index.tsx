import Login from '../components/Login'
import styles from '../styles/Home.module.css'
import {useMoralis} from "react-moralis"

export default function Home() {
  const { isAuthenticated, logout } = useMoralis()

  return (
    <div>
      {isAuthenticated ? (
        <div className={styles.logout}>
          <p>
            You are logged in
            <button onClick= {logout}>Sign Out</button>
          </p>
      </div>
      ): (
        <Login />
      )
      }
    </div>
  )
}
