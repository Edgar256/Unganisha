import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	Image,
	TouchableHighlight,
	TouchableOpacity,
	TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import { images } from "../constants";
import { apiURL } from "../utils/apiURL";
import axios from "axios";

const SignUp = ({ navigation }) => {
	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState("");

	const handleLogin = () => {
		if (!firstname || !lastname || !email || !password || !confirmPassword) {
			setError("Please fill all fields");
		}
		if (password !== confirmPassword) {
			setError("Password should match");
		}
		axios
			.post(`${apiURL}/users/register`, {
				firstName: firstname,
				lastName: lastname,
				email: email,
				password: password,
			})
			.then((res) => {
				if (res.data.success) {
					alert(res.data.message);
					setTimeout(() => {
						navigation.navigate("Login");
					}, 1000);
				}else{
					setError(res.data.error);
				}
			})
			.catch((error) => {
				console.log(error)
				return error;
			});
		console.log(firstname, lastname, email, password, confirmPassword);
	};

	return (
		<SafeAreaView
			style={{ width: "100%", height: "100%", backgroundColor: COLORS.white }}
		>
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
					<Text style={styles.textHeader}>SIGNUP. IT'S FREE !!!</Text>
					<Text style={styles.textBody}>
						Enter your details to create your account
					</Text>
				</View>
			</LinearGradient>
			<View style={styles.formControl}>
				<TextInput
					style={styles.textInput}
					placeholder="First Name"
					onChangeText={setFirstname}
				/>
			</View>
			<View style={styles.formControl}>
				<TextInput
					style={styles.textInput}
					placeholder="Last Name"
					onChangeText={setLastname}
				/>
			</View>
			<View style={styles.formControl}>
				<TextInput
					style={styles.textInput}
					placeholder="Email"
					type="email"
					autoCompleteType="email"
					onChangeText={setEmail}
				/>
			</View>
			<View style={styles.formControl}>
				<TextInput
					style={styles.textInput}
					placeholder="Password"
					type="password"
					autoCompleteType="password"
					secureTextEntry={true}
					onChangeText={setPassword}
				/>
			</View>
			<View style={styles.formControl}>
				<TextInput
					style={styles.textInput}
					placeholder="Confirm Password"
					type="password"
					autoCompleteType="password"
					secureTextEntry={true}
					onChangeText={setConfirmPassword}
				/>
			</View>
			<View style={{ paddingHorizontal: 20 }}>
				{error ? (
					<Text style={{ color: "red", textAlign: "center" }}>{error}</Text>
				) : (
					<Text> </Text>
				)}
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
					onPress={() => handleLogin()}
				>
					<Text style={{ flexDirection: "row", color: COLORS.white }}>
						SignUp
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
		width: 102,
		height: 100,
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
	formControl: {
		paddingHorizontal: 20,
		paddingVertical: 10,
	},
});

export default SignUp;
