import React from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, FONTS } from "../constants/theme";
import { images } from "../constants";

export default function MainTopNavigation(props) {
	return (
		<LinearGradient
			colors={[COLORS.primary, COLORS.secondary]}
			style={styles.container}
		>
			<View style={{ flexDirection: "row", padding: 10 }}>
				<TouchableOpacity
					onPress={() => props.navigation.navigate("Navigation")}
				>
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
					<Text
						style={{
							color: "#ffffff",
							fontSize: 17,
							flex: 1,
							justifyContent: "center",
							alignItems: "center",
							textAlign: "center",
							paddingVertical: 10,
						}}
					>
						<Text
							style={{
								color: "#ffffff",
								fontSize: 17,
								flex: 1,
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							{props.title}
						</Text>
					</Text>
					<TouchableOpacity>
						<Image
							source={images.unganishaWhiteLogo}
							resizeMode="contain"
							style={{ height: 40, width: 40 }}
						/>
					</TouchableOpacity>
				</View>
			</View>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	container: {
		height: 60,
		// position: "fixed",
		top: 0,
		width: "100%",
		zIndex: 10,
	},
	navigation: {
		borderRadius: 0,
		padding: 5,
		width: 40,
		height: 40,
	},
});
