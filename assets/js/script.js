let noSoal = 1;
function getSoal(url, success, error){
   let xhr = new XMLHttpRequest();

   xhr.onreadystatechange = function() {
       if(xhr.readyState === 4){
           if(xhr.status === 200){
               success(xhr.response);
           }else if(XPathEvaluator.status === 404){
               error();
           }
       }
   }
   xhr.open('get', url);
   xhr.send();
}

getSoal('../kuis/kuis1.json', (results) => {
   const listSoalJson = JSON.parse(results);
   let soal = '';
   listSoalJson.forEach(s => {
       soal += tampilSoal(s);
   });

   const listSoal = document.querySelector('.list-soal');
   listSoal.innerHTML = soal;

   document.getElementById("id1").hidden = false;
   document.getElementById("id2").hidden = true;
   document.getElementById("id3").hidden = true;
   document.getElementById("id4").hidden = true;
   document.getElementById("id5").hidden = true;
   document.getElementById("id6").hidden = true;
   document.getElementById("id7").hidden = true;
   document.getElementById("id8").hidden = true;
   document.getElementById("id9").hidden = true;
   document.getElementById("id10").hidden = true;

   // const hitungButton = document.querySelectorAll('.hitung-button');
   // hitungButton.forEach(btn => {
   //     btn.addEventListener('click', function(){
   //         const idClick = this.dataset.id;
   //         getSoal('../kuis/kuis1.json', (results) => {
   //             const listSoalJsonId = JSON.parse(results);
   //             let soalId = '';
   //             for (let i = 0; i < listSoalJsonId.length; i++) {
   //                 if(listSoalJsonId[i].id == idClick){
   //                     soalId = listSoalJsonId[i];
   //                 }
   //             }
   //             hitung(soalId.a, soalId.b, soalId.c);
   //             cekJawaban(x1,x2, soalId.id);
   //             let gambarHasil = document.querySelector(`.gambar-jawaban-${soalId.id}`);
   //             for (let i = 0; i < listSoalJsonId.length; i++) {
   //                 if(listSoalJsonId[i].id == idClick){
   //                     gambarHasil.innerHTML = hasilGambar;
   //                 }
   //             }
   //         }, () => {

   //         });
   //     })
   // });

}, () => {

});

function tampilSoal(s){           
   return `<div id="id${s.id}">
         <form>
         <p>${noSoal++}. ${s.soal}</p>
         <input type="radio" id="jA${s.id}" onclick="tes${s.id}(this.value);" name="jawab${s.id}" value="A">
         <label for="A">${s.a}</label><br>
         <input type="radio" id="jB${s.id}" name="jawab${s.id}" value="B">
         <label for="B">${s.b}</label><br>
         <input type="radio" id="jC${s.id}" name="jawab${s.id}" value="C">
         <label for="C">${s.c}</label><br>
         <input type="radio" id="jD${s.id}" name="jawab${s.id}" value="D">
         <label for="D">${s.d}</label><br>
         </form>
         </div>`
}

let kuis1_1;
function tes1(pilih){
    kuis1_1 = pilih;
}

function cekKuis1(){
    if (confirm("Apakah Anda Yakin!")) {
        if (kuis1_1 == "A"){
            console.log("Benar");
        }
    } else {
        txt = "You pressed Cancel!";
    }
}

const video = document.querySelector('.video');

var video1_1 = document.getElementById("video1_1");

function setCurTime1_1(X){
    if(X == 1){
        video1_1.currentTime = 1;
    }else if(X == 2){
        video1_1.currentTime = 9;
    }else if(X == 3){
        video1_1.currentTime = 20;
    }
}

var video1_3 = document.getElementById("video1_3");

function setCurTime1_3(X){
    if(X == 1){
        video1_3.currentTime = 1;
    }else if(X == 2){
        video1_3.currentTime = 10;
    }else if(X == 3){
        video1_3.currentTime = 19;
    }
}

var video1_4 = document.getElementById("video1_4");

function setCurTime1_4(X){
    if(X == 1){
        video1_4.currentTime = 1;
    }else if(X == 2){
        video1_4.currentTime = 8;
    }else if(X == 3){
        video1_4.currentTime = 15;
    }
}

var video2_1 = document.getElementById("video2_1");

function setCurTime2_1(X){
    if(X == 1){
        video2_1.currentTime = 1;
    }else if(X == 2){
        video2_1.currentTime = 8;
    }else if(X == 3){
        video2_1.currentTime = 16;
    }
}

var video2_2 = document.getElementById("video2_2");

function setCurTime2_2(X){
    if(X == 1){
        video2_2.currentTime = 1;
    }else if(X == 2){
        video2_2.currentTime = 8;
    }else if(X == 3){
        video2_2.currentTime = 17;
    }
}

var video2_3 = document.getElementById("video2_3");

function setCurTime2_3(X){
    if(X == 1){
        video2_3.currentTime = 1;
    }else if(X == 2){
        video2_3.currentTime = 8;
    }else if(X == 3){
        video2_3.currentTime = 21;
    }
}

var video3_1 = document.getElementById("video3_1");

function setCurTime3_1(X){
    if(X == 1){
        video3_1.currentTime = 0.5;
    }else if(X == 2){
        video3_1.currentTime = 9;
    }else if(X == 3){
        video3_1.currentTime = 15.2;
    }
}

var video3_2 = document.getElementById("video3_2");

function setCurTime3_2(X){
    if(X == 1){
        video3_2.currentTime = 1;
    }else if(X == 2){
        video3_2.currentTime = 5;
    }else if(X == 3){
        video3_2.currentTime = 14;
    }
}

// event binding
document.addEventListener('click', async function(e){
    if(e.target.classList.contains('bd-example-modal-lg')){
        video3_2.pause();
    }
});

var video4_1 = document.getElementById("video4_1");

function setCurTime4_1(X){
    if(X == 1){
        video4_1.currentTime = 1;
    }else if(X == 2){
        video4_1.currentTime = 9;
    }else if(X == 3){
        video4_1.currentTime = 19;
    }
}

var video4_2 = document.getElementById("video4_2");

