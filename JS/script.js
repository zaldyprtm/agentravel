function validateForm() {
    const name = document.forms['form-input']['name-input'].value;
    const email = document.forms['form-input']['email-input'].value;
    const select = document.forms['form-input']['select-input'].value;

    if (name == "" || email == "" || select == "")  {
        if(name == "") {
            document.getElementById('error-name').innerHTML = '*Masukan Nama';
            document.getElementById('error-name').style.color = 'red';
        } else {
            document.getElementById('error-name').innerHTML = "";
        }

        if (email == "")    {
            document.getElementById('error-email').innerHTML = "*Masukan Email";
            document.getElementById('error-email').style.color = 'red';
        } else {
            document.getElementById('error-email').innerHTML = "";
        }

        if (select == "")   {
            document.getElementById('error-select').innerHTML = "Anda belum memilih destinasi";
            document.getElementById('error-select').style.color = 'red'; 
        } else {
            document.getElementById('error-select').innerHTML = "";
        }

        return false

    } else {
        clearField();
        alert('Terima Kasih, kami akan memproses form anda');
    }

    function clearField()   {
        document.getElementById('error-name').innerHTML = "";
        document.getElementById('error-email').innerHTML = "";
        document.getElementById('error-select').innerHTML = "";
    }

}

var img = document.getElementById('img')

var images = [
    "assets/belitung.jpg",
    "assets/bali.jpg",
    "assets/jepang.jpg",
    "assets/labuanbajo.jpg",
];

var startImage = 0;

function slider()   {
    if (startImage < images.length) {
        startImage = startImage +1;
    }else   {
        startImage = 1;
    }

    img.innerHTML = "<img src=" + images[startImage - 1] + ">";
}
setInterval(slider, 3000);
