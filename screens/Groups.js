import React from "react";
import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	Image,
	TouchableOpacity,
	ImageBackground,
	ScrollView,
} from "react-native";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import { images } from "../constants";
import { MainTopNavigation, MainBottomNavigation } from "../navigations";
import { Ionicons } from "@expo/vector-icons";

const Groups = ({ navigation }) => {
	return (
		<SafeAreaView style={{ width: "100%", height: "100%" }}>
			<MainTopNavigation navigation={navigation} title="GROUPS" />
			<View
				resizeMode="cover"
				style={{ width: "100%", height: "100%", position: "fixed" }}
			>
				<ScrollView
					style={{
						padding: 10,
						position: "relative",
						width: "100%",
						zIndex: 44,
						paddingTop: 70,
						paddingBottom: 70,
						overflow: "scroll",
						flexDirection: "column",
					}}
				>
					<ImageBackground
						source={images.img010}
						style={{
							height: 200,
							position: "relative",
							borderRadius: 10,
							overflow: "hidden",
							borderWidth: 0,
							marginBottom: 10,
						}}
					>
						<TouchableOpacity
							style={{
								backgroundColor: COLORS.black,
								opacity: 0.6,
								position: "relative",
								height: "100%",
								width: "100%",
							}}
							onPress={() => navigation.navigate("GroupProfile")}
						>
							<View
								style={{
									padding: 10,
									marginTop: 130,
									left: 0,
									marginRight: 10,
									position: "absolute",
								}}
							>
								<Text style={{ color: COLORS.white, fontSize: SIZES.h3 }}>
									(Group Name)
								</Text>
								<Text style={{ color: COLORS.white }}>(Description)</Text>
							</View>
						</TouchableOpacity>
					</ImageBackground>
					<ImageBackground
						source={images.img001}
						style={{
							height: 200,
							position: "relative",
							borderRadius: 10,
							overflow: "hidden",
							borderWidth: 0,
							marginBottom: 10,
						}}
					>
						<TouchableOpacity
							style={{
								backgroundColor: COLORS.black,
								opacity: 0.6,
								position: "relative",
								height: "100%",
								width: "100%",
							}}
						>
							<View
								style={{
									padding: 10,
									marginTop: 130,
									left: 0,
									marginRight: 10,
									position: "absolute",
								}}
							>
								<Text style={{ color: COLORS.white, fontSize: SIZES.h3 }}>
									(Group Name)
								</Text>
								<Text style={{ color: COLORS.white }}>(Description)</Text>
							</View>
						</TouchableOpacity>
					</ImageBackground>
					<ImageBackground
						source={images.img002}
						style={{
							height: 200,
							position: "relative",
							borderRadius: 10,
							overflow: "hidden",
							borderWidth: 0,
							marginBottom: 10,
						}}
					>
						<TouchableOpacity
							style={{
								backgroundColor: COLORS.black,
								opacity: 0.6,
								position: "relative",
								height: "100%",
								width: "100%",
							}}
						>
							<View
								style={{
									padding: 10,
									marginTop: 130,
									left: 0,
									marginRight: 10,
									position: "absolute",
								}}
							>
								<Text style={{ color: COLORS.white, fontSize: SIZES.h3 }}>
									(Group Name)
								</Text>
								<Text style={{ color: COLORS.white }}>(Description)</Text>
							</View>
						</TouchableOpacity>
					</ImageBackground>
					<ImageBackground
						source={images.img003}
						style={{
							height: 200,
							position: "relative",
							borderRadius: 10,
							overflow: "hidden",
							borderWidth: 0,
							marginBottom: 10,
						}}
					>
						<TouchableOpacity
							style={{
								backgroundColor: COLORS.black,
								opacity: 0.6,
								position: "relative",
								height: "100%",
								width: "100%",
							}}
						>
							<View
								style={{
									padding: 10,
									marginTop: 130,
									left: 0,
									marginRight: 10,
									position: "absolute",
								}}
							>
								<Text style={{ color: COLORS.white, fontSize: SIZES.h3 }}>
									(Group Name)
								</Text>
								<Text style={{ color: COLORS.white }}>(Description)</Text>
							</View>
						</TouchableOpacity>
					</ImageBackground>
				</ScrollView>
			</View>

			<MainBottomNavigation navigation={navigation} />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({});

export default Groups;
