import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PaymentsActions from '../../Actions/PaymentsActions';
import { StyleSheet, View, TouchableOpacity,Text } from "react-native";
import { CreditCardInput, LiteCreditCardInput } from 'react-native-input-credit-card';
import stripe from 'tipsi-stripe';
import Config from '../../Config/config';

stripe.setOptions({
  publishableKey:Config.stripepublishableKey
})

class Payments extends Component {
  constructor(props, context) {
    super(props, context);
    
    this._onChange = this._onChange.bind(this);
    this.sendPayment = this.sendPayment.bind(this);
   
  }
  state = { useLiteCreditCardInput: false };
  
  sendPaymentToStripe(amount,currency,token) {
    debugger;
    this.props.actions.makePayment(amount,currency,token.tokenId);
  }


  async sendPayment(formData) {
    debugger;
    const params = {
      // mandatory
      number: '4242424242424242',
      expMonth: 11,
      expYear: 22,
      cvc: '223',
      // optional
      name: 'Test User',
      currency: 'usd',
      addressLine1: '123 Test Street',
      addressLine2: 'Apt. 5',
      addressCity: 'Test City',
      addressState: 'Test State',
      addressCountry: 'Test Country',
      addressZip: '20852',
    }
    
      const token = await stripe.createTokenWithCard(params);
      if(token) {
        debugger;
        this.props.actions.savePaymentToken(token);
        this.sendPaymentToStripe(50,'usd',token)
      }
      console.log('token' + token);
  }

  _onChange = (formData) => {
    //!formData.valid?console.log(JSON.stringify(formData, null, "invalid ")):console.log(JSON.stringify(formData, null, "valid "))
    if(formData.valid) {
        this.props.actions.saveCurrentCC(formData);
        this.props.actions.showPaymentReadyButton(true)
    }
    // else{
    //   this.props.actions.resetCurrentCC(true);
    //   this.props.actions.showPaymentReadyButton(false)
    // }
     
   }

 //_onFocus = (field) => console.log("focusing", field);
  _setUseLiteCreditCardInput = (useLiteCreditCardInput) => this.setState({ useLiteCreditCardInput });

  render() {
    let ccFormDat = this.props.paymentsreducer.ccFormData;

    return (
      <View style={s.container}>
            <CreditCardInput
              autoFocus={false}
              requiresName
              requiresCVC
              equiresPostalCode
              cardScale={1}
              labelStyle={s.label}
              inputStyle={s.input}
              validColor={"black"}
              invalidColor={"red"}
              placeholderColor={"darkgray"}

              onFocus={this._onFocus}
              onChange={this._onChange} />
              {this.props.paymentsreducer.showButtonFlag?
              <TouchableOpacity onPress={(ccFormDat) => this.sendPayment(ccFormDat)} style={s.buttonContainer}>
                  <Text>Done</Text>
              </TouchableOpacity>:null}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    paymentsreducer: state.paymentsreducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object.assign({},
      bindActionCreators(PaymentsActions, dispatch))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Payments);

Payments.defaultProps = {
  iconSize: 20,
 };

const s = StyleSheet.create({
  switch: {
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  container: {
    backgroundColor: "#F5F5F5",
    marginTop: 60,
  },
  buttonContainer : {
    backgroundColor: "red",
    width:'100%'
  },
  label: {
    color: "black",
    fontSize: 12,
  },
  input: {
    fontSize: 16,
    color: "black",
  },
});

