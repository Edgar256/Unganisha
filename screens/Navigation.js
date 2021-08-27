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
import { COLORS, FONTS, SIZES } from "../constants/theme";
import { images } from "../constants";
import { MainTopNavigation, MainBottomNavigation } from "../navigations";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const Navigation = ({ navigation }) => {
	return (
		<SafeAreaView style={{ width: "100%", height: "100%" }}>
			<MainTopNavigation navigation={navigation} title="Menu" />
			<LinearGradient
				colors={[COLORS.secondary, COLORS.primary]}
				style={styles.container}
			>
				<TouchableOpacity
					onPress={() => navigation.navigate("MyProfile")}
					style={{ flexDirection: "row" }}
				>
					<Image
						source={images.edgar001}
						resizeMode="contain"
						style={styles.image}
					/>
					<View style={{ paddingVertical: 1, paddingHorizontal: 2 }}>
						<Text
							style={{ fontSize: FONTS.h2.fontSize, color: COLORS.success }}
						>
							Edgar Tinkamanyire
						</Text>
						<Text style={{ fontSize: FONTS.h4.fontSize, color: COLORS.white }}>
							Member since xx/xx/xxxx
						</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => navigation.navigate("MyProfile")}
					style={styles.button}
				>
					<Text
						style={{ textAlign: "center", color: COLORS.success, opacity: 1 }}
					>
						View Profile
					</Text>
				</TouchableOpacity>
				<View style={{ flexDirection: "row" }}>
					<View style={styles.card}>
						<TouchableOpacity
							onPress={() => navigation.navigate("NewsFeed")}
							style={styles.cardInner}
						>
							<Ionicons name="md-home" size={30} color={COLORS.primary} />
							<Text>NewsFeed</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.card}>
						<TouchableOpacity
							onPress={() => navigation.navigate("Chats")}
							style={styles.cardInner}
						>
							<Ionicons
								name="md-chatbubbles"
								size={30}
								color={COLORS.primary}
							/>
							<Text>Chats</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={{ flexDirection: "row" }}>
					<View style={styles.card}>
						<TouchableOpacity
							onPress={() => navigation.navigate("Notifications")}
							style={styles.cardInner}
						>
							<Ionicons
								name="md-notifications"
								size={30}
								color={COLORS.primary}
							/>
							<Text>Notifications</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.card}>
						<TouchableOpacity
							onPress={() => navigation.navigate("Groups")}
							style={styles.cardInner}
						>
							<Ionicons name="md-people" size={30} color={COLORS.primary} />
							<Text>Groups</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={{ flexDirection: "row" }}>
					<View style={styles.card}>
						<TouchableOpacity
							onPress={() => navigation.navigate("Followers")}
							style={styles.cardInner}
						>
							<Ionicons
								name="md-cloud-download"
								size={30}
								color={COLORS.primary}
							/>
							<Text>Followers</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.card}>
						<TouchableOpacity
							onPress={() => navigation.navigate("Following")}
							style={styles.cardInner}
						>
							<Ionicons
								name="md-cloud-upload"
								size={30}
								color={COLORS.primary}
							/>
							<Text>Following</Text>
						</TouchableOpacity>
					</View>
				</View>
				<TouchableOpacity
					onPress={() => navigation.navigate("Navigation")}
					style={{
						backgroundColor: COLORS.white,
						marginVertical: 10,
						padding: 15,
						opacity: 0.5,
						borderRadius: 30,
					}}
				>
					<Text
						style={{ textAlign: "center", color: COLORS.black, opacity: 1 }}
					>
						See more
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => navigation.navigate("HelpSupport")}
					style={{
						marginTop: 5,
						padding: 10,
						borderRadius: 30,
						flexDirection: "row",
					}}
				>
					<Image
						source={images.helpIcon}
						resizeMode="contain"
						style={{ width: 20, height: 20, marginRight: 10 }}
					/>
					<Text
						style={{ textAlign: "center", color: COLORS.white, opacity: 1 }}
					>
						Help & Support
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => navigation.navigate("Settings")}
					style={{
						marginTop: 5,
						padding: 10,
						borderRadius: 30,
						flexDirection: "row",
					}}
				>
					<Image
						source={images.settingsIcon}
						resizeMode="contain"
						style={{ width: 20, height: 20, marginRight: 10 }}
					/>
					<Text
						style={{ textAlign: "center", color: COLORS.white, opacity: 1 }}
					>
						Setting & Privacy
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => navigation.navigate("Navigation")}
					style={{
						backgroundColor: COLORS.danger,
						marginVertical: 10,
						padding: 15,
						borderRadius: 30,
					}}
				>
					<Text
						style={{ textAlign: "center", color: COLORS.white, opacity: 1 }}
					>
						LogOut
					</Text>
				</TouchableOpacity>
			</LinearGradient>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 0,
		padding: 20,
	},
	image: {
		width: 50,
		height: 50,
		borderRadius: 70,
	},
	imageIcon: {
		width: 40,
		height: 40,
	},
	button: {
		backgroundColor: COLORS.black,
		marginVertical: 10,
		padding: 15,
		opacity: 0.5,
		borderRadius: 30,
	},
	card: {
		padding: 5,
		width: "50%",
	},
	cardInner: {
		backgroundColor: COLORS.white,
		padding: 10,
		borderRadius: 10,
		width: "100%",
	},
});

export default Navigation;
