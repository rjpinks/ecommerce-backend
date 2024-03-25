// import models
const Product = require('./Product');
const OrderDetails = require('./OrderDetails');
const UserProfile = require("./UserProfile");
const UserPayment = require("./UserPayment");
const UserAddress = require("./UserAddress");
const PaymentDetails = require("./PaymentDetails");
const OrderItems = require("./OrderItems");


UserAddress.belongsTo(UserProfile, {
    foreignKey: "addressId"
});

UserPayment.belongsTo(UserProfile, {
    foreignKey: "userPaymentId"
});

UserProfile.belongsTo(OrderDetails, {
    foreignKey: "userProfileId"
});

PaymentDetails.belongsTo(OrderDetails, {
    foreignKey: "paymentDetailsId"
});

module.exports = {
    OrderDetails,
    OrderItems,
    PaymentDetails,
    Product,
    UserAddress,
    UserPayment,
    UserProfile
};