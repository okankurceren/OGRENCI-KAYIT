# ogrencikayit-app-reactnative

<img align="left" width="90" height="64" src="http://www.trentiums.com/images/react-native/React-Native.png">
<img align="left" width="64" height="64" src="https://www.shareicon.net/download/2016/07/08/117547_developer_512x512.png">

React native ve firebase kullanılarak geliştirilmiş örnek öğrenci kayıt uygulaması , react native'e yeni başlayan arkadaşlar için örnek olması dileğiyle :) ,react-redux yapısı kullanılarak geliştirilmiştir.

<img align="left" width="225" height="400" src="http://barankaraboga.com/wp-content/uploads/2017/10/Screenshot_2017-10-23-11-47-02-231_com.studentproject-e1508753256799.png">

<img align="left" width="225" height="400" src="http://barankaraboga.com/wp-content/uploads/2017/10/Screenshot_2017-10-23-11-46-01-865_com.studentproject.png">

<img align="left" width="225" height="400" src="http://barankaraboga.com/wp-content/uploads/2017/10/Screenshot_2017-10-23-11-45-33-178_com.studentproject.png">

<img width="225" height="400" src="http://barankaraboga.com/wp-content/uploads/2017/10/Screenshot_2017-10-23-11-45-20-727_com.studentproject.png">

<br>
   
Kendi firebase hesabınıza bağlamak için bu kısmı(Main.js dosyası) değiştirmelisiniz.(Firebase hesabınıza girip web kurulumu sekmensinden bu bölümü elde edebilirsiniz.)

```
class Main extends Component {
componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaS***_***-****',
    authDomain: '****.firebaseapp.com',
    databaseURL: 'https://****.firebaseio.com',
    projectId: '****',
    storageBucket: '****.appspot.com',
    messagingSenderId: '****'
  });
}
```
