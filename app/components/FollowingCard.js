import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import { images } from "../constants";

export default function FollowingCard() {
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
							backgroundColor: COLORS.lightGray,
							borderRadius: 15,
							paddingVertical: 5,
							paddingHorizontal: 10,
							marginRight: 10,
							fontSize: SIZES.small,
						}}
						onPress={() => alert("unfollow user")}
					>
						<Text>Unfollow</Text>
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
}
