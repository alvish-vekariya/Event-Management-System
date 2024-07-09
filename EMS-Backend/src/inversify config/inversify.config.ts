import { Container } from "inversify";
import { eventService, registrationService, userService } from "../services";
import { loginMiddleware } from "../middlewares";


const container = new Container();

container.bind<userService>(userService).toSelf();
container.bind<registrationService>(registrationService).toSelf();
container.bind<eventService>(eventService).toSelf();
container.bind<loginMiddleware>(loginMiddleware).toSelf();

export default container;