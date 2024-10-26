const displayBusinesses = () => {
  let s = {
    ".business.florists": ".vendor.florists",
    ".business.djs": ".vendor.djs",
    ".business.transportation": ".vendor.transportation",
    ".business.musicians": ".vendor.musicians",
    ".business.photographers": ".vendor.photographers",
    ".business.videographers": ".vendor.videographers",
    ".business.catering": ".vendor.catering",
    ".business.venues": ".vendor.venues",
    ".business.hairdressers": ".vendor.hairdressers",
    ".business.clothing": ".vendor.clothing",
  };
  for (let [e, r] of Object.entries(s)) {
    let i = document.querySelectorAll(e);
    i.forEach(() => {
      document.querySelectorAll(".business").forEach((s) => {
        s.classList.add("visible"), s.classList.remove("hidden");
      }),
        document.querySelectorAll(r).forEach((s) => {
          s.classList.remove("visible"), s.classList.add("hidden");
        });
    });
  }
};
