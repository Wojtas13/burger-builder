import reducer from "./order";
import * as actionTypes from "../actions/actionTypes";

describe("order reducer", () => {
  it("should store order after purchase", () => {
    expect(
      reducer(
        {
          orders: [],
          loading: false,
          purchased: false
        },
        {
          type: actionTypes.PURCHASE_BURGER_SUCCESS,
          orderId: "some-order-id",
          orderData: {}
        },
        {
          loading: false,
          purchased: true
        }
      )
    ).toEqual({
      orders: [{ id: "some-order-id" }],
      loading: false,
      purchased: true
    });
  });

  it("should return loading true after purchase start", () => {
    expect(
      reducer(
        {
          loading: false
        },
        {
          type: actionTypes.PURCHASE_BURGER_START
        }
      )
    ).toBeTruthy();
  });

  it("should return loading true after fetch order start", () => {
    expect(
      reducer(
        {
          loading: false
        },
        {
          type: actionTypes.FETCH_ORDERS_START
        }
      )
    ).toBeTruthy();
  });

  it("should store orders and return loading false after fetch order success", () => {
    expect(
      reducer(
        {
          orders: [],
          loading: false
        },
        {
          type: actionTypes.FETCH_ORDERS_SUCCESS,
          orders: [{}]
        }
      )
    ).toEqual({
      orders: [{}],
      loading: false
    });
  });

  it("should return loading true after fetch order fails", () => {
    expect(
      reducer(
        {
          loading: true
        },
        {
          type: actionTypes.FETCH_ORDERS_FAIL,
          error: "some-error"
        }
      )
    ).toBeTruthy();
  });
});
