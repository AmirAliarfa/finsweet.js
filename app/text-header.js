const textheader = async () => {
  let text = "";
  try {
    let res = await axios.get("http://localhost:2000/text-header");
    text = res.data.map((elem, index) => {
      if (index === 0) {
        return `<h2 class="text-white md:text-[54px] text-[35px] leading-[74px] font-[600]">${elem.text}</h2>`;
      }
      if (index === 1) {
        return `<h3 class="text-white text-[16px] font-[400] leading-[28px]">${elem.text}</h3>`;
      }
      if (index === 2) {
        return `<div class="flex flex-row gap-[40px] mt-[24px] justify-center xl:justify-start">
                <button class="md:px-[56px] md:py-[16px] px-[25px] py-[8px] box-border md:text-[18px] text-[12px] text-black font-[600] bg-[#FCD980] rounded-[41px]">${elem.text}</button>
                <h1 class="text-white py-[16px] flex flex-row gap-[16px] box-border text-[16px] font-[500]">${elem.textt}<span class="py-[8px] box-border"><svg xmlns=${elem.link} width="25" height="12" viewBox="0 0 25 12" fill="none">
                    <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#F4F6FC"/>
                  </svg></span></h1>
              </div>`;
      }
    });
    document.querySelector(".textheader .textheaderr").innerHTML =
      text.join("");
  } catch (error) {
    console.log(error.massage);
  }
};
export default textheader;
