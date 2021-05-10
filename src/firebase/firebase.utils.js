import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: process.env.REACT_APP_STAGE_API_KEY,
  authDomain: process.env.REACT_APP_STAGE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_STAGE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STAGE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_STAGE_EMAIL_JS,
  appId: process.env.REACT_APP_STAGE_APP_ID,
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()
  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('error: ', error.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account ' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)
