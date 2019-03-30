// function tambah() {
//        val = document.getElementsByName('nilai')[0].value;
//     document.getElementsByName('nilai')[0].value += "+";
// }

// function hitung(){
//   val = document.getElementsByName('nilai')[0].value;
//   document.getElementsByName('hasil')[0].value = eval(val);
// }

function tambah() {
    val = document.querySelector('#nilai').value;
    document.querySelector('#nilai').value += "+";
}

function kurang() {
    val = document.querySelector('#nilai').value;
    document.querySelector('#nilai').value += "-";
}

function kali() {
    val = document.querySelector('#nilai').value;
    document.querySelector('#nilai').value += "*";
}

function bagi() {
    val = document.querySelector('#nilai').value;
    document.querySelector('#nilai').value += "/";
}

function hapus(){
    document.querySelector('#nilai').value = "";
}

function hitung(){
    val = document.querySelector('#nilai').value;
    //   document.querySelector('#hasil').value = eval(val);
      document.querySelector('#hasil').innerHTML = eval(val);

}