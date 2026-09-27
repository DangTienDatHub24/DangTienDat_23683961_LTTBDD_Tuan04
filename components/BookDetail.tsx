import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  StyleSheet,
} from "react-native";

import { Book } from "../data";

interface BookDetailProps {
  book: Book;
  onAddToCart: () => void;
}

export function BookDetail({
  book,
  onAddToCart,
}: BookDetailProps) {
  return (
    <View style={styles.screen}>

      {/* Phần nội dung */}
      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Ảnh bìa */}
        <Image
          source={{ uri: book.cover }}
          style={styles.cover}
        />

        {/* Tên sách */}
        <Text style={styles.title}>
          {book.title}
        </Text>

        {/* Tác giả */}
        <Text style={styles.author}>
          Tác giả: {book.author}
        </Text>

        {/* Giá */}
        <Text style={styles.price}>
          {book.price.toLocaleString()} đ
        </Text>

        {/* Mô tả */}
        <View style={styles.descriptionBox}>
          <Text style={styles.descriptionTitle}>
            Mô tả
          </Text>

          <Text style={styles.description}>
            {book.description}
          </Text>
        </View>
      </ScrollView>

      {/* Thanh dưới cố định */}
      <View style={styles.bottomBar}>
        <View>
          <Text style={styles.bottomLabel}>
            Giá
          </Text>

          <Text style={styles.bottomPrice}>
            {book.price.toLocaleString()} đ
          </Text>
        </View>

        <Pressable
          style={styles.addButton}
          onPress={onAddToCart}
        >
          <Text style={styles.addButtonText}>
            Thêm vào giỏ
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

  scroll: {
    flex: 1,
  },

  content: {
    padding: 16,
    paddingBottom: 24,
  },

  cover: {
    alignSelf: "center",
    width: 220,
    aspectRatio: 3 / 4,
    borderRadius: 10,
    backgroundColor: "#EEF2F7",
  },

  title: {
    marginTop: 16,
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
  },

  author: {
    marginTop: 6,
    fontSize: 14,
    color: "#6B7280",
  },

  price: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "700",
    color: "#1E1B4B",
  },

  descriptionBox: {
    marginTop: 20,
  },

  descriptionTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#111827",
  },

  description: {
    marginTop: 8,
    fontSize: 15,
    lineHeight: 24,
    color: "#374151",
  },

  bottomBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },

  bottomLabel: {
    fontSize: 12,
    color: "#6B7280",
  },

  bottomPrice: {
    marginTop: 2,
    fontSize: 17,
    fontWeight: "700",
    color: "#1E1B4B",
  },

  addButton: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: "#4338CA",
  },

  addButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
  },
});