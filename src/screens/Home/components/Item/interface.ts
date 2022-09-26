import { IngredientSummaryDto } from "../../../../domain/dto";

export interface IngredientSummaryItemProps {
    ingredient: IngredientSummaryDto;
    onItemSelected: (ingredientId: number) => void;
}