function setCurTime4_2(X){
    if(X == 1){
        video4_2.currentTime = 1;
    }else if(X == 2){
        video4_2.currentTime = 9;
    }else if(X == 3){
        video4_2.currentTime = 27;
    }
}

var video4_3 = document.getElementById("video4_3");

function setCurTime4_3(X){
    if(X == 1){
        video4_3.currentTime = 0;
    }else if(X == 2){
        video4_3.currentTime = 7.5;
    }else if(X == 3){
        video4_3.currentTime = 19.5;
    }
}

window.onload = function awal(){
   document.getElementById("info").hidden = false;
   document.getElementById("dafus").hidden = true;
   document.getElementById("petunjuk").hidden = true; 
};

function info(){
   document.getElementById("info").hidden = false;
   document.getElementById("dafus").hidden = true;
   document.getElementById("petunjuk").hidden = true;
   document.getElementById("btninfo").classList.add('active');
   document.getElementById("btndafus").classList.remove('active');
   document.getElementById("btnpetunjuk").classList.remove('active'); 
}
   
function dafus(){
   document.getElementById("info").hidden = true;
   document.getElementById("dafus").hidden = false;
   document.getElementById("petunjuk").hidden = true; 
   document.getElementById("btninfo").classList.remove('active');
   document.getElementById("btndafus").classList.add('active');
   document.getElementById("btnpetunjuk").classList.remove('active');
}
   
function petunjuk(){
   document.getElementById("info").hidden = true;
   document.getElementById("dafus").hidden = true;
   document.getElementById("petunjuk").hidden = false; 
   document.getElementById("btninfo").classList.remove('active');
   document.getElementById("btndafus").classList.remove('active');
   document.getElementById("btnpetunjuk").classList.add('active');
}

window.onload = function awalMateri(){
   document.getElementById("satu").hidden = false;
   document.getElementById("dua").hidden = true;
   document.getElementById("tiga").hidden = true; 
   document.getElementById("empat").hidden = true; 
};

function satu(){
   document.getElementById("btnprev").classList.add('disabled'); 
   document.getElementById("satu").hidden = false;
   document.getElementById("btnsatu").classList.add('active');
   document.getElementById("dua").hidden = true;
   document.getElementById("btndua").classList.remove('active');
   document.getElementById("tiga").hidden = true;
   document.getElementById("btntiga").classList.remove('active'); 
   document.getElementById("empat").hidden = true;
   document.getElementById("btnempat").classList.remove('active');
   document.getElementById("next").setAttribute( "onClick", "javascript: dua();" );
   if (video.id = video1_1) {
      video1_1.pause(); 
   } else if (video.id = video1_3) {
      video1_3.pause(); 
   } else if (video.id = video1_4) {
      video1_4.pause(); 
   } else if (video.id = video2_1) {
      video2_1.pause(); 
   } else if (video.id = video2_2) {
      video2_2.pause(); 
   } else if (video.id = video2_3) {
      video2_3.pause(); 
   } else if (video.id = video3_1) {
      video3_1.pause(); 
   } else if (video.id = video4_2) {
      video4_2.pause(); 
   } else if (video.id = video4_3) {
      video4_3.pause(); 
   } 
}

function dua(){
   document.getElementById("btnprev").classList.remove('disabled'); 
   document.getElementById("satu").hidden = true;
   document.getElementById("btnsatu").classList.remove('active');
   document.getElementById("dua").hidden = false;
   document.getElementById("btndua").classList.add('active');
   document.getElementById("tiga").hidden = true;
   document.getElementById("btntiga").classList.remove('active'); 
   document.getElementById("empat").hidden = true;
   document.getElementById("btnempat").classList.remove('active');
   document.getElementById("next").setAttribute( "onClick", "javascript: tiga();" );
   document.getElementById("prev").setAttribute( "onClick", "javascript: satu();" );
   if (video.id = video1_3) {
      video1_3.pause(); 
   } 
}

function tiga(){
   document.getElementById("btnprev").classList.remove('disabled'); 
   document.getElementById("satu").hidden = true;
   document.getElementById("btnsatu").classList.remove('active');
   document.getElementById("dua").hidden = true;
   document.getElementById("btndua").classList.remove('active');
   document.getElementById("tiga").hidden = false;
   document.getElementById("btntiga").classList.add('active'); 
   document.getElementById("empat").hidden = true;
   document.getElementById("btnempat").classList.remove('active'); 
   document.getElementById("next").setAttribute( "onClick", "javascript: empat();" );
   document.getElementById("prev").setAttribute( "onClick", "javascript: dua();" );
   if (video.id = video1_1) {
      video1_1.pause(); 
   } else if (video.id = video1_4) {
      video1_4.pause(); 
   } else if (video.id = video2_1) {
      video2_1.pause(); 
   } else if (video.id = video2_2) {
      video2_2.pause(); 
   } else if (video.id = video2_3) {
      video2_3.pause(); 
   } else if (video.id = video3_1) {
      video3_1.pause(); 
   } else if (video.id = video4_2) {
      video4_2.pause(); 
   } else if (video.id = video4_3) {
      video4_3.pause(); 
   }
}

function empat(){
   document.getElementById("btnprev").classList.remove('disabled'); 
   document.getElementById("satu").hidden = true;
   document.getElementById("btnsatu").classList.remove('active');
   document.getElementById("dua").hidden = true;
   document.getElementById("btndua").classList.remove('active');
   document.getElementById("tiga").hidden = true;
   document.getElementById("btntiga").classList.remove('active'); 
   document.getElementById("empat").hidden = false;
   document.getElementById("btnempat").classList.add('active'); 
   document.getElementById("btnnext").classList.add('disabled'); 
   document.getElementById("prev").setAttribute( "onClick", "javascript: tiga();" );
   document.getElementById("mnext").hidden = false;
   if (video.id = video1_1) {
      video1_1.pause(); 
   }else if (video.id = video1_3) {
      video1_3.pause(); 
   } else if (video.id = video1_4) {
      video1_4.pause(); 
   } else if (video.id = video2_1) {
      video2_1.pause(); 
   } else if (video.id = video2_2) {
      video2_2.pause(); 
   } else if (video.id = video2_3) {
      video2_3.pause(); 
   } else if (video.id = video3_1) {
      video3_1.pause(); 
   } else if (video.id = video4_2) {
      video4_2.pause(); 
   } else if (video.id = video4_3) {
      video4_3.pause(); 
   }
}

