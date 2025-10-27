import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { height } = Dimensions.get("window");
const API_URL = "https://68d39a0b214be68f8c667182.mockapi.io/Product";

export default function ProductScreen() {
  const router = useRouter();
  const { id, color } = useLocalSearchParams();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedColorId, setSelectedColorId] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_URL}/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.log("API error:", err);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    if (!product) return;
    if (color) {
      setSelectedColorId(String(color));
    } else {
      const firstId = product.colors?.[0]?.id;
      setSelectedColorId(firstId ? String(firstId) : null);
    }
  }, [product, color]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text>Đang tải dữ liệu...</Text>
      </View>
    );
  }

  if (!product) {
    return (
      <View style={styles.center}>
        <Text>Không tải được dữ liệu sản phẩm</Text>
      </View>
    );
  }

  const selectedColorObj = product.colors?.find(
    (c: any) => String(c.id) === String(selectedColorId)
  );

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: selectedColorObj?.image ?? product.image }}
          style={styles.image}
        />
      </View>

      <Text style={styles.title}>{product.name}</Text>

      <View style={styles.priceRow}>
        <Text style={styles.price}>
          {product?.price ? product.price.toLocaleString() : "N/A"} ₫
        </Text>
        <Text style={styles.oldPrice}>
          {product?.oldPrice ? product.oldPrice.toLocaleString() : ""} ₫
        </Text>
      </View>

      {/* Đi chọn màu */}
      <TouchableOpacity
        style={styles.colorBox}
        onPress={() =>
          router.push({
            pathname: "/select",
            params: { id: product.id, selected: selectedColorId },
          })
        }
      >
        <Text style={styles.colorText}>
          {product.colors?.length || 0} Màu - Chọn Màu
        </Text>
        <FontAwesome name="chevron-right" size={18} color="#333" />
      </TouchableOpacity>

      {/* Nút mua */}
      <TouchableOpacity
        style={styles.buyBox}
        onPress={() => {
          Alert.alert("Đặt hàng thành công!", "Cảm ơn bạn đã mua hàng ❤️", [
            { text: "OK", onPress: () => router.replace("/") },
          ]);
        }}
      >
        <Text style={styles.buyText}>CHỌN MUA</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  container: { flex: 1, justifyContent: "center", padding: 20, paddingTop: 0 },
  imageContainer: {
    height: height * 0.45,
    width: "100%",
    justifyContent: "center",
    marginBottom: 15,
  },
  image: { width: "100%", height: "100%", resizeMode: "contain" },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
  priceRow: { flexDirection: "row", marginBottom: 10 },
  price: { fontSize: 20, fontWeight: "bold", color: "red" },
  oldPrice: {
    fontSize: 16,
    marginLeft: 12,
    textDecorationLine: "line-through",
    color: "#888",
  },
  colorBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 7,
    paddingVertical: 12,
    paddingHorizontal: 15,
    width: "100%",
    marginBottom: 15,
  },
  colorText: { fontSize: 16, fontWeight: "500" },
  buyBox: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    paddingVertical: 12,
    width: "100%",
    backgroundColor: "red",
  },
  buyText: { fontSize: 18, color: "white", fontWeight: "600" },
});
