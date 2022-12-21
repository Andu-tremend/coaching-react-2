import { ApiService } from "../API.service";
import RestaurantsRepository from "Classes/Repositories/restaurants.repository";
import { Server } from "Classes/Enums/server.enums";

export default class RestaurantService extends ApiService{
  constructor() {
    super(new RestaurantsRepository(Server.url))
  }

}