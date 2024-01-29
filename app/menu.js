const menu = async () => {
  let menu = "";
  try {
    let res = await axios.get("http://localhost:2000/menu");
    menu = res.data.map((elem, index) => {
      if (elem.zirmenu.length > 0) {
        return `<li class="z">
              <a href=${elem.link}">${elem.name}
                <div class="w-full bsolute hidden flex-col z-10 bg-white text-black">
                ${elem.zirmenu
                  .map((ress) => {
                    return `<a class="z-10" href=${ress.link}>
                    ${ress.name}
                  </a>;`;
                  })
                  .join("")}
                </div>
              </a>
            </li>`;
      } else {
        if (index === 6) {
          return `<li><a class="min-[850px]:contactus md:contactus2" href="${elem.link}">${elem.name}</a></li>`;
        } else {
          return `<li><a href="${elem.link}">${elem.name}</a></li>`;
        }
      }
    });
    document.querySelector("nav .menujs ul").innerHTML = menu.join("");
  } catch (error) {
    console.log(error.message);
  }
};
export default menu;
