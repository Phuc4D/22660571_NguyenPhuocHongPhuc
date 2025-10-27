import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      {/* Trang Home (index.tsx) */}
      <Stack.Screen name="index" options={{ headerShown: false }} />

      {/* Trang chi tiết sản phẩm */}
      <Stack.Screen name="product" options={{ headerShown: false }} />

      {/* Chọn màu */}
      <Stack.Screen name="select" options={{ headerShown: false}} />

    </Stack>
  );
}
