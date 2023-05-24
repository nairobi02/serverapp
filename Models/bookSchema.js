"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookModel = exports.reviewModel = void 0;
var mongoose_1 = require("mongoose");
var reviewSchema = new mongoose_1.default.Schema({
    book_id: {
        type: mongoose_1.default.SchemaTypes.ObjectId,
        ref: "books",
        required: true,
    },
    name: { type: String, required: true },
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
    avatar_link: String,
});
var bookSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
    imageURL: { type: String, required: true },
    genre: { type: [String], required: true },
    summary: { type: String, required: true },
    rating: { type: Number },
    related: { type: [mongoose_1.default.SchemaTypes.ObjectId], ref: "books" },
    reviews: { type: [mongoose_1.default.SchemaTypes.ObjectId], ref: "reviews" },
    createdOn: {
        type: Date,
        immutable: true,
        default: function () { return Date.now(); },
    },
});
var reviewModel = mongoose_1.default.model("reviews", reviewSchema);
exports.reviewModel = reviewModel;
var bookModel = mongoose_1.default.model("books", bookSchema);
exports.bookModel = bookModel;