window.onload = function awalMateri2(){
   document.getElementById("satu").hidden = false;
   document.getElementById("dua").hidden = true;
   document.getElementById("tiga").hidden = true; 
   document.getElementById("empat").hidden = true;
};

function satu2(){
   document.getElementById("btnprev").classList.add('disabled'); 
   document.getElementById("satu").hidden = false;
   document.getElementById("btnsatu").classList.add('active');
   document.getElementById("dua").hidden = true;
   document.getElementById("btndua").classList.remove('active');
   document.getElementById("next").setAttribute( "onClick", "javascript: dua2();" );
}

function dua2(){
   document.getElementById("btnprev").classList.remove('disabled'); 
   document.getElementById("satu").hidden = true;
   document.getElementById("btnsatu").classList.remove('active');
   document.getElementById("dua").hidden = false;
   document.getElementById("btndua").classList.add('active');
   document.getElementById("btnnext").classList.add('disabled'); 
   document.getElementById("prev").setAttribute( "onClick", "javascript: satu2();" );
   document.getElementById("mnext").hidden = false;
}

window.onload = function awalMateri5(){
    document.getElementById("satu").hidden = false;
    document.getElementById("dua").hidden = true;
    document.getElementById("tiga").hidden = true; 
    document.getElementById("empat").hidden = true; 
    document.getElementById("lima").hidden = true; 
 };
 
 function satu5(){
    document.getElementById("btnprev").classList.add('disabled'); 
    document.getElementById("satu").hidden = false;
    document.getElementById("btnsatu").classList.add('active');
    document.getElementById("dua").hidden = true;
    document.getElementById("btndua").classList.remove('active');
    document.getElementById("tiga").hidden = true;
    document.getElementById("btntiga").classList.remove('active'); 
    document.getElementById("empat").hidden = true;
    document.getElementById("btnempat").classList.remove('active');
    document.getElementById("lima").hidden = true;
    document.getElementById("btnlima").classList.remove('active');
    document.getElementById("next").setAttribute( "onClick", "javascript: dua5();" );
    if (video.id = video1_4) {
       video1_4.pause(); 
    } 
 }
 
 function dua5(){
    document.getElementById("btnprev").classList.remove('disabled'); 
    document.getElementById("satu").hidden = true;
    document.getElementById("btnsatu").classList.remove('active');
    document.getElementById("dua").hidden = false;
    document.getElementById("btndua").classList.add('active');
    document.getElementById("tiga").hidden = true;
    document.getElementById("btntiga").classList.remove('active'); 
    document.getElementById("empat").hidden = true;
    document.getElementById("btnempat").classList.remove('active');
    document.getElementById("lima").hidden = true;
    document.getElementById("btnlima").classList.remove('active');
    document.getElementById("next").setAttribute( "onClick", "javascript: tiga5();" );
    document.getElementById("prev").setAttribute( "onClick", "javascript: satu5();" );
    if (video.id = video4_1) {
       video4_1.pause(); 
    }
 }
 
 function tiga5(){
    document.getElementById("btnprev").classList.remove('disabled'); 
    document.getElementById("satu").hidden = true;
    document.getElementById("btnsatu").classList.remove('active');
    document.getElementById("dua").hidden = true;
    document.getElementById("btndua").classList.remove('active');
    document.getElementById("tiga").hidden = false;
    document.getElementById("btntiga").classList.add('active'); 
    document.getElementById("empat").hidden = true;
    document.getElementById("btnempat").classList.remove('active');
    document.getElementById("lima").hidden = true;
    document.getElementById("btnlima").classList.remove('active'); 
    document.getElementById("next").setAttribute( "onClick", "javascript: empat5();" );
    document.getElementById("prev").setAttribute( "onClick", "javascript: dua5();" );
 }
 
 function empat5(){
    document.getElementById("btnprev").classList.remove('disabled'); 
    document.getElementById("satu").hidden = true;
    document.getElementById("btnsatu").classList.remove('active');
    document.getElementById("dua").hidden = true;
    document.getElementById("btndua").classList.remove('active');
    document.getElementById("tiga").hidden = true;
    document.getElementById("btntiga").classList.remove('active'); 
    document.getElementById("empat").hidden = false;
    document.getElementById("btnempat").classList.add('active');
    document.getElementById("lima").hidden = true;
    document.getElementById("btnlima").classList.remove('active');
    document.getElementById("next").setAttribute( "onClick", "javascript: lima5();" );
    document.getElementById("prev").setAttribute( "onClick", "javascript: tiga5();" );
    if (video.id = video4_1) {
       video4_1.pause(); 
    }
 }

 function lima5(){
    document.getElementById("btnprev").classList.remove('disabled'); 
    document.getElementById("satu").hidden = true;
    document.getElementById("btnsatu").classList.remove('active');
    document.getElementById("dua").hidden = true;
    document.getElementById("btndua").classList.remove('active');
    document.getElementById("tiga").hidden = true;
    document.getElementById("btntiga").classList.remove('active'); 
    document.getElementById("empat").hidden = true;
    document.getElementById("btnempat").classList.remove('active');
    document.getElementById("lima").hidden = false;
    document.getElementById("btnlima").classList.add('active'); 
    document.getElementById("btnnext").classList.add('disabled'); 
    document.getElementById("prev").setAttribute( "onClick", "javascript: empat5();" );
    document.getElementById("mnext").hidden = false;
    if (video.id = video1_4) {
       video1_4.pause(); 
    }
 }


$(function () {
    $('[data-toggle="popover"]').popover('show')
  })

$('#myModal').modal('show');

function allowDrop(ev) {
    ev.preventDefault();
}
  
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
  
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

let bbesi = document.getElementById('bbesi');
let sbesi = document.getElementById('sbesi');

let btembaga = document.getElementById('btembaga');
let stembaga = document.getElementById('stembaga');

