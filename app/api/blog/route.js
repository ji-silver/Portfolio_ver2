import axios from "axios";
import { parseString } from "xml2js";

export const GET = async () => {
  try {
    const url = "https://jisilver-k.tistory.com/rss";
    const response = await axios.get(url);
    const xmlData = response.data;
    const rssData = await new Promise((resolve, reject) => {
      parseString(xmlData, (err, result) => {
        if (err) {
          console.error(err);
          reject({ error: "XML을 파싱하지 못했습니다." });
        } else {
          const rssObject = result.rss.channel[0].item;
          resolve(Array.isArray(rssObject) ? rssObject : [rssObject]);
        }
      });
    });
    return new Response(JSON.stringify(rssData), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "데이터를 가져오지 못했습니다." }),
      {
        headers: { "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
};
