import React, { useState } from "react"
import SignOutModal from "./signout"
import styles from "../styles/signoutbutton.module.css"

function SignOut() {
  const [showModal, setShowModal] = useState(false)

  const handleSignOut = () => {
    // Implement your sign out logic here
    console.log("User signed out")
    setShowModal(false)
  }

  return (
    <div className={styles.signOutContainer}>
      <button className={styles.signOutButton} onClick={() => setShowModal(true)}>
        Sign Out
      </button>
      <SignOutModal isOpen={showModal} onClose={() => setShowModal(false)} onSignOut={handleSignOut} />
    </div>
  )
}

export default SignOut

