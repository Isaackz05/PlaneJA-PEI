import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from "react-native";

import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation";
import { COLORS } from "../../constants/colors";

type RouteProps = RouteProp<
  RootStackParamList,
  "Destination"
>;

export default function DestinationScreen() {
  const route = useRoute<RouteProps>();

  const { title, image } = route.params;

  const [activeTab, setActiveTab] =
    useState("Turismo");

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={{ uri: image }}
        style={styles.header}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>
            {title}
          </Text>

          <Text style={styles.subtitle}>
            Chapada dos Guimarães
          </Text>
        </View>
      </ImageBackground>

      <View style={styles.content}>
        <View style={styles.tabs}>
          <TouchableOpacity
            style={[
              styles.tab,
              activeTab === "Hotéis" &&
                styles.activeTab,
            ]}
            onPress={() =>
              setActiveTab("Hotéis")
            }
          >
            <Text>Hotéis</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.tab,
              activeTab === "Comida" &&
                styles.activeTab,
            ]}
            onPress={() =>
              setActiveTab("Comida")
            }
          >
            <Text>Comida</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.tab,
              activeTab === "Turismo" &&
                styles.activeTab,
            ]}
            onPress={() =>
              setActiveTab("Turismo")
            }
          >
            <Text>Turismo</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>
          Detalhes
        </Text>

        <Text style={styles.description}>
          Explore um dos lugares mais
          incríveis de Mato Grosso.
          Cachoeiras, mirantes,
          trilhas e experiências
          inesquecíveis aguardam você.
        </Text>

        <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            Ver Hospedagens
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  header: {
    height: 320,
    justifyContent: "flex-end",
  },

  overlay: {
    padding: 25,
    backgroundColor:
      "rgba(0,0,0,0.25)",
  },

  title: {
    color: "#FFF",
    fontSize: 34,
    fontWeight: "bold",
  },

  subtitle: {
    color: "#FFF",
  },

  content: {
    padding: 20,
  },

  tabs: {
    flexDirection: "row",
    justifyContent:
      "space-between",
  },

  tab: {
    backgroundColor: "#DDD",
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  activeTab: {
    backgroundColor:
      COLORS.secondary,
  },

  sectionTitle: {
    marginTop: 25,
    fontSize: 24,
    fontWeight: "bold",
  },

  description: {
    marginTop: 10,
    lineHeight: 22,
    color: COLORS.gray,
  },

  button: {
    backgroundColor:
      COLORS.primary,
    marginTop: 30,
    padding: 16,
    borderRadius: 15,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});