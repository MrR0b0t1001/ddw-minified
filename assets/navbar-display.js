const selectNavbar = () => {
  let e = {
    ".nav-item.florists": ".vendor.florists",
    ".nav-item.photographers": ".vendor.photographers",
    ".nav-item.videographers": ".vendor.videographers",
    ".nav-item.djs": ".vendor.djs",
    ".nav-item.transportation": ".vendor.transportation",
    ".nav-item.musicians": ".vendor.musicians",
    ".nav-item.catering": ".vendor.catering",
    ".nav-item.venues": ".vendor.venues",
    ".nav-item.hairdressers": ".vendor.hairdressers",
    ".nav-item.clothing": ".vendor.clothing",
  };
  for (let [r, s] of Object.entries(e)) {
    let i = document.querySelectorAll(r);
    i.forEach((e) => {
      e.addEventListener("click", () => {
        document.querySelectorAll(".business").forEach((e) => {
          e.classList.add("hidden"), e.classList.remove("visible");
        }),
          document.querySelectorAll(".vendor").forEach((e) => {
            e.classList.remove("visible"), e.classList.add("hidden");
          }),
          document.querySelectorAll(s).forEach((e) => {
            e.classList.remove("hidden"), e.classList.add("visible");
          });
      });
    });
  }
};
