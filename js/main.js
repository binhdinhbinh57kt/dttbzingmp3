const appMainNavbarItems = $$('.app__main-navbar--item')
const appMainContentItems = $$('.app__main-content--item')
const artistActionCares = $$('.artist__action-care')
const artistActionDontCares = $$('.artist__action-dontcare')
const appHeartNoactions = $$('.app__heart--notaction')
const appHeartActions = $$('.app__heart--action')
const tabHomeItemsTitles = $$('.home__item-title')
const zingChartExpandBtn = $('.zingchart__expand-btn')
const zingChartItems = $$('.zingchart__item')


const songImgs = $$('.home__song-item--description')
const songPlays = $$('.song__img-play')
const songPlayings = $$('.song__img-playing')

songImgs.forEach((songImg,index) => {
    const songPlay = songPlays[index]
    const songPlaying = songPlayings[index]
    songImg.onclick = function() {
        if(songPlaying.style.display = "none") {
            songPlaying.style.display = "block"
            songPlay.style.display = "none"
        }
    }
})





appHeartNoactions.forEach((appHeartNoaction,index) => {
    const appHeartAction = appHeartActions[index]
    appHeartNoaction.onclick = function() {
        if(appHeartAction.style.display = "none") {
            appHeartAction.style.display = "block"
            appHeartNoaction.style.display = "none"
        }
    }
})

appHeartActions.forEach((appHeartAction,index) => {
    const appHeartNoaction = appHeartNoactions[index]
    appHeartAction.onclick = function() {
        if(appHeartNoaction.style.display = "none") {
            appHeartNoaction.style.display = "block"
            appHeartAction.style.display = "none"
        }
    }
})

// CARE
artistActionDontCares.forEach((artistActionDontCare,index) => {
    const artistActionCare = artistActionCares[index]
    artistActionDontCare.onclick = function() {
        if(artistActionCare.style.display = "none") {
            artistActionCare.style.display = "block"
            artistActionDontCare.style.display = "none"
        }
    }
})

artistActionCares.forEach((artistActionCare,index) => {
    const  artistActionDontCare =  artistActionDontCares[index]
    artistActionCare.onclick = function() {
        if(artistActionDontCare.style.display = "none") {
            artistActionDontCare.style.display = "block"
            artistActionCare.style.display = "none"
        }
    }
})

appMainNavbarItems.forEach((appMainNavbarItem,index) => {
    const appMainContentItem = appMainContentItems[index]

    appMainNavbarItem.onclick = function(e) {
        $('.app__main-navbar--item.active').classList.remove('active')
        appMainNavbarItem.classList.add('active')
        $('.app__main-content--item.active').classList.remove('active')
        appMainContentItem.classList.add('active')
    }
})

tabHomeItemsTitles.forEach((tabHomeItemsTitle,index) => {
    const appMainNavbarItem =  appMainNavbarItems[index+1]
    const  appMainContentItem =  appMainContentItems[index+1]
    tabHomeItemsTitle.onclick = function(e) {
        $('.app__main-navbar--item.active').classList.remove('active')
        appMainNavbarItem.classList.add('active')
        $('.app__main-content--item.active').classList.remove('active')
        appMainContentItem.classList.add('active')
    }
})


var widthWindow = window.innerWidth
// // HOME PLAYLIST
const playlistShowSlideHide = $('.playlist__show-slide--hide')
const playlistShowSlidePlus = $('.playlist__show-slide--plus')
playlistShowSlideHide.onclick = function() {
    plusPlaylistSlides(-1)
}

playlistShowSlidePlus.onclick = function() {
    plusPlaylistSlides(1)
}

let slidesPlaylist = document.getElementsByClassName("home__playlist-item");
let slideIndexPlayList = 1;

