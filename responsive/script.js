const phone = document.getElementById("phone");
const device = document.getElementById("device");
const zoom = document.getElementById("zoom");
const zoomText = document.getElementById("zoomText");
const size = document.getElementById("size");
const rotate = document.getElementById("rotate");
const slider = document.getElementById("slider");

const devices = {
  responsive:[390,844],
  "iphone-se":[375,667],
  "iphone-xr":[414,896],
  "iphone-12":[390,844],
  "iphone-13":[390,844],
  "iphone-14":[390,844],
  "iphone-15":[393,852],
  "iphone-15pm":[430,932],

  pixel6:[412,915],
  pixel7:[412,915],
  pixel8:[412,915],
  pixel9:[412,915],

  s21:[384,854],
  s22:[384,854],
  s23:[393,873],
  s24:[412,915],

  oneplus11:[412,919],
  oneplus12:[450,950],

  xiaomi14:[393,852],
  redmi13:[393,851],

  vivo:[393,852],
  oppo:[412,915],

  ipad:[768,1024],
  ipadpro:[1024,1366],
  surface:[912,1368]
};

function updateSize(){
  size.innerHTML =
    Math.round(phone.offsetWidth) +
    " × " +
    Math.round(phone.offsetHeight);
}

device.onchange = function(){

  let d = devices[this.value];

  phone.style.width = d[0]+"px";
  phone.style.height = d[1]+"px";

  updateSize();

};

zoom.oninput = function(){

  zoomText.innerHTML = this.value+"%";

  phone.style.transform =
  `scale(${this.value/100})`;

};

let rotateValue = 0;

rotate.onclick = function(){

  rotateValue += 90;

  phone.style.transform =
  `scale(${zoom.value/100}) rotate(${rotateValue}deg)`;

};

phone.addEventListener("wheel",function(e){

e.preventDefault();

let value = Number(zoom.value);

if(e.deltaY < 0){

value += 5;

}else{

value -= 5;

}

if(value < 50) value = 50;
if(value > 200) value = 200;

zoom.value = value;

zoomText.innerHTML = value+"%";

phone.style.transform =
`scale(${value/100}) rotate(${rotateValue}deg)`;

});

const images = [

"https://picsum.photos/id/1015/500/300",
"https://picsum.photos/id/1016/500/300",
"https://picsum.photos/id/1018/500/300",
"https://picsum.photos/id/1025/500/300",
"https://picsum.photos/id/1035/500/300",
"https://picsum.photos/id/1043/500/300",
"https://picsum.photos/id/1050/500/300"

];

let i = 0;

setInterval(()=>{

i++;

if(i>=images.length){

i=0;

}

slider.src = images[i];

},3000);

const resizeObserver = new ResizeObserver(()=>{
updateSize();
});

resizeObserver.observe(phone);

updateSize();const phone = document.getElementById("phone");
const device = document.getElementById("device");
const zoom = document.getElementById("zoom");
const zoomText = document.getElementById("zoomText");
const size = document.getElementById("size");
const rotate = document.getElementById("rotate");
const slider = document.getElementById("slider");

const devices = {
  responsive:[390,844],
  "iphone-se":[375,667],
  "iphone-xr":[414,896],
  "iphone-12":[390,844],
  "iphone-13":[390,844],
  "iphone-14":[390,844],
  "iphone-15":[393,852],
  "iphone-15pm":[430,932],

  pixel6:[412,915],
  pixel7:[412,915],
  pixel8:[412,915],
  pixel9:[412,915],

  s21:[384,854],
  s22:[384,854],
  s23:[393,873],
  s24:[412,915],

  oneplus11:[412,919],
  oneplus12:[450,950],

  xiaomi14:[393,852],
  redmi13:[393,851],

  vivo:[393,852],
  oppo:[412,915],

  ipad:[768,1024],
  ipadpro:[1024,1366],
  surface:[912,1368]
};

function updateSize(){
  size.innerHTML =
    Math.round(phone.offsetWidth) +
    " × " +
    Math.round(phone.offsetHeight);
}

device.onchange = function(){

  let d = devices[this.value];

  phone.style.width = d[0]+"px";
  phone.style.height = d[1]+"px";

  updateSize();

};

zoom.oninput = function(){

  zoomText.innerHTML = this.value+"%";

  phone.style.transform =
  `scale(${this.value/100})`;

};

let rotateValue = 0;

rotate.onclick = function(){

  rotateValue += 90;

  phone.style.transform =
  `scale(${zoom.value/100}) rotate(${rotateValue}deg)`;

};

phone.addEventListener("wheel",function(e){

e.preventDefault();

let value = Number(zoom.value);

if(e.deltaY < 0){

value += 5;

}else{

value -= 5;

}

if(value < 50) value = 50;
if(value > 200) value = 200;

zoom.value = value;

zoomText.innerHTML = value+"%";

phone.style.transform =
`scale(${value/100}) rotate(${rotateValue}deg)`;

});

const images = [

"https://picsum.photos/id/1015/500/300",
"https://picsum.photos/id/1016/500/300",
"https://picsum.photos/id/1018/500/300",
"https://picsum.photos/id/1025/500/300",
"https://picsum.photos/id/1035/500/300",
"https://picsum.photos/id/1043/500/300",
"https://picsum.photos/id/1050/500/300"

];

let i = 0;

setInterval(()=>{

i++;

if(i>=images.length){

i=0;

}

slider.src = images[i];

},3000);

const resizeObserver = new ResizeObserver(()=>{
updateSize();
});

resizeObserver.observe(phone);

updateSize();