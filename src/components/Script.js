let kullanicilar = [
    { kullaniciAdi: "admin", parola: "admin" },
    { kullaniciAdi: "berkant", parola: "1234" },
   
];

let girilenKullaniciAdi;
let girilenParola;
let x;



function kontrolEt() {
    girilenKullaniciAdi = document.getElementById("username").value;
    girilenParola = document.getElementById("password").value;
    console.log(girilenKullaniciAdi)
    console.log(girilenParola)
    
    for (x of kullanicilar) {
        console.log(x);
        if ((x.kullaniciAdi == girilenKullaniciAdi) && (x.parola == girilenParola)) {
         
             return true;


        }
        
    }
    return false
}

    function girisOnayi() {

        if (kontrolEt()){
            // alert("Giriş Başarılı");
            let div = document.getElementById("div")
            div.style =("visibility = visible ")
            div.style.color = 'green';
            div.innerHTML = "Giriş Başarılı"

        }
        else{
            let div = document.getElementById("div")
            div.style =("visibility = visible background = red")
            div.style.color = 'red';
            div.innerHTML = "Kullanıcı adı veya şifre yanlış"
            // alert("Hatalı kullanıcı Adı veya Şifre")
        }


    }







