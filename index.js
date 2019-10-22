var giphy = document.getElementById('giphy');
var giphyS = document.getElementById('giphyS');
var request = new XMLHttpRequest();
request.onreadystatechange = function req() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.responseText);
        datas = response.data;
        datas.forEach(function (data) {
            var gif = document.createElement('img');
            var gifurl = data.images.fixed_height.url;
            gif.setAttribute('src', gifurl);
            giphy.appendChild(gif);
        });
    }
};
request.open("GET", "https://api.giphy.com/v1/gifs/trending?q=lol&limit=25&api_key=ERNsPAJs1ZEGQ86y6CYQlV1JbvO6QOFh&limit=10");
request.send();


document.getElementById('btnSearch').addEventListener('click', function (e) {
    e.preventDefault();
    giphy.style.display = 'none';
    giphyS.style.display = 'block';
    giphyS.innerHTML = '';
    document.querySelector('.title p').style.display='none';

    var inputS = document.getElementById('inputS').value;

    var requestS = new XMLHttpRequest();
    requestS.onreadystatechange = function req() {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            var response = JSON.parse(this.responseText);
            datas = response.data;
            datas.forEach(function (data) {
                var gif = document.createElement('img');
                var gifurl = data.images.fixed_height.url;
                gif.setAttribute('src', gifurl);
                giphyS.appendChild(gif);
            });
        }
    };
    requestS.open("GET", "https://api.giphy.com/v1/gifs/search?q="+ inputS +"&limit=25&api_key=ERNsPAJs1ZEGQ86y6CYQlV1JbvO6QOFh&limit=10");
    requestS.send();
});


document.getElementById('logo').addEventListener('click',function(){
    giphy.style.display = 'block';
    giphyS.style.display = 'none';
    document.querySelector('.title p').style.display='block';
})
