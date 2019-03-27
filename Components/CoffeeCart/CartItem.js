import React, { Component } from "react";
import { removeItemFromCart } from "../../store/actions/CartActions";
import { connect } from "react-redux";
// NativeBase Components
import { Text, Left, Body, Right, Button, ListItem, Icon } from "native-base";

class CartItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <ListItem style={{ borderBottomWidth: 0 }}>
        <Left>
          <Text style={{ color: "white", marginLeft: 16 }}> {item.drink} </Text>
          <Text note style={{ marginLeft: 16 }}>
            {/* {item.option} */}
          </Text>
        </Left>
        <Body>
          <Text style={{ color: "white" }}>{item.quantity}</Text>
        </Body>
        <Right>
          <Button transparent>
            <Icon
              name="trash"
              style={{ color: "white", fontSize: 21 }}
              onPress={() => this.props.removeItemFromCart(item)}
            />
          </Button>
        </Right>
      </ListItem>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  removeItemFromCart: item => dispatch(removeItemFromCart(item))
});
export default connect(
  null,
  mapDispatchToProps
)(CartItem);
