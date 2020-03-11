import { App } from "./app.express";
(async () => {
    const app = new App(3000);
    await app.listen();

})();
