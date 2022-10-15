import { useState } from 'react'
import { FlatList, StyleSheet, Text, View, Alert } from 'react-native'
import Header from './components/Header'
import TodoItem from './components/TodoItem'
import AddTodoItem from './components/AddTodoItem'

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

	const addNewTodoItem = (text) => {
		if (text.length > 3) {
			setTodos((prevItem) => {
				return [
					{ text, key: Math.random().toString() }, // not the ideal way to set the key
					...prevItem,
				]
			}, console.log(todos))
		} else {
			Alert.alert('Oops!', 'Todo text should be more than 3 words!', [
				{
					text: 'Cancel',
					onPress: () => console.log('Cancel Pressed'),
					style: 'cancel',
				},
				{ text: 'OK', onPress: () => console.log('OK Pressed') },
			])
		}
	}

	return (
		<View style={styles.container}>
			<Header />
			<View style={styles.content}>
				<AddTodoItem addTodoHandler={addNewTodoItem} />
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
