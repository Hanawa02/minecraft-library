import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

export default defineNuxtPlugin(() => {
  const runtimeConfig = useRuntimeConfig()

  const firebaseConfig = {
    apiKey: runtimeConfig.public.firebaseApiKey,
    projectId: runtimeConfig.public.firebaseProjectId
  }

  const app = initializeApp(firebaseConfig)
  const firestore = getFirestore(app)

  const auth = getAuth(app)
  return {
    provide: {
      auth,
      firestore
    }
  }
})
