// گرفتن المنت ها از html
const input = document.getElementById("textInput") ;
const btn = document.getElementById("analyzeBtn") ;
const resultBox = document.getElementById("result") ;

// وقتی روی دکمه کلیک میکنیم
btn.addEventListener("click" , function() {
  // گرفتن مقدار وارد شده و حذف فاصله های اول و اخر
  const text = input.value.trim() ;
  
  // اگر کاربر چیزی وارد نکرده بود
  if(text === "") {
    resultBox.classList.remove("alert-info") ;
    resultBox.classList.add("alert-danger") ;
    resultBox.textContent = "لطفا متنی وارد کن!" ;
    resultBox.classList.remove("d-none") ;
    return ;
  }
  
  // محاسبه تعداد کاراکتر ها
  const charCount = text.length ;
  
  // محاسبه تعداد کلمات
  const wordCount = text.split(/\s + /).filter(word => word !== "").length ;
  
  // نمایش نتیجه
  resultBox.classList.remove("d-none" , "alert-danger") ;
  resultBox.classList.add("alert-info") ;
  resultBox.innerHTML = `تعداد کاراکترها : <strong>${charCount}</strong> تعداد کلمات : ${wordCount} </strong>  `;
});