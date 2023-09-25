## 제작 중단

#### 참고

- https://velog.io/@jisoolee11/%EC%95%B1-%EA%B0%9C%EB%B0%9C-%EC%A4%80%EB%B9%84-React-native-Expo-%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0

- https://docs.expo.dev/tutorial/create-your-first-app/

- expo name: webcorgi
- expo mail: ungk456@nate.com
- expo pawd: Zxc7221200!

### 시작

1. install

```
npm install -g expo-cli
```

2. create PR

- 참고(공식): https://reactnative.dev/docs/environment-setup?platform=android&guide=quickstart

```
npx create-expo-app 플젝명
cd 플젝명
npx expo start
```

- npx expo start 후 expo앱을 열어 QR코드로 확인

3. Install Dependencies

```
npm i @react-native-async-storage/async-storage expo-notifications
npm i react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-navigation/native @react-navigation/stack
```

#### Expo eject란?

- expo에서 지원하지 않는 기능들을 사용하기 위해서는 expo eject 명령어로 expo에서 native로 바꿔주어야 한다.

```
expo eject
```

### 권한 설정

잠금 화면에 보기를 오버레이하거나 잠금 화면을 교체하려면 특정 Android 권한이 필요하다는 점을 기억하세요. AndroidManifest.xml에서 다음을 설정합니다.

```
<uses-permission android:name="android.permission.WAKE_LOCK" />
<uses-permission android:name="android.permission.DISABLE_KEYGUARD" />
```
