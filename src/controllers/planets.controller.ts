import Planet, { IPlanet } from '../models/planet.model';

interface CreatePlanetInput {
  name: IPlanet['name'];
  climate: IPlanet['climate'];
  movie_screenings: IPlanet['movie_screenings'];
  terrain: IPlanet['terrain'];
}

async function CreatePlanet({ name, climate, movie_screenings, terrain }: CreatePlanetInput): Promise<IPlanet> {
  return await Planet.create({
    name,
    climate,
    movie_screenings,
    terrain
  })
    .then((data: IPlanet) => {
      return data;
    })
    .catch((error: Error) => {
      throw error;
    });
}

async function ListPlanet() {
  return await Planet.find();
  // .then((data) => {
  //   return ({data});
  // })
  // .catch((error: Error) => {
  //   throw error;
  // });
};


export default {
  CreatePlanet,
  ListPlanet
};
