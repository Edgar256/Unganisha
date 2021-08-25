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
import {
	ChatBottomNavigation,
	MainBottomNavigation,
	MainTopNavigation,
} from "../navigations";

const Chats = ({ navigation }) => {
	const ChatPerson = () => {
		return (
			<TouchableOpacity onPress={() => navigation.navigate("Inbox")}>
				<View style={{ flexDirection: "row", marginVertical: 10 }}>
					<Image
						source={images.edgar001}
						resizeMode="contain"
						style={styles.image}
					/>
					<View
						style={{ justifyContent: "between", flexDirection: "row", flex: 1 }}
					>
						<View
							style={{
								paddingVertical: 8,
								width: "100%",
								flex: 3,
							}}
						>
							<Text style={{ fontWeight: 400, fontSize: 17 }}>
								(Edgar Tinkamanyire)
							</Text>
							<Text
								style={{ fontWeight: 300, fontSize: 13, color: COLORS.gray }}
							>
								(last previous message...)
							</Text>
						</View>
						<View style={{ paddingVertical: 8, flex: 1 }}>
							<Text
								style={{ fontWeight: 300, fontSize: 13, color: COLORS.gray }}
							>
								(12:00am)
							</Text>
							<View
								style={{
									fontWeight: 300,
									fontSize: 13,
									backgroundColor: COLORS.primary,
									padding: 8,
									borderRadius: 10,
									width: 20,
									height: 20,
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<Text style={{ color: COLORS.white, padding: 4 }}>xx</Text>
							</View>
						</View>
					</View>
				</View>
			</TouchableOpacity>
		);
	};

	return (
		<SafeAreaView style={{ width: "100%", height: "100%" }}>
			<MainTopNavigation navigation={navigation} title="MESSAGES" />
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
				<ChatPerson />
				<View
					style={{ borderBottomColor: "#e5e5e5", borderBottomWidth: 1 }}
				></View>
				<ChatPerson />
				<View
					style={{ borderBottomColor: "#e5e5e5", borderBottomWidth: 1 }}
				></View>
				<ChatPerson />
				<View
					style={{ borderBottomColor: "#e5e5e5", borderBottomWidth: 1 }}
				></View>
				<ChatPerson />
				<View
					style={{ borderBottomColor: "#e5e5e5", borderBottomWidth: 1 }}
				></View>
				<ChatPerson />
				<View
					style={{ borderBottomColor: "#e5e5e5", borderBottomWidth: 1 }}
				></View>
				<ChatPerson />
				<View
					style={{ borderBottomColor: "#e5e5e5", borderBottomWidth: 1 }}
				></View>
				<ChatPerson />
				<View
					style={{ borderBottomColor: "#e5e5e5", borderBottomWidth: 1 }}
				></View>
				<ChatPerson />
				<View
					style={{ borderBottomColor: "#e5e5e5", borderBottomWidth: 1 }}
				></View>
				<ChatPerson />
				<View
					style={{ borderBottomColor: "#e5e5e5", borderBottomWidth: 1 }}
				></View>
				<ChatPerson />
				<View
					style={{ borderBottomColor: "#e5e5e5", borderBottomWidth: 1 }}
				></View>
				<ChatPerson />
				<View
					style={{ borderBottomColor: "#e5e5e5", borderBottomWidth: 1 }}
				></View>
				<ChatPerson />
				<View
					style={{ borderBottomColor: "#e5e5e5", borderBottomWidth: 1 }}
				></View>
				<ChatPerson />
				<View
					style={{ borderBottomColor: "#e5e5e5", borderBottomWidth: 1 }}
				></View>
				<ChatPerson />
				<View
					style={{ borderBottomColor: "#e5e5e5", borderBottomWidth: 1 }}
				></View>
				<ChatPerson />
				<View
					style={{ borderBottomColor: "#e5e5e5", borderBottomWidth: 1 }}
				></View>
			</ScrollView>
			<ChatBottomNavigation navigation={navigation} />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	image: {
		width: 50,
		height: 50,
		borderRadius: 50,
		marginRight: 5,
	},
	navigation: {
		borderRadius: 0,
		padding: 5,
		width: 40,
		height: 40,
	},
});

export default Chats;
