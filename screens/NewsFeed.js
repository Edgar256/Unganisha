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
import { COLORS, FONTS } from "../constants/theme";
import { images } from "../constants";
import { MainTopNavigation, MainBottomNavigation } from "../navigations";
import {PostCard} from "../components";

const NewsFeed = ({ navigation }) => {
	return (
		<SafeAreaView style={{ width: "100%", height: "100%" }}>
			<MainTopNavigation navigation={navigation} title="NEWSFEED" />
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
						name="Chloe Ashton"
						userImage={images.dawn001}
						time="10:00am"
						text="Post message here from Dawn"
						image={images.img002}
						likeCount="78"
						commentCount="7"
						navigation={navigation}
					/>
					<PostCard
						name="Chloe Ashton"
						userImage={images.dawn001}
						time="10:00am"
						text="Post message here from Dawn"
						image={images.img003}
						likeCount="0"
						commentCount="54"
						navigation={navigation}
					/>
					<PostCard
						name="Edgar Tinkamanyire"
						userImage={images.edgar001}
						time="10:00am"
						text="Post message here"
						image={images.img004}
						likeCount="3"
						commentCount="8"
						navigation={navigation}
					/>
					<PostCard
						name="Edgar Tinkamanyire"
						userImage={images.edgar001}
						time="10:00am"
						text="Post message here"
						image={images.img005}
						likeCount="3"
						commentCount="8"
						navigation={navigation}
					/>
					<PostCard
						name="Edgar Tinkamanyire"
						userImage={images.edgar001}
						time="10:00am"
						text="Post message here"
						image={images.img006}
						likeCount="3"
						commentCount="8"
						navigation={navigation}
					/>
					<PostCard
						name="Edgar Tinkamanyire"
						userImage={images.edgar001}
						time="10:00am"
						text="Post message here"
						image={images.img007}
						likeCount="3"
						commentCount="8"
						navigation={navigation}
					/>
					<PostCard
						name="Edgar Tinkamanyire"
						userImage={images.edgar001}
						time="10:00am"
						text="Post message here"
						image={images.img008}
						likeCount="3"
						commentCount="8"
						navigation={navigation}
					/>
				</ScrollView>
			</View>

			<MainBottomNavigation navigation={navigation} />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({});

export default NewsFeed;
