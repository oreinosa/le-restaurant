"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1.Schema({
    createdAt: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        default: "",
        required: true
    },
    username: {
        type: String,
        default: "",
        required: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        default: "",
        unique: true,
        required: true
    },
    password: {
        type: String,
        default: "",
        required: true
    },
    role: {
        type: String,
        default: "Customer"
    }
});
exports.User = mongoose_1.model("User", UserSchema, "users");
//# sourceMappingURL=user.model.js.map