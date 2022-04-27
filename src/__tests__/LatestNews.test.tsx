import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, screen, waitForElement } from "../test-utils";
import { LatestNews } from "../components/dashboard";

export const handlers = [
  rest.get("/api/latest-news", (req, res, ctx) => {
    return res(
      ctx.json({
        articles: [
          {
            title:
              "Musk gets Twitter for $44 billion, to cheers and fears of 'free speech' plan - Reuters.com",
            image:
              "https://www.reuters.com/resizer/QN1_v-bmSiGV_yaXxjVCxS6inyQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/G3ZHSKXWXVN4RIIRETS37QFMZI.jpg",
            category: "Reuters",
            url: "https://www.reuters.com/technology/exclusive-twitter-set-accept-musks-best-final-offer-sources-2022-04-25/",
          },
        ],
      })
    );
  }),
];

// const text =
//   "Musk gets Twitter for $44 billion, to cheers and fears of 'free speech' plan - Reuters.com";

const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

test("fetches & receives a news data", async () => {
  render(<LatestNews />);

  const cards = await waitForElement(() => screen.getAllByTestId("news-link"));
  expect(cards[0]).toHaveTextContent("Read");
});
