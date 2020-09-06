(this["webpackJsonphamming-codes"]=this["webpackJsonphamming-codes"]||[]).push([[0],{14:function(e,t,a){e.exports=a(28)},19:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(10),o=a.n(i),l=(a(19),a(2)),s=a(3),c=a(4),u=a(6),m=a(5),d=a(12),h=a(11),b=a(13);function p(e,t){return function(e,t,a){for(;e.length<t;)a?e+="0":e="0"+e;return e}((e>>>0).toString(2),t)}function g(e){return 0!==e&&!(e&e-1)}a(25);var f=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).getColorClassName=function(){var t=e.props,a=t.bitIndex,r=t.doubleError,n=t.errorIndex;return 0===a?"colorZerothBit":!1===r&&n===a?"colorErrorBit":g(a)?"colorParityBit":"colorDataBit"},e.getOpacityClassName=function(){var t=e.props,a=t.bitIndex,r=t.mousedOverBitIndex;return 0===a?r>0?"opacityDimmed":"":g(a)&&r>=0&&a&r||r>=0&&g(r)&&a&r?"":r>=0&&r!==a?"opacityDimmed":""},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.absolutePositioned,a=e.bit,r=e.bitIndex,i=e.height,o=e.isCell,s=e.numRows,c=e.numColumns,u=e.onClickBit,m=e.onMouseOverBit,d=e.paddedBinaryLength,h=e.showBinary,b=e.width,g=this.getColorClassName(),f=this.getOpacityClassName();if(o){var E={position:"relative"};return t&&(E.position="absolute",E.left=(r%c*100/c).toString()+"%",E.top=(100*Math.floor(r/c)/s).toString()+"%"),n.a.createElement("span",{className:"bit cell ".concat(g," ").concat(f),onClick:function(e){return u(r)},onMouseOver:function(e){return m(r)},style:Object(l.a)({height:i-2,width:b-2},E)},n.a.createElement("div",{className:"value",style:{paddingBottom:h?"0.25em":"0"}},a),n.a.createElement("div",{className:"binaryBitIndex"},h?p(r,d):null),n.a.createElement("div",{className:"bitIndex"},r))}return n.a.createElement("span",{className:"bit messageBit ".concat(g," ").concat(f),onClick:function(e){return u(r)},onMouseOver:function(e){return m(r)}},a)}}]),a}(n.a.Component),E=(a(26),function(e){var t=p(e.number,e.paddedBinaryLength).split("");return n.a.createElement("span",null,t.map((function(e,t){return n.a.createElement("span",{className:"colorBinary"+e,key:t},e)})))});function y(e){return e>0?1:0}function v(e){for(var t=[0];t.length<e;)t.push(Math.random()>.5?1:0);return function(e){for(var t=[],a=0,r=Math.pow(2,a),n=e.length;r<n;){for(var i=0,o=r+1;o<n;++o)o&r&&(i+=y(e[o]));t.push(i%2),++a,r=Math.pow(2,a)}return t}(t).forEach((function(e,a){t[Math.pow(2,a)]=e})),t[0]=t.reduce((function(e,t){return e^t}),0),t}a(27);var w=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var r;Object(s.a)(this,a),(r=t.call(this,e)).calculations=Object(d.a)((function(e){var t=Math.ceil(Math.sqrt(e.length)),a=e.filter((function(e,t){return g(t)})).map((function(e,t){return{bit:e,bitIndex:Math.pow(2,t)}})).reverse(),n=a.length+1;return Object(l.a)(Object(l.a)({},function(e){var t=0,a=0;return e.forEach((function(e,r){var n=y(e);1===n&&(t^=r),a^=n})),{doubleError:0===a&&t>0,errorIndex:t,parity:a}}(r.state.data)),{},{efficiency:(100*(e.length-n)/e.length).toFixed(2),numColumns:t,numRows:Math.ceil(e.length/t),paddedBinaryLength:Math.ceil(Math.log(e.length)/Math.log(2)),regularParityBits:a,totalNumParityBits:n})})),r.generateNewData=function(e){return r.setState({data:v(e),numberBits:e})},r.getMousedOverText=function(e){var t=r.state.mousedOverBitIndex;if(r.state.mousedOverBitIndex>=0){var a=[n.a.createElement("span",null,"You are hovering over bit ",t,n.a.createElement("span",{className:"floatRight"},"(binary ",n.a.createElement(E,{number:t,paddedBinaryLength:e}),")")),n.a.createElement("br",null)];return 0===t?a.push(n.a.createElement("span",null,"It tracks the parity of the rest of the message. Including this bit, the overall parity of the message should be 0 (even). If the other parity bits detect an error AND the parity of the whole message is odd, we assume there is a 1-bit error. If the other parity bits detect an error AND the parity of the whole message is even, we assume there is a 2-bit error.")):g(t)?a.push(n.a.createElement("span",null,"It tracks all bits with a 1 in binary position ",Math.log(t)/Math.log(2))):r.state.data.forEach((function(r,i){i!==t&&g(i)&&i&t&&a.push(n.a.createElement("span",null,"It is tracked by parity bit ",i,n.a.createElement("span",{className:"floatRight"},"(binary ",n.a.createElement(E,{number:i,paddedBinaryLength:e}),")")))})),a.map((function(e,t){return n.a.createElement("div",{key:t},e)}))}return"Hover over a bit to learn more!"},r.getRegularParityBitsExplanation=function(e,t,a,i,o){return e?n.a.createElement(n.a.Fragment,null,n.a.createElement("br",null),n.a.createElement("div",{className:"colorErrorBit errorDetected"},"Double Error Detected!"),n.a.createElement("div",null,"This is what the values of the parity bits should be. Since the overall parity of the message is odd, this means that there is a 2-bit error!"),n.a.createElement("div",{className:"regularParityBitsContainer",onMouseLeave:function(e){return r.setState({mousedOverBitIndex:-1})}},i.map((function(e){return n.a.createElement(f,Object.assign({key:e.bitIndex,absolutePositioned:!1,bit:e.bitIndex&t?1:0,bitIndex:e.bitIndex,isCell:!0,showBinary:i.length<=6},o))})))):t>0?n.a.createElement(n.a.Fragment,null,n.a.createElement("br",null),n.a.createElement("div",{className:"colorErrorBit errorDetected"},"Single Error to be Corrected!"),n.a.createElement("div",null,"This is what the values of the parity bits should be. Since the overall parity of the message is odd, this means that there is a 1-bit error in binary position ",p(t,a),", ie position ",t),n.a.createElement("div",{className:"regularParityBitsContainer",onMouseLeave:function(e){return r.setState({mousedOverBitIndex:-1})}},i.map((function(e){return n.a.createElement(f,Object.assign({key:e.bitIndex,absolutePositioned:!1,bit:e.bitIndex&t?1:0,bitIndex:e.bitIndex,isCell:!0,showBinary:i.length<=6},o))}))),n.a.createElement("br",null),n.a.createElement("div",null,n.a.createElement("button",{onClick:function(a){return r.swapIncorrectBit(e,t)},disabled:0===t||e},"Swap Incorrect Bit (",t,")"))):void 0},r.onMouseOverBit=function(e){return r.setState({mousedOverBitIndex:e})},r.swapIncorrectBit=function(e,t){t>0&&!1===e&&r.switchBit(t)},r.switchBit=function(e){var t=r.state.data.slice();t[e]=t[e]>0?0:1,r.setState({data:t})};return r.state={bitHeight:100,bitWidth:100,data:v(16),mousedOverBitIndex:-1,numberBits:16,showBinary:!0},r}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.bitHeight,r=t.bitWidth,i=t.data,o=t.mousedOverBitIndex,l=t.showBinary,s=this.calculations(i),c=s.doubleError,u=s.efficiency,m=s.errorIndex,d=s.numColumns,p=s.numRows,g=s.paddedBinaryLength,E=s.regularParityBits,y=s.totalNumParityBits,v=s.parity,w={doubleError:c,errorIndex:m,height:a,mousedOverBitIndex:o,numColumns:d,numRows:p,onClickBit:this.switchBit,onMouseOverBit:this.onMouseOverBit,paddedBinaryLength:g,width:r};return n.a.createElement("div",{id:"App"},n.a.createElement("header",null,n.a.createElement("h1",null,"Hamming Code"),n.a.createElement("div",{id:"github"},n.a.createElement("a",{href:"https://github.com/harryli0088/hamming-code",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(h.a,{icon:b.a}))),n.a.createElement("p",null,n.a.createElement("i",null,"Single Error Correction, Double Error Detection")),n.a.createElement("p",null,"Computers represent data digitally as 1s and 0s, called 'bits'. Sometimes these bits are mistakenly swapped, for example: a scratched CD or a message garbled in transit between computers. Invented in 1950 by Richard Hamming, Hamming Code can correct 1-bit errors and detect 2-bit errors, making data transfer and saving more robust."),n.a.createElement("p",null,"A ",n.a.createElement("span",{className:"colorZerothBit",style:{color:"black"}},"\xa0",n.a.createElement("b",null,"parity bit"),"\xa0")," is a single bit that tracks whether the number of 1's is odd or even. If the number of 1's is odd, the parity bit is 1; if the number of 1's is even, the parity bit is 0. Hamming cleverly arranged parity bits to track certain rows or columns, so that we will be able to correct 1-bit errors and, with an extra step, detect 2-bit errors.")),n.a.createElement("section",{id:"content"},n.a.createElement("div",{id:"sidebar"},n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("b",null,"Generate new data:")),n.a.createElement("br",null),n.a.createElement("div",null,n.a.createElement("span",null,[2,4,8,16].map((function(t){return n.a.createElement("button",{key:t,className:"grouped",onClick:function(a){return e.generateNewData(t*t)}},t*t)})))," | ",n.a.createElement("input",{id:"customNumberBits",type:"number",step:"1",min:"1",value:this.state.numberBits,onChange:function(t){return e.generateNewData(parseInt(t.target.value))}})," bits")),n.a.createElement("hr",null),n.a.createElement("b",null,"Efficiency"),n.a.createElement("p",null,"Since we have some parity bits, not all of the bits can be used to transfer data. Our current efficiency is:"),n.a.createElement("div",null,i.length-y," data bits /",i.length," total = ",n.a.createElement("b",null,u,"%")),n.a.createElement("hr",null),n.a.createElement("div",null,n.a.createElement("b",null,"Overall Message Parity:")," ",v," (",1===v?"odd":"even",")"),n.a.createElement("br",null),n.a.createElement("div",null,n.a.createElement("b",null,"Current values of the regular parity bits")),n.a.createElement("div",{className:"regularParityBitsContainer",onMouseLeave:function(t){return e.setState({mousedOverBitIndex:-1})}},E.map((function(e){return n.a.createElement(f,Object.assign({key:e.bitIndex,absolutePositioned:!1,bit:e.bit,bitIndex:e.bitIndex,isCell:!0,showBinary:E.length<=6},w))}))),this.getRegularParityBitsExplanation(c,m,g,E,w),n.a.createElement("hr",null),n.a.createElement("div",null,this.getMousedOverText(g))),n.a.createElement("div",{id:"interactiveContainer"},n.a.createElement("div",{id:"clickSwapMessage"},"Click on a bit to swap its value!",n.a.createElement("span",{id:"toggleShowBinary"},"Show Binary Positions ",n.a.createElement("input",{type:"checkbox",checked:l,onChange:function(t){return e.setState({showBinary:!l})}}))),n.a.createElement("div",{id:"dataContainer"},n.a.createElement("div",{id:"cellsContainer",onMouseLeave:function(t){return e.setState({mousedOverBitIndex:-1})},style:{height:a*p,width:r*d}},i.map((function(e,t){return n.a.createElement(f,Object.assign({key:t,absolutePositioned:!0,bit:e,bitIndex:t,isCell:!0,showBinary:l},w))}))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",null,n.a.createElement("span",{id:"rawMessageContainer",onMouseLeave:function(t){return e.setState({mousedOverBitIndex:-1})}},i.map((function(e,t){return n.a.createElement(f,Object.assign({key:t,absolutePositioned:!1,bit:e,bitIndex:t,isCell:!1},w))}))))),n.a.createElement("div",{id:"legend"},n.a.createElement("span",{className:"legendKey"},n.a.createElement("span",{className:"legendSquare colorZerothBit"})," Overall Parity Bit"),n.a.createElement("span",{className:"legendKey"},n.a.createElement("span",{className:"legendSquare colorParityBit"})," Regular Parity Bit"),n.a.createElement("span",{className:"legendKey"},n.a.createElement("span",{className:"legendSquare colorDataBit"})," Data Bit"),n.a.createElement("span",{className:"legendKey"},n.a.createElement("span",{className:"legendSquare colorErrorBit"})," Error Bit")))),n.a.createElement("section",{id:"video"},n.a.createElement("h2",null,"3Blue1Brown's Explanation"),n.a.createElement("iframe",{title:"3blue1brown",width:"560",height:"315",src:"https://www.youtube.com/embed/X8jsijhllIA",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),n.a.createElement("section",null,n.a.createElement("h3",null,"How to Arrange the Parity Bits"),n.a.createElement("div",null,"In everyday base-10 counting, powers-of-10 (1, 10, 100, etc...) are written with 0s and a single 1. Similarly, in binary, powers-of-2 (1, 2, 4, 8, 16, etc...) are written with 0s and a single 1 (0001, 0010, 0100, 1000, etc...). In a message, the bits in a powers-of-2 position will be our ",n.a.createElement("span",{className:"colorZerothBit",style:{color:"black"}},"\xa0",n.a.createElement("b",null,"parity bits"),"\xa0"),'. These parity bits track the parity of the other bits in the message whose position have a 1 in the same place. If one of bits is flipped, the parity will be wrong. If you select a data length that makes a square, you can visually see that each parity bit tracks certain rows and columns, splitting the message in halves to efficiently locate where the error is, like a game of "20 questions" or like a binary search. After calculating what the parity bits should equal, the parity bits point to the location of the error!')),n.a.createElement("section",null,n.a.createElement("h3",null,"Single Error Correction, Double Error Detection"),n.a.createElement("div",null,"Hamming Code by itself can correct 1-bit errors, but will become confused when there are 2-bit errors. Single Error Correction, Double Error Detection (SECDED) extends Hamming Code with an additional parity bit (ie the first dark green parity bit). This bit tracks the parity of the whole message, so that we can detect 2-bit errors (without being able to correct them). With this additional parity bit, the overall parity of the message should be even. If there is a 1-bit error, the regular parity bits will detect an error and the overall parity of the message is 1; we can assume there is a 1-bit error. If there is a 2-bit error, the regular parity bits will detect an error BUT the overall parity of the message is 0; we have detected a double error.")),n.a.createElement("section",null,n.a.createElement("h3",null,"Efficiency and Limitations"),n.a.createElement("p",null,"Of course, by having some parity bits, not all bits can be used to transmit data. In this case, we need ",y," parity bits to track ",i.length-y," bits of data for an overall efficiency of ",u,"%. Longer messages loosely correlate with higher efficiency. The longer the message, however, the more likely the chance of bit errors, rendering Hamming Code insufficient, since it cannot detect 3 or more errors."),n.a.createElement("p",null,"From Wikiepdia:"),n.a.createElement("p",null,n.a.createElement("i",null,'"If the decoder does not attempt to correct errors, it can reliably detect triple bit errors. If the decoder does correct errors, some triple errors will be mistaken for single errors and "corrected" to the wrong value. Error correction is therefore a trade-off between certainty (the ability to reliably detect triple bit errors) and resiliency (the ability to keep functioning in the face of single bit errors)."'))),n.a.createElement("footer",null,n.a.createElement("p",null,"Thank you to 3Blue1Brown for the inspiration and explanation! ",n.a.createElement("a",{href:"https://www.3blue1brown.com/",target:"_blank",rel:"noopener noreferrer"},"https://www.3blue1brown.com/")),n.a.createElement("p",null,"Github Repo: ",n.a.createElement("a",{href:"https://github.com/harryli0088/hamming-code",target:"_blank",rel:"noopener noreferrer"},"https://github.com/harryli0088/hamming-code")),n.a.createElement("p",null,"Read more about Hamming Code: ",n.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Hamming_code",target:"_blank",rel:"noopener noreferrer"},"https://en.wikipedia.org/wiki/Hamming_code")),n.a.createElement("p",null,"Read more about error-correcting code: ",n.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Linear_code",target:"_blank",rel:"noopener noreferrer"},"https://en.wikipedia.org/wiki/Linear_code"))))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.5a1eae8f.chunk.js.map