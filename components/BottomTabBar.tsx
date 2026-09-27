import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from "react-native";

interface BottomTabBarProps {
  selectedTab: string;
  onSelectTab: (tab: string) => void;
}

const TABS = [
  {
    id: "home",
    icon: "🏠",
    label: "Trang chủ",
  },
  {
    id: "category",
    icon: "📚",
    label: "Danh mục",
  },
  {
    id: "cart",
    icon: "🛒",
    label: "Giỏ hàng",
  },
  {
    id: "account",
    icon: "👤",
    label: "Tài khoản",
  },
];

export function BottomTabBar({
  selectedTab,
  onSelectTab,
}: BottomTabBarProps) {
  return (
    <View style={styles.container}>
      {TABS.map((tab) => {
        const selected = selectedTab === tab.id;

        return (
          <Pressable
            key={tab.id}
            style={styles.tab}
            onPress={() => onSelectTab(tab.id)}
          >
            <Text
              style={[
                styles.icon,
                selected && styles.selectedText,
              ]}
            >
              {tab.icon}
            </Text>

            <Text
              style={[
                styles.label,
                selected && styles.selectedText,
              ]}
            >
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 70,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },

  tab: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  icon: {
    fontSize: 21,
  },

  label: {
    marginTop: 4,
    fontSize: 11,
    color: "#6B7280",
    fontWeight: "600",
  },

  selectedText: {
    color: "#4338CA",
  },
});