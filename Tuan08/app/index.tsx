import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image source={require("@/assets/todo-logo.png")} />
      <Text
        style={{
          fontSize: 22,
          textTransform: "uppercase",
          fontWeight: 600,
          color: "#8353E2",
        }}
      >
        Manage your task
      </Text>
      <TextInput
        style={{
          color: "gray",
          padding: 10,
          borderWidth: 0.5,
          borderColor: "gray",
          width: 250,
          borderRadius: 20,
          marginTop: 20,
        }}
        placeholder="✉️ Enter your name"
      />
      <TouchableOpacity
        style={{
          backgroundColor: "#00BDD6",
          borderRadius: 20,
          paddingHorizontal: 20,
          paddingVertical: 10,
          marginTop: 20,
        }}
        onPress={() => router.push('/home')}
      >
        <Text
          style={{ textTransform: "uppercase", fontSize: 16, color: "white" }}
        >
          Get Stated ➡️
        </Text>
      </TouchableOpacity>
    </View>
  );
}
