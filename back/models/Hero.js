import { Schema, model } from 'mongoose';

const heroSchema = Schema({
  name: { type: String, required: true },
  // heroId: { type: Number ,  default: 0},
  heroId: { type: String },
  description: { type: String },
  element: { type: String },

}, { timestamps: true });

export default model('Hero', heroSchema);