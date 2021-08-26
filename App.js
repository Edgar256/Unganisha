import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
	Chats,
	Dashboard,
	Followers,
	Following,
	GroupProfile,
	Groups,
	HelpSupport,
	Inbox,
	Login,
	Demo,
	MyProfile,
	Navigation,
	NewsFeed,
	Notifications,
	People,
	Settings,
	SignUp,
	SuggestedPeople,
	UserProfile,
} from "./screens";

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		border: "transparent",
	},
};

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer theme={theme}>
			<Stack.Navigator initialRouteName={"Demo"}>
				{/* Screens */}
				<Stack.Screen
					name="Chats"
					options={{
						headerShown: false,
					}}
					component={Chats}
				/>
				<Stack.Screen
					name="Groups"
					options={{
						headerShown: false,
					}}
					component={Groups}
				/>
				<Stack.Screen
					name="Inbox"
					options={{
						headerShown: false,
					}}
					component={Inbox}
				/>
				<Stack.Screen
					name="People"
					options={{
						headerShown: false,
					}}
					component={People}
				/>
				<Stack.Screen
					name="UserProfile"
					options={{
						headerShown: false,
					}}
					component={UserProfile}
				/>
				<Stack.Screen
					name="Notifications"
					options={{
						headerShown: false,
					}}
					component={Notifications}
				/>
				<Stack.Screen
					name="Following"
					options={{
						headerShown: false,
					}}
					component={Following}
				/>
				<Stack.Screen
					name="Followers"
					options={{
						headerShown: false,
					}}
					component={Followers}
				/>
				<Stack.Screen
					name="Settings"
					options={{
						headerShown: false,
					}}
					component={Settings}
				/>
				<Stack.Screen
					name="HelpSupport"
					options={{
						headerShown: false,
					}}
					component={HelpSupport}
				/>
				<Stack.Screen
					name="NewsFeed"
					options={{
						headerShown: false,
					}}
					component={NewsFeed}
				/>
				<Stack.Screen
					name="Navigation"
					options={{
						headerShown: false,
					}}
					component={Navigation}
				/>
				<Stack.Screen
					name="SuggestedPeople"
					options={{
						headerShown: false,
					}}
					component={SuggestedPeople}
				/>
				<Stack.Screen
					name="MyProfile"
					options={{
						headerShown: false,
					}}
					component={MyProfile}
				/>
				<Stack.Screen
					name="GroupProfile"
					options={{
						headerShown: false,
					}}
					component={GroupProfile}
				/>
				<Stack.Screen
					name="Login"
					options={{
						headerShown: false,
					}}
					component={Login}
				/>
				<Stack.Screen
					name="SignUp"
					options={{
						headerShown: false,
					}}
					component={SignUp}
				/>
				<Stack.Screen
					name="Demo"
					options={{
						headerShown: false,
					}}
					component={Demo}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
