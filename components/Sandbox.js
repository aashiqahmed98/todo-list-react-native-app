import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

/**
 * A 'View' component is flex by default.
 * and by default flex direction is 'column' since its mobile.
 * 'flex: 1' render the flex item of full length
 */

function Sandbox() {
	return (
		<View style={styles.container}>
			<Text style={styles.boxOne}>One</Text>
			<Text style={styles.boxTwo}>Two</Text>
			<Text style={styles.boxThree}>Three</Text>
			<Text style={styles.boxFour}>Four</Text>
		</View>
	)
}
export default Sandbox

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'flex-end',
		paddingTop: 40,
		backgroundColor: '#ddd',
	},
	boxOne: {
		flex: 2,
		padding: 5,
		backgroundColor: 'gold',
	},
	boxTwo: {
		flex: 1,
		padding: 10,
		backgroundColor: 'violet',
	},
	boxThree: {
		flex: 1,
		padding: 15,
		backgroundColor: 'green',
	},
	boxFour: {
		flex: 1,
		padding: 20,
		backgroundColor: 'red',
	},
})
