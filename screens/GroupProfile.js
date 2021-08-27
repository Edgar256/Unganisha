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

const GroupProfile = ({ navigation }) => {
	return (
		<SafeAreaView style={{ width: "100%", height: "100%" }}>
			<MainTopNavigation navigation={navigation} title="GROUP PROFILE" />
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
								overflow: "hidden",
								borderRadius: 10,
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
								}}
							>
								<Ionicons name="md-camera" size={30} color={COLORS.black} />
							</TouchableOpacity>
						</ImageBackground>
						<View style={{ marginTop: 0, padding: 10 }}>
							<Text style={{ fontSize: SIZES.h2 }}>(Group Name)</Text>
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
								<Text>Edit Group</Text>
							</TouchableOpacity>
							<View style={{ flexDirection: "row" }}>
								<Ionicons name="md-briefcase" size={20} color={COLORS.black} />
								<Text style={{ marginVertical: 4, paddingHorizontal: 5 }}>
									Group Description
								</Text>
							</View>
							<View style={{ flexDirection: "row" }}>
								<Ionicons name="md-hourglass" size={20} color={COLORS.black} />
								<Text style={{ marginVertical: 4, paddingHorizontal: 5 }}>
									Created on 24th September, 2021
								</Text>
							</View>
						</View>
					</View>
					<Text
						style={{ fontSize: SIZES.h2, marginTop: 50, paddingHorizontal: 10 }}
					>
						Group Posts
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
					<Text
						style={{ fontSize: SIZES.h2, marginTop: 50, paddingHorizontal: 10 }}
					>
						Group Members
					</Text>
					<View
						style={{
							marginVertical: 0,
						}}
					>
						<FollowerCard />
						<FollowerCard />
					</View>
				</ScrollView>
			</View>

			<MainBottomNavigation navigation={navigation} />
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

export default GroupProfile;
