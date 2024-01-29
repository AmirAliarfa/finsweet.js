const loginimg = async () => {
  let logimg = "";
  try {
    let res = await axios.get("http://localhost:2000/loginimg");
    (logimg = res.data.map((elem) => {
      return `<img src=${elem.src} alt=${elem.alt} >`;
    })),
      (document.querySelector(".us .login .logimg").innerHTML =
        logimg.join(""));
  } catch (error) {
    console.log(error.massage);
  }
};
const login = async () => {
  let log = "";
  try {
    let res = await axios.get("http://localhost:2000/login");
    log = res.data.map((elem) => {
      return `<h1 class="lg:text-[32px] md:text-[25px] text-[18px] text-[#FFFFFF] font-[500] leading-[48px] mb-[16px]">${elem.textone}</h1>
        <h1 class="lg:text-[16px] md:text-[12px] text-[8px] text-[#F4F6FC] font-[500] leading-[28px] mb-[15px]">${elem.texttwo}</h1>
        <form action="post">
          <input type="text" placeholder=${elem.phname} name=""  id="" class="w-full bg-[inherit] border-[1px] border-[#FFFFFF0D] rounded-[8px] md:text-[16px] text-[12px] text-[#F4F6FC]/50 pl-[32px] py-[18px] box-border mb-[16px]">
          <input type="text" name="" id="" placeholder=${elem.phemail} class="w-full bg-[inherit] border-[1px] pl-[32px] py-[18px] box-border border-[#FFFFFF0D] rounded-[8px] md:text-[16px] text-[12px] text-[#F4F6FC]/50 mb-[16px]">
          <input type="text" name="" id="" placeholder=${elem.phfigma} class="w-full bg-[inherit] border-[1px] border-[#FFFFFF0D] md:text-[16px] text-[12px] rounded-[8px] pl-[32px] text-[#F4F6FC]/50  py-[18px] box-border mb-[29px]">
          <input type="submit" value=${elem.value} class="w-full bg-[#FCD980] rounded-[41px] text-[#1B1C2B] md:text-[16px] text-[12px] py-[15px] box-border mb-[18px]">
        </form>
        <h1 class="mx-auto text-center md:text-[16px] text-[12px] text-[#FFFFFF] flex gap-[15px] items-center">${elem.textthre}<span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="12" viewBox="0 0 25 12" fill="none">
          <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#F4F6FC"/>
        </svg></span></h1>`;
    });
    document.querySelector(".us .login .log").innerHTML=log.join("")
  } catch (error) {
    console.log(error.massage);
  }
};
export default {
  loginimg,
  login,
};
