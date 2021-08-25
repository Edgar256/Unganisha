import React from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	SafeAreaView,
} from "react-native";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import { images } from "../constants";

export default function NotificationCard() {
	return (
		<Text
			style={{
				backgroundColor: COLORS.lightGray,
				padding: 10,
				borderRadius: 5,
				marginTop: 10,
				shadowColor: "black",
				shadowOpacity: 0.2,
				shadowOffset: { width: 0, height: 5 },
				shadowRadius: 7,
				flexDirection: "row",
				display: "flex",
			}}
		>
			<View
				style={{
					height: 50,
					width: 50,
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
					flex: 1,
				}}
			>
				<TouchableOpacity style={{}}>
					<Text style={{ color: COLORS.gray, textWrap: "wrap" }}>
						Reene Dawn liked your post: "Post text with a long description"
					</Text>
					<Text style={{ color: COLORS.gray, textWrap: "wrap" }}>2 Days Ago</Text>
				</TouchableOpacity>
			</View>
		</Text>
	);
}

const styles = StyleSheet.create({});
