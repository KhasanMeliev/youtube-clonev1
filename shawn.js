var profile = [
  {
    img: "https://yt3.ggpht.com/QTpsceScLWmzgZXO6lPJo-s0CzCaGoat2S8PZzfdKtvqJTUh7jCLtYvCPH1RbUzVCOz2t_RIqIA=s900-c-k-c0x00ffffff-no-rj",
    name: "Shawn Mendes",
    subscribers: "28.4M subscribers",
  },
 
];
function profiles(data) {
  var channel = document.getElementById("channel");

  for (var i = 0; i < data.length; i++) {
    var chan = data[i];

    var output = `<img src=${chan.img} alt="profilepicture" id="channelpic">
         <p id="channelname">${chan.name}</p>
         <p id="subscribers">${chan.subscribers}</p>
         <button id="subscribe" onclick="subscribeed()">SUBSCRIBE</button>
       <div id="header">
       <ul>
       <li>HOME</li>
       <li id="active">VIDEOS</li>
       <li>PLAYLISTS</li>
       <li>COMMUNITY</li>
       <li>CHANNELS</li>
       <li>ABOUT</li>
     </ul>
       </div>
        `;
    console.log(data[i]);
    channel.innerHTML += output;
  }
}

window.onload = function () {
  profiles(profile);
};

function subscribeed() {
  document.getElementById("subscribe").innerHTML = "SUBSCRIBED";
  document.getElementById("subscribe").style.backgroundColor =
    "rgb(163, 148, 148)";
}
