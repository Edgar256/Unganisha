import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, images } from "../constants";

export default function MainBottomNavigation(props) {
	return (
		<View
			style={{
				padding: 2,
				flexDirection: "row",
				width: "100%",
				backgroundColor: "#FFFFFF",
				position: "fixed",
				bottom: 0,
				zIndex: 45,
				shadowColor: "black",
				shadowOpacity: 0.36,
				shadowOffset: { width: 0, height: 5 },
				shadowRadius: 15,
			}}
		>
			<TouchableOpacity
				style={styles.bottomIcon}
				onPress={() => props.navigation.navigate("NewsFeed")}
			>
				<Ionicons name="md-home" size={30} color={COLORS.black} />
				<Text style={{ fontSize: 12 }}>NewsFeed</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.bottomIcon}
				onPress={() => props.navigation.navigate("Chats")}
			>
				<Ionicons name="md-chatbubbles" size={30} color={COLORS.black} />
				<Text style={{ fontSize: 12 }}>Chats</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.bottomIcon}
				onPress={() => props.navigation.navigate("Notifications")}
			>
				<Ionicons name="md-notifications" size={30} color={COLORS.black} />
				<Text style={{ fontSize: 12 }}>Notifications</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.bottomIcon}
				onPress={() => props.navigation.navigate("Groups")}
			>
				<Ionicons name="md-people" size={30} color={COLORS.black} />
				<Text style={{ fontSize: 12 }}>Groups</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.bottomIcon}
				onPress={() => props.navigation.navigate("MyProfile")}
			>
				<Ionicons name="md-person" size={30} color={COLORS.black} />
				<Text style={{ fontSize: 12 }}>Profile</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	bottomIcon: {
		flex: 1,
		paddingHorizontal: 15,
		paddingVertical: 10,
		width: "auto",
		justifyContent: "center",
		alignItems: "center",
	},
});
