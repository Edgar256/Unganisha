import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	Image,
	TouchableOpacity,
	ScrollView,
	ImageBackground,
	Alert,
	TextInput,
	Modal
} from "react-native";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import { images } from "../constants";
import { MainTopNavigation, MainBottomNavigation } from "../navigations";
import { Ionicons } from "@expo/vector-icons";
import { FollowerCard, FollowingCard, PostCard } from "../components";

const MyProfile = ({ navigation }) => {
	const [modalVisible, setModalVisible] = useState(false);
	console.log(modalVisible);
	return (
		<SafeAreaView style={{ width: "100%", height: "100%" }}>
			<MainTopNavigation
				style={{ zIndex: 0 }}
				navigation={navigation}
				title="USER PROFILE"
			/>
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
						paddingTop: 60,
						paddingBottom: 80,
						overflow: "scroll",
						flexDirection: "column",
					}}
				>
					<View
						style={{
							backgroundColor: COLORS.white,
							borderRadius: 5,
							padding: 0,
							marginTop: 10,
						}}
					>
						<ImageBackground
							source={images.img010}
							style={{
								height: 200,
								position: "relative",
							}}
						>
							<TouchableOpacity
								style={{
									backgroundColor: COLORS.lightGray,
									padding: 10,
									borderRadius: 30,
									marginTop: 130,
									right: 0,
									marginRight: 10,
									position: "absolute",
									zIndex: 15,
								}}
							>
								<Ionicons name="md-camera" size={30} color={COLORS.black} />
							</TouchableOpacity>
							<View
								style={{
									padding: 10,
									borderRadius: 30,
									marginTop: 80,
									position: "absolute",
									justifyContent: "center",
									alignItems: "center",
									width: "100%",
									zIndex: 11,
								}}
							>
								<Image
									source={images.edgar001}
									style={{
										height: 200,
										width: 200,
										borderRadius: 200,
										marginTop: 10,
									}}
								/>
								<TouchableOpacity
									style={{
										backgroundColor: COLORS.lightGray,
										padding: 10,
										borderRadius: 30,
										marginTop: 130,
										right: "15%",
										marginRight: 10,
										position: "absolute",
									}}
								>
									<Ionicons name="md-camera" size={30} color={COLORS.black} />
								</TouchableOpacity>
							</View>
						</ImageBackground>
						<View style={{ marginTop: 100, padding: 10 }}>
							<Text style={{ fontSize: SIZES.h2 }}>Edgar Tinkamanyire</Text>
							<TouchableOpacity
								style={{
									backgroundColor: COLORS.lightGray,
									width: "100%",
									padding: 10,
									borderRadius: 20,
									textAlign: "center",
									marginVertical: 10,
								}}
								// onPress={() => setModalVisible(true)}
							>
								<Text>Edit Profile</Text>
							</TouchableOpacity>
							<View style={{ flexDirection: "row" }}>
								<Ionicons name="md-briefcase" size={20} color={COLORS.black} />
								<Text style={{ marginVertical: 4, paddingHorizontal: 5 }}>
									Software Engineer at Pixabits
								</Text>
							</View>
							<View style={{ flexDirection: "row" }}>
								<Ionicons name="md-school" size={20} color={COLORS.black} />
								<Text style={{ marginVertical: 4, paddingHorizontal: 5 }}>
									Went to Makerere University
								</Text>
							</View>
							<View style={{ flexDirection: "row" }}>
								<Ionicons name="md-compass" size={20} color={COLORS.black} />
								<Text style={{ marginVertical: 4, paddingHorizontal: 5 }}>
									Lives in Kampala, Uganda
								</Text>
							</View>
							<View style={{ flexDirection: "row" }}>
								<Ionicons name="md-heart" size={20} color={COLORS.black} />
								<Text style={{ marginVertical: 4, paddingHorizontal: 5 }}>
									Single
								</Text>
							</View>
							<View style={{ flexDirection: "row" }}>
								<Ionicons name="md-hourglass" size={20} color={COLORS.black} />
								<Text style={{ marginVertical: 4, paddingHorizontal: 5 }}>
									Joined 24th September, 2021
								</Text>
							</View>
							<View style={{ flexDirection: "row" }}>
								<Ionicons name="md-link" size={20} color={COLORS.black} />
								<Text style={{ marginVertical: 4, paddingHorizontal: 5 }}>
									https://www.edgar256.github.io/
								</Text>
							</View>
						</View>
					</View>
					<Text
						style={{ fontSize: SIZES.h2, marginTop: 50, paddingHorizontal: 10 }}
					>
						Followers
					</Text>
					<View
						style={{
							marginVertical: 0,
						}}
					>
						<FollowerCard />
						<FollowerCard />
					</View>
					<TouchableOpacity
						style={styles.btn}
						onPress={() => navigation.navigate("Followers")}
					>
						<Text style={{ color: COLORS.white }}>View All Followers</Text>
					</TouchableOpacity>
					<Text
						style={{ fontSize: SIZES.h2, marginTop: 50, paddingHorizontal: 10 }}
					>
						Following
					</Text>
					<View
						style={{
							marginVertical: 0,
						}}
					>
						<FollowingCard />
						<FollowingCard />
					</View>
					<TouchableOpacity
						style={styles.btn}
						onPress={() => navigation.navigate("Following")}
					>
						<Text style={{ color: COLORS.white }}>View All Following</Text>
					</TouchableOpacity>
					<Text
						style={{ fontSize: SIZES.h2, marginTop: 50, paddingHorizontal: 10 }}
					>
						My Posts
					</Text>
					<PostCard
						name="Edgar Tinkamanyire"
						userImage={images.edgar001}
						time="10:00am"
						text="Post message here"
						image={images.img001}
						likeCount="35"
						commentCount="67"
						navigation={navigation}
					/>
					<PostCard
						name="Edgar Tinkamanyire"
						userImage={images.edgar001}
						time="10:00am"
						text="Post message here"
						image={images.img002}
						likeCount="35"
						commentCount="67"
						navigation={navigation}
					/>
					<PostCard
						name="Edgar Tinkamanyire"
						userImage={images.edgar001}
						time="10:00am"
						text="Post message here"
						image={images.img003}
						likeCount="35"
						commentCount="67"
						navigation={navigation}
					/>
					<PostCard
						name="Edgar Tinkamanyire"
						userImage={images.edgar001}
						time="10:00am"
						text="Post message here"
						image={images.img004}
						likeCount="35"
						commentCount="67"
						navigation={navigation}
					/>
					<PostCard
						name="Edgar Tinkamanyire"
						userImage={images.edgar001}
						time="10:00am"
						text="Post message here"
						image={images.img005}
						likeCount="35"
						commentCount="67"
						navigation={navigation}
					/>
					<PostCard
						name="Edgar Tinkamanyire"
						userImage={images.edgar001}
						time="10:00am"
						text="Post message here"
						image={images.img006}
						likeCount="35"
						commentCount="67"
						navigation={navigation}
					/>
					<PostCard
						name="Edgar Tinkamanyire"
						userImage={images.edgar001}
						time="10:00am"
						text="Post message here"
						image={images.img007}
						likeCount="35"
						commentCount="67"
						navigation={navigation}
					/>
					<PostCard
						name="Edgar Tinkamanyire"
						userImage={images.edgar001}
						time="10:00am"
						text="Post message here"
						image={images.img008}
						likeCount="35"
						commentCount="67"
						navigation={navigation}
					/>
				</ScrollView>
			</View>

			<MainBottomNavigation navigation={navigation} />
			
			<Modal
				animationType="slide"
				transparent={true}
				isVisible={false}
				style={{
					zIndex: 60,
					position: "fixed",
					bottom: 0,
					width: "100%",
					borderWidth: 0,
					margin: 0,
					backgroundColor: "white",
					borderRadius: 10,
					padding: 0,
					shadowColor: "#000",
					shadowOffset: {
						width: 0,
						height: 2,
					},
					shadowOpacity: 0.25,
					shadowRadius: 4,
					elevation: 5,
				}}
				onRequestClose={() => {
					Alert.alert("Modal has been closed.");
					setModalVisible(false);
				}}
			>
				<View
					style={{
						backgroundColor: COLORS.white,
						padding: 20,
						borderRadius: 10,
						flexDirection: "column",
					}}
				>
					<Text
						style={{
							fontSize: SIZES.h2,
							width: "100%",
							textAlign: "center",
							padding: 10,
						}}
					>
						Edit Profile
					</Text>
					<Text
						style={{
							fontSize: SIZES.h3,
							width: "100%",
							textAlign: "left",
							padding: 10,
						}}
					>
						First Name
					</Text>
					<TextInput placeholder="Edgar" style={styles.textInput}></TextInput>
					<Text
						style={{
							fontSize: SIZES.h3,
							width: "100%",
							textAlign: "left",
							padding: 10,
						}}
					>
						Last Name
					</Text>
					<TextInput
						placeholder="Tinkamanyire"
						style={styles.textInput}
					></TextInput>
					<Text
						style={{
							fontSize: SIZES.h3,
							width: "100%",
							textAlign: "left",
							padding: 10,
						}}
					>
						Where you studied
					</Text>
					<TextInput
						placeholder="Makerere University"
						style={styles.textInput}
					></TextInput>
					<Text
						style={{
							fontSize: SIZES.h3,
							width: "100%",
							textAlign: "left",
							padding: 10,
						}}
					>
						Where you live
					</Text>
					<TextInput
						placeholder="Kampala, Uganda"
						style={styles.textInput}
					></TextInput>
					<Text
						style={{
							fontSize: SIZES.h3,
							width: "100%",
							textAlign: "left",
							padding: 10,
						}}
					>
						Marital Status
					</Text>
					<TextInput placeholder="Single" style={styles.textInput}></TextInput>
					<Text
						style={{
							fontSize: SIZES.h3,
							width: "100%",
							textAlign: "left",
							padding: 10,
						}}
					>
						Website
					</Text>
					<TextInput
						placeholder="https://edgar256.github.io/"
						style={styles.textInput}
					></TextInput>
					<TouchableOpacity
						style={{
							backgroundColor: COLORS.success,
							width: "100%",
							padding: 10,
							borderRadius: 20,
							textAlign: "center",
							marginVertical: 10,
						}}
						onPress={() => setModalVisible(!modalVisible)}
					>
						<Text>Save</Text>
					</TouchableOpacity>
				</View>

				{/* <View style={styles.centeredView}>
					<View style={styles.modalView}>
						<Text style={styles.modalText}>Hello World!</Text>
						<TouchableOpacity
							style={[styles.button, styles.buttonClose]}
							onPress={() => setModalVisible(!modalVisible)}
						>
							<Text style={styles.textStyle}>Hide Modal</Text>
						</TouchableOpacity>
					</View>
				</View> */}
			</Modal>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	btn: {
		padding: 10,
		backgroundColor: COLORS.secondary,
		borderRadius: 20,
		textAlign: "center",
		marginHorizontal: 10,
		marginVertical: 5,
	},
	modalView: {
		margin: 0,
		backgroundColor: "white",
		borderRadius: 10,
		padding: 10,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
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

export default MyProfile;
