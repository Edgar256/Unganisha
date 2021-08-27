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
} from "react-native";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import { images } from "../constants";
import { MainTopNavigation, MainBottomNavigation } from "../navigations";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { FollowerCard, FollowingCard, PostCard } from "../components";
import Modal from "modal-enhanced-react-native-web";
import * as ImagePicker from "expo-image-picker";

const MyProfile = ({ navigation }) => {
	const [editModalVisible, setEditModalVisible] = useState(false);
	const [editHomeImageModalVisible, setHomeImageModalVisible] = useState(false);
	const [editProfileImageModalVisible, setEditProfileImageModalVisible] =
		useState(false);
	const [homeImage, setHomeImage] = useState(null);
	const [profileImage, setProfileImage] = useState(null);

	const addHomeImage = async () => {
		let _image = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		if (!_image.cancelled) {
			setHomeImage(_image.uri);
		}
	};

	const addProfileImage = async () => {
		let _image = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		if (!_image.cancelled) {
			setProfileImage(_image.uri);
		}
	};

	return (
		<SafeAreaView style={{ width: "100%", height: "100%" }}>
			<MainTopNavigation
				style={{ zIndex: 0 }}
				navigation={navigation}
				title="USER PROFILE"
			/>
			<View
				resizeMode="cover"
				style={{
					width: "100%",
					height: "100%",
					position: "fixed",
				}}
			>
				<ScrollView style={styles.scrollview}>
					<View
						style={{
							backgroundColor: COLORS.white,
							borderRadius: 5,
							padding: 0,
							marginTop: 10,
						}}
					>
						<ImageBackground
							source={homeImage !== null ? homeImage : images.img010}
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
								onPress={() =>
									setHomeImageModalVisible(!editHomeImageModalVisible)
								}
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
								{profileImage !== null ? (
									<Image
										source={{ uri: profileImage }}
										style={{
											height: 200,
											width: 200,
											borderRadius: 200,
											marginTop: 10,
										}}
									/>
								) : (
									<Image
										source={images.edgar001}
										style={{
											height: 200,
											width: 200,
											borderRadius: 200,
											marginTop: 10,
										}}
									/>
								)}
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
									onPress={() =>
										setEditProfileImageModalVisible(
											!editProfileImageModalVisible
										)
									}
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
								onPress={() => setEditModalVisible(!editModalVisible)}
							>
								<Text>Edit Profile</Text>
							</TouchableOpacity>
							<View style={{ flexDirection: "row" }}>
								<Ionicons name="md-briefcase" size={20} color={COLORS.black} />
								<Text style={styles.paragragh}>
									Software Engineer at Pixabits
								</Text>
							</View>
							<View style={{ flexDirection: "row" }}>
								<Ionicons name="md-school" size={20} color={COLORS.black} />
								<Text style={styles.paragragh}>
									Went to Makerere University
								</Text>
							</View>
							<View style={{ flexDirection: "row" }}>
								<Ionicons name="md-compass" size={20} color={COLORS.black} />
								<Text style={styles.paragragh}>Lives in Kampala, Uganda</Text>
							</View>
							<View style={{ flexDirection: "row" }}>
								<Ionicons name="md-heart" size={20} color={COLORS.black} />
								<Text style={styles.paragragh}>Single</Text>
							</View>
							<View style={{ flexDirection: "row" }}>
								<Ionicons name="md-hourglass" size={20} color={COLORS.black} />
								<Text style={styles.paragragh}>
									Joined 24th September, 2021
								</Text>
							</View>
							<View style={{ flexDirection: "row" }}>
								<Ionicons name="md-link" size={20} color={COLORS.black} />
								<Text style={styles.paragragh}>
									https://www.edgar256.github.io/
								</Text>
							</View>
						</View>
					</View>
					<Text style={styles.sectionHeaderText}>Followers</Text>
					<View>
						<FollowerCard />
						<FollowerCard />
					</View>
					<TouchableOpacity
						style={styles.btn}
						onPress={() => navigation.navigate("Followers")}
					>
						<Text style={{ color: COLORS.white }}>View All Followers</Text>
					</TouchableOpacity>
					<Text style={styles.sectionHeaderText}>Following</Text>
					<View>
						<FollowingCard />
						<FollowingCard />
					</View>
					<TouchableOpacity
						style={styles.btn}
						onPress={() => navigation.navigate("Following")}
					>
						<Text style={{ color: COLORS.white }}>View All Following</Text>
					</TouchableOpacity>
					<Text style={styles.sectionHeaderText}>My Posts</Text>
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

			{/* Edit Profile Details Modal */}
			<Modal
				animationType="slide"
				transparent={true}
				visible={editModalVisible}
				style={styles.modalView}
				onRequestClose={() => {
					Alert.alert("Modal has been closed.");
					setModalVisible(!editModalVisible);
				}}
			>
				<View style={styles.modalBody}>
					<Text style={styles.modalHeaderText}>Edit Profile</Text>
					<Text style={styles.textLabel}>First Name</Text>
					<TextInput placeholder="Edgar" style={styles.textInput}></TextInput>
					<Text style={styles.textLabel}>Last Name</Text>
					<TextInput
						placeholder="Tinkamanyire"
						style={styles.textInput}
					></TextInput>
					<Text style={styles.textLabel}>Where you studied</Text>
					<TextInput
						placeholder="Makerere University"
						style={styles.textInput}
					></TextInput>
					<Text style={styles.textLabel}>Where you live</Text>
					<TextInput
						placeholder="Kampala, Uganda"
						style={styles.textInput}
					></TextInput>
					<Text style={styles.textLabel}>Marital Status</Text>
					<TextInput placeholder="Single" style={styles.textInput}></TextInput>
					<Text style={styles.textLabel}>Website</Text>
					<TextInput
						placeholder="https://edgar256.github.io/"
						style={styles.textInput}
					></TextInput>

					<TouchableOpacity
						style={styles.btnSuccess}
						onPress={() => setEditModalVisible(!editModalVisible)}
					>
						<Text>Save</Text>
					</TouchableOpacity>
				</View>
			</Modal>

			{/* Edit Home Image Modal */}
			<Modal
				animationType="slide"
				transparent={true}
				visible={editHomeImageModalVisible}
				style={styles.modalView}
				onRequestClose={() => {
					Alert.alert("Modal has been closed.");
					setModalVisible(!editModalVisible);
				}}
			>
				<View style={styles.modalBodyUploads}>
					<Text style={{ fontSize: SIZES.h2 }}>Edit Home Image</Text>
					<View
						style={{
							elevation: 2,
							height: 200,
							width: "100%",
							backgroundColor: "#efefef",
							position: "relative",
							borderRadius: 0,
							overflow: "hidden",
						}}
					>
						{homeImage && (
							<Image
								source={{ uri: homeImage }}
								style={{ width: "100%", height: 200 }}
							/>
						)}
						<View style={styles.uploadBtnContainer}>
							<TouchableOpacity onPress={addHomeImage} style={styles.uploadBtn}>
								<Text>{homeImage ? "Edit" : "Upload"} Image</Text>
								<AntDesign name="camera" size={20} color="black" />
							</TouchableOpacity>
						</View>
					</View>

					<TouchableOpacity
						style={styles.btnSuccess}
						onPress={() => setHomeImageModalVisible(!editHomeImageModalVisible)}
					>
						<Text>Save</Text>
					</TouchableOpacity>
				</View>
			</Modal>

			{/* Edit Profile Image Modal */}
			<Modal
				animationType="slide"
				transparent={true}
				visible={editProfileImageModalVisible}
				style={styles.modalView}
				onRequestClose={() => {
					Alert.alert("Modal has been closed.");
					setEditProfileImageModalVisible(!editProfileImageModalVisible);
				}}
			>
				<View style={styles.modalBodyUploads}>
					<Text style={{ fontSize: SIZES.h2 }}>Edit Profile Image</Text>
					<View style={styles.modalBodyImage}>
						{profileImage && (
							<Image
								source={{ uri: profileImage }}
								style={{ width: 200, height: 200 }}
							/>
						)}
						<View style={styles.uploadBtnContainer}>
							<TouchableOpacity
								onPress={addProfileImage}
								style={styles.uploadBtn}
							>
								<Text>{homeImage ? "Edit" : "Upload"} Image</Text>
								<AntDesign name="camera" size={20} color="black" />
							</TouchableOpacity>
						</View>
					</View>

					<TouchableOpacity
						style={styles.btnSuccess}
						onPress={() =>
							setEditProfileImageModalVisible(!editProfileImageModalVisible)
						}
					>
						<Text>Save</Text>
					</TouchableOpacity>
				</View>
			</Modal>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	scrollview: {
		paddingHorizontal: 10,
		position: "relative",
		width: "100%",
		zIndex: 44,
		paddingTop: 60,
		paddingBottom: 80,
		overflow: "scroll",
		flexDirection: "column",
	},
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
		backgroundColor: "#0000008A",
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
		width: "100%",
		overflow: "scroll",
		position: "relative",
	},
	modalBody: {
		backgroundColor: COLORS.white,
		padding: 20,
		borderRadius: 10,
		flexDirection: "column",
	},
	modalBodyUploads: {
		backgroundColor: COLORS.white,
		padding: 20,
		borderRadius: 10,
		flexDirection: "column",
		alignContent: "center",
		justifyContent: "center",
		alignItems: "center",
	},
	modalBodyImage: {
		elevation: 2,
		height: 200,
		width: 200,
		backgroundColor: "#efefef",
		position: "relative",
		borderRadius: 999,
		overflow: "hidden",
	},
	btnSuccess: {
		backgroundColor: COLORS.success,
		width: "100%",
		padding: 10,
		borderRadius: 20,
		textAlign: "center",
		marginVertical: 10,
	},
	modalHeaderText: {
		fontSize: SIZES.h2,
		width: "100%",
		textAlign: "center",
		padding: 10,
	},
	textInput: {
		height: 40,
		padding: 10,
		fontSize: SIZES.body3,
		borderWidth: 1,
		borderColor: COLORS.lightGray,
		borderRadius: 5,
	},
	textLabel: {
		fontSize: SIZES.h3,
		width: "100%",
		textAlign: "left",
		padding: 10,
	},
	sectionHeaderText: {
		fontSize: SIZES.h2,
		marginTop: 50,
		paddingHorizontal: 10,
	},
	paragragh: {
		marginVertical: 4,
		paddingHorizontal: 5,
	},
	uploadBtnContainer: {
		opacity: 0.7,
		position: "absolute",
		right: 0,
		bottom: 0,
		backgroundColor: "lightgrey",
		width: "100%",
		height: "25%",
	},
	uploadBtn: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
});

export default MyProfile;
