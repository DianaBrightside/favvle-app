import {
    initializeApp
} from "firebase/app";
import {
    getAnalytics
} from "firebase/analytics";

import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA2kP2am3abH1yCdjpujCUntU56iiP_Hk4",
    authDomain: "favvle-app.firebaseapp.com",
    projectId: "favvle-app",
    storageBucket: "favvle-app.appspot.com",
    messagingSenderId: "144610610608",
    appId: "1:144610610608:web:c094d58bee82e98698da75",
    measurementId: "G-9CZ8SF4WJW"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app;