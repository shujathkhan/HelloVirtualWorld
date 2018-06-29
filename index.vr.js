import React from "react";
import { AppRegistry, asset, Pano, Text, View, VrButton } from "react-vr";

export default class HelloVirtualWorld extends React.Component {
  constructor() {
    super();

    this.state = { message: "Hello State Message", showMessage: true };
    setTimeout(() => {
      this.setState({ message: "Hello Updated Message", showMessage: true });
    }, 5000);
  }

  componentDidMount() {
    this.setState({ message: "Mounted", showMessage: false });
  }
  handleClick() {
    this.setState({ message: "Updated Message" });
  }
  render() {
    const showMessage = this.state.showMessage;
    return (
      <View>
        <Pano
          source={{
            uri: [
              "../static_assets/blue.png",
              "../static_assets/blue.png",
              "../static_assets/blue.png",
              "../static_assets/blue.png",
              "../static_assets/blue.png",
              "../static_assets/blue.png"
            ]
          }}
        />
        {showMessage ? (
          <VrButton onClick={this.handleClick.bind(this)}>
            <Text
              style={{
                backgroundColor: "#777879",
                fontSize: 0.8,
                color: "white",
                fontWeight: "400",
                layoutOrigin: [0.5, 0.5],
                paddingLeft: 0.2,
                paddingRight: 0.2,
                textAlign: "center",
                textAlignVertical: "center",
                transform: [{ translate: [0, 0, -5] }]
              }}
            >
              {this.state.message}
            </Text>
          </VrButton>
        ) : (
          <Text />
        )}
      </View>
    );
  }
}

AppRegistry.registerComponent("HelloVirtualWorld", () => HelloVirtualWorld);

// class NestedMessage extends React.Component {
//   constructor() {
//     super();

//     this.state = { message: "Hello State Message" };
//     setTimeout(() => {
//       this.setState({ message: "Hello Updated Message" });
//     }, 5000);
//   }

//   render() {
//     return (
//       <Text
//         style={{
//           backgroundColor: "#777879",
//           fontSize: 0.8,
//           color: "white",
//           fontWeight: "400",
//           layoutOrigin: [0.5, 0.5],
//           paddingLeft: 0.2,
//           paddingRight: 0.2,
//           textAlign: "center",
//           textAlignVertical: "center",
//           transform: [
//             {
//               translate: [0, 0, -5]
//             }
//           ]
//         }}
//       >
//         {this.props.message}
//       </Text>
//     );
//   }
// }
