import { Redirect } from 'expo-router';
import { useAuth } from '@clerk/clerk-expo'

const Home = () => {

    const { isSignedIn } = useAuth()
    console.log(isSignedIn)
    if (isSignedIn) {
      return <Redirect href={'/(root)/(tabs)/home'} />
    }

    return <Redirect href="/(auth)/welcome" />
};

export default Home;