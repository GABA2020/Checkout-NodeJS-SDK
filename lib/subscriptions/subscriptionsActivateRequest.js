'use strict';

const querystring = require('querystring'); // eslint-disable-line no-unused-vars
/**
 Creates an subscription.
 **/

class SubscriptionsActivateRequest {

  constructor(subscriptionId) {
    this.path = '/v1/billing/subscriptions/{subscriptionId}/activate';
    this.path = this.path.replace('{subscriptionId}', querystring.escape(subscriptionId));
    this.verb = 'POST';
    this.body = null;
    this.headers = {
      'Content-Type': 'application/json'
    };
  }



  payPalPartnerAttributionId(payPalPartnerAttributionId) {
    this.headers['PayPal-Partner-Attribution-Id'] = payPalPartnerAttributionId;
    return this;
  }

  prefer(prefer) {
    this.headers['Prefer'] = prefer;
    return this;
  }

  requestBody(order) {
    this.body = order;
    return this;
  }
}

module.exports = {SubscriptionsActivateRequest: SubscriptionsActivateRequest};
