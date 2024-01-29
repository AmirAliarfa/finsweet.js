const usleft = async () => {
  let usleftt = "";
  try {
    let res = await axios.get("http://localhost:2000/ustextleft");
    usleftt = res.data.map((elem) => {
      return `<h1 class="text-[42px] text-[#282938] font-[600] leading-[56px]">${elem.text}</h1>
            <h1 class="text-[18px] text-[#2405F2] font-[500] leading-[32px]">${elem.texts}</h1>`;
    });
    document.querySelector(".us .uss .usss").innerHTML = usleftt.join("");
  } catch (error) {
    console.log(error.message);
  }
};
const usright = async () => {
  let ussumery = "";
  try {
    let res = await axios.get("http://localhost:2000/ustextright");
    ussumery = res.data.map((elem) => {
      return `<div class="flex flex-row mb-[32px] mt-[32px]">
      <span class="text-[#2405F2] text-[24px] font-[500] leading-[36px] w-1/12">02</span> 
      <details class="w-11/12">
        <summary class="text-[24px] text-[#282938] font-[500] leading-[36px] flex flex-row justify-between">${elem.textsum}<span class="ml-auto">&times;</span></summary>
        <p class="text-[18px] text-[#282938]/75 font-[500] leading-[32px]">${elem.textp}</p>
      </details>
    </div>
    <hr class="w-full h-[2px] bg-[#ECECF1]"/>`;
    });
    document.querySelector(".us .uss .ussumery").innerHTML = ussumery.join("");
  } catch (error) {
    console.log(error.massage);
  }
};
export default {
  usleft,
  usright,
};
