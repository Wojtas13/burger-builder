import reducer from "./burgerBuilder";
import * as actionTypes from "../actions/actionTypes";

describe("burgerBuilder reducer", () => {
  const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
  };
  it("should add ingredient to ingredients", () => {
    expect(
      reducer(
        {
          ingredients: {
            salad: 0
          },
          totalPrice: 4,
          error: false,
          building: false
        },
        {
          type: actionTypes.ADD_INGREDIENT,
          ingredientName: "salad"
        },
        {
          totalPrice: 4 + INGREDIENT_PRICES.salad,
          building: true
        }
      )
    ).toEqual({
      ingredients: {
        salad: 1
      },
      totalPrice: 4.5,
      error: false,
      building: true
    });
  });

  it("should remove ingredient from ingredients", () => {
    expect(
      reducer(
        {
          ingredients: {
            salad: 1,
            cheese: 3
          },
          totalPrice: 5.7,
          error: false,
          building: false
        },
        {
          type: actionTypes.REMOVE_INGREDIENT,
          ingredientName: "cheese"
        },
        {
          totalPrice: 5.7 - INGREDIENT_PRICES.cheese,
          building: true
        }
      )
    ).toEqual({
      ingredients: {
        salad: 1,
        cheese: 2
      },
      totalPrice: 5.3,
      error: false,
      building: true
    });
  });

  it("should set ingredients", () => {
    expect(
      reducer(
        {
          ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 1,
            meat: 1
          },
          totalPrice: 6.9,
          error: false,
          building: true
        },
        {
          type: actionTypes.SET_INGREDIENTS,
          ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
          }
        },
        {
          totalPrice: 4,
          error: false,
          building: false
        }
      )
    ).toEqual({
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      },
      totalPrice: 4,
      error: false,
      building: false
    });
  });

  it("should return true after fetch fail", () => {
    expect(
      reducer(
        {
          ingredients: null,
          totalPrice: 4,
          error: false,
          building: false
        },
        {
          type: actionTypes.FETCH_INGREDIENT_FAILED,
          error: true
        }
      )
    ).toEqual({
      ingredients: null,
      totalPrice: 4,
      error: true,
      building: false
    });
  });
});
