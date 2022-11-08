import { Button, Text, TextInput, View } from "react-native"
import Header from "../../components/Header/Header"
import { styles } from "./styles"
import DropDownPicker from 'react-native-dropdown-picker';
import { useContext, useState } from "react"
import { OrderContext } from '../../contexts/OrderContext'
import { DeliveryTypes } from "../../utils/DeliveryTypes";

export default function OrderService() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState(DeliveryTypes);
    const [orderAddress, setAddress] = useState('');

    const { addOrder, listAll } = useContext(OrderContext)

    const handleSubmit = () => {
        let price;
        let deliveryType;
        let currentList = listAll();
        let orderId;

        if (value == 'basic') {
            price = 45;
            deliveryType = 'Entrega Básica'
        } else if (value == 'plus') {
            price = 70
            deliveryType = 'Entrega Plus'
        }
        else {
            price = 90
            deliveryType = 'Entrega Premium'
        }

        const lastOrder = currentList.slice(-1)[0];
        if (!lastOrder) {
            orderId = 1
        } else {
            orderId = lastOrder.id + 1
        }

        const newOrder = {
            id: orderId,
            address: orderAddress,
            type: deliveryType,
            price: 'R$' + price.toString(),
            date: new Date().toDateString()
        }
        addOrder(newOrder)

    }
    return (
        <View style={styles.container}>
            <Header />
            <Text style={styles.title}>Nova solicitação</Text>
            <Text style={styles.inputLabel}>Endereço</Text>
            <TextInput onChangeText={setAddress} style={styles.textInput} value={orderAddress} placeholder="Endereço" />
            <Text style={styles.inputLabel}>Tipo de Entrega</Text>
            <DropDownPicker style={{ width: '80%', alignSelf: 'center', marginBottom: 20 }}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
            />
            <View style={styles.orderButton}>
                <Button title="Confirmar" onPress={handleSubmit} />
            </View>
        </View>
    )
}