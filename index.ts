import { Hono } from "@hono/hono";
import "./cron/index.ts";

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

app.get("/videos", async (c) => {
    const videoListIter = await kv.list({ prefix: ["videos"] });
    const videoList = [];

    for await (const video of videoListIter) {
        videoList.push(video.value);
    }

    return c.json(videoList)
})

Deno.serve({ port: 3000 }, app.fetch);
