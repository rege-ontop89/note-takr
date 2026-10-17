import { Tabs } from 'expo-router';
import BottomNavbar from '../../components/BottomNavbar';

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <BottomNavbar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
        }}
      />

      <Tabs.Screen
        name="library"
        options={{
          title: 'Library',
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
        }}
      />
    </Tabs>
  );
}
