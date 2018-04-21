!function getDevice() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
     document.getElementById("root").classList += 'mobile';
   } else {
     document.getElementById("root").classList += 'desktop';
   }
}();