const {asClass, createContainer, asFunction, asValue} = require('awilix');

const Startup = require("./startup");
const Server = require("./server");
const {UserController} = require("../api/controllers/");
const Routes = require("../api/routes");
const container = createContainer();
const config = require("../config/enviroments");
const UserRoutes = require("../api/routes/user.routes");

container
    .register({
        app: asClass(Startup).scoped(),
        server: asClass(Server).scoped(),
    })
    .register({
        UserController: asClass(UserController).singleton()
    })
    .register({
        router: asFunction(Routes).singleton()
    })
    .register({
        config: asValue(config)
    })
    .register({
        UserRoutes: asFunction(UserRoutes).singleton()
    })

module.exports = container;