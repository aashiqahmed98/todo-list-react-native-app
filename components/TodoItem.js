import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

function TodoItem({ item, pressHandler }) {
	return (
		<TouchableOpacity onPress={() => pressHandler(item.key)}>
			<Text style={styles.item}>{item.text}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	item: {
		padding: 16,
		marginTop: 16,
		backgroundColor: 'black',
		color: 'white',
		borderWidth: 1,
		borderStyle: 'dashed',
		borderRadius: 10,
	},
})

export default TodoItem