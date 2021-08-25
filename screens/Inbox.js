import React from "react";
import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	Image,
	Button,
	TouchableOpacity,
	FlatList,
	ScrollView,
	ImageBackground,
	TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, FONTS } from "../constants/theme";
import { images } from "../constants";
import OutGoingMessage from "../components/OutGoingMessage";
import InComingMessage from "../components/InComingMessage";

const Inbox = ({ navigation }) => {
	return (
		<SafeAreaView style={{ width: "100%", height: "100%" }}>
			<LinearGradient
				colors={[COLORS.primary, COLORS.secondary]}
				style={styles.container}
			>
				<View style={{ flexDirection: "row", padding: 10 }}>
					<TouchableOpacity onPress={() => navigation.navigate("Navigation")}>
						<Image
							source={images.navigationIcon}
							resizeMode="contain"
							style={styles.navigation}
						/>
					</TouchableOpacity>
					<View
						style={{
							flexDirection: "row",
							color: "#ffffff",
							marginHorizontal: 10,
							flex: 1,
						}}
					>
						<Image
							source={images.edgar001}
							resizeMode="contain"
							style={{
								height: 40,
								width: 40,
								borderRadius: 40,
								marginRight: 5,
							}}
						/>
						<View
							style={{
								flex: 1,
								flexDirection: "column",
							}}
						>
							<Text
								style={{
									color: "#ffffff",
									fontSize: 17,
									width: "100%",
								}}
							>
								(Edgar Tinkamanyire)
							</Text>
							<Text
								style={{
									color: "#ffffff",
									fontSize: 10,
									width: "100%",
								}}
							>
								(9:00am)
							</Text>
						</View>
						<TouchableOpacity onPress={() => alert("chat options")}>
							<Image
								source={images.dotsIcon}
								resizeMode="contain"
								style={{ height: 20, width: 20, marginTop: 10 }}
							/>
						</TouchableOpacity>
					</View>
				</View>
			</LinearGradient>
			<ImageBackground
				source={images.chatBg}
				resizeMode="cover"
				style={{ width: "100%", height: "100%", position: "fixed" }}
			>
				<ScrollView
					style={{
						padding: 0,
						position: "relative",
						width: "100%",
						zIndex: 44,
						paddingVertical: 60,
						overflow: "scroll",
					}}
				>
					<OutGoingMessage />
					<OutGoingMessage />
					<InComingMessage />
					<OutGoingMessage />
					<OutGoingMessage />
					<InComingMessage />
					<InComingMessage />
					<OutGoingMessage />
					<InComingMessage />
					<InComingMessage />
				</ScrollView>
			</ImageBackground>
			<View
				style={{
					padding: 5,
					flexDirection: "row",
					width: "100%",
					backgroundColor: "#FFFFFF",
					position: "fixed",
					bottom: 0,
					zIndex: 45,
				}}
			>
				<TextInput
					style={focus ? styles.input : styles.input}
					placeholder="Type message"
				/>
				<Button
					onPress={() => alert("Send message")}
					title="SEND"
					style={{
						backgroundColor: COLORS.primary,
						color: COLORS.white,
					}}
				/>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		height: 60,
		position: "fixed",
		top: 0,
		width: "100%",
		zIndex: 45,
	},
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
	bottomIcon: {
		flex: 1,
		padding: 15,
		width: "auto",
		justifyContent: "center",
		alignItems: "center",
	},
	input: {
		height: 40,
		margin: 0,
		borderWidth: 1,
		padding: 10,
		borderRadius: 20,
		flex: 1,
		marginRight: 5,
	},
});

export default Inbox;
