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

const Settings = ({ navigation }) => {
	return (
		<SafeAreaView style={{ width: "100%", height: "100%" }}>
			<MainTopNavigation navigation={navigation} title="SETTINGS" />
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
						paddingVertical: 60,
						overflow: "scroll",
						flexDirection: "column",
					}}
				>
					<Text>SETTINGS</Text>
				</ScrollView>
			</View>

			<MainBottomNavigation navigation={navigation} />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({});

export default Settings;
