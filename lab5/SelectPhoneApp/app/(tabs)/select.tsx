import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const API_URL = "https://68d39a0b214be68f8c667182.mockapi.io/Product";

export default function SelectScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState<any>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_URL}/${id}`);
        const data = await res.json();
        setProduct(data);
        setSelected(data.colors?.[0]?.id);
      } catch (error) {
        console.log("API error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="blue" />
        <Text>Đang tải dữ liệu...</Text>
      </View>
    );
  }

  if (!product) {
    return (
      <View style={styles.center}>
        <Text>Không tải được sản phẩm</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        <Image
          source={{
            uri: product.colors?.find((c: any) => String(c.id) === String(selected))?.image,
          }}
          style={styles.image}
        />
        <Text>{product.name}</Text>
      </View>

      <Text style={styles.title}>Chọn một màu bên dưới:</Text>
      <View style={styles.colorRow}>
        {product.colors?.map((item: any) => (
          <TouchableOpacity
            key={item.id}
            style={[styles.colorCard, selected === item.id && styles.active]}
            onPress={() => setSelected(item.id)}
          >
            <Image source={{ uri: item.image }} style={styles.colorImage} />
            <Text>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Button
        title="XONG"
        onPress={() => {
          // Thay vì push confirm → replace về product và đổi ảnh
          router.replace({
            pathname: "/product",
            params: { id: product.id, color: selected },
          });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  container: { flex: 1, paddingTop: 40, alignItems: "center", backgroundColor: "#fff" },
  preview: { alignItems: "center", marginBottom: 20 },
  image: { width: 120, height: 180, resizeMode: "contain" },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  colorRow: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center" },
  colorCard: {
    alignItems: "center",
    margin: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
  },
  active: { borderColor: "blue", borderWidth: 2 },
  colorImage: { width: 60, height: 90, marginBottom: 5 },
});