let bkuningan = document.getElementById('bkuningan');
let skuningan = document.getElementById('skuningan');

let baluminium = document.getElementById('baluminium');
let saluminium = document.getElementById('saluminium');

let bplastik = document.getElementById('bplastik');
let splastik = document.getElementById('splastik');

let bkertas = document.getElementById('bkertas');
let skertas = document.getElementById('skertas');

let bkayu = document.getElementById('bkayu');
let skayu = document.getElementById('skayu');


// $(function(){
//     setInterval(cek, 1000);
// });
const benar = '<span style="color : green;">Benar</span>'
const salah = '<span style="color : red;">Salah</span>'

function cekBesi() {
    const cekBesi = document.querySelector('.cekBesi');
    if ((bbesi.childElementCount == 1) && (sbesi.childElementCount == 0)) {
        cekBesi.innerHTML = benar;
    } else {
        cekBesi.innerHTML = salah;
    }
}

function cekTembaga() {
    const cekTembaga = document.querySelector('.cekTembaga');
    if ((btembaga.childElementCount == 1) && (stembaga.childElementCount == 0)) {
        cekTembaga.innerHTML = benar;
    } else {
        cekTembaga.innerHTML = salah;
    }
}

function cekKuningan() {
    const cekKuningan = document.querySelector('.cekKuningan');
    if ((bkuningan.childElementCount == 1) && (skuningan.childElementCount == 0)) {
        cekKuningan.innerHTML = benar;
    } else {
        cekKuningan.innerHTML = salah;
    }
}

function cekAluminium() {
    const cekAluminium = document.querySelector('.cekAluminium');
    if ((baluminium.childElementCount == 1) && (saluminium.childElementCount == 0)) {
        cekAluminium.innerHTML = benar;
    } else {
        cekAluminium.innerHTML = salah;
    }
}

function cekPlastik() {
    const cekPlastik = document.querySelector('.cekPlastik');
    if ((bplastik.childElementCount == 1) && (splastik.childElementCount == 0)) {
        cekPlastik.innerHTML = benar;
    } else {
        cekPlastik.innerHTML = salah;
    }
}

function cekKertas() {
    const cekKertas = document.querySelector('.cekKertas');
    if ((bkertas.childElementCount == 1) && (skertas.childElementCount == 0)) {
        cekKertas.innerHTML = benar;
    } else {
        cekKertas.innerHTML = salah;
    }
}

function cekKayu() {
    const cekKayu = document.querySelector('.cekKayu');
    if ((bkayu.childElementCount == 1) && (skayu.childElementCount == 0)) {
        cekKayu.innerHTML = benar;
    } else {
        cekKayu.innerHTML = salah;
    }
}

function cekYa(){
    const jawabcs1 = document.getElementById('jawabcs1');
    jawabcs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                        Jawaban Anda ${salah}<br>
                        <div class="pembahasan2">
                        <u>Pembahasan :</u>
                        </div>
                        Silahkan pilih jawaban yang benar
                        </div>`;
}

function cekTidak(){
    const jawabcs1 = document.getElementById('jawabcs1');
    jawabcs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                        Jawaban Anda ${benar}<br>
                        <div class="pembahasan2">
                        <u>Pembahasan :</u>
                        </div>
                        Tidak semua bahan dapat ditarik oleh Magnet
                        </div>`;
}

let tarik = document.getElementById('tarik');
let tolak = document.getElementById('tolak');

function cekKel(){
    if ((tarik.innerText == 'Besi')&&(tolak.childNodes.length == 6)) {
        const jawabKel = document.getElementById('jawabKel');
        jawabKel.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Hasil percobaan tersebut kita dapat mengetahui bahwa : <br>Bahan yang dapat ditarik : Besi <br>Bahan yang tidak dapat ditarik : Tembaga, Kuningan, Aluminium, Plastik, Kertas dan Kayu
                            </div>`;  
    } else {
        const jawabKel = document.getElementById('jawabKel');
        jawabKel.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${salah}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Silahkan coba kelompokkan lagi bahan yang dapat ditarik dan tidak dapat ditarik magnet
                            </div>`; 
    }
}

function cek1_3cs1B() {
    const jawab1_3cs1 = document.getElementById('jawab1_3cs1');
    jawab1_3cs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Karena kutub magnet sejenis akan tolak menolak jika didekatkan
                            </div>`;
}

function cek1_3cs1S() {
    const jawab1_3cs1 = document.getElementById('jawab1_3cs1');
    jawab1_3cs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${salah}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Silahkan pilih jawaban yang benar
                            </div>`;
}

function cek1_3cs2B() {
    const jawab1_3cs2 = document.getElementById('jawab1_3cs2');
    jawab1_3cs2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Karena kutub magnet tidak sejenis akan tarik menarik jika didekatkan
                            </div>`;
}

function cek1_3cs2S() {
    const jawab1_3cs2 = document.getElementById('jawab1_3cs2');
    jawab1_3cs2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${salah}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Silahkan pilih jawaban yang benar
                            </div>`;
}

function kesim1_3(){
    const kesim1_3 = document.getElementById('kesim1_3').value;    
    kesimpulan1_3.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            <div class="pembahasan2">
                            <u>Kesimpulan :</u>
                            </div>
                            ${kesim1_3}
                            </div>`;
}

function kesim1_4(){
    const kesim1_4 = document.getElementById('kesim1_4').value;    
    kesimpulan1_4.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            <div class="pembahasan2">
                            <u>Kesimpulan :</u>
                            </div>
                            ${kesim1_4}
                            </div>`;
}

function kesim2_1(){
    const kesim2_1 = document.getElementById('kesim2_1').value;    
    kesimpulan2_1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            <div class="pembahasan2">
                            <u>Kesimpulan :</u>
                            </div>
                            ${kesim2_1}
                            </div>`;
}

function kesim2_2(){
    const kesim2_2 = document.getElementById('kesim2_2').value;    
    kesimpulan2_2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            <div class="pembahasan2">
                            <u>Kesimpulan :</u>
                            </div>
                            ${kesim2_2}
                            </div>`;
}

