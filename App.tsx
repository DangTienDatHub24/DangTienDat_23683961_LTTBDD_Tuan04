import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  StyleSheet,
} from "react-native";

import { Header } from "./components/Header";
import { CategoryChips } from "./components/CategoryChips";
import { BookGrid } from "./components/BookGrid";
import { FloatingCartButton } from "./components/FloatingCartButton";
import { BottomTabBar } from "./components/BottomTabBar";
import { CartScreen } from "./components/CartScreen";
import { BookDetail } from "./components/BookDetail";

import { BOOKS } from "./data";

export default function App() {
  // Tab đang được chọn
  const [selectedTab, setSelectedTab] = useState("home");

  // ID của sách đang xem chi tiết
  const [selectedBook, setSelectedBook] = useState<number | null>(null);

  const renderContent = () => {
    // =========================
    // MÀN HÌNH CHI TIẾT SÁCH
    // =========================
    if (selectedBook !== null) {
      const book = BOOKS.find((item) => item.id === selectedBook);

      if (!book) {
        return null;
      }

      return (
        <View style={styles.detailScreen}>
          {/* Header của trang chi tiết */}
          <View style={styles.detailHeader}>
            <Text
              style={styles.backButton}
              onPress={() => setSelectedBook(null)}
            >
              ← Quay lại
            </Text>

            <Text style={styles.detailHeaderTitle}>
              Chi tiết sách
            </Text>

            {/* View này để title nằm giữa */}
            <View style={{ width: 80 }} />
          </View>

          {/* Nội dung chi tiết */}
          <BookDetail
            book={book}
            onAddToCart={() => {
              console.log("Thêm vào giỏ:", book.id);
            }}
          />
        </View>
      );
    }

    // =========================
    // MÀN HÌNH GIỎ HÀNG
    // =========================
    if (selectedTab === "cart") {
      return <CartScreen />;
    }

    // =========================
    // MÀN HÌNH TRANG CHỦ
    // =========================
    return (
      <View style={styles.home}>
        <Header />

        <ScrollView
          style={styles.scroll}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >
          {/* Danh mục */}
          <CategoryChips />

          {/* Danh sách sách */}
          <BookGrid
            books={BOOKS}
            onPressBook={(id) => {
              // Bấm vào sách → mở chi tiết
              setSelectedBook(id);
            }}
          />
        </ScrollView>

        {/* Nút giỏ hàng nổi */}
        <FloatingCartButton
          count={0}
          onPress={() => {
            setSelectedTab("cart");
          }}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.main}>
        {renderContent()}
      </View>

      {/* Không hiện Tab Bar khi đang xem chi tiết */}
      {selectedBook === null && (
        <BottomTabBar
          selectedTab={selectedTab}
          onSelectTab={setSelectedTab}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // Toàn màn hình
  screen: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  // Khu vực nội dung chính
  main: {
    flex: 1,
  },

  // Trang chủ
  home: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  // ScrollView trang chủ
  scroll: {
    flex: 1,
  },

  // Khoảng cách nội dung
  content: {
    padding: 16,
    paddingBottom: 100,
  },

  // =========================
  // CHI TIẾT SÁCH
  // =========================

  detailScreen: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  detailHeader: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    backgroundColor: "#1E1B4B",
  },

  backButton: {
    width: 80,
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },

  detailHeaderTitle: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700",
  },
});