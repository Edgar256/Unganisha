import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { COLORS, images } from "../constants";

export default function ChatPerson(props) {
	return (
		<View>
			<TouchableOpacity onPress={() => props.navigation.navigate("Inbox")}>
				<View style={{ flexDirection: "row", marginVertical: 10 }}>
					<Image
						source={images.edgar001}
						resizeMode="contain"
						style={styles.image}
					/>
					<View
						style={{
							justifyContent: "between",
							flexDirection: "row",
							flex: 1,
						}}
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
						</View>
						<View style={{ paddingVertical: 8, flex: 1 }}>
							<Text style={{ fontWeight: 300, fontSize: 13, color: "#5d5d5d" }}>
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
			<View
				style={{ borderBottomColor: "#e5e5e5", borderBottomWidth: 1 }}
			></View>
		</View>
	);
}

const styles = StyleSheet.create({
	image: {
		width: 50,
		height: 50,
		borderRadius: 50,
		marginRight: 5,
	},
});
