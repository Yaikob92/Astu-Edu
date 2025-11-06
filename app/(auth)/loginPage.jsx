import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // just a placeholder
    console.log("Email:", email, "Password:", password);
  };

  return (
    <LinearGradient
      colors={["#60a5fa", "#3b82f6"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.card}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Sign in to continue</Text>

        {/* Email Input */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholderTextColor="#9ca3af"
        />

        {/* Password Input */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor="#9ca3af"
        />

        {/* Forgot Password */}
        <Link href="/auth/forgotPassword" asChild>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </Link>

        {/* Login Button */}
        <TouchableOpacity onPress={handleLogin} activeOpacity={0.8}>
          <LinearGradient
            colors={["#3b82f6", "#2563eb"]}
            style={styles.loginButton}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Register Link */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Don&#39;t have an account?</Text>
          <Link href="/auth/registerScreen" asChild>
            <Text style={styles.registerLink}> Register</Text>
          </Link>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 24,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1e3a8a",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#6b7280",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
    fontSize: 16,
    color: "#111827",
  },
  forgotPassword: {
    alignSelf: "flex-end",
    color: "#2563eb",
    marginBottom: 16,
    fontWeight: "600",
  },
  loginButton: {
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 16,
  },
  loginButtonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  footerText: {
    color: "#6b7280",
  },
  registerLink: {
    color: "#2563eb",
    fontWeight: "600",
  },
});
