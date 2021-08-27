import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../constants";

export default function OutGoingMessage() {
	return (
		<TouchableOpacity onPress={() => alert("message options")}>
			<View
				style={{
					padding: 5,
					width: "100%",
					flexDirection: "row",
					alignItems: "flex-end",
					justifyContent: "flex-end",
				}}
			>
				<View
					style={{
						flexDirection: "column",
						width: "80%",
						backgroundColor: COLORS.secondary,
						borderTopLeftRadius: 10,
						borderTopRightRadius: 0,
						borderBottomRightRadius: 10,
						borderBottomLeftRadius: 10,
						padding: 5,
						float: "right",
					}}
				>
					<Text>
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum."
					</Text>
					<View>
						<Text style={{ fontSize: 9 }}>(9:00am)</Text>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
}
