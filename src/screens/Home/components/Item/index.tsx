import { Pressable, Text, View } from "react-native";
import { IngredientSummaryItemProps } from "./interface";
import Styles from "./styles";

const IngredientSummaryItem = ({ ingredient, onItemSelected }: IngredientSummaryItemProps) => {

    return (
        <Pressable style={Styles.container} onPress={() => onItemSelected(ingredient.id)}>
           <Text style={Styles.text}>{ingredient.name}</Text>
        </Pressable>
    )
}

export default IngredientSummaryItem
