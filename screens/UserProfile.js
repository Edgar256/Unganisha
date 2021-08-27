import React from "react";
import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	Image,
	TouchableOpacity,
	ScrollView,
	ImageBackground,
} from "react-native";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import { images } from "../constants";
import { MainTopNavigation, MainBottomNavigation } from "../navigations";
import { Ionicons } from "@expo/vector-icons";
import { FollowerCard, FollowingCard, PostCard } from "../components";

const UserProfile = ({ navigation }) => {
	return (
		<SafeAreaView style={{ width: "100%", height: "100%" }}>
			<MainTopNavigation navigation={navigation} title="USER PROFILE" />
			<View
				resizeMode="cover"
				style={{
					width: "100%",
					height: "100%",
					// position: "fixed"
				}}
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
								flexDirection: "row",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Image
								source={images.edgar001}
								style={{
									height: 200,
									width: 200,
									borderRadius: 200,
									marginTop: 190,
								}}
							/>
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
								onPress={() => alert("Edit Profile")}
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
						style={{ fontSize: SIZES.h2, marginTop: 10, paddingHorizontal: 10 }}
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
						style={{ fontSize: SIZES.h2, marginTop: 10, paddingHorizontal: 10 }}
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
						style={{ fontSize: SIZES.h2, marginTop: 10, paddingHorizontal: 10 }}
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
						name="Reene Dawn"
						userImage={images.dawn001}
						time="10:00am"
						text="Post message here from Dawn"
						image={images.img002}
						likeCount="78"
						commentCount="7"
						navigation={navigation}
					/>
					<PostCard
						name="Reene Dawn"
						userImage={images.dawn001}
						time="10:00am"
						text="Post message here from Dawn"
						image={images.img003}
						likeCount="0"
						commentCount="54"
						navigation={navigation}
					/>
					<PostCard
						name="Andrew Bwiiza"
						userImage={images.andrew001}
						time="10:00am"
						text="Post message here"
						image={images.img004}
						likeCount="3"
						commentCount="8"
						navigation={navigation}
					/>
					<PostCard
						name="Andrew Bwiiza"
						userImage={images.andrew001}
						time="10:00am"
						text="Post message here"
						image={images.img005}
						likeCount="3"
						commentCount="8"
						navigation={navigation}
					/>
					<PostCard
						name="Andrew Bwiiza"
						userImage={images.andrew001}
						time="10:00am"
						text="Post message here"
						image={images.img006}
						likeCount="3"
						commentCount="8"
						navigation={navigation}
					/>
					<PostCard
						name="Andrew Bwiiza"
						userImage={images.andrew001}
						time="10:00am"
						text="Post message here"
						image={images.img007}
						likeCount="3"
						commentCount="8"
						navigation={navigation}
					/>
					<PostCard
						name="Andrew Bwiiza"
						userImage={images.andrew001}
						time="10:00am"
						text="Post message here"
						image={images.img008}
						likeCount="3"
						commentCount="8"
						navigation={navigation}
					/>
				</ScrollView>
			</View>

			{/* <MainBottomNavigation navigation={navigation} /> */}
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
});

export default UserProfile;
