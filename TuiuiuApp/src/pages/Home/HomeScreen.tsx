import React from "react";
import {View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";
import DestinationCard from "../../components/DestinationCard";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://i.pravatar.cc/150",
          }}
          style={styles.avatar}
        />

        <View>
          <Text style={styles.greeting}>Olá, João 👋</Text>
          <Text style={styles.subtitle}>
            Descubra a Chapada dos Guimarães
          </Text>
        </View>

        <TouchableOpacity>
          <Ionicons
            name="notifications-outline"
            size={28}
            color={COLORS.primary}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons
          name="search-outline"
          size={22}
          color={COLORS.gray}
        />

        <TextInput
          placeholder="Buscar destino"
          style={styles.searchInput}
        />
      </View>

      <View style={styles.filters}>
        <TouchableOpacity style={styles.filterBox}>
          <Ionicons
            name="calendar-outline"
            size={18}
            color={COLORS.primary}
          />
          <Text style={styles.filterText}>Datas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filterBox}>
          <Ionicons
            name="people-outline"
            size={18}
            color={COLORS.primary}
          />
          <Text style={styles.filterText}>Pessoas</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Procurar</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>
        Destaques da Chapada
      </Text>

      <DestinationCard
        title="Véu de Noiva"
        image="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
        onPress={() => navigation.navigate("Destination", {
            title: "Véu de Noiva",
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        })}
      />

      <DestinationCard
        title="Cidade de Pedra"
        image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
        onPress={() => navigation.navigate("Destination", {
            title: "Cidade de Pedra",
            image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        })}
      />

      <DestinationCard
        title="Vale do Rio Claro"
        image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
        onPress={() => navigation.navigate("Destination", {
            title: "Vale do Rio Claro",
            image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
        })}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 20,
  },

  header: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  avatar: {
    width: 55,
    height: 55,
    borderRadius: 30,
  },

  greeting: {
    fontSize: 22,
    fontWeight: "bold",
    color: COLORS.text,
  },

  subtitle: {
    color: COLORS.gray,
  },

  searchContainer: {
    backgroundColor: COLORS.white,
    marginTop: 25,
    borderRadius: 15,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    height: 55,
  },

  searchInput: {
    flex: 1,
    marginLeft: 10,
  },

  filters: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },

  filterBox: {
    width: "48%",
    backgroundColor: COLORS.white,
    height: 55,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  filterText: {
    marginLeft: 10,
    color: COLORS.gray,
  },

  button: {
    backgroundColor: COLORS.primary,
    height: 55,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 25,
  },

  buttonText: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 16,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    color: COLORS.text,
  },
});