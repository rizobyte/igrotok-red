var abv = document.createElement('iframe');
abv.style.position = "fixed";
abv.style.zIndex = "9999";
abv.style.width = "400px";
abv.style.height = "225px";
abv.id = "abv";

var settings = document.createElement('div');
settings.style.bottom = "20px";
settings.style.right = "20px";
settings.style.backgroundColor = "white";
settings.style.height = "300px";
settings.style.width = "200px";
settings.style.position = "fixed";
settings.style.zIndex = "9999";

var t1 = document.createElement('p');
t1.textContent = "Прозрачность";

var t2 = document.createElement('p');
t2.textContent = "Плейлисты";

var t3 = document.createElement('p');
t3.textContent = "отступ сверху";


var op1 = document.createElement('input');
op1.type = "range";
op1.min = "0";
op1.max = "10";
op1.value = "10";
op1.style.textAlign = "center";
op1.onchange = function () {
    based.style.opacity = proz.value / 10;
};
op1.id = "proz";

var op2 = document.createElement('input');
op2.type = "range";
op2.min = "960";
op2.max = "1080";
op2.value = "960";
op2.style.textAlign = "center";
op2.onchange = function () {
    based.style.marginTop = 0 - otst.value + "px";
};
op2.id = "otst";

var input1 = document.createElement('button');
input1.style.backgroundColor = "#1A1A1D";
input1.style.padding = "3px";
input1.style.color = "white";
input1.style.margin = "3px";
input1.textContent = "reddit";
input1.onclick = function () {
    abv.src = "https://www.youtube.com/embed/videoseries?controls=0&amp;list=PL_Q4LcI_jwLXSLkrlk-EJJuc_BEgQ2C-q";
};

var input2 = document.createElement('button');
input2.style.backgroundColor = "#1A1A1D";
input2.style.padding = "3px";
input2.style.color = "white";
input2.style.margin = "3px";
input2.textContent = "добряк";
input2.onclick = function () {
    abv.src = "https://www.youtube.com/embed/videoseries?controls=0&amp;list=PLVMTHi1zZK2mumEx_NT0sU0ioighvotT_";
};


var based = document.createElement('div');
based.style.display = "flex";
based.style.justifyContent = "center";
based.style.marginTop = "-960px";
based.id = "based";

settings.appendChild(t1);
settings.appendChild(op1);

settings.appendChild(t2);
settings.appendChild(input1);
settings.appendChild(input2);

settings.appendChild(t3);
settings.appendChild(op2);

based.appendChild(abv);
document.body.appendChild(settings);
document.body.appendChild(based);
