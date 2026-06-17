import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { RouteProp, useRoute } from "@react-navigation/native";

import { RootStackParamList } from "../../navigation";
import { COLORS } from "../../constants/colors";
import { destinations } from "../../data/destinations";

type RouteProps = RouteProp<
  RootStackParamList,
  "Destination"
>;

export default function DestinationScreen() {
  const route = useRoute<RouteProps>();

  const { destinationId } = route.params;

  const destination =
    destinations[
      destinationId as keyof typeof destinations
    ];

  const [activeTab, setActiveTab] =
    useState("Turismo");

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={{
          uri: destination.image,
        }}
        style={styles.header}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>
            {destination.title}
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
          {destination.description}
        </Text>

        {activeTab === "Hotéis" &&
          destination.hotels.map(
            (hotel, index) => (
              <View
                key={index}
                style={styles.card}
              >
                <Text
                  style={styles.cardTitle}
                >
                  {hotel.name}
                </Text>

                <Text>
                  {hotel.price}
                </Text>
              </View>
            )
          )}

        {activeTab === "Comida" &&
          destination.restaurants.map(
            (item, index) => (
              <View
                key={index}
                style={styles.card}
              >
                <Text
                  style={styles.cardTitle}
                >
                  {item}
                </Text>
              </View>
            )
          )}

        {activeTab === "Turismo" &&
          destination.tourism.map(
            (item, index) => (
              <View
                key={index}
                style={styles.card}
              >
                <Text
                  style={styles.cardTitle}
                >
                  {item}
                </Text>
              </View>
            )
          )}
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
    color: COLORS.gray,
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#FFF",
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,

    elevation: 3,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});