if (widthWindow > 1480) {
    let numberSlideShow = 5;
    let numberSlideShowMinus = numberSlideShow - 1;
    showSlides(slideIndexPlayList);
    function plusPlaylistSlides(n) {
        slideIndexPlayList += n;
        if (slideIndexPlayList < 1) {
            slideIndexPlayList = 1;
        }
        if (slideIndexPlayList > slidesPlaylist.length - numberSlideShowMinus) {
            slideIndexPlayList = slidesPlaylist.length - numberSlideShowMinus;
        }
        showSlides(slideIndexPlayList);
    }
    function showSlides(n) {
        let i;
        let b = 1;
        let a = n + numberSlideShow;
        if (n < 1) {
            n = 1;
        }
        if (n > 1) {
            $('.playlist__show-slide--hide').style.color = "white";
        } else {
            $('.playlist__show-slide--hide').style.color = "rgb(85,79,94)";
        }
        if (n === slidesPlaylist.length - numberSlideShowMinus) {
            $('.playlist__show-slide--plus').style.color = "rgb(85,79,94)";
        }
        else {
            $('.playlist__show-slide--plus').style.color = "white";
        }
        if (n > slidesPlaylist.length - numberSlideShowMinus) {
            n = slidesPlaylist.length - numberSlideShowMinus
            a = n + numberSlideShow;
        }
        if (a < b + numberSlideShow) {
            a = b + numberSlideShow
        }
        for (i = 0; i < slidesPlaylist.length; i++) {
            slidesPlaylist[i].style.display = "none";
        }
        for (n; n < a; n++) {
            slidesPlaylist[n-1].style.display = "block";
        }  
    } 
}



// // HOME ALBUM
const albumShowSlideHide = $('.album__show-slide--hide')
const albumShowSlidePlus = $('.album__show-slide--plus')
albumShowSlideHide.onclick = function() {
    plusAlbumSlides(-1)
}
albumShowSlidePlus.onclick = function() {
    plusAlbumSlides(1)
}
let slidesAlbum = document.getElementsByClassName("home__album-item");
let slideIndexAlbum = 1;

if (widthWindow > 1480) {
    let numberSlideShowAlbum = 5;
    let numberSlideShowAlbumMinus = numberSlideShowAlbum - 1;
    showSlides(slideIndexAlbum);
    function plusAlbumSlides(n) {
        slideIndexAlbum += n;
        if (slideIndexAlbum < 1) {
            slideIndexAlbum = 1;
        }
        if (slideIndexAlbum > slidesAlbum.length - numberSlideShowAlbumMinus) {
            slideIndexAlbum = slidesAlbum.length - numberSlideShowAlbumMinus;
        }
        showSlides(slideIndexAlbum);
    }
    function showSlides(n) {
        let i;
        let b = 1;
        let a = n + numberSlideShowAlbum;
        if (n < 1) {
            n = 1;
        }
        if (n > 1) {
            $('.album__show-slide--hide').style.color = "white";
        } else {
            $('.album__show-slide--hide').style.color = "rgb(85,79,94)";
        }
        if (n === slidesAlbum.length - numberSlideShowAlbumMinus) {
            $('.album__show-slide--plus').style.color = "rgb(85,79,94)";
        }
        else {
            $('.album__show-slide--plus').style.color = "white";
        }
        if (n > slidesAlbum.length - numberSlideShowAlbumMinus) {
            n = slidesAlbum.length - numberSlideShowAlbumMinus
            a = n + numberSlideShowAlbum;
        }
        if (a < b + numberSlideShowAlbum) {
            a = b + numberSlideShowAlbum
        }
        for (i = 0; i < slidesAlbum.length; i++) {
            slidesAlbum[i].style.display = "none";
        }
        for (n; n < a; n++) {
            slidesAlbum[n-1].style.display = "block";
        } 
    } 
}


