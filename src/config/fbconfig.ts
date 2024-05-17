import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyC6P1Zg_48xL2NPdw9cndK1z8axw8wtt-A',
  authDomain: 'regulation-website.firebaseapp.com',
  projectId: 'regulation-website',
  storageBucket: 'regulation-website.appspot.com',
  messagingSenderId: '372029387692',
  appId: '1:372029387692:web:e99e486ae6e165c3414009',
  measurementId: 'G-Z5SN11Q6X5',
}

export const app = initializeApp(firebaseConfig)
export const analytics =
  typeof window !== 'undefined' ? getAnalytics(app) : null
