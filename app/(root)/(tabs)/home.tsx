import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo'
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';


const Home = () => {

    const { user } = useUser()

    return (
        <SafeAreaView>
            <View>
            <SignedIn>
                <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
            </SignedIn>
            <SignedOut>
                <Link href="/sign-in">
                <Text>Sign In</Text>
                </Link>
                <Link href="/sign-up">
                <Text>Sign Up</Text>
                </Link>
            </SignedOut>
            </View>
        </SafeAreaView>
    );
};

export default Home;