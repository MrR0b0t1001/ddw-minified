const selectBusiness = () => {
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
    i.forEach((s) => {
      s.addEventListener("click", () => {
        document.querySelectorAll(".business").forEach((s) => {
          s.classList.add("hidden"), s.classList.remove("visible");
        }),
          document.querySelectorAll(r).forEach((s) => {
            s.classList.remove("hidden"), s.classList.add("visible");
          });
      });
    });
  }
};
