const blog = async () => {
  let bloog = "";
  try {
    let res = await axios.get("http://localhost:2000/blog");
    bloog = res.data.map((elem) => {
      return `<div class="flex flex-col lg:w-1/3 w-full lg:text-left text-center">
        <img src=${elem.src} alt=${elem.alt}>
        <h1 class="text-[16px] text-[#282938]/75 mt-[40px] mb-[16px]">${elem.textone}</h1>
        <h1 class="text-[24px] text-[#282938] mb-[16px]">${elem.texttwo}</h1>
      <h1 class="text-[16px] text-[#282938]/75 mb-[32px]">${elem.textthree}</h1>
      <div class="flex flex-row items-center gap-[14px] lg:justify-start justify-end"><span class="text-[16px] text-[#282938]">${elem.textredmore}</span><span><svg width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path id="Arrow 2" d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#2405F2"/>
      </svg></span></div>
      </div>`;
    });
    document.querySelector(".us .blog").innerHTML=bloog.join("")
  } catch (error) {
    console.log(error.massage);
  }
};
export default blog;
