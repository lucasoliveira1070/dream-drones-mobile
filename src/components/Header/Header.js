import { Image } from 'react-native'
import { styles } from "./styles"
export default function Header() {
    return (
        <Image
            style={styles.logo}
            source={require('../../../assets/dream_drones_logo.png')}
        />
    )
}