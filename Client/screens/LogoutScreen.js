const LogoutScreen = ({ navigation }) => {
    const handleLogout = async () => {
        await AsyncStorage.removeItem('token'); // Remove token
        navigation.navigate('Welcome'); // Redirect to Welcome screen
    };

    useEffect(() => {
        handleLogout();
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>You have logged out!</Text>
        </View>
    );
};
