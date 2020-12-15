# npm run build

# npx cap add android
# npx cap copy android

# cordova-res android --skip-config --copy

# cp google-services.json android/app

# Add to the AndroidManifest.xml (android/app/src/main/AndroidManifest.xml) the attribute android:usesCleartextTraffic="true"

# Add the following meta-data to the Android Manifest (android/app/src/main/AndroidManifest.xml) at Application to set the icon for push notifications

<application.....>
      <meta-data
          android:name="com.google.firebase.messaging.default_notification_icon"
          android:resource="@drawable/notification_icon" />

# npx cap open android

# Set app icon

> Right click on app/res -> new -> Image Asset
>
> Icon type: Launcher Icons (adaptative and Legacy)
>
> Name: ic_launcher
>
> Select the image and adjust size (trim YES and 110%)

# Set push notifications icon

> Right click on app/res -> new -> Image Asset
>
> Icon type: Action Bar and Tab icons
>
> Name: notification_icon
>
> Select the image and adjust size (trim NO and 0%)

# Generate Signed APK

> Build -> Generate signed bundle / APK
> Contraseña: 123456 , key: vale
> Select release, V1 and V2 and create the signed apk