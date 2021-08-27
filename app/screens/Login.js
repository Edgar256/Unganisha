import React from "react";
import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	Image,
	Button,
	TouchableHighlight,
	Touchable,
	TouchableOpacity,
	TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import { images } from "../constants";
import { FontAwesome } from "@expo/vector-icons";

const Login = ({ navigation }) => {
	const onChangeText = () => {
		console.log(123);
	};

	return (
		<SafeAreaView style={{ width: "100%", height: "100%" }}>
			<LinearGradient
				colors={[COLORS.primary, COLORS.secondary]}
				style={styles.container}
			>
				<Text
					style={{ textAlign: "center", color: COLORS.white, fontSize: 50 }}
				>
					Unganisha
				</Text>
				<View
					style={{
						flexDirection: "row",
						width: "100%",
						justifyContent: "center",
					}}
				>
					<TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
						<Image
							source={images.unganishaWhiteLogo}
							resizeMode="contain"
							style={styles.imageSignUp}
						/>
					</TouchableOpacity>
				</View>
				<View style={{ padding: 20 }}>
					<Text style={styles.textHeader}>LOGIN</Text>
					<Text style={styles.textBody}>
						Enter your Login details to access your account
					</Text>
				</View>
			</LinearGradient>
			<View style={{ padding: 20 }}>
				<TextInput
					style={styles.textInput}
					onChangeText={onChangeText}
					placeholder="Email"
				/>
			</View>
			<View style={{ padding: 20 }}>
				<TextInput
					style={styles.textInput}
					onChangeText={onChangeText}
					placeholder="Password"
				/>
			</View>
			<View
				style={{
					display: "flex",
					width: "100%",
					alignItems: "right",
					padding: 20,
				}}
			>
				<TouchableOpacity>
					<Text
						style={{
							width: "100%",
							fontSize: 10,
							textAlign: "right",
							color: COLORS.gray,
						}}
					>
						Forgot Password
					</Text>
				</TouchableOpacity>
			</View>
			<View style={{ padding: 20, marginBottom: 20 }}>
				<TouchableHighlight
					activeOpacity={0.6}
					underlayColor="#4327C2"
					style={({ ...FONTS.body3 }, styles.btn)}
					onPress={() => navigation.navigate("Navigation")}
				>
					<Text style={{ flexDirection: "row", color: COLORS.white }}>
						SignIn
					</Text>
				</TouchableHighlight>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: "40%",
	},
	imageBack: {
		width: 56,
		height: 100,
	},
	imageSignUp: {
		width: 152,
		height: 150,
	},
	textHeader: {
		fontSize: 30,
		color: "#ffffff",
	},
	textBody: {
		fontSize: 16,
		color: "#ffffff",
	},
	input: {
		height: 40,
		margin: 0,
		borderBottomWidth: 1,
		padding: 10,
	},
	btn: {
		marginBottom: 10,
		marginTop: 10,
		justifyContent: "center",
		flexDirection: "row",
		backgroundColor: COLORS.primary,
		padding: 20,
		borderRadius: 40,
	},
	text: {
		marginRight: 20,
	},
	textInput: {
		height: 40,
		padding: 10,
		fontSize: SIZES.body3,
		borderWidth: 1,
		borderColor: COLORS.lightGray,
		borderRadius: 5,
	},
});

export default Login;
