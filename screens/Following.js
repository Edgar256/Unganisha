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
import PostCard from "../components/PostCard";
import { FollowingCard } from "../components";

const Following = ({ navigation }) => {
	return (
		<SafeAreaView style={{ width: "100%", height: "100%" }}>
			<MainTopNavigation navigation={navigation} title="FOLLOWING" />
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
					<View style={{ flexDirection: "row", marginTop: 10 }}>
						<TouchableOpacity
							style={{
								backgroundColor: COLORS.primary,
								borderRadius: 30,
								padding: 12,
								marginRight: 10,
							}}
							onPress={() => navigation.navigate("Following")}
						>
							<Text style={{ color: COLORS.white }}>Following</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={{
								backgroundColor: COLORS.lightGray,
								borderRadius: 30,
								padding: 12,
								marginRight: 10,
							}}
							onPress={() => navigation.navigate("Followers")}
						>
							<Text>Followers</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={{
								backgroundColor: COLORS.lightGray,
								borderRadius: 30,
								padding: 12,
								marginRight: 10,
							}}
							onPress={() => navigation.navigate("SuggestedPeople")}
						>
							<Text>Suggested People</Text>
						</TouchableOpacity>
					</View>
					<FollowingCard />
					<FollowingCard />
					<FollowingCard />
					<FollowingCard />
					<FollowingCard />
					<FollowingCard />
					<FollowingCard />
				</ScrollView>
			</View>

			<MainBottomNavigation navigation={navigation} />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({});

export default Following;
