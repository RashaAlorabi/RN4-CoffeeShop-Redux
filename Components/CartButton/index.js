import React, { Component } from "react";
import { Icon, View, Text } from "native-base";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
class CartButton extends Component {
  render() {
    let itemQuantity = 0;
    this.props.items.forEach(item => (itemQuantity += item.quantity));
    return (
      <View>
        <Text> {itemQuantity}</Text>
        <Icon
          onPress={() => this.props.navigation.navigate("CoffeeCart")}
          name="shoppingcart"
          type="AntDesign"
        />
      </View>
    );
  }
}
const mapStateToProps = state => ({
  items: state.cartReducer.items
});
export default withNavigation(connect(mapStateToProps)(CartButton));
