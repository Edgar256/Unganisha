import React from "react";
import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	Image,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, FONTS } from "../constants/theme";
import { images } from "../constants";
import { ChatBottomNavigation, MainTopNavigation } from "../navigations";
import ChatPerson from "../components/ChatPerson";

const People = ({ navigation }) => {
	return (
		<SafeAreaView style={{ width: "100%", height: "100%" }}>
			<MainTopNavigation navigation={navigation} title="PEOPLE" />
			<ScrollView
				style={{
					padding: 20,
					position: "absolute",
					width: "100%",
					zIndex: 44,
					paddingVertical: 60,
					backgroundColor: "#FFFFFF",
				}}
			>
				<ChatPerson navigation={navigation} />
				<ChatPerson navigation={navigation} />
				<ChatPerson navigation={navigation} />
				<ChatPerson navigation={navigation} />
				<ChatPerson navigation={navigation} />
				<ChatPerson navigation={navigation} />
				<ChatPerson navigation={navigation} />
				<ChatPerson navigation={navigation} />
				<ChatPerson navigation={navigation} />
				<ChatPerson navigation={navigation} />
			</ScrollView>
			<ChatBottomNavigation navigation={navigation} />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		height: 60,
		// position: "fixed",
		top: 0,
		width: "100%",
		zIndex: 45,
	},
	navigation: {
		borderRadius: 0,
		padding: 5,
		width: 40,
		height: 40,
	},
	bottomIcon: {
		flex: 1,
		padding: 15,
		width: "auto",
		justifyContent: "center",
		alignItems: "center",
	},
});

export default People;