function kesim2_3(){
    const kesim2_3 = document.getElementById('kesim2_3').value;    
    kesimpulan2_3.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            <div class="pembahasan2">
                            <u>Kesimpulan :</u>
                            </div>
                            ${kesim2_3}
                            </div>`;
}

function kesim3_1(){
    const kesim3_1 = document.getElementById('kesim3_1').value;    
    kesimpulan3_1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            <div class="pembahasan2">
                            <u>Kesimpulan :</u>
                            </div>
                            ${kesim3_1}
                            </div>`;
}

function kesim4_1(){
    const kesim4_1 = document.getElementById('kesim4_1').value;    
    kesimpulan4_1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            <div class="pembahasan2">
                            <u>Kesimpulan :</u>
                            </div>
                            ${kesim4_1}
                            </div>`;
}

function kesim4_2(){
    const kesim4_2 = document.getElementById('kesim4_2').value;    
    kesimpulan4_2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            <div class="pembahasan2">
                            <u>Kesimpulan :</u>
                            </div>
                            ${kesim4_2}
                            </div>`;
}

function kesim4_3(){
    const kesim4_3 = document.getElementById('kesim4_3').value;    
    kesimpulan4_3.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            <div class="pembahasan2">
                            <u>Kesimpulan :</u>
                            </div>
                            ${kesim4_3}
                            </div>`;
}

function cek1_4cs1B() {
    const jawab1_4cs1 = document.getElementById('jawab1_4cs1');
    jawab1_4cs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Karena serbuk besi membentuk pola garis gaya magnet
                            </div>`;
}

function cek1_4cs1S() {
    const jawab1_4cs1 = document.getElementById('jawab1_4cs1');
    jawab1_4cs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${salah}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Silahkan pilih jawaban yang benar
                            </div>`;
}

function cek2_1cs1B() {
    const jawab2_1cs1 = document.getElementById('jawab2_1cs1');
    jawab2_1cs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Karena paku besi tidak dapat menarik jepitan kertas sebelum magnet digosokkan terhadap paku besi
                            </div>`;
}

function cek2_1cs1S() {
    const jawab2_1cs1 = document.getElementById('jawab2_1cs1');
    jawab2_1cs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${salah}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Silahkan pilih jawaban yang benar
                            </div>`;
}

function cek2_1cs2B() {
    const jawab2_1cs2 = document.getElementById('jawab2_1cs2');
    jawab2_1cs2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Karena paku besi dapat menarik jepitan kertas setelah magnet digosokkan terhadap paku besi
                            </div>`;
}

function cek2_1cs2S() {
    const jawab2_1cs2 = document.getElementById('jawab2_1cs2');
    jawab2_1cs2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${salah}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Silahkan pilih jawaban yang benar
                            </div>`;
}

function cek2_2cs1B() {
    const jawab2_2cs1 = document.getElementById('jawab2_2cs1');
    jawab2_2cs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Karena paku besi tidak dapat menarik jepitan kertas sebelum paku besi ditempelkan(induksi) terhadap magnet
                            </div>`;
}

function cek2_2cs1S() {
    const jawab2_2cs1 = document.getElementById('jawab2_2cs1');
    jawab2_2cs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${salah}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Silahkan pilih jawaban yang benar
                            </div>`;
}

function cek2_2cs2B() {
    const jawab2_2cs2 = document.getElementById('jawab2_2cs2');
    jawab2_2cs2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Karena paku besi dapat menarik jepitan kertas setelah paku besi ditempelkan(induksi) terhadap magnet
                            </div>`;
}

function cek2_2cs2S() {
    const jawab2_2cs2 = document.getElementById('jawab2_2cs2');
    jawab2_2cs2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${salah}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Silahkan pilih jawaban yang benar
                            </div>`;
}

function cek2_3cs1B() {
    const jawab2_3cs1 = document.getElementById('jawab2_3cs1');
    jawab2_3cs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Karena paku besi tidak dapat menarik jepitan kertas sebelum paku besi dialirkan listrik
                            </div>`;
}

function cek2_3cs1S() {
    const jawab2_3cs1 = document.getElementById('jawab2_3cs1');
    jawab2_3cs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${salah}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Silahkan pilih jawaban yang benar
                            </div>`;
}

function cek2_3cs2B() {
    const jawab2_3cs2 = document.getElementById('jawab2_3cs2');
    jawab2_3cs2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Karena paku besi dapat menarik jepitan kertas setelah paku besi dialirkan listrik
                            </div>`;
}

function cek2_3cs2S() {
    const jawab2_3cs2 = document.getElementById('jawab2_3cs2');
    jawab2_3cs2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${salah}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Silahkan pilih jawaban yang benar
                            </div>`;
}

function cek3_1cs1B() {
    const jawab3_1cs1 = document.getElementById('jawab3_1cs1');
    jawab3_1cs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Karena semua kutub selatan jarum kompas mengarah ke kutub utara bumi
                            </div>`;
}

function cek3_1cs1S() {
    const jawab3_1cs1 = document.getElementById('jawab3_1cs1');
    jawab3_1cs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${salah}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Silahkan pilih jawaban yang benar
                            </div>`;
}

function cek3_1cs2B() {
    const jawab3_1cs2 = document.getElementById('jawab3_1cs2');
    jawab3_1cs2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Karena semua jarum kompas mengarah ke magnet batang
                            </div>`;
}

function cek3_1cs2S() {
    const jawab3_1cs2 = document.getElementById('jawab3_1cs2');
    jawab3_1cs2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${salah}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Silahkan pilih jawaban yang benar
                            </div>`;
}

function cek3_1cs3B() {
    const jawab3_1cs3 = document.getElementById('jawab3_1cs3');
    jawab3_1cs3.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Karena semua kutub selatan jarum kompas mengarah ke kutub utara bumi
                            </div>`;
}

function cek3_1cs3S() {
    const jawab3_1cs3 = document.getElementById('jawab3_1cs3');
    jawab3_1cs3.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${salah}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Silahkan pilih jawaban yang benar
                            </div>`;
}

function cek4_1cs1B() {
    const jawab4_1cs1 = document.getElementById('jawab4_1cs1');
    jawab4_1cs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Karena jarum kompas akan menyimpang dari kawat penghantar yang dialirkan arus listrik
                            </div>`;
}

