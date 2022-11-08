import { useContext, useState } from "react"
import { Text, View, Image, SafeAreaView, FlatList, Button } from "react-native"
import { styles } from "./styles"
import { OrderContext } from '../../contexts/OrderContext'
import OrderItem from '../../components/OrderItem/OrderItem'
import { useFocusEffect, useNavigation } from "@react-navigation/native"
import Header from "../../components/Header/Header"

export default function HomeScreen() {
    const { listAll } = useContext(OrderContext)
    const currentList = listAll()
    const [listOfOrders, setListOfOrders] = useState([]);


    useFocusEffect(() => {
        setListOfOrders(currentList);
        console.log(listOfOrders)
    })

    return (
        <View style={styles.container}>
            <Header />
            <Text style={styles.title}>Seja Bem Vindo </Text>
            {listOfOrders.length == 0 &&
                <View style={styles.conditionalView}>
                    <Text style={styles.conditionalTitle}>Nenhuma solicitação encontrada</Text>
                </View>
            }
            <SafeAreaView style={styles.listOrders}>
                <FlatList
                    key={'*'}
                    vertical
                    data={listOfOrders}
                    renderItem={({ item }) => <OrderItem order={item} />}
                    keyExtractor={(item) => item.id} />
            </SafeAreaView>
        </View>
    )
}