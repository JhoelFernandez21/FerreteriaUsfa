import { Elysia } from "elysia";

const app = new Elysia()
  .get("/", () => "API Ferretería USFA funcionando")
  .listen(3000);

console.log("🟢 Backend corriendo en http://localhost:3000");
