import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";


export default function Home() {
  const router = useRouter();
  const [todos, setTodos] = useState([
    "To check email",
    "UI task web page",
    "Learn javascript basic",
    "Learn HTML Advance",
    "Medical App UI",
    "Learn Java",
  ]);

  const renderItem = ({ item }: { item: string }) => (
    <View style={styles.taskRow}>
      <View style={styles.checkBox}>
        <Text style={styles.checkMark}>✔︎</Text>
      </View>

      <Text numberOfLines={1} style={styles.taskText}>
        {item}
      </Text>

      <View style={styles.rightGroup}>
        <View style={styles.colorTag} />
        <TouchableOpacity style={styles.editBtn}>
          <Text style={styles.editIcon}>✏︎</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>

        <View style={styles.profile}>
          <View style={styles.avatar}>
            <Text style={styles.avatarInitials}>TW</Text>
          </View>
          <View style={{ marginLeft: 12 }}>
            <Text style={styles.title}>Hi Twinkle</Text>
            <Text style={styles.subtitle}>Have agrate day a head</Text>
          </View>
        </View>
      </View>

      <View style={styles.searchWrap}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          placeholder="Search"
          placeholderTextColor="#999"
          style={styles.searchInput}
        />
      </View>

      <FlatList
        data={todos}
        keyExtractor={(i) => i}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />

      <TouchableOpacity style={styles.fab} onPress={() => router.push('/addtodo')}>
        <Text style={styles.fabPlus}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 18 },
  header: { marginTop: 6, marginBottom: 12 },
  backBtn: { position: "absolute", left: 0, top: 6, padding: 8 },
  backArrow: { fontSize: 22, color: "#333" },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#EAD8FF",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarInitials: { fontWeight: "700", color: "#5B2DA5" },
  title: { fontSize: 22, fontWeight: "700", color: "#111" },
  subtitle: { color: "#8c8c8c", fontWeight: "700" },

  searchWrap: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#d0d0d0",
    borderRadius: 8,
    padding: 12,
    marginTop: 18,
    backgroundColor: "#fff",
  },
  searchIcon: { marginRight: 8, fontSize: 18, color: "#666" },
  searchInput: { flex: 1, padding: 0 },

  list: { paddingTop: 18, paddingBottom: 120 },
  taskRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e6e7e9",
    paddingVertical: 16,
    paddingHorizontal: 14,
    borderRadius: 30,
    marginBottom: 18,
    // soft shadow
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 18,
    elevation: 6,
  },
  checkBox: {
    width: 42,
    height: 42,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#2bb673",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
    backgroundColor: "#fff",
  },
  checkMark: { color: "#2bb673", fontSize: 18, fontWeight: "700" },
  taskText: { flex: 1, fontSize: 18, fontWeight: "700", color: "#222" },
  rightGroup: { flexDirection: "row", alignItems: "center" },
  colorTag: {
    width: 36,
    height: 20,
    backgroundColor: "#e53935",
    borderRadius: 4,
    marginRight: 12,
  },
  editBtn: { padding: 6 },
  editIcon: { color: "#ff6b6b", fontSize: 18 },

  fab: {
    position: "absolute",
    alignSelf: "center",
    bottom: 28,
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: "#15c5d6",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#15c5d6",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    elevation: 10,
  },
  fabPlus: { color: "#fff", fontSize: 44, lineHeight: 44 },
});