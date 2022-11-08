import { View, Text, TouchableOpacity } from "react-native";
import { useContext, useState } from "react";
import { styles } from "./styles";
import Dialog from "react-native-dialog";
import { OrderContext } from "../../contexts/OrderContext";

export default function OrderItem({ order }) {
    const [visible, setVisible] = useState(false);
    const { removeOrder } = useContext(OrderContext)

    const showDialog = () => {
        setVisible(true);
    };

    const handleOk = () => {
        removeOrder(order)
        setVisible(false);
    };

    const handleDelete = () => {
        setVisible(false);
    };

    return (
        <TouchableOpacity style={styles.itemView} onPress={showDialog}>
            <View>
                <Dialog.Container visible={visible}>
                    <Dialog.Title>Cancelar solicitação</Dialog.Title>
                    <Dialog.Description>
                        Deseja cancelar está solicitação?
                    </Dialog.Description>
                    <Dialog.Button label="OK" onPress={handleOk} />
                    <Dialog.Button label="Cancelar" onPress={handleDelete} />
                </Dialog.Container>
            </View>
            <Text style={styles.title}>Pedido: {order.id}</Text>
            <Text style={styles.title}>{order.address}</Text>
            <Text style={styles.title}>Tipo: {order.type}</Text>
            <Text style={styles.title}>Preço: {order.price}</Text>
            <Text style={styles.title}>Data da solicitação: {order.date}</Text>
        </TouchableOpacity>
    )
}