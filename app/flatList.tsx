import React from 'react';
import { FlatList, StyleSheet, Text, View, } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
    // =========== container ==================
    mainContainer: {
        backgroundColor: "#fff",
        padding: 10,
    },

    // =========== flat list ==================
    item: {
        backgroundColor: '#c2efff',
        padding: 10,
        marginVertical: 8, // margin top and bottom
        marginHorizontal: 16, // margin left and right
    },
    title: {
        fontSize: 20,
    },
});

function List() {
    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
    ];

    type ItemProps = { title: string }; // Define the type for the props

    const Item = ({ title }: ItemProps) => (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
    return (
        <div>
            {/* =========== flat list ================== */}
            <SafeAreaProvider style={styles.mainContainer}>
                <SafeAreaView>
                    <FlatList
                        data={DATA}
                        renderItem={({ item }) => <Item title={item.title} />}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>
            </SafeAreaProvider>
        </div>
    )
}

export default List