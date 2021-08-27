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

const HelpSupport = ({ navigation }) => {
	return (
		<SafeAreaView style={{ width: "100%", height: "100%" }}>
			<MainTopNavigation navigation={navigation} title="HELP & SUPPORT" />
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
						style={{ flexDirection: "column", marginBottom: 20, padding: 10 }}
					>
						<Text
							style={{
								fontSize: SIZES.h2,
								fontWeight: 500,
								color: COLORS.primary,
							}}
						>
							The standard Lorem Ipsum passage, used since the 1500s
						</Text>
						<Text style={{}}>
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum."
						</Text>
					</View>
					<View
						style={{ flexDirection: "column", marginBottom: 20, padding: 10 }}
					>
						<Text
							style={{
								fontSize: SIZES.h2,
								fontWeight: 500,
								color: COLORS.primary,
							}}
						>
							Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
							Cicero in 45 BC
						</Text>
						<Text style={{}}>
							"Sed ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
							quae ab illo inventore veritatis et quasi architecto beatae vitae
							dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
							aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
							eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
							est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
							velit, sed quia non numquam eius modi tempora incidunt ut labore
							et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
							veniam, quis nostrum exercitationem ullam corporis suscipit
							laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
							vel eum iure reprehenderit qui in ea voluptate velit esse quam
							nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
							voluptas nulla pariatur?"
						</Text>
					</View>
					<View
						style={{ flexDirection: "column", marginBottom: 20, padding: 10 }}
					>
						<Text
							style={{
								fontSize: SIZES.h2,
								fontWeight: 500,
								color: COLORS.primary,
							}}
						>
							Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
							Cicero in 45 BC
						</Text>
						<Text style={{}}>
							"Sed ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
							quae ab illo inventore veritatis et quasi architecto beatae vitae
							dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
							aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
							eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
							est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
							velit, sed quia non numquam eius modi tempora incidunt ut labore
							et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
							veniam, quis nostrum exercitationem ullam corporis suscipit
							laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
							vel eum iure reprehenderit qui in ea voluptate velit esse quam
							nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
							voluptas nulla pariatur?"
						</Text>
					</View>
				</ScrollView>
			</View>

			<MainBottomNavigation navigation={navigation} />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({});

export default HelpSupport;
