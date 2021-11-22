import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	carContainer: {
		width: '100%',
		height: Dimensions.get('window').height
	},
	title: {
		marginTop: '30%',
		width: '100%',
		alignItems: 'center'
	},
	titles: {
		fontSize: 40,
		fontWeight: '500'
	},
	subtitleCTA: {
		textDecorationLine: 'underline'
	},
	subtitle: {
		color: '#5c5e62',
		fontSize: 16
	},
	image: {
		width: '100%',
		height: '100%',
		resizeMode: 'cover',
		position: 'absolute'
	},
	buttonsContainer: {
		position: 'absolute',
		bottom: 50,
		width: '100%'
	}
});

export default styles;
