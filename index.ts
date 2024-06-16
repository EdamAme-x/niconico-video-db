import { Hono } from "@hono/hono";
import "./cron/index.ts";
import { getVideos } from "./src/getVideos.ts";

const app = new Hono({
    strict: false
});

const kv = await Deno.openKv();

app.get("/", async (c) => {
    const videoListIter = await kv.list({ prefix: ["videos"] });
    const videoList = [];

    for await (const video of videoListIter) {
        videoList.push(video.value);
    }

    return c.text(`Saved: ${videoList.length} videos`)
})

Deno.serve({ port: 3000 }, app.fetch);
