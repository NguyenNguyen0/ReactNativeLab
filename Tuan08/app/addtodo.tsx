import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";

export default function AddTodo() {
  const router = useRouter();
  const [text, setText] = useState("");

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <View style={styles.profile}>
          <Image
            source={require("@/assets/todo-logo.png")}
            style={styles.profileImg}
          />
          <View style={{ marginLeft: 12 }}>
            <Text style={styles.title}>Hi Twinkle</Text>
            <Text style={styles.subtitle}>Have agrate day a head</Text>
          </View>
        </View>

        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <Text style={styles.heading}>ADD YOUR JOB</Text>

        <View style={styles.inputWrap}>
          <View style={styles.inputIcon}>
            <Text style={{ color: "#2bb673", fontSize: 18 }}>▦</Text>
          </View>
          <TextInput
            value={text}
            onChangeText={setText}
            placeholder="input your job"
            placeholderTextColor="#777"
            style={styles.input}
          />
        </View>

        <TouchableOpacity
          style={styles.finishBtn}
          onPress={() => {
            router.back();
          }}
        >
          <Text style={styles.finishText}>FINISH ➜</Text>
        </TouchableOpacity>

        <Image
          source={require("@/assets/todo-logo.png")}
          style={{marginTop: 20}}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#fff" },
  header: {
    marginTop: 6,
    marginBottom: 8,
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: { fontSize: 22, fontWeight: "700", color: "#111" },
  subtitle: { color: "#8c8c8c", fontWeight: "700" },
  profile: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImg: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#EAD8FF",
  },
  backBtn: { padding: 8, marginRight: 6 },
  backArrow: { fontSize: 20, color: "#333" },

  container: {
    flex: 1,
    paddingHorizontal: 28,
    alignItems: "center",
  },
  heading: {
    marginTop: 18,
    fontSize: 36,
    fontWeight: "800",
    color: "#222",
    letterSpacing: 2,
  },

  inputWrap: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: 28,
    borderWidth: 1,
    borderColor: "#cfcfcf",
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
  },
  inputIcon: {
    width: 34,
    height: 34,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#cfeee4",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
    backgroundColor: "#e8fff6",
  },
  input: {
    flex: 1,
    fontSize: 16,
    padding: 0,
    color: "#222",
  },

  finishBtn: {
    marginTop: 34,
    width: "70%",
    backgroundColor: "#15c5d6",
    paddingVertical: 16,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    elevation: 6,
  },
  finishText: { color: "#fff", fontSize: 18, fontWeight: "600" },

  noteImage: {
    width: 220,
    height: 220,
    marginTop: 42,
    opacity: 0.95,
  },
});