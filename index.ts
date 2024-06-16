import { Hono } from "@hono/hono";
import "./cron/index.ts";
import { getVideos } from "./src/getVideos.ts";

const app = new Hono({
    strict: false
});


Deno.serve({ port: 3000 }, app.fetch);
