import auth from '@react-native-firebase/auth';

async function register(email, password) {
  try {
    await auth().createUserWithEmailAndPassword(email, password);
  } catch (e) {
    console.error(e.message);
  }
}

