const mongoose = require('mongoose');

const cateogorySchema = new mongoose.Schema(
    {
        name: {
            type: string,
            trim: true,
            required: true,
            maxlength: 32,
            unique: true
        }
        },
        { timestamps: true }
);

module.exports = mongoose.model("Category", cateogorySchema);