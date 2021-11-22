import React from 'react';
import { Text, StyleSheet, View, FlatList, Dimensions } from 'react-native';
import CarItem from '../CarItems';

import styles from './styles';
import cars from './cars';

const CarList = () => {
	return (
		<View style={styles.container}>
			<FlatList
				data={cars}
				renderItem={({ item }) => <CarItem car={item} />}
				snapToAlignment={'start'}
				decelerationRate={'fast'}
				showsVerticalScrollIndicator={false}
				snapToInterval={Dimensions.get('window').height}
			/>
		</View>
	);
};

export default CarList;
