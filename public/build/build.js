"use strict";function assignHtmlValue(t,n){n.forEach(function(n){var o=parseFloat(n.last_price),a=o%1!=0?o.toFixed(2):o,e="."+t+"-"+n.name.toLowerCase();$(e).text()!=a&&$(e).fadeOut(function(){$(this).text(a)}).fadeIn()},this)}function gtag(){dataLayer.push(arguments)}var socket=io();socket.on("online",function(t){$("span.users").html(t)}),socket.on("bx",function(t){assignHtmlValue("bx",t)}),socket.on("bfx",function(t){assignHtmlValue("bfx",t)}),socket.on("coinbase",function(t){assignHtmlValue("cb",t)}),socket.on("cex",function(t){assignHtmlValue("cex",t)}),socket.on("bittrex",function(t){assignHtmlValue("btx",t)}),socket.on("binance",function(t){assignHtmlValue("bin",t)}),socket.on("coinmarketcap",function(t){assignHtmlValue("cmc",t)}),$("#line-contact").modal({show:!0}),window.configMsg={hello:"สวัสดีทุกท่านครับ",donate:"ท่านสามารถให้กำลังใจผู้พัฒนาได้หลายช่องทาง คลิกปุ่ม Donate ด่านล่างได้เลยครับ"},socket.on("notification",function(t){toastr.options.timeOut=1e4,toastr.options.extendedTimeOut=5e3,toastr.info(t)}),window.boardcast=function(t){socket.emit("boardcast",t)},window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","UA-111347586-1");