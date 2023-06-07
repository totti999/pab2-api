const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    namaPesawat: {
      type: String,
      required: true,
    },
    nomorPesawat: {
        type: String,
        required: true,
    },
    merekPesawat: {
        type: String,
        required: true,
    },
    fotoPesawat: {
        type: String,
        required: true,
      },
    created_date: {
      type: Date,
      default: Date.now,
    },
    modified_date: {
      type: Date,
      default: null,
    }
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Pesawat", postSchema, "pesawat");