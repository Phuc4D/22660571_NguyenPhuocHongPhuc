import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "home";

          if (route.name === "Index") iconName = "home";
          else if (route.name === "Profile") iconName = "person";
          else if (route.name === "Search") iconName = "search";
          else if (route.name === "Home") iconName = "home";

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="Index" options={{ title: "Home" }} />
      <Tabs.Screen name="Profile" options={{ title: "Profile" }} />
      <Tabs.Screen name="Search" options={{ title: "Search" }} />
    </Tabs>
  );
}
