window.onload=function() {
    /*购物车*/
    var last = document.querySelector(".last");
    var cart = document.querySelector(".cart");
    /*搜索栏*/
    var from = document.querySelector(".from");
    var text = document.querySelector(".text");
    var search = document.querySelector(".search");
    var hot = document.querySelector(".hot");
    var hotLi = document.querySelectorAll(".hot li");
    var searchSpan = document.querySelector(".search-span");
    /*小米 红米下拉菜单*/
    var aUl = document.querySelectorAll('.Afigure ul');
    var aLi = document.querySelectorAll('.up-list li');
    var list = document.querySelector('.list');
    /*var A=document.querySelectorAll('.Afigure');*/
    var i = 0;


    /*左侧导航*/
    var sLi = document.querySelectorAll('.left-nav li');
    var sUl = document.querySelectorAll('.left-list div ');
    var k = 0;
    var length = sLi.length;

    var xLi = document.querySelectorAll('.six-i li');
    var xImg = document.querySelectorAll('.six-i img ');
    var xP = document.querySelectorAll('.six-i p ');
    var x = 0;
    var xLen= xP.length;

    /*查看全部*/
    var all = document.querySelector(' .all');
    var Pall = document.querySelector(' .all p');
    var Iall = document.querySelector('.all i');
    /*视频查看全部*/
    var All = document.querySelector('.video .all');
    var pAll = document.querySelector('.video .all p');
    var iAll = document.querySelector('.video .all i');
    /* 视频 play */
    var Vimg = document.querySelectorAll('.v-img');
    var play = document.querySelectorAll('.play');
    var v = 0;
    var vLen = Vimg.length;
    console.log(Vimg);
    console.log(play);
    /*右上tab切换  家电*/
    var tLi = document.querySelectorAll('.house .tab-ul  li');
    var tUl = document.querySelectorAll('.house .quick-3r .tab-li');
    var o = 0;
    var tLen = tLi.length;
    /*智能*/
    var rLi = document.querySelectorAll('.robot .tab-ul  li');
    var rUl = document.querySelectorAll('.robot .quick-3r .tab-li');
    var r = 0;
    var rLen = rLi.length;
    console.log(rLi);
    console.log(rUl);
    /*搭配*/
    var dLi = document.querySelectorAll('.parts .tab-ul  li');
    var dUl = document.querySelectorAll('.parts .quick-3r .tab-li');
    var d = 0;
    var dLen = dLi.length;


    /*配件*/
    var pLi = document.querySelectorAll('.sheep .tab-ul  li');
    var pUl = document.querySelectorAll('.sheep .quick-3r .tab-li');
    var p = 0;
    var pLen = pLi.length;

    /*周边*/
    var zLi = document.querySelectorAll('.around .tab-ul  li');
    var zUl = document.querySelectorAll('.around .quick-3r .tab-li');
    var z = 0;
    var zLen = zLi.length;


    /*联系客服*/
    var callMe = document.querySelector('.call-me');
    var callA = document.querySelector('.call-me a');

    /*窗口定位*/

    var fLi = document.querySelectorAll('.fix-img li');
    var fImg = document.querySelectorAll('.fix-img img');
    var fP = document.querySelectorAll('.fix-img p');
    var f = 0;
    var fLen = fP.length;

    /*  橙色评价div*/
      /*var tab = document.querySelector('.content');
      var coral = document.querySelector('.coral');
      console.log(tab);
      console.log(coral);*/




    /*购物车*/
    last.onmouseover = function () {
        last.style.background = '#fff';
        last.style.color = 'coral';
        cart.style.display = 'block';
        cart.style.zIndex =‘999’;
        console.log(1);
    }
    last.onmouseout = function () {
        last.style.background = '';
        last.style.color = '';
        cart.style.display = '';
    }


    /*搜索栏*/
    from.onmouseover = function () {
        text.style.borderColor = '#999';
        search.style.borderColor = '#999';
        /*#999*/
    }
    from.onmouseout = function () {
        text.style.borderColor = '';
        search.style.borderColor = '';
    }


    text.onclick = function () {
        from.onmouseover = null;
        from.onmouseout = null;

        text.style.borderColor = 'coral';
        search.style.borderColor = 'coral';
        searchSpan.style.display = 'none';
        hot.style.display = 'block';
    }
    hotLi.mousemove = function () {
        hotLi.style.background = 'eee';
    }

    text.onblur = function () {  /*失去焦点 全部取消*/
        text.style.borderColor = '';
        search.style.borderColor = '';
        hot.style.display = '';
        searchSpan.style.display = 'block';
    }

    /*小米 红米下拉菜单*/
    for (i; i < 8; i++) {
        aLi[i].id = i;
        aLi[i].onmouseover = function () {
            for (var j = 0; j < 8; j++) {
                aLi[j].className = '';
                aUl[j].style.display = '';
            }

            aLi[this.id].className = 'active';
            aUl[this.id].style.display = 'block';
            aLi[this.id].style.color = 'coral';

        }
        /*移出 消失效果 未完成*/
       aLi[i].onmouseout = function () {
            aLi[this.id].className = '';
            aUl[this.id].style.display = '';
            aLi[this.id].style.color = '';
            console.log('text');



        }
    }
    /*左侧导航*/
    for (k; k < length; k++) {
        sLi[k].id = k;
        sLi[k].onmouseover = function () {

            for (var l = 0; l < length; l++) {
                sUl[l].style.display = 'none';
            }
            sUl[this.id].className = 'first';
            sUl[this.id].style.display = 'block';
        }
        sLi[k].onmouseout = function () {
            sUl[this.id].className = '';
            sUl[this.id].style.display = '';
        }

    }

    /*six-i*/
    for (x; x <xLen; x++) {
        xLi[x].id = x;
        xLi[x].onmouseover = function () {
            xImg[this.id].style.color ='red';
            xP[this.id].style.color ='#fff';
        }
        xLi[x].onmouseout = function () {
            xImg[this.id].style.color ='';
            xP[this.id].style.color ='';
        }

    }


    /*自动轮播图*/

    var bLi = document.querySelectorAll('.banner .img li');
    var nLi = document.querySelectorAll('.num li');
    var nLen = nLi.length;
    var timer = null;
    var index = 0;

    function autoplay() {
        ++index;
        if (index >= nLen) {
            index = 0;
        }
        update(index)
    }

    function update(num) {
        for (var j = 0; j < nLen; j++) {
            bLi[j].style.display = 'none';
            nLi[j].className = '';
        }
        bLi[num].style.display = 'block';
        nLi[num].className = 'active';
    }

    timer = setInterval(autoplay, 3000);
    for (var i = 0; i < nLen; i++) {
        nLi[i].index = i;
        nLi[i].onmouseover = function () {
            clearInterval(timer);
            index = this.index;
            update(this.index);
        }
        nLi[i].onmouseout = function () {
            timer = setInterval(autoplay, 3000);
        }
    }
    /*
        var ssLi=document.querySelectorAll('.six-li li');
        var ssImg=document.querySelectorAll('.six-li li img');
        var ssP=document.querySelectorAll('.six-li li p');*/


    /*查看全部*/
    all.onmouseover = function () {
        Pall.style.color = 'coral';
        Iall.style.color = '#fff';
        Iall.style.background = 'coral';
    }
    all.onmouseout = function () {
        Pall.style.color = '';
        Iall.style.color = '';
        Iall.style.background = '';
    }
    /*视频查看全部*/
    All.onmouseover = function () {
        pAll.style.color = 'coral';
        iAll.style.color = '#fff';
        iAll.style.background = 'coral';
    }
    All.onmouseout = function () {
        pAll.style.color = '';
        iAll.style.color = '';
        iAll.style.background = '';
    }
    /*视频play*/
    for (v; v < Vimg.length; v++) {
        Vimg[v].id = v;
        Vimg[v].onmouseover = function () {
            play[this.id].style.background = '#ff6700';
            play[this.id].style.borderColor = '#ff6700';
            play[this.id].style.color = '#fff';
            play[this.id].style.transition = '.3s';
        }
        Vimg[v].onmouseout = function () {
            play[this.id].style.background = '';
            play[this.id].style.borderColor = '';
            play[this.id].style.color = '';
            play[this.id].style.transition = '.3s';
        }
    }


    /*家电 右上tab切换*/
    for (o; o < tLen; o++) {
        tLi[o].id = o;
        tLi[o].onmouseover = function () {
            for (var q = 0; q < tLen; q++) {
                tUl[q].style.display = 'none';
                tLi[q].style.color = '';
                tLi[q].style.color = '#424242';
                tLi[q].style.borderBottomColor = '#f5f5f5';
            }
            tUl[this.id].style.display = 'block';
            tLi[this.id].style.color = 'coral';
            tLi[this.id].style.borderBottomColor = 'coral';
        }
    }
    /*智能*/
    for (r; r < rLen; r++) {
        rLi[r].id = r;
        rLi[r].onmouseover = function () {
            for (var q = 0; q < rLen; q++) {
                rUl[q].style.display = 'none';
                rLi[q].style.color = '';
                rLi[q].style.color = '#424242';
                rLi[q].style.borderBottomColor = '#f5f5f5';
            }
            rUl[this.id].style.display = 'block';
            rLi[this.id].style.color = 'coral';
            rLi[this.id].style.borderBottomColor = 'coral';
        }
    }


    /*搭配*/
    for (d; d < dLen; d++) {
        dLi[d].id = d;
        dLi[d].onmouseover = function () {
            for (var q = 0; q < dLen; q++) {
                dUl[q].style.display = 'none';
                dLi[q].style.color = '';
                dLi[q].style.color = '#424242';
                dLi[q].style.borderBottomColor = '#f5f5f5';
            }
            dUl[this.id].style.display = 'block';
            dLi[this.id].style.color = 'coral';
            dLi[this.id].style.borderBottomColor = 'coral';
        }
    }
    /*配件*/
    for (p; p < pLen; p++) {
        pLi[p].id = p;
        pLi[p].onmouseover = function () {
            for (var q = 0; q < pLen; q++) {
                pUl[q].style.display = 'none';
                pLi[q].style.color = '';
                pLi[q].style.color = '#424242';
                pLi[q].style.borderBottomColor = '#f5f5f5';
            }
            pUl[this.id].style.display = 'block';
            pLi[this.id].style.color = 'coral';
            pLi[this.id].style.borderBottomColor = 'coral';
        }
    }
    /*周边*/
    for (z; z < zLen; z++) {
        zLi[z].id = z;
        zLi[z].onmouseover = function () {
            for (var q = 0; q < zLen; q++) {
                zUl[q].style.display = 'none';
                zLi[q].style.color = '';
                zLi[q].style.color = '#424242';
                zLi[q].style.borderBottomColor = '#f5f5f5';
            }
            zUl[this.id].style.display = 'block';
            zLi[this.id].style.color = 'coral';
            zLi[this.id].style.borderBottomColor = 'coral';
        }
    }


    /* 联系客服*/
    callMe.onmouseover = function () {
        callMe.style.background = '#ff6700';
        callA.style.color = '#fff';
    }
    callMe.onmouseout = function () {
        callMe.style.background = '';
        callA.style.color = '';
    }













}



















































































