import { useEffect } from 'react';
import { View, Pressable, Text } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';


const App = () => {

    useEffect(() => {
        GoogleSignin.configure({
            androidClientId: "169078323237-oc7trjv1eaf1gjj57ar73fodppmsdjmq.apps.googleusercontent.com",
            });
    }, [])

    const handleGoogleLogin = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            await GoogleSignin.signIn().then(result => { console.log(result) });
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
                alert('User cancelled the login flow !');
            } else if (error.code === statusCodes.IN_PROGRESS) {
                alert('Signin in progress');
                // operation (f.e. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                alert('Google play services not available or outdated !');
                // play services not available or outdated
            } else {
                console.log(error)
            }
        }
    };

    return (
        <View>
            <Pressable onPress={handleGoogleLogin}><Text>Continue with Google</Text></Pressable>
        </View>
    );
}

export default App;