import { cn } from "@/lib/utils";
import { Marquee } from "../magicui/marquee";

const reviews = [
  {
    username: "@Das_F1sHy312",
    body: "I was sick with influenza for ~2 weeks now. After briefly writing with this AI, I have already been recommended medication that has restored my health very quickly. Very good application.",
    img: "https://avatar.vercel.sh/jack",
    link: "",
  },
  {
    username: "@LaliSchmidt",
    body: "I've had a cold for some time now and can't get rid of the annoying infection. Various doctors couldn't really help me, which is why I looked for another solution. The app helped me to be more active in life again. I've gotten a lot of new ideas on how I can build up my immune system and I'm slowly feeling much better again. Simply wow, what is possible with this app! Thanks for that :)",
    img: "https://avatar.vercel.sh/jill",
    link: "",
  },
  {
    username: "@JAndrea",
    body: "Quick help with all health questions. Replaces the tedious search in books.",
    img: "https://avatar.vercel.sh/john",
    link: "",
  },
  {
    username: "@svenmeier",
    body: "I was sick for a long time (3 weeks) and the app helped me to improve my health enormously in 4 days. I have no idea how an AI can do that, but it works! Keep it up!!",
    img: "https://avatar.vercel.sh/jane",
    link: "",
  },
  {
    username: "@hanneloreneumann",
    body: "I caught an infection and the app helped me get my health back to the highest level in just a few days! I was able to get a diagnosis and find out that my lifestyle was simply very bad before. I'm now trying to move away from the unhealthy stuff! Highly recommended, I look forward to further updates! 💕",
    img: "https://avatar.vercel.sh/james",
    link: "",
  },
  {
    username: "@hanswillinehrig",
    body: "Extremely helpful for all kinds of health questions with a variety of approaches and useful tips. Also attractive design and very easy to use.",
    img: "https://avatar.vercel.sh/james",
    link: "",
  },
  {
    username: "@georgethompson",
    body: "This app helped me alleviate my health problems. Helpful tips and valuable information on the subject of health and well-being. 5 out of 5 stars for this!",
    img: "https://avatar.vercel.sh/james",
    link: "",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, username, body }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full"
          width={32}
          height={32}
          alt="profile"
          src={img}
        />
        <div className="flex flex-col">
          <p className="text-sm font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
    </div>
  );
}
