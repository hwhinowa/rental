$(document).ready(function () {
    if($('.slider').length !== 0){
        $('.slider').bxSlider();
    }

    // includeHTML();

    // HTML파일 INCLUDE (HEADER, FOOTER)
    // function includeHTML() {
    //     var z, i, elmnt, file, xhttp;
    //     z = document.getElementsByTagName("*");
    //     for (i = 0; i < z.length; i++) {
    //         elmnt = z[i];
    //         file = elmnt.getAttribute("w3-include-html");
    //         if (file) {
    //             xhttp = new XMLHttpRequest();
    //             xhttp.onreadystatechange = function () {
    //                 if (this.readyState == 4) {
    //                     if (this.status == 200) { elmnt.innerHTML = this.responseText; }
    //                     if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
    //                     elmnt.removeAttribute("w3-include-html");
    //                     includeHTML();
    //                 }
    //             }
    //             xhttp.open("GET", file, true);
    //             xhttp.send();
    //             return;
    //         }
    //     }
    // }

    var all_elem = document.querySelectorAll('.input_content.image div');
    if(all_elem.length !== 0){
        var image_box = $('.input_content.image > div')[0];
        var width = window.getComputedStyle(image_box)['width'];
        for(var i = 0; i < all_elem.length; i++){
            var temp = all_elem[i];
            temp.style.height = width;
        }
    }
});

// 상세페이지 - 설명 자세히 보기
function explain_more(){
    var btn = document.querySelector('.explain_more button');
    var box = document.querySelector('.explain_more');

    if(box.classList.contains('active')){
        console.log('yes');
        box.classList.remove('active');
    }else{
        console.log('no');
        box.classList.add('active');
    }
}

// 광고문의 - 탭 전환
function ad_tab(elem, tab){
    var clicked_btn = elem;
    var buttons = document.querySelectorAll('.ad_type button');
    var contents = document.querySelectorAll('.tabs');
    var flag = 'premium';

    switch(tab){
        case "투자":
            flag = 'investment';
            break;
        case "프리미엄":
            flag = 'premium';
            break;
        case "배너":
            flag = 'banner';
            break;
        default:
            flag = 'premium'
            break;
    }

    for(var i = 0; i < contents.length; i++){
        var temp = contents[i];

        if(temp.id === flag){
            temp.style.display = 'block';
        }else{
            temp.style.display = 'none';
        }
    }

    for(var j = 0; j < buttons.length; j++){
        var temp = buttons[j];

        if(temp === clicked_btn){
            temp.classList.add('active');
        }else{
            temp.classList.remove('active');
        }
    }
}

// 마이페이지 - 연결된 탭으로 최초 이동
function mypage_init(flag, page){
    if(flag){
        window.location.hash = page;
        var elem = document.querySelector('#btn_'+page);
        mypage_tab(elem,page,true);
    }else{
        var url = window.location;
        var target = url.hash.slice(1);
        var elem = document.querySelector('#btn_'+target);
        mypage_tab(elem,target,true);
    }
}

// 마이페이지 - 탭 전환
function mypage_tab(elem, tab, init){
    var clicked_btn = elem;
    var buttons = document.querySelectorAll('.btn_box button');
    var contents = document.querySelectorAll('.tabs');
    var flag = 'product';

    if(init){
        flag = tab;

        for(var i = 0; i < contents.length; i++){
            var temp = contents[i];
    
            if(temp.id === flag){
                temp.style.display = 'block';
            }else{
                temp.style.display = 'none';
            }
        }

        for(var j = 0; j < buttons.length; j++){
            var temp = buttons[j];
    
            if(temp === clicked_btn){
                temp.classList.add('active');
            }else{
                temp.classList.remove('active');
            }
        }

    }else{
        switch(tab){
            case "상품관리":
                flag = 'product';
                break;
            case "관심상품":
                flag = 'interest';
                break;
            case "렌탈내역":
                flag = 'history';
                break;    
            case "닉네임관리":
                flag = 'nickname';
                break;
            case "적립금관리":
                flag = 'point';
                break;
            case "키워드광고":
                flag = 'keyword';
                break;
            default:
                flag = 'product'
                break;
        }

        for(var i = 0; i < contents.length; i++){
            var temp = contents[i];
    
            if(temp.id === flag){
                temp.style.display = 'block';
            }else{
                temp.style.display = 'none';
            }
        }
    
        for(var j = 0; j < buttons.length; j++){
            var temp = buttons[j];
    
            if(temp === clicked_btn){
                temp.classList.add('active');
            }else{
                temp.classList.remove('active');
            }
        }
    }
}

// 마이페이지 - 관심상품 : 관심상품 표시
function set_interest(btn){
    var elem = btn;
    var flag;

    for(var i = 0; i < elem.classList.length; i++){
        if(elem.classList[i] !== 'active'){
            flag = true;
        }
    }

    if(elem.classList.length === 0){
        flag = true;
    }

    if(flag){
        elem.classList.add('active');
    }else{
        elem.classList.remove('active');
    }
}

function my_menu_open(){
    var box = document.querySelector('.util_box > div');
    box.classList.add('active');
}

function my_menu_close(){
    var box = document.querySelector('.util_box > div');
    box.classList.remove('active');
}

// 마이페이지 - 렌탈내역 : 설명 더보기
function history_more(btn){
    var box = btn.parentElement.querySelector('.history_more');
    
    if(box.classList.contains('active')){
        box.classList.remove('active');
        btn.classList.remove('active');
    }else{
        box.classList.add('active');
        btn.classList.add('active');
    }
}

// 마이페이지 - 적립금관리 : 팝업
function popup_open(elem){
    var popup = document.querySelector(elem);
    var back = document.querySelector('.black');
    console.log(back);
    popup.style.display = 'block';
    back.style.display = 'block';
}


function popup_close(btn){
    var popup = btn.parentElement;
    var back = document.querySelector('.black');
    popup.style.display = 'none';
    back.style.display = 'none';
}

// 마이페이지 - 키워드광고 : 광고수정
function keyword_edit(elem){
    var box = elem.parentElement.parentElement.parentElement.parentElement.parentElement;
    box.classList.add('edit');
}

function keyword_list(elem){
    var box = elem.parentElement.parentElement;
    box.classList.remove('edit');
}


// 게시판 - 탭 전환
function board_tab(elem, tab){
    var clicked_btn = elem;
    var buttons = document.querySelectorAll('#board .ad_type button');
    var contents = document.querySelectorAll('#board .board_table');
    var flag = 'notice';

    switch(tab){
        case "공지":
            flag = 'notice';
            break;
        case "qna":
            flag = 'qna';
            break;
        default:
            flag = 'notice';
            break;
    }

    for(var i = 0; i < contents.length; i++){
        var temp = contents[i];

        if(temp.id === flag){
            temp.style.display = 'table';
        }else{
            temp.style.display = 'none';
        }
    }

    for(var j = 0; j < buttons.length; j++){
        var temp = buttons[j];

        if(temp === clicked_btn){
            temp.classList.add('active');
        }else{
            temp.classList.remove('active');
        }
    }
}

// FAQ 답변 열기/닫기
function faq_open(btn){
    var con = btn.parentElement.parentElement.querySelector('.faq_content');
    if(window.getComputedStyle(con)['display'] === 'none'){
        con.style.display = 'block';
    }else{
        con.style.display = 'none';
    }
}