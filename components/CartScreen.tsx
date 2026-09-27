import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  StyleSheet,
} from "react-native";

import { CART_ITEMS } from "../data";

export function CartScreen() {
  const total = CART_ITEMS.reduce(
    (sum, item) => sum + item.book.price * item.quantity,
    0
  );

  return (
    <View style={styles.screen}>

      {/* Danh sách sản phẩm có thể cuộn */}
      <ScrollView
        style={styles.list}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      >
        {CART_ITEMS.map((item) => (
          <View
            key={item.book.id}
            style={styles.row}
          >
            {/* Ảnh */}
            <Image
              source={{ uri: item.book.cover }}
              style={styles.image}
            />

            {/* Tên */}
            <View style={styles.info}>
              <Text
                style={styles.name}
                numberOfLines={2}
              >
                {item.book.title}
              </Text>

              <Text style={styles.author}>
                {item.book.author}
              </Text>
            </View>

            {/* Số lượng + giá */}
            <View style={styles.right}>
              <Text style={styles.quantity}>
                x{item.quantity}
              </Text>

              <Text style={styles.price}>
                {(item.book.price * item.quantity).toLocaleString()} đ
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Tổng tiền cố định */}
      <View style={styles.checkout}>
        <View>
          <Text style={styles.totalLabel}>
            Tổng tiền
          </Text>

          <Text style={styles.totalPrice}>
            {total.toLocaleString()} đ
          </Text>
        </View>

        <Pressable style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>
            Thanh toán
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  list: {
    flex: 1,
  },

  listContent: {
    padding: 16,
    paddingBottom: 16,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    padding: 12,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },

  image: {
    width: 64,
    height: 84,
    borderRadius: 6,
    backgroundColor: "#EEF2F7",
  },

  info: {
    flex: 1,
    marginLeft: 12,
    marginRight: 8,
  },

  name: {
    fontSize: 14,
    fontWeight: "700",
    color: "#111827",
  },

  author: {
    marginTop: 5,
    fontSize: 12,
    color: "#6B7280",
  },

  right: {
    width: 90,
    alignItems: "flex-end",
  },

  quantity: {
    fontSize: 12,
    color: "#6B7280",
  },

  price: {
    marginTop: 5,
    fontSize: 13,
    fontWeight: "700",
    color: "#1E1B4B",
  },

  checkout: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },

  totalLabel: {
    fontSize: 12,
    color: "#6B7280",
  },

  totalPrice: {
    marginTop: 3,
    fontSize: 18,
    fontWeight: "700",
    color: "#1E1B4B",
  },

  checkoutButton: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: "#4338CA",
  },

  checkoutText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
  },
});