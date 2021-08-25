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
import { FollowerCard } from "../components";

const Followers = ({ navigation }) => {
	return (
		<SafeAreaView style={{ width: "100%", height: "100%" }}>
			<MainTopNavigation navigation={navigation} title="FOLLOWERS" />
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
								backgroundColor: COLORS.lightGray,
								borderRadius: 30,
								padding: 12,
								marginRight: 10,
							}}
							onPress={() => navigation.navigate("Following")}
						>
							<Text>Following</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={{
								backgroundColor: COLORS.primary,
								borderRadius: 30,
								padding: 12,
								marginRight: 10,
							}}
							onPress={() => navigation.navigate("Followers")}
						>
							<Text style={{ color: COLORS.white }}>Followers</Text>
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
					<FollowerCard />
					<FollowerCard />
					<FollowerCard />
					<FollowerCard />
					<FollowerCard />
					<FollowerCard />
					<FollowerCard />
					<FollowerCard />
				</ScrollView>
			</View>

			<MainBottomNavigation navigation={navigation} />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({});

export default Followers;
