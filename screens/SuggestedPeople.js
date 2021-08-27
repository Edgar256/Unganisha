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

const SuggestedPeople = ({ navigation }) => {
	const User = () => {
		return (
			<View
				style={{
					backgroundColor: "#FFFFFF",
					padding: 10,
					borderRadius: 5,
					marginTop: 10,
					shadowColor: "black",
					shadowOpacity: 0.2,
					shadowOffset: { width: 0, height: 5 },
					shadowRadius: 7,
					flexDirection: "row",
				}}
			>
				<View
					style={{
						height: 80,
						width: 80,
						borderRadius: 60,
					}}
				>
					<Image
						source={images.dawn001}
						resizeMode="contain"
						style={{
							height: "100%",
							width: "100%",
							borderRadius: 60,
						}}
					/>
				</View>
				<View
					style={{
						marginLeft: 5,
						flexDirection: "column",
					}}
				>
					<TouchableOpacity>
						<Text
							style={{
								fontSize: SIZES.h3,
								color: COLORS.primary,
								fontWeight: 400,
								marginBottom: 2,
							}}
						>
							Reene Dawn
						</Text>
					</TouchableOpacity>
					<Text
						style={{
							fontSize: SIZES.body4,
							color: COLORS.gray,
							marginBottom: 2,
						}}
					>
						XX mutual followers
					</Text>
					<View style={{ flexDirection: "row" }}>
						<TouchableOpacity
							style={{
								backgroundColor: COLORS.primary,
								borderRadius: 15,
								paddingVertical: 5,
								paddingHorizontal: 10,
								marginRight: 10,
								fontSize: SIZES.small,
							}}
							onPress={() => alert("unfollow user")}
						>
							<Text style={{ color: COLORS.white }}>Follow</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={{
								backgroundColor: COLORS.success,
								borderRadius: 15,
								paddingVertical: 5,
								paddingHorizontal: 10,
								marginRight: 10,
								fontSize: SIZES.small,
							}}
							onPress={() => navigation.navigate("Inbox")}
						>
							<Text>Message</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	};

	return (
		<SafeAreaView style={{ width: "100%", height: "100%" }}>
			<MainTopNavigation navigation={navigation} title="SUGGESTED D-STARS" />
			<View
				resizeMode="cover"
				style={{
					width: "100%",
					height: "100%",
					// position: "fixed"
				}}
			>
				<ScrollView
					style={{
						padding: 10,
						position: "relative",
						width: "100%",
						zIndex: 44,
						paddingVertical: 60,
						overflow: "scroll",
						flexDirection: "column",
					}}
				>
					<View style={{ flexDirection: "row", marginTop: 10 }}>
						<TouchableOpacity
							style={{
								backgroundColor: COLORS.lightGray,
								borderRadius: 30,
								padding: 12,
								marginRight: 10,
							}}
							onPress={() => navigation.navigate("Following")}
						>
							<Text>Following</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={{
								backgroundColor: COLORS.lightGray,
								borderRadius: 30,
								padding: 12,
								marginRight: 10,
							}}
							onPress={() => navigation.navigate("Followers")}
						>
							<Text>Followers</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={{
								backgroundColor: COLORS.primary,
								borderRadius: 30,
								padding: 12,
								marginRight: 10,
							}}
							onPress={() => navigation.navigate("SuggestedPeople")}
						>
							<Text style={{ color: COLORS.white }}>Suggested People</Text>
						</TouchableOpacity>
					</View>
					<User />
					<User />
					<User />
					<User />
					<User />
					<User />
					<User />
					<User />
					<User />
					<User />
					<User />
				</ScrollView>
			</View>

			<MainBottomNavigation navigation={navigation} />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({});

export default SuggestedPeople;
