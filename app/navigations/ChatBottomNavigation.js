import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { images } from "../constants";

export default function ChatBottomNavigation(props) {
	return (
		<View
			style={{
				padding: 2,
				flexDirection: "row",
				width: "100%",
				backgroundColor: "#FFFFFF",
				// position: "fixed",
				bottom: 0,
				zIndex: 45,
			}}
		>
			<TouchableOpacity
				style={styles.bottomIcon}
				onPress={() => props.navigation.navigate("People")}
			>
				<Image
					source={images.peopleIcon}
					style={{ height: 20, width: 20 }}
					resizeMode="contain"
				/>
				<Text>People</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.bottomIcon}
				onPress={() => props.navigation.navigate("Chats")}
			>
				<Image
					source={images.chatIcon}
					style={{ height: 20, width: 20 }}
					resizeMode="contain"
				/>
				<Text>Chats</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.bottomIcon}
				onPress={() => props.navigation.navigate("Groups")}
			>
				<Image
					source={images.chatGroupsIcon}
					style={{ height: 20, width: 20 }}
					resizeMode="contain"
				/>
				<Text>Groups</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	bottomIcon: {
		flex: 1,
		padding: 15,
		width: "auto",
		justifyContent: "center",
		alignItems: "center",
	},
});
