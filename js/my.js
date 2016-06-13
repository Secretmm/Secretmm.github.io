var str="周密密--期待成为一个web前端工程师";
            var len=str.length;
            var i=1;
            function showword(){
                document.getElementById("show").innerHTML=str.substr(0,i);
                i++;
                if(i>len){
                clearInterval("done");
                }
            }
            var done=setInterval("showword()",300);

