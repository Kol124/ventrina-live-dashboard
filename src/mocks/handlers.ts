import { rest } from "msw";

require("dotenv").config();

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const handlers = [
  rest.get(`${API_URL}&apiKey=${API_KEY}`, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          title:
            "Musk gets Twitter for $44 billion, to cheers and fears of 'free speech' plan - Reuters.com",
          image:
            "https://www.reuters.com/resizer/QN1_v-bmSiGV_yaXxjVCxS6inyQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/G3ZHSKXWXVN4RIIRETS37QFMZI.jpg",
          category: "Reuters",
          url: "https://www.reuters.com/technology/exclusive-twitter-set-accept-musks-best-final-offer-sources-2022-04-25/",
        },
      ])
    );
  }),
];
