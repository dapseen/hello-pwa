importScripts('https://www.gstatic.com/firebasejs/5.0.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.0.4/firebase-messaging.js');

var config = {
    apiKey: "AIzaSyBhZ1DAmvKYbHgc_ApUpBDl73jhymcQnek",
    authDomain: "hello-pwa-fe390.firebaseapp.com",
    databaseURL: "https://hello-pwa-fe390.firebaseio.com",
    projectId: "hello-pwa-fe390",
    storageBucket: "",
    messagingSenderId: "882209987643"
  };
  firebase.initializeApp(config);

  const messaging=firebase.messaging();

  messaging.setBackgroundMessageHandler(function(payLoad){
      const title="Hello World";
      const options = {
          body: payload.data.body
      };
      return self.registration.showNotification(title,options);
  });