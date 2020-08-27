import { TRoutesInput } from '../types/routes';
import { Request, Response } from 'express';
import PlanetController from '../controllers/planets.controller';

export default ({ app }: TRoutesInput) => {
  app.post('/api/planets', async (request: Request, response: Response) => {
    const planet = await PlanetController.CreatePlanet({
      name: request.body.name,
      climate: request.body.climate,
      terrain: request.body.terrain,
      movie_screenings: request.body.movie_screenings
    });

    return response.send(planet);
  });

  app.get('/api/planets', async ( request: Request, response: Response) => {
    // const name= request.body.name;
    // console.log(name);
    const planet = await PlanetController.ListPlanet();
    return response.send(planet);
  })
};
