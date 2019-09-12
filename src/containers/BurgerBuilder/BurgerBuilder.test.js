import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { BurgerBuilder } from "./BurgerBuilder";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Burger from "../../components/Burger/Burger";
import Spinner from "../../components/UI/Spinner/Spinner";

configure({ adapter: new Adapter() });

describe("BurgerBuilder", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BurgerBuilder onInitIngredients={() => {}} />);
  });

  it("should render BuildControls, Burger and OrderSummary element when receiving ingredients", () => {
    wrapper.setProps({ ings: { salad: 0 } });
    expect(wrapper.find(BuildControls, OrderSummary, Burger)).toHaveLength(1);
  });

  it("should render Spinner element when an error occured", () => {
    wrapper.setProps({ error: false });
    expect(wrapper.find(Spinner)).toHaveLength(1);
  });
});