function cek4_1cs1S() {
    const jawab4_1cs1 = document.getElementById('jawab4_1cs1');
    jawab4_1cs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${salah}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Silahkan pilih jawaban yang benar
                            </div>`;
}

function cek4_2cs1B() {
    const jawab4_2cs1 = document.getElementById('jawab4_2cs1');
    jawab4_2cs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Karena jarum kompas akan menyimpang ketika didekatkan kumparan yang dialiri arus listrik 
                            </div>`;
}

function cek4_2cs1S() {
    const jawab4_2cs1 = document.getElementById('jawab4_2cs1');
    jawab4_2cs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${salah}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Silahkan pilih jawaban yang benar
                            </div>`;
}

function cek4_2cs2B() {
    const jawab4_2cs2 = document.getElementById('jawab4_2cs2');
    jawab4_2cs2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Karena jarum kompas tidak bergerak ketika didekatkan kumparan besi yang dialiri arus listrik
                            </div>`;
}

function cek4_2cs2S() {
    const jawab4_2cs2 = document.getElementById('jawab4_2cs2');
    jawab4_2cs2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${salah}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Silahkan pilih jawaban yang benar
                            </div>`;
}

function cek4_3cs1B() {
    const jawab4_3cs1 = document.getElementById('jawab4_3cs1');
    jawab4_3cs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Karena aluminium foil yang berada di antara magnet U akan melengkung ketika dialiri arus listrik
                            </div>`;
}

function cek4_3cs1S() {
    const jawab4_3cs1 = document.getElementById('jawab4_3cs1');
    jawab4_3cs1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${salah}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Silahkan pilih jawaban yang benar
                            </div>`;
}

function cek4_3cs2B() {
    const jawab4_3cs2 = document.getElementById('jawab4_3cs2');
    jawab4_3cs2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${benar}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Karena aluminium foil melengkung ke atas atau ke bawah tergantung polaritas arus listrik yang dialiri
                            </div>`;
}