// HOME MV
const mvShowSlideHide = $('.mv__show-slide--hide')
const mvShowSlidePlus = $('.mv__show-slide--plus')
mvShowSlideHide.onclick = function() {
    plusMvSlides(-1)
}
mvShowSlidePlus.onclick = function() {
    plusMvSlides(1)
}
let slidesMv = document.getElementsByClassName("home__mv-item");
let slideIndexMv = 1;
if (widthWindow > 1110) {
    let numberSlideShowMv = 3;
    let numberSlideShowMvMinus = numberSlideShowMv - 1;
    showSlides(slideIndexMv);
    function plusMvSlides(n) {
        slideIndexMv += n;
        if (slideIndexMv < 1) {
            slideIndexMv = 1;
        }
        if (slideIndexMv > slidesMv.length - numberSlideShowMvMinus) {
             slideIndexMv = slidesMv.length - numberSlideShowMvMinus;
        }
         showSlides(slideIndexMv);
    }
    function showSlides(n) {
        let i;
        let b = 1;
        let a = n + numberSlideShowMv;
        if (n < 1) {
            n = 1;
        }
        if (n > 1) {
            $('.mv__show-slide--hide').style.color = "white";
        } else {
            $('.mv__show-slide--hide').style.color = "rgb(85,79,94)";
        }
        if (n === slidesMv.length - numberSlideShowMvMinus) {
            $('.mv__show-slide--plus').style.color = "rgb(85,79,94)";
        }
        else {
            $('.mv__show-slide--plus').style.color = "white";
        }
        if (n > slidesMv.length - numberSlideShowMvMinus) {
            n = slidesMv.length - numberSlideShowMvMinus
            a = n + numberSlideShowMv;
        }
        if (a < b + numberSlideShowMv) {
            a = b + numberSlideShowMv
        }
        for (i = 0; i < slidesMv.length; i++) {
            slidesMv[i].style.display = "none";
        }
        for (n; n < a; n++) {
            slidesMv[n-1].style.display = "block";
        } 
    } 
}



// // ARTIST ALBUM
const artistShowSlideHide = $('.artist__show-slide--hide')
const artistShowSlidePlus = $('.artist__show-slide--plus')
artistShowSlideHide.onclick = function() {
    plusArtistSlides(-1)
}
artistShowSlidePlus.onclick = function() {
    plusArtistSlides(1)
}
let slidesArtist = document.getElementsByClassName("home__artist-item");
let slideIndexArtist = 1;

if (widthWindow > 1480) {
    let numberSlideShowArtist = 5;
    let numberSlideShowArtistMinus = numberSlideShowArtist - 1;
    showSlides(slideIndexArtist);
    function plusArtistSlides(n) {
        slideIndexArtist += n;
        if (slideIndexArtist < 1) {
            slideIndexArtist = 1;
        }
        if (slideIndexArtist > slidesArtist.length - numberSlideShowArtistMinus) {
            slideIndexArtist = slidesArtist.length - numberSlideShowArtistMinus;
        }
        showSlides(slideIndexArtist);
    }
    function showSlides(n) {
        let i;
        let b = 1;
        let a = n + numberSlideShowArtist;
        if (n < 1) {
            n = 1;
        }
        if (n > 1) {
            $('.artist__show-slide--hide').style.color = "white";
        } else {
            $('.artist__show-slide--hide').style.color = "rgb(85,79,94)";
        }
        if (n === slidesArtist.length - numberSlideShowArtistMinus) {
            $('.artist__show-slide--plus').style.color = "rgb(85,79,94)";
        }
        else {
            $('.artist__show-slide--plus').style.color = "white";
        }
        if (n > slidesArtist.length - numberSlideShowArtistMinus) {
            n = slidesArtist.length - numberSlideShowArtistMinus
            a = n + numberSlideShowArtist;
        }
        if (a < b + numberSlideShowArtist) {
            a = b + numberSlideShowArtist
        }
        for (i = 0; i < slidesArtist.length; i++) {
            slidesArtist[i].style.display = "none";
        }
        for (n; n < a; n++) {
            slidesArtist[n-1].style.display = "block";
        } 
    } 
}

// Radio
const radioShowSlideHide = $('.radio__show-slide--hide')
const radioShowSlidePlus = $('.radio__show-slide--plus')
radioShowSlideHide.onclick = function() {
    plusRadioSlides(-1)
}
radioShowSlidePlus.onclick = function() {
    plusRadioSlides(1)
}
let slidesRadio = document.getElementsByClassName("radio__item");
let slideIndexRadio = 1;
if (widthWindow > 1480) {
    let numberSlideShowRadio = 7;
    let numberSlideShowRadioMinus = numberSlideShowRadio - 1;
    showSlides(slideIndexRadio);
    function plusRadioSlides(n) {
        slideIndexRadio += n;
        if (slideIndexRadio < 1) {
            slideIndexRadio = 1;
        }
        if (slideIndexRadio > slidesRadio.length - numberSlideShowRadioMinus) {
            slideIndexRadio = slidesRadio.length - numberSlideShowRadioMinus;
        }
        showSlides(slideIndexRadio);
    }
    function showSlides(n) {
        let i;
        let b = 1;
        let a = n + numberSlideShowRadio;
        if (n < 1) {
            n = 1;
        }
        if (n > 1) {
            $('.radio__show-slide--hide').style.color = "white";
        } else {
            $('.radio__show-slide--hide').style.color = "rgb(85,79,94)";
        }
        if (n === slidesRadio.length - numberSlideShowRadioMinus) {
            $('.radio__show-slide--plus').style.color = "rgb(85,79,94)";
        }
        else {
            $('.radio__show-slide--plus').style.color = "white";
        }
        if (n > slidesRadio.length - numberSlideShowRadioMinus) {
            n = slidesRadio.length - numberSlideShowRadioMinus
            a = n + numberSlideShowRadio;
        }
        if (a < b + numberSlideShowRadio) {
            a = b + numberSlideShowRadio
        }
        for (i = 0; i < slidesRadio.length; i++) {
            slidesRadio[i].style.display = "none";
        }
        for (n; n < a; n++) {
            slidesRadio[n-1].style.display = "block";
        } 
    } 
}


