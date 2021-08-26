import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	Image,
	TouchableOpacity,
	ScrollView,
	Button,
	// Modal,
} from "react-native";
import { COLORS, FONTS } from "../constants/theme";
import { images } from "../constants";
import { MainTopNavigation, MainBottomNavigation } from "../navigations";
import { PostCard } from "../components";

const NewsFeed = ({ navigation }) => {
	const [isModalVisible, setModalVisible] = useState(false);

	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};

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
						paddingTop: 60,
						paddingBottom: 80,
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
					<View
						style={{ flex: 1, backgroundColor: COLORS.white, width: "100%" }}
					>
						<Button title="Show modal" onPress={toggleModal} />

						<Modal
							visible={false}
							style={{ backgroundColor: COLORS.white, width: "100%" }}
						>
							<View style={{}}>
								<Text>Hello!</Text>

								<Button title="Hide modal" onPress={toggleModal} />
							</View>
						</Modal>
					</View>
				</ScrollView>
			</View>
			<MainBottomNavigation navigation={navigation} />

			{/* <Modal isVisible={false}>
				<View style={{ flex: 1, padding: 20, backgroundColor: COLORS.white }}>
					<Text style={{ fontSize: 40 }}>I am the modal content!</Text>
				</View>
			</Modal> */}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({});

export default NewsFeed;
