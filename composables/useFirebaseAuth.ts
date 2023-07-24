import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  User,
  Auth
} from "firebase/auth"

export default function () {
  const user = useState<User | null>("fb_user", () => null)
  const nuxtApp = useNuxtApp()
  const auth = nuxtApp.$auth as Auth

  const registerUser = async (email: string, password: string): Promise<boolean> => {
    try {
      const credentials = await createUserWithEmailAndPassword(auth, email, password)
      if (credentials) {
        user.value = credentials.user

        return true
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error)
      }
      return false
    }
    return false
  }

  const loginUser = async (email: string, password: string): Promise<boolean> => {
    try {
      const credentials = await signInWithEmailAndPassword(auth, email, password)
      if (credentials) {
        user.value = credentials.user

        return true
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error)
      }
      return false
    }
    return false
  }

  return {
    user,
    loginUser,
    registerUser
  }
}
