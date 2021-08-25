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
import MainBottomNavigation from "../navigations/MainBottomNavigation";

export default function PostCard(props) {
	return (
		<View style={styles.feedTab}>
			<View style={{ flexDirection: "row", flex: 1, padding: 5 }}>
				<Image
					source={props.userImage}
					resizeMode="contain"
					style={{
						height: 40,
						width: 40,
						borderRadius: 40,
						marginRight: 5,
					}}
				/>
				<View style={{ flexDirection: "row", flex: 1 }}>
					<View style={{ flexDirection: "column", flex: 1 }}>
						<Text>{props.name}</Text>
						<Text>{props.time}</Text>
					</View>
					<TouchableOpacity onPress={() => alert("Post options")}>
						<Image
							source={images.dotsIcon}
							resizeMode="contain"
							style={{ height: 20, width: 20, paddingVertical: 20 }}
						/>
					</TouchableOpacity>
				</View>
			</View>
			<Text style={{ padding: 10 }}>{props.text}</Text>
			<View style={{ flexDirection: "row", flex: 1 }}>
				<Image
					source={props.image}
					resizeMode="cover"
					style={{
						width: "100%",
						height: 200,
						paddingVertical: 20,
						flex: 1,
					}}
				/>
			</View>
			<View
				style={{
					flexDirection: "row",
					padding: 10,
					justifyContent: "space-between",
				}}
			>
				<View style={{ flexDirection: "row" }}>
					<TouchableOpacity>
						<View style={{ flexDirection: "row", paddingRight: 20 }}>
							<Image
								source={images.loveIcon}
								resizeMode="contain"
								style={{
									width: 18,
									height: 18,
								}}
							/>
							<Text>{props.likeCount}</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity>
						<View style={{ flexDirection: "row", paddingRight: 20 }}>
							<Image
								source={images.commentIcon}
								resizeMode="contain"
								style={{
									width: 18,
									height: 18,
								}}
							/>
							<Text>{props.commentCount}</Text>
						</View>
					</TouchableOpacity>
				</View>
				<TouchableOpacity>
					<View style={{ flexDirection: "row", flex: "end" }}>
						<Text
							style={{
								paddingRight: 5,
							}}
						>
							Share
						</Text>
						<Image
							source={images.shareIcon}
							resizeMode="contain"
							style={{
								width: 18,
								height: 18,
							}}
						/>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	feedTab: {
		backgroundColor: "#FFFFFF",
		marginVertical: 5,
		borderRadius: 5,
		flexDirection: "column",
		shadowColor: "black",
		shadowOpacity: 0.2,
		shadowOffset: { width: 0, height: 5 },
		shadowRadius: 7,
	},
});
