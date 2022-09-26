export const API_KEY = ""

export const FOOD_API_BASE_URL = "https://api.spoonacular.com"

export const GET_SEARCH_INGREDIENTS = (queryText: string) => 
    `food/ingredients/search?number=20&query=${queryText}`

    export const GET_INGREDIENT_INFORMATION = (ingredientId: number) => 
    `food/ingredients/${ingredientId}/information?amount=1`