// ZMA
let slideIndexZMA = 0;
if (widthWindow > 1480) {
    function showZMA(e) {
        let i;
        let slidesZMA = document.getElementsByClassName("mySlidesZMA");
        for(i = 0; i < slidesZMA.length; i++) {
        slidesZMA[i].style.display = "none";  
        }
        slideIndexZMA++;
        if (slideIndexZMA > slidesZMA.length + 5) {
            slideIndexZMA = 1;
        }  
        let j = slideIndexZMA + 5;
        let b = slideIndexZMA;
        for (b; b < j; b++) {
            if (b <= slidesZMA.length) {
                slidesZMA[b-1].style.display = "block"; 
            }
            if (b > slidesZMA.length) {
                slidesZMA[b - slidesZMA.length-1].style.display = "block";  
            }
        } 
        setTimeout(showZMA, 2000); 
    }
    showZMA();
}

if (widthWindow < 1480 && widthWindow > 739) {
    function showZMA(e) {
        let i;
        let slidesZMA = document.getElementsByClassName("mySlidesZMA");
        for(i = 0; i < slidesZMA.length; i++) {
        slidesZMA[i].style.display = "none";  
        }
        slideIndexZMA++;
        if (slideIndexZMA > slidesZMA.length + 3) {
            slideIndexZMA = 1;
        }  
        let j = slideIndexZMA + 3;
        let b = slideIndexZMA;
        for (b; b < j; b++) {
            if (b <= slidesZMA.length) {
                slidesZMA[b-1].style.display = "block"; 
            }
            if (b > slidesZMA.length) {
                slidesZMA[b - slidesZMA.length-1].style.display = "block";  
            }
        } 
        setTimeout(showZMA, 2000); 
    }
    showZMA();
}

if (widthWindow < 740) {
    function showZMA(e) {
        let i;
        let slidesZMA = document.getElementsByClassName("mySlidesZMA");
        for(i = 0; i < slidesZMA.length; i++) {
        slidesZMA[i].style.display = "none";  
        }
        slideIndexZMA++;
        if (slideIndexZMA > slidesZMA.length + 2) {
            slideIndexZMA = 1;
        }  
        let j = slideIndexZMA + 2;
        let b = slideIndexZMA;
        for (b; b < j; b++) {
            if (b <= slidesZMA.length) {
                slidesZMA[b-1].style.display = "block"; 
            }
            if (b > slidesZMA.length) {
                slidesZMA[b - slidesZMA.length-1].style.display = "block";  
            }
        } 
        setTimeout(showZMA, 2000); 
    }
    showZMA();
}

// ZING CHART
function showZingChart() {
    let i;
    let numberSongShow = 10;
    const zingChartItems = $$('.zingchart__item');
    let lenghtZingChart = zingChartItems.length;
    for (i = 0; i < lenghtZingChart; i++) {
        zingChartItems[i].style.display = "none";
    }
    for (i = 0; i < numberSongShow; i++) {
        zingChartItems[i].style.display = "flex";
    }
    const zingChartExpandBtn = $('.zingchart__expand-btn');
    zingChartExpandBtn.onclick = function() {
        for (i = 0; i < lenghtZingChart; i++) {
            zingChartItems[i].style.display = "flex";
            zingChartExpandBtn.style.display = "none"
        }
    }
}

showZingChart()