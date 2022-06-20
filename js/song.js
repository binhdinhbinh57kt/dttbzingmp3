const songList = $('.home__song-list')
const nameSong = $('.player__song-name')
const nameAuthor = $('.player__song-author')
const audio = $('.audio')
const songActionPlay = $('.player__action-play')
const songPlay = $('.song__action-play')
const songPause = $('.song__action-pause')
const playerProgress = $('.player__progress')
const songProgress = $('.song__progress')
const songImg = $('.player__song-img--img')
const nextBtn = $('.player__action-next')
const preBtn = $('.player__action-back')
const randomBtn = $('.player__action-random')
const repeatBtn = $('.player__action-repeat')
const songTime = $('.song__total-time')
const songVolume = $('.volume__progress')






const songApp = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    songs: [
        {
            namesong: 'Ngày khác lạ',
            nameauthor: 'Đen, Giang Pham, Triple D',
            img: './assets/img/song/song_list/song_item1.jpg',
            time: '03:32',
            song: './assets/music/mysong/mysong1.mp3'
        },
        
        {
            namesong: 'Thanh Xuân',
            nameauthor: 'Da LAB',
            img: './assets/img/song/song_list/song_item2.jpg',
            time: '04:01',
            song: './assets/music/mysong/mysong2.mp3'
        },
        {
            namesong: 'Độ tộc 2',
            nameauthor: 'ĐỘ MIXI, MASEW, PHÚC DU, PHÁO',
            img: './assets/img/song/song_list/song_item3.png',
            time: '03:21',
            song: './assets/music/mysong/mysong3.mp3'
        },
        {
            namesong: 'Yêu 5',
            nameauthor: 'Rhymastic',
            img: './assets/img/song/song_list/song_item4.jpg',
            time: '04:03',
            song: './assets/music/mysong/mysong4.mp3'
        },
        {
            namesong: 'Cùng Anh',
            nameauthor: 'Ngọc Dolil, Hagi, Stee',
            img: './assets/img/song/song_list/song_item5.jpg',
            time: '03:18',
            song: './assets/music/mysong/mysong5.mp3'
        },
        {
            namesong: 'Em bỏ thuốc chưa',
            nameauthor: 'Bích Phương',
            img: './assets/img/song/song_list/song_item6.jpg',
            time: '03:36',
            song: './assets/music/mysong/mysong6.mp3'
        },
        {
            namesong: 'Trên tình bạn dưới tình yêu',
            nameauthor: 'Min, Typ16',
            img: './assets/img/song/song_list/song_item7.jpg',
            time: '03:36',
            song: './assets/music/mysong/mysong7.mp3'
        },
        {
            namesong: 'Vì mẹ anh bắt chia tay',
            nameauthor: 'Miu Lê, Karik, Châu Đăng Khoa',
            img: './assets/img/song/song_list/song_item8.jpg',
            time: '03:36',
            song: './assets/music/mysong/mysong8.mp3'
        },
        {
            namesong: 'Từ chối nhẹ nhàng thôi',
            nameauthor: 'Bích Phương, Phúc Du',
            img: './assets/img/song/song_list/song_item9.jpg',
            time: '03:36',
            song: './assets/music/mysong/mysong9.mp3'
        }
    ],

    render: function() {
        const htmlsListSongs = this.songs.map((song,index) => {
            return `
        <div class="home__song-item ${index === this.currentIndex ? 'active': ''} " data-index="${index}">
            <div class="home__song-item--description">
                <div class="home__song-item--img">
                    <img src="${song.img}" alt="" class="song__item-img">
                    <div class="song__img-play ">
                        <i class="song__img-play--icon fa-solid fa-play"></i>
                    </div>
                    <div class="song__img-playing">
                        <img src="./assets/img/song/musicplaying.gif" alt="" class="song__img-playing--img">
                    </div>
                </div>
                <div class="home__song-item--name">
                    <div class="home__song-item--namemv">
                       ${song.namesong}
                    </div>
                    <div class="home__song-item--nameauthor">
                        ${song.nameauthor}
                    </div>
                </div>
            </div>
            <div class="home__song-item--time">${song.time}</div>
            <div class="home__song-actions">
                <div class="song__action-item app__lyric">
                    <i class="app__lyric-icon fa-solid fa-microphone"></i>
                    <div class="song__action-item--des">Phát cùng lời bài hát</div>
                </div>
                <div class="song__action-item app__heart">
                    <div class="app__heart-des app__heart--notaction">
                        <i class="fa-solid fa-heart"></i>
                    </div>
                    <div class="app__heart-des app__heart--action">
                        <i class="main__heart-action fa-solid fa-heart"></i>
                    </div> 
                </div>
                <div class="song__action-item app__more">
                    <i class="app__more-icon fa-solid fa-ellipsis"></i>
                </div>
            </div>
        </div>
            `
        })
        songList.innerHTML = htmlsListSongs.join('')
        
    },

    defineProperties: function() {
        Object.defineProperty(this,'currentSong', {
            get: function() {
                return this.songs[this.currentIndex]
            }
        })
    },

    handleEvents: function() {
        const _this = this

        

        // Xử lý CD quay/dừng
        const cdThumbanimae = songImg.animate([
            {transform: 'rotate(360deg)'}
        ], {
            duration: 10000,
            iterations: Infinity
        })

        cdThumbanimae.pause()
        // xử lý khi click play
        songActionPlay.onclick = function() {
            if (_this.isPlaying) {     
                audio.pause()
            } else {
                audio.play()     
            }
        }

        // Khi song được play 
        audio.onplay = function() {
            _this.isPlaying = true
            playerProgress.classList.add('playing__progress')
            cdThumbanimae.play()
        }

        // Khi song bị pause
        audio.onpause = function() {
            _this.isPlaying = false
            playerProgress.classList.remove('playing__progress')
            cdThumbanimae.pause() 
        }

        // Khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function() {
            if (audio.duration) {
                const songProgressPercent = Math.floor(audio.currentTime / audio.duration * 100)
                songProgress.value = songProgressPercent
            }
        }

        // Xử lý volume song
        songVolume.oninput = function(e) {
            if (e.target.value != audio.volume*100) {
                const volumeCurrent = e.target.value/100;
                audio.volume = volumeCurrent
            }
        }

        // Xử lý khi tua song
        songProgress.oninput = function(e) {
            const seekTime = audio.duration/100 * e.target.value
            audio.currentTime = seekTime
        }

        // next song
        nextBtn.onclick = function() {
            if (_this.isRandom) {
                _this.randomSong()
            } else {
                _this.nextSong()
            }
            audio.play()
            _this.render()
            _this.scrollToActiveSong()
        }

        // prev song
        preBtn.onclick = function() {
            if (_this.isRandom) {
                _this.randomSong()
            } else {
                _this.preSong()
            }
            audio.play()
            _this.render()
            _this.scrollToActiveSong()
        }
        
        // Xủ lý random bật tắt
        randomBtn.onclick = function() {
            _this.isRandom = !_this.isRandom
            randomBtn.classList.toggle('random__active',_this.isRandom)
            
        }

        // Xử lý next song khi audio ended 
        audio.onended = function() {
            if (_this.isRepeat) {
                audio.play()
            } else {
                nextBtn.click()
            }
        }

        // Xy ly repeat song
        repeatBtn.onclick = function() {
            _this.isRepeat = !_this.isRepeat
            repeatBtn.classList.toggle('repeat__active',_this.isRepeat)
        }

        // Lắng nghe hành vi click vào play list
        songList.onclick = function(e) {  
            const songNode = e.target.closest(".home__song-item");
            if(
                songNode && e.target.closest('.song__img-play')
            ) {         
                _this.currentIndex = Number(songNode.getAttribute('data-index'))
                _this.loadCurrentSong()
                _this.render()
                audio.play()
            }
        }

        
        
        
        
    },

    scrollToActiveSong: function() {
        setTimeout(() => {
            $('.home__song-item.active').scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            })
        }, 500)
        
    },


    loadCurrentSong: function() {
        nameSong.textContent = this.currentSong.namesong
        nameAuthor.textContent = this.currentSong.nameauthor
        audio.src = this.currentSong.song
        songTime.textContent = this.currentSong.time
        songImg.src = this.currentSong.img
    },

    nextSong: function() {
        this.currentIndex++
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },

    preSong: function() {
        this.currentIndex--
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1
        }
        this.loadCurrentSong()
    },

    randomSong: function() {
        let newIndex 
        do {
            newIndex = Math.floor(Math.random() * this.songs.length)
        } while (newIndex === this.currentIndex)
        console.log(newIndex)
        this.currentIndex = newIndex
        this.loadCurrentSong()
    },


    start: function() {
        // Định nghĩa các thuộc tính cho object
        this.defineProperties()

        // Lắng nghe/ xử lý các sự kiện (DOM events)
        this.handleEvents()

        // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dùng
        this.loadCurrentSong()

        // Render playlist
        this.render()

       
        
    }
}


songApp.start()