function cek4_3cs2S() {
    const jawab4_3cs2 = document.getElementById('jawab4_3cs2');
    jawab4_3cs2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                            Jawaban Anda ${salah}<br>
                            <div class="pembahasan2">
                            <u>Pembahasan :</u>
                            </div>
                            Silahkan pilih jawaban yang benar
                            </div>`;
}

let indeks = document.getElementById("indeks");
indeks.innerHTML = 1;

function soal1(){
    indeks.innerHTML = 1;
    document.getElementById("submit1").hidden = true;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = false;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = true;
    document.getElementById("soal1").classList.add('active','btn-primary');
    document.getElementById("soal1").classList.remove('btn-light');
    document.getElementById("soal2").classList.remove('active','btn-primary');
    document.getElementById("soal2").classList.add('btn-light');
    document.getElementById("soal3").classList.remove('active','btn-primary');
    document.getElementById("soal3").classList.add('btn-light');
    document.getElementById("soal4").classList.remove('active','btn-primary');
    document.getElementById("soal4").classList.add('btn-light');
    document.getElementById("soal5").classList.remove('active','btn-primary');
    document.getElementById("soal5").classList.add('btn-light');
    document.getElementById("soal6").classList.remove('active','btn-primary');
    document.getElementById("soal6").classList.add('btn-light');
    document.getElementById("soal7").classList.remove('active','btn-primary');
    document.getElementById("soal7").classList.add('btn-light');
    document.getElementById("soal8").classList.remove('active','btn-primary');
    document.getElementById("soal8").classList.add('btn-light');
    document.getElementById("soal9").classList.remove('active','btn-primary');
    document.getElementById("soal9").classList.add('btn-light');
    document.getElementById("soal10").classList.remove('active','btn-primary');
    document.getElementById("soal10").classList.add('btn-light');
    document.getElementById("soalNext").setAttribute( "onClick", "javascript: soal2();" );
}

function soal2(){
    indeks.innerHTML = 2;
    document.getElementById("submit1").hidden = true;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = false;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = true;
    document.getElementById("soal1").classList.remove('active','btn-primary');
    document.getElementById("soal1").classList.add('btn-light');
    document.getElementById("soal2").classList.add('active','btn-primary');
    document.getElementById("soal2").classList.remove('btn-light');
    document.getElementById("soal3").classList.remove('active','btn-primary');
    document.getElementById("soal3").classList.add('btn-light');
    document.getElementById("soal4").classList.remove('active','btn-primary');
    document.getElementById("soal4").classList.add('btn-light');
    document.getElementById("soal5").classList.remove('active','btn-primary');
    document.getElementById("soal5").classList.add('btn-light');
    document.getElementById("soal6").classList.remove('active','btn-primary');
    document.getElementById("soal6").classList.add('btn-light');
    document.getElementById("soal7").classList.remove('active','btn-primary');
    document.getElementById("soal7").classList.add('btn-light');
    document.getElementById("soal8").classList.remove('active','btn-primary');
    document.getElementById("soal8").classList.add('btn-light');
    document.getElementById("soal9").classList.remove('active','btn-primary');
    document.getElementById("soal9").classList.add('btn-light');
    document.getElementById("soal10").classList.remove('active','btn-primary');
    document.getElementById("soal10").classList.add('btn-light');
    document.getElementById("soalPrev").setAttribute( "onClick", "javascript: soal1();" );
    document.getElementById("soalNext").setAttribute( "onClick", "javascript: soal3();" );
}

function soal3(){
    indeks.innerHTML = 3;
    document.getElementById("submit1").hidden = true;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = false;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = true;
    document.getElementById("soal1").classList.remove('active','btn-primary');
    document.getElementById("soal1").classList.add('btn-light');
    document.getElementById("soal2").classList.remove('active','btn-primary');
    document.getElementById("soal2").classList.add('btn-light');
    document.getElementById("soal3").classList.add('active','btn-primary');
    document.getElementById("soal3").classList.remove('btn-light');
    document.getElementById("soal4").classList.remove('active','btn-primary');
    document.getElementById("soal4").classList.add('btn-light');
    document.getElementById("soal5").classList.remove('active','btn-primary');
    document.getElementById("soal5").classList.add('btn-light');
    document.getElementById("soal6").classList.remove('active','btn-primary');
    document.getElementById("soal6").classList.add('btn-light');
    document.getElementById("soal7").classList.remove('active','btn-primary');
    document.getElementById("soal7").classList.add('btn-light');
    document.getElementById("soal8").classList.remove('active','btn-primary');
    document.getElementById("soal8").classList.add('btn-light');
    document.getElementById("soal9").classList.remove('active','btn-primary');
    document.getElementById("soal9").classList.add('btn-light');
    document.getElementById("soal10").classList.remove('active','btn-primary');
    document.getElementById("soal10").classList.add('btn-light');
    document.getElementById("soalPrev").setAttribute( "onClick", "javascript: soal2();" );
    document.getElementById("soalNext").setAttribute( "onClick", "javascript: soal4();" );
}

function soal4(){
    indeks.innerHTML = 4;
    document.getElementById("submit1").hidden = true;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = false;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = true;
    document.getElementById("soal1").classList.remove('active','btn-primary');
    document.getElementById("soal1").classList.add('btn-light');
    document.getElementById("soal2").classList.remove('active','btn-primary');
    document.getElementById("soal2").classList.add('btn-light');
    document.getElementById("soal3").classList.remove('active','btn-primary');
    document.getElementById("soal3").classList.add('btn-light');
    document.getElementById("soal4").classList.add('active','btn-primary');
    document.getElementById("soal4").classList.remove('btn-light');
    document.getElementById("soal5").classList.remove('active','btn-primary');
    document.getElementById("soal5").classList.add('btn-light');
    document.getElementById("soal6").classList.remove('active','btn-primary');
    document.getElementById("soal6").classList.add('btn-light');
    document.getElementById("soal7").classList.remove('active','btn-primary');
    document.getElementById("soal7").classList.add('btn-light');
    document.getElementById("soal8").classList.remove('active','btn-primary');
    document.getElementById("soal8").classList.add('btn-light');
    document.getElementById("soal9").classList.remove('active','btn-primary');
    document.getElementById("soal9").classList.add('btn-light');
    document.getElementById("soal10").classList.remove('active','btn-primary');
    document.getElementById("soal10").classList.add('btn-light');
    document.getElementById("soalPrev").setAttribute( "onClick", "javascript: soal3();" );
    document.getElementById("soalNext").setAttribute( "onClick", "javascript: soal5();" );
}

function soal5(){
    indeks.innerHTML = 5;
    document.getElementById("submit1").hidden = true;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = false;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = true;
    document.getElementById("soal1").classList.remove('active','btn-primary');
    document.getElementById("soal1").classList.add('btn-light');
    document.getElementById("soal2").classList.remove('active','btn-primary');
    document.getElementById("soal2").classList.add('btn-light');
    document.getElementById("soal3").classList.remove('active','btn-primary');
    document.getElementById("soal3").classList.add('btn-light');
    document.getElementById("soal4").classList.remove('active','btn-primary');
    document.getElementById("soal4").classList.add('btn-light');
    document.getElementById("soal5").classList.add('active','btn-primary');
    document.getElementById("soal5").classList.remove('btn-light');
    document.getElementById("soal6").classList.remove('active','btn-primary');
    document.getElementById("soal6").classList.add('btn-light');
    document.getElementById("soal7").classList.remove('active','btn-primary');
    document.getElementById("soal7").classList.add('btn-light');
    document.getElementById("soal8").classList.remove('active','btn-primary');
    document.getElementById("soal8").classList.add('btn-light');
    document.getElementById("soal9").classList.remove('active','btn-primary');
    document.getElementById("soal9").classList.add('btn-light');
    document.getElementById("soal10").classList.remove('active','btn-primary');
    document.getElementById("soal10").classList.add('btn-light');
    document.getElementById("soalPrev").setAttribute( "onClick", "javascript: soal4();" );
    document.getElementById("soalNext").setAttribute( "onClick", "javascript: soal6();" );
}

function soal6(){
    indeks.innerHTML = 6;
    document.getElementById("submit1").hidden = true;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = false;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = true;
    document.getElementById("soal1").classList.remove('active','btn-primary');
    document.getElementById("soal1").classList.add('btn-light');
    document.getElementById("soal2").classList.remove('active','btn-primary');
    document.getElementById("soal2").classList.add('btn-light');
    document.getElementById("soal3").classList.remove('active','btn-primary');
    document.getElementById("soal3").classList.add('btn-light');
    document.getElementById("soal4").classList.remove('active','btn-primary');
    document.getElementById("soal4").classList.add('btn-light');
    document.getElementById("soal5").classList.remove('active','btn-primary');
    document.getElementById("soal5").classList.add('btn-light');
    document.getElementById("soal6").classList.add('active','btn-primary');
    document.getElementById("soal6").classList.remove('btn-light');
    document.getElementById("soal7").classList.remove('active','btn-primary');
    document.getElementById("soal7").classList.add('btn-light');
    document.getElementById("soal8").classList.remove('active','btn-primary');
    document.getElementById("soal8").classList.add('btn-light');
    document.getElementById("soal9").classList.remove('active','btn-primary');
    document.getElementById("soal9").classList.add('btn-light');
    document.getElementById("soal10").classList.remove('active','btn-primary');
    document.getElementById("soal10").classList.add('btn-light');
    document.getElementById("soalPrev").setAttribute( "onClick", "javascript: soal5();" );
    document.getElementById("soalNext").setAttribute( "onClick", "javascript: soal7();" );
}

function soal7(){
    indeks.innerHTML = 7;
    document.getElementById("submit1").hidden = true;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = false;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = true;
    document.getElementById("soal1").classList.remove('active','btn-primary');
    document.getElementById("soal1").classList.add('btn-light');
    document.getElementById("soal2").classList.remove('active','btn-primary');
    document.getElementById("soal2").classList.add('btn-light');
    document.getElementById("soal3").classList.remove('active','btn-primary');
    document.getElementById("soal3").classList.add('btn-light');
    document.getElementById("soal4").classList.remove('active','btn-primary');
    document.getElementById("soal4").classList.add('btn-light');
    document.getElementById("soal5").classList.remove('active','btn-primary');
    document.getElementById("soal5").classList.add('btn-light');
    document.getElementById("soal6").classList.remove('active','btn-primary');
    document.getElementById("soal6").classList.add('btn-light');
    document.getElementById("soal7").classList.add('active','btn-primary');
    document.getElementById("soal7").classList.remove('btn-light');
    document.getElementById("soal8").classList.remove('active','btn-primary');
    document.getElementById("soal8").classList.add('btn-light');
    document.getElementById("soal9").classList.remove('active','btn-primary');
    document.getElementById("soal9").classList.add('btn-light');
    document.getElementById("soal10").classList.remove('active','btn-primary');
    document.getElementById("soal10").classList.add('btn-light');
    document.getElementById("soalPrev").setAttribute( "onClick", "javascript: soal6();" );
    document.getElementById("soalNext").setAttribute( "onClick", "javascript: soal8();" );
}

function soal8(){
    indeks.innerHTML = 8;
    document.getElementById("submit1").hidden = true;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = false;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = true;
    document.getElementById("soal1").classList.remove('active','btn-primary');
    document.getElementById("soal1").classList.add('btn-light');
    document.getElementById("soal2").classList.remove('active','btn-primary');
    document.getElementById("soal2").classList.add('btn-light');
    document.getElementById("soal3").classList.remove('active','btn-primary');
    document.getElementById("soal3").classList.add('btn-light');
    document.getElementById("soal4").classList.remove('active','btn-primary');
    document.getElementById("soal4").classList.add('btn-light');
    document.getElementById("soal5").classList.remove('active','btn-primary');
    document.getElementById("soal5").classList.add('btn-light');
    document.getElementById("soal6").classList.remove('active','btn-primary');
    document.getElementById("soal6").classList.add('btn-light');
    document.getElementById("soal7").classList.remove('active','btn-primary');
    document.getElementById("soal7").classList.add('btn-light');
    document.getElementById("soal8").classList.add('active','btn-primary');
    document.getElementById("soal8").classList.remove('btn-light');
    document.getElementById("soal9").classList.remove('active','btn-primary');
    document.getElementById("soal9").classList.add('btn-light');
    document.getElementById("soal10").classList.remove('active','btn-primary');
    document.getElementById("soal10").classList.add('btn-light');
    document.getElementById("soalPrev").setAttribute( "onClick", "javascript: soal7();" );
    document.getElementById("soalNext").setAttribute( "onClick", "javascript: soal9();" );
}

function soal9(){
    indeks.innerHTML = 9;
    document.getElementById("submit1").hidden = true;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = false;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = false;
    document.getElementById("id10").hidden = true;
    document.getElementById("soal1").classList.remove('active','btn-primary');
    document.getElementById("soal1").classList.add('btn-light');
    document.getElementById("soal2").classList.remove('active','btn-primary');
    document.getElementById("soal2").classList.add('btn-light');
    document.getElementById("soal3").classList.remove('active','btn-primary');
    document.getElementById("soal3").classList.add('btn-light');
    document.getElementById("soal4").classList.remove('active','btn-primary');
    document.getElementById("soal4").classList.add('btn-light');
    document.getElementById("soal5").classList.remove('active','btn-primary');
    document.getElementById("soal5").classList.add('btn-light');
    document.getElementById("soal6").classList.remove('active','btn-primary');
    document.getElementById("soal6").classList.add('btn-light');
    document.getElementById("soal7").classList.remove('active','btn-primary');
    document.getElementById("soal7").classList.add('btn-light');
    document.getElementById("soal8").classList.remove('active','btn-primary');
    document.getElementById("soal8").classList.add('btn-light');
    document.getElementById("soal9").classList.add('active','btn-primary');
    document.getElementById("soal9").classList.remove('btn-light');
    document.getElementById("soal10").classList.remove('active','btn-primary');
    document.getElementById("soal10").classList.add('btn-light');
    document.getElementById("soalPrev").setAttribute( "onClick", "javascript: soal8();" );
    document.getElementById("soalNext").setAttribute( "onClick", "javascript: soal10();" );
}

function soal10(){
    indeks.innerHTML = 10;
    document.getElementById("soalPrev").hidden = false;
    document.getElementById("soalNext").hidden = true;
    document.getElementById("id1").hidden = true;
    document.getElementById("id2").hidden = true;
    document.getElementById("id3").hidden = true;
    document.getElementById("id4").hidden = true;
    document.getElementById("id5").hidden = true;
    document.getElementById("id6").hidden = true;
    document.getElementById("id7").hidden = true;
    document.getElementById("id8").hidden = true;
    document.getElementById("id9").hidden = true;
    document.getElementById("id10").hidden = false;
    document.getElementById("soal1").classList.remove('active','btn-primary');
    document.getElementById("soal1").classList.add('btn-light');
    document.getElementById("soal2").classList.remove('active','btn-primary');
    document.getElementById("soal2").classList.add('btn-light');
    document.getElementById("soal3").classList.remove('active','btn-primary');
    document.getElementById("soal3").classList.add('btn-light');
    document.getElementById("soal4").classList.remove('active','btn-primary');
    document.getElementById("soal4").classList.add('btn-light');
    document.getElementById("soal5").classList.remove('active','btn-primary');
    document.getElementById("soal5").classList.add('btn-light');
    document.getElementById("soal6").classList.remove('active','btn-primary');
    document.getElementById("soal6").classList.add('btn-light');
    document.getElementById("soal7").classList.remove('active','btn-primary');
    document.getElementById("soal7").classList.add('btn-light');
    document.getElementById("soal8").classList.remove('active','btn-primary');
    document.getElementById("soal8").classList.add('btn-light');
    document.getElementById("soal9").classList.remove('active','btn-primary');
    document.getElementById("soal9").classList.add('btn-light');
    document.getElementById("soal10").classList.add('active','btn-primary');
    document.getElementById("soal10").classList.remove('btn-light');
    document.getElementById("soalPrev").setAttribute( "onClick", "javascript: soal9();" );
    document.getElementById("submit1").hidden = false;
}
