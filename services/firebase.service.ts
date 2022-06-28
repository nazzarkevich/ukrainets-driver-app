import { auth } from '../firebase';

class FirebaseService {
  get currentUser() {
    return auth.currentUser;
  }
}

export const firebaseService = new FirebaseService();
