const footer = async () => {
  let fotbottom = "";
  try {
    let res = await axios.get("http://localhost:2000/footerbottom");
    fotbottom = res.data.map((elem) => {
        return`<h1 class="text-[#282938] md:text-[16px] text-[10px] font-[500]">${elem.text}</h1>`
    });
    document.querySelector(".footer .footerbottom .footerbottomm").innerHTML =
      fotbottom.join("");
  } catch (error) {
    console.log(error.massage);
  }
};
export default footer;
