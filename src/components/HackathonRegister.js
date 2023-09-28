/* eslint-disable no-sequences */
import { useEffect } from "react";
import "@/styles/HackathonRegister.scss";

function HackathonRegister() {
  // useEffect(() => {
  //   window.location.replace("https://tally.so/r/3NlZYj");
  // }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";

    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  });

  /* eslint-disable no-unused-expressions */
  var d = document,
    w = "https://tally.so/widgets/embed.js",
    v = function () {
      "undefined" != typeof Tally
        ? // eslint-disable-next-line no-undef
          Tally.loadEmbeds()
        : d
            .querySelectorAll("iframe[data-tally-src]:not([src])")
            .forEach(function (e) {
              e.src = e.dataset.tallySrc;
            });
    };
  if ("undefined" != typeof Tally) v();
  else if (d.querySelector('script[src="' + w + '"]') == null) {
    var s = d.createElement("script");
    (s.src = w), (s.onload = v), (s.onerror = v), d.body.appendChild(s);
  }

  return (
    <div className="devhacks-register container">
      <iframe
        data-tally-src="https://tally.so/r/3NlZYj?transparentBackground=1"
        width="100%"
        height="100%"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title=".devHacks Interest Form"
      ></iframe>
    </div>
  );
}

export default HackathonRegister;
