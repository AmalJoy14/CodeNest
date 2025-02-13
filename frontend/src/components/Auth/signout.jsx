import React, { useEffect, useRef } from "react"
import ReactDOM from "react-dom"
import styles from "./signout.module.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"


function SignOutModal({ isOpen, onClose}) {
  const modalRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  const onSignOut = async () => {
    try {
      await axios.get("http://localhost:3000/api/logout", { withCredentials: true })
      onClose()
      navigate("/signin")
    } catch (error) {
      console.error("Error signing out:", error)
    }
  }

  if (!isOpen) return null

  return ReactDOM.createPortal(
    <div className={styles.modalOverlay}>
      <div className={styles.modalBackdrop} aria-hidden="true" />
      <div ref={modalRef} className={styles.modalContent}>
        <h2 className={styles.modalTitle}>Sign Out</h2>
        <p className={styles.modalText}>Are you sure you want to sign out?</p>
        <div className={styles.modalButtons}>
          <button className={styles.cancelButton} onClick={onClose}>
            Cancel
          </button>
          <button className={styles.signOutButton} onClick={onSignOut}>
            Sign Out
          </button>
        </div>
      </div>
    </div>,
    document.body,
  )
}

export default SignOutModal

