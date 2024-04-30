const mongoose = require('mongoose');

const webhookPayloadSchema = new mongoose.Schema({
    payload_id: {
        type: String,
        required: true
    },
    line_items: [{
        id: { type: Number, required: true },
        properties: { type: Object, default: {} },
        quantity: { type: Number, required: true },
        variant_id: { type: Number, required: true },
        key: { type: String, required: true },
        discounted_price: { type: String, required: true },
        discounts: [{ type: Object, default: [] }],
        gift_card: { type: Boolean, default: false },
        grams: { type: Number, required: true },
        line_price: { type: String, required: true },
        original_line_price: { type: String, required: true },
        original_price: { type: String, required: true },
        price: { type: String, required: true },
        product_id: { type: Number, required: true },
        sku: { type: String, required: true },
        taxable: { type: Boolean, required: true },
        title: { type: String, required: true },
        total_discount: { type: String, required: true },
        vendor: { type: String, required: true },
        discounted_price_set: {
            shop_money: {
                amount: { type: String, required: true },
                currency_code: { type: String, required: true }
            },
            presentment_money: {
                amount: { type: String, required: true },
                currency_code: { type: String, required: true }
            }
        },
        line_price_set: {
            shop_money: {
                amount: { type: String, required: true },
                currency_code: { type: String, required: true }
            },
            presentment_money: {
                amount: { type: String, required: true },
                currency_code: { type: String, required: true }
            }
        },
        original_line_price_set: {
            shop_money: {
                amount: { type: String, required: true },
                currency_code: { type: String, required: true }
            },
            presentment_money: {
                amount: { type: String, required: true },
                currency_code: { type: String, required: true }
            }
        },
        price_set: {
            shop_money: {
                amount: { type: String, required: true },
                currency_code: { type: String, required: true }
            },
            presentment_money: {
                amount: { type: String, required: true },
                currency_code: { type: String, required: true }
            }
        },
        total_discount_set: {
            shop_money: {
                amount: { type: String, required: true },
                currency_code: { type: String, required: true }
            },
            presentment_money: {
                amount: { type: String, required: true },
                currency_code: { type: String, required: true }
            }
        }
    }],
    note: { type: String, default: null },
    updated_at: { type: Date, default: Date.now },
    created_at: { type: Date, default: Date.now }
});

const WebhookPayload = mongoose.model('WebhookPayload', webhookPayloadSchema);

module.exports = WebhookPayload;
