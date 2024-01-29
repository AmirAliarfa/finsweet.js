const work = async () => {
  let wo = "";
  try {
    let res = await axios.get("http://localhost:2000/work");
    wo = res.data.map((elem, index) => {
      if (index === 0) {
        return `<h1 class="text-[#282938] text-[48px] font-[600] leading-[64px]">${elem.text}</h1>`;
      } else if (index === 1) {
        return `<h6 class="text-[#282938] text-[16px] font-[400] leading-[28px]">${elem.text}</h6>`;
      } else {
        return `<h6 class="text-[#2405F2] text-[18px] font-[500] leading-[32px] flex flex-row items-center justify-center lg:justify-start gap-5">${elem.text}<span><svg width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns=${elem.link}>
            <path id="Arrow 2" d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#2405F2"/>
            </svg>
            </span></h6>`;
      }
    });
    document.querySelector(".workjson .workjsonn").innerHTML = wo.join("");
  } catch (error) {
    console.log(error.massage);
  }
};
const work2 = async () => {
  let wo2 = "";
  try {
    let res = await axios.get("http://localhost:2000/work2");
    wo2 = res.data.map((elem, index) => {
      if (index === 0) {
        return `<div class="flex flex-row gap-[40px] justify-center">
            <div class="flex flex-col basis-2/6 relative">
          <svg xmlns=${elem.link} width="50" height="50" viewBox="0 0 50 50" fill="none">
            <mask id="mask0_706_688" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="50" height="50">
              <rect width="50" height="50" rx="8" fill="#5C5E84"/>
            </mask>
            <g mask="url(#mask0_706_688)">
              <rect x="-26" y="27" width="50" height="50" rx="8" fill="#FCD980"/>
              <rect x="8" y="-9" width="50" height="50" rx="8" fill="#5239FA"/>
            </g>
          </svg>
          <h1 class="text-[#282938] text-[32px] font-[500] leading-[48px]">${elem.name}</h1>`;
      } else if (index === 1) {
        return `<h5 class="text-[#282938]/75 text-[16px] font-[400] leading-[28px]">${elem.name}</h5>`;
      } else if (index === 2) {
        return `<h6 class="absolute text-white text-[18px] font-[500] top-[5px] left-[17px]">${elem.name}</h6></div>`;
      } else if (index === 3) {
        return `<div class="flex flex-col basis-2/6 relative">
        <svg xmlns=${elem.link} width="50" height="50" viewBox="0 0 50 50" fill="none">
          <mask id="mask0_706_688" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="50" height="50">
            <rect width="50" height="50" rx="8" fill="#5C5E84"/>
          </mask>
          <g mask="url(#mask0_706_688)">
            <rect x="-26" y="27" width="50" height="50" rx="8" fill="#FCD980"/>
            <rect x="8" y="-9" width="50" height="50" rx="8" fill="#5239FA"/>
          </g>
        </svg>
        <h1 class="text-[#282938] text-[32px] font-[500] leading-[48px]">${elem.name}</h1>`;
      } else if (index === 4) {
        return `<h5 class="text-[#282938]/75 text-[16px] font-[400] leading-[28px]">${elem.name}</h5>`;
      } else if(index===5) {
        return `<h6 class="absolute text-white text-[18px] font-[500] top-[5px] left-[17px]">${elem.name}</h6></div></div>`;
      }else if(index===6){
        return`<div class="workjsonnnn flex flex-row gap-[40px] justify-center">
        <div class="flex flex-col basis-2/6 relative">
        <svg xmlns=${elem.link} width="50" height="50" viewBox="0 0 50 50" fill="none">
          <mask id="mask0_706_688" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="50" height="50">
            <rect width="50" height="50" rx="8" fill="#5C5E84"/>
          </mask>
          <g mask="url(#mask0_706_688)">
            <rect x="-26" y="27" width="50" height="50" rx="8" fill="#FCD980"/>
            <rect x="8" y="-9" width="50" height="50" rx="8" fill="#5239FA"/>
          </g>
        </svg>
        <h1 class="text-[#282938] text-[32px] font-[500] leading-[48px]">${elem.name}</h1>`
      }else if(index===7){
        return`<h5 class="text-[#282938]/75 text-[16px] font-[400] leading-[28px]">${elem.name}</h5>`
      }else if(index===8){
        return`<h6 class="absolute text-white text-[18px] font-[500] top-[5px] left-[17px]">${elem.name}</h6>
        </div>`
      }else if(index===9){
        return`<div class="flex flex-col basis-2/6 relative">
        <svg xmlns=${elem.link} width="50" height="50" viewBox="0 0 50 50" fill="none">
          <mask id="mask0_706_688" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="50" height="50">
            <rect width="50" height="50" rx="8" fill="#5C5E84"/>
          </mask>
          <g mask="url(#mask0_706_688)">
            <rect x="-26" y="27" width="50" height="50" rx="8" fill="#FCD980"/>
            <rect x="8" y="-9" width="50" height="50" rx="8" fill="#5239FA"/>
          </g>
        </svg>
        <h1 class="text-[#282938] text-[32px] font-[500] leading-[48px]">${elem.name}</h1>`
      }else if(index===10){
        return`  <h5 class="text-[#282938]/75 text-[16px] font-[400] leading-[28px]">${elem.name}</h5>`
      }else{
        return`<h6 class="absolute text-white text-[18px] font-[500] top-[5px] left-[17px]">${elem.name}</h6>
        </div></div>`
      }
    });
    document.querySelector(".workjson .workjsonnn").innerHTML = wo2.join("");
  } catch (error) {
    console.log(error.massage);
  }
};
export default {
  work,
  work2,
};
