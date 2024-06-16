import UserAgent from "../objects/useragents.json" with { type: "json" };

interface ReturnValue {
    ok: boolean,
    status: string,
    data: Video[]
}

export async function getVideos(): Promise<ReturnValue> {
    const res = await fetch("https://nvapi.nicovideo.jp/v1/tmp/videos?count=10&_frontendId=6&_frontendVersion=0.0.0", {
        "headers": {
            "accept": "*/*",
            "accept-language": "ja-JP,ja;q=0.9,ar-SS;q=0.8,ar;q=0.7,en-US;q=0.6,en;q=0.5,ko-KR;q=0.4,ko;q=0.3",
            "priority": "u=1, i",
            "sec-ch-ua": '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"Windows"',
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site",
            "user-agent": UserAgent[Math.floor(Math.random() * UserAgent.length)],
            "cookie":
                `nicosid=${Math.floor(Date.now() / 1000).toString()}.122949943; _gid=GA1.2.600530200.1718460923; _gcl_au=1.1.2977085.1718460937; _yjsu_yjad=1718460936.fb6760c9-8f4e-47cf-80f6-ad0b03ffe2b5; _ga_5LM4HED1NJ=GS1.1.1718460931.1.1.1718460940.51.0.0; _ga_41PQHHFEEG=GS1.1.1718460932.1.1.1718460941.51.0.0; _ga_VRHGWZH0MW=GS1.2.1718460940.1.0.1718460942.58.0.0; _ga=GA1.1.376219325.1718460932; domand_bid=a9a82763217279876a91a4e84d33c4624f610c4b5e22950cbfab329006fe5fc1; _ga_T84DV7TEKJ=GS1.1.1718520937.2.0.1718520937.0.0.1`,
            "Referer": "https://www.nicovideo.jp/",
            "Referrer-Policy": "strict-origin-when-cross-origin",
        },
        "body": null,
        "method": "GET",
    });

    if (!res.ok) {
        return {
            ok: res.ok,
            status: res.statusText,
            data: []
        }
    }

    const data = (await res.json()).data.videos;

    return {
        ok: res.ok,
        status: res.statusText,
        data
    }
}
