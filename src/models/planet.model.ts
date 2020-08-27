import mongoose, { Schema, Document } from 'mongoose';


export interface IPlanet extends Document {
  name:string;
  climate: string;
  movie_screenings: string;
  terrain: string;
}

const PlanetSchema: Schema = new Schema({
  name: { type: String, required: true },
  climate: { type: String, required: true },
  terrain: { type: String, required: true },
  movie_screenings: { type: Number, required: false },
});

export default mongoose.model<IPlanet>('Planet', PlanetSchema);