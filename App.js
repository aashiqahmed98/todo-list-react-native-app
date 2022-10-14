import { useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Header from './components/Header'
import TodoItem from './components/TodoItem'

export default function App() {
	const [todos, setTodos] = useState([
		{
			text: 'buy coffee',
			key: 1,
		},
		{
			text: 'create an app',
			key: 2,
		},
		{
			text: 'cycle',
			key: 3,
		},
	])

	const pressHandler = (id) => {
		setTodos((prevTodos) => {
			return prevTodos.filter((todoItem) => todoItem.key !== id)
		})
	}

	return (
		<View style={styles.container}>
			<Header />
			<View style={styles.content}>
				{/* to form */}
				<View style={styles.list}>
					<FlatList
						data={todos}
						renderItem={({ item }) => (
							<TodoItem item={item} pressHandler={pressHandler} />
						)}
						keyExtractor={(item) => item.key}
					/>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	content: {
		padding: 40,
	},
	list: {
		marginTop: 20,
	},
})
