import React from "react";
import avatar from "../assets/Avatar.svg";
import facebook from "../assets/facebook.svg";
import behance from "../assets/behance.svg";
import medium from "../assets/medium.svg";
import postImg from "../assets/postImg.svg";

const BlogPost = () => {
  return (
    <section id="blog-post" className="py-16">
      <div className="container mx-auto">
        {/* post image */}
        <img src={postImg} className="md:h-60vh w-full" alt="" />

        {/* rich text */}
        <div className="py-16 text-sm">
          A cookie is a small text file stored via your browser onto your
          computer or mobile device. Each cookie is unique to your browser and
          can be used by a website to improve the user experience, such as your
          user preferences or the contents of your basket.
          <br /> <br />
          The example below makes CSS remove underline from link by adding
          text-decoration:none;. We set text-decoration values for each of the
          link states with CSS: only active and hover states have underlines:
          <br /> <br />
          <h3 className="text-2xl font-[500]">June design conferences</h3>
          <br /> Happy to announce that we received a number of Gold, Silver and
          Bronze Clios for our work on Isle of Dogs, The Killing of a Sacred
          Deer, The Death of Stalin, and It. It was an exciting night, hosted by
          Carlton from Fresh Prince (yes he did the dance), and the team
          celebrated and danced all night. We are so proud of this honor and are
          looking forward to what’s next.
          <br /> <br />
          <h3 className="text-2xl font-[500]">Structured Media Insights</h3>
          <br />
          93% If the floating element is taller than the element containing it,
          then the floating element steps out of its container. You can fix this
          issue with the overflow property. Paired with an auto value, it
          stretches the container to be big enough for the floating element.
          <br />
          <br />
          <h2 className="text-2xl font-[500]">February design conferences</h2>
          <br />
          While you may not be jet-setting to meet with fellow designers, that
          doesn’t mean you won’t explore or form meaningful connections in 2021.
          Unlike last year’s on-the-fly iterations, the digital formats this
          year intentionally build community and increase inclusivity. For
          example, many conferences are integrating interactive
          elements—including live Q&A sessions and roundtables and chatrooms for
          mingling—as well as end-of-day extras, like post-conference Zoom yoga
          sessions. <br />
        </div>

        {/* user details */}
        <div className="flex gap-2 text-sm p-4 text-gray-500 items-start bg-white rounded">
          <img
            src={avatar}
            className="h-14 w-14 rounded-full bg-slate-500"
            alt=""
          />

          <div className="space-y-3">
            <h6>Michael Ogunlowo</h6>

            <div className="flex gap-2 items-center">
              <span>UI Designer.</span>
              <span className="font-[600]">Interractive Media</span>
            </div>

            <div className="flex gap-1 text-gray-700 items-center">
              <span> Digital content wrangler |</span>
              <span>UX enthusiast |</span>
              <span> Recovering educator</span>
              <span>| Football fan</span>
            </div>
          </div>

          <div className="space-y-3 ml-auto">
            <img src={facebook} alt="" />
            <img src={behance} alt="" />
            <img src={medium} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
