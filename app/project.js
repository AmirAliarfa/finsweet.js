const project = async () => {
  let proj = "";
  try {
    let res = await axios.get("http://localhost:2000/project");
    proj = res.data.map((elem, index) => {
      if (index === 0) {
        return `<h1 class="text-[#282938] md:text-[48px] text-[24px] font-[600] leading-[64px]">${elem.text}</h1>`;
      } else {
        return `<div class="flex flex-row gap-2 items-center"><h1 class="text-[#282938] text-[16px] font-[500] leading-[28px]">${elem.text}</h1>
            <span><svg width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns=${elem.link}>
            <path id="Arrow 2" d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#2405F2"/>
            </svg>
            </span></div>`;
      }
    });
    document.querySelector(".project .projec").innerHTML = proj.join("");
  } catch (error) {
    console.log(error.massage);
  }
};
const projectimg=async()=>{
    let projimg=""
    try {
        let pro=await axios.get("http://localhost:2000/projectimg")
        projimg=pro.data.map((elem,index)=>{
            if (index===0) {
                return `<div class="md:w-2/3 w-full relative">
                <img src=${elem.src} alt=${elem.alt} class="w-full h-full">
                <div class="w-1/2 h-full absolute top-0 left-0 bg-gradient-to-r from-[#1C1E53]/[0.52] to-[#1C1E536B]/[0.52]"></div>`
            }else if(index===1){
                return`<div class="w-1/2 h-8/12 absolute bottom-0 left-0 flex flex-col md:gap-[20px] gap-[10px] items-center justify-center px-[40px] box-border">
                <h1 class="lg:text-[24px] md:text-[16px] text-white font-[600]">${elem.text}</h1>`
            }else if(index===2){
                return`<h1 class="lg:text-[16px] md:text-[8px] text-white/[0.8] font-[500]">${elem.text}</h1>`
            }else if(index===3){
                return `<h1 class="md:text-[16px] text-[10px] text-[#FCD980] font-[500] mb-[10px] flex flex-row gap-[20px] items-center">${elem.text} 
                <span><svg width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns=${elem.link}>
                <path id="Arrow 2" d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill=${elem.fill}/>
                </svg>
                </span></h1>
            </div>
          </div>`
            }else if (index===4) {
                return`<div class="w-1/3 md:flex flex-col gap-[25px] relative hidden">
                <div class="w-full h-1/2 absolute top-0 left-0 bg-gradient-to-r from-[#1C1E53]/[0.52] to-[#1C1E536B]/[0.52]"></div>
                <div class="w-full h-1/2 absolute top-0 left-0 flex flex-col lg:gap-[20px] gap-0 items-center px-[40px] box-border">
                  <h1 class="lg:text-[24px] md:-[14px] text-[8px] text-white font-[600]">${elem.text}</h1>`
            }else if(index===5){
                return`<h1 class="md:text-[16px] text-[10px] text-[#FCD980] font-[500] mb-[10px] flex flex-row gap-[20px] items-center">${elem.text}
                <span><svg xmlns=${elem.link} width="25" height="12" viewBox="0 0 25 12" fill="none">
                  <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#FCD980"/>
                </svg>
                </span></h1>
            </div>`
            }else if(index===6){
                return`<img src=${elem.src} alt=${elem.alt}>`
            }else{
                return`<img src=${elem.src} alt=${elem.alt}>
                </div>`
            }
        })
        document.querySelector(".project .proje").innerHTML=projimg.join("")
    } catch (error) {
        console.log(error.massage);
    }
}
export default {
    project,
    projectimg
};
