import { useState } from 'react'
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	TouchableOpacity,
	Button,
} from 'react-native'

function AddTodoItem({ addTodoHandler }) {
	const [input, setInput] = useState('')

	return (
		<View>
			<TextInput
				style={styles.input}
				placeholder='Buy ...'
				value={input}
				onChangeText={(text) => setInput(text)}
			/>
			<Button
				title='Add Todo'
				color='coral'
				onPress={() => {
					addTodoHandler(input)
				}}
			/>
		</View>
	)
}

export default AddTodoItem

const styles = StyleSheet.create({
	input: {
		marginBottom: 10,
		paddingHorizontal: 8,
		paddingVertical: 6,
		borderBottomWidth: 1,
		borderBottomColor: '#ddd',
	},
})
