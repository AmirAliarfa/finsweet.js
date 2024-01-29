const abouttext = async () => {
  let abouttex = "";
  try {
    let res = await axios.get("http://localhost:2000/aboutustext");
    abouttex = res.data.map((elem, index) => {
      if (index === 0) {
        return `<h1 class="md:text-[40px] text-[25px] font-[600] leading-[56px] text-[#282938]">${elem.text}</h1>`;
      } else {
        return `<h1 class="md:text-[20px] text-[14px] font-[400] leading-[28px] text-[#282938]/75">${elem.text}</h1>`;
      }
    });
    document.querySelector(".aboutusjs .aboutusjss").innerHTML =
      abouttex.join("");
  } catch (error) {
    console.log(error.massage);
  }
};
const aboutleft = async () => {
  let abotusleft = "";
  try {
    let res = await axios.get("http://localhost:2000/aboutus");
    abotusleft = res.data.map((elem) => {
      return `
        <h1 class="md:text-[34px] text-[20px] font-[500] leading-[48px] text-[#282938]">${elem.text}</h1>
        <div class="flex flex-row justify-between">
          <div class="flex flex-row gap-[10px]">
            <img src=${elem.src} alt="" class="rounded-full">
            <div class="flex flex-col">
              <h1 class="text-[20px] font-[500] leading-[32px] text-[#282938]">${elem.textone}</h1>
              <h1 class="text-[14px] font-[500] leading-[28px] text-[#282938]">${elem.texttwo}</h1>
            </div>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="108" height="48" viewBox="0 0 108 48" fill="none">
            <ellipse cx="83.0997" cy="24" rx="24.0997" ry="24" fill="#5239FA"/>
            <path d="M77.4141 35L76 31.7805L85.0305 24.0894L76 16.2195L77.4141 13L89 23.374V25.1626L77.4141 35Z" fill="white"/>
            <ellipse cx="24.0995" cy="24" rx="24.0997" ry="24" transform="rotate(-180 24.0995 24)" fill="white"/>
            <path opacity="0.6" d="M28.5859 13L30 16.2195L20.9695 23.9106L30 31.7805L28.5859 35L17 24.626L17 22.8374L28.5859 13Z" fill="#282938"/>
          </svg>
        </div>
        </div>`;
    });
    document.querySelector(".aboutusjs .aboutusjsss").innerHTML =
      abotusleft.join("");
  } catch (error) {
    console.log(error.massage);
  }
};
export default {
  abouttext,
  aboutleft,
};
