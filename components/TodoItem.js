import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

function TodoItem({ item, pressHandler }) {
	return (
		<TouchableOpacity onPress={() => pressHandler(item.key)}>
			<View style={styles.item}>
				<MaterialIcons name='delete' color='red' size={18} />
				<Text style={styles.text}>{item.text}</Text>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	item: {
		padding: 16,
		marginTop: 16,
		backgroundColor: 'black',
		borderWidth: 1,
		borderStyle: 'dashed',
		borderRadius: 10,
		flexDirection: 'row',
	},
	text: {
		color: 'white',
		marginLeft: 10,
	},
})

export default TodoItem
