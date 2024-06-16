import { getVideos } from "../src/getVideos.ts";

const kv = await Deno.openKv();

Deno.cron("Get Videos And Save To DB", "* */1 * * *", () => {
    console.log("[Cron] Get Videos And Save To DB");

    const counter = () => {
        let count = 0;
        return {
            inc: () => count++,
            get: () => count
        };
    }

    const count = counter();

    const intervalId = setInterval(async () => {
        const { ok, status, data } = await getVideos();

        if (ok) {
            for (const video of data) {
                await kv.set(["videos", video.id], video);
                count.inc();
                console.log("[Cron] Got Videos And Save To DB Success : " + video.id);
            }
        }else {
            console.log("[Cron] Got Videos And Save To DB Error : ", status);
        }
    }, 10000);

    setTimeout(() => {
        clearInterval(intervalId)
        console.log("[Cron] Got Videos And Save To DB Done : Saved " + count.get() + " Videos");
    }, 1000 * 60 * 10);
});
