import reducer from "./auth";
import * as actionTypes from "../actions/actionTypes";

describe("auth reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      userId: null,
      error: null,
      loading: null,
      authRedirectPath: "/"
    });
  });

  it("should store the token upon login", () => {
    expect(
      reducer(
        {
          token: null,
          userId: null,
          error: null,
          loading: false,
          authRedirectPath: "/"
        },
        {
          type: actionTypes.AUTH_SUCCESS,
          idToken: "some-token",
          userId: "some-user-id"
        }
      )
    ).toEqual({
      token: "some-token",
      userId: "some-user-id",
      error: null,
      loading: false,
      authRedirectPath: "/"
    });
  });

  it("should remove token and userId upon logout ", () => {
    expect(
      reducer(
        {
          token: "some-token",
          userId: "some-user-id",
          error: null,
          loading: false,
          authRedirectPath: "/"
        },
        {
          type: actionTypes.AUTH_LOGOUT,
          idToken: null,
          userId: null
        }
      )
    ).toEqual({
      token: null,
      userId: null,
      error: null,
      loading: false,
      authRedirectPath: "/"
    });
  });

  it("should return error", () => {
    expect(
      reducer(
        {
          token: null,
          userId: null,
          error: false,
          loading: true,
          authRedirectPath: "/"
        },
        {
          type: actionTypes.AUTH_FAIL,
          error: true,
          loading: false
        }
      )
    ).toEqual({
      token: null,
      userId: null,
      error: true,
      loading: false,
      authRedirectPath: "/"
    });
  });

  it("should return loading true", () => {
    expect(
      reducer(
        {
          token: null,
          userId: null,
          error: null,
          loading: false,
          authRedirectPath: "/"
        },
        {
          type: actionTypes.AUTH_START,
          error: null,
          loading: true
        }
      )
    ).toEqual({
      token: null,
      userId: null,
      error: null,
      loading: true,
      authRedirectPath: "/"
    });
  });
});
