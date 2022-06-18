const homePlaylist = {
    homePlayListdescriptions: [
        {
            name: 'V-Pop: The A-List',
            author: 'Zing MP3',
            image: './assets/img/playlist/playlist1.jpg'
        },
        {
            name: 'Rồi tới luôn',
            author: 'Nal',
            image: './assets/img/playlist/playlist2.jpg'
        },
        {
            name: 'Những bản hit của Rap Việt',
            author: 'Zing MP3',
            image: './assets/img/playlist/playlist3.jpg'
        },
        {
            name: 'Top 100 Bài Hát Nhạc Trẻ Hay Nhất',
            author: 'Zing MP3',
            image: './assets/img/playlist/playlist4.jpg'
        },
        {
            name: 'Chill cùng Đen Vâu',
            author: 'Trà My',
            image: './assets/img/playlist/playlist5.jpg'
        },
        {
            name: 'Thế Giới V-Pop Vol. 3',
            author: 'Zing MP3',
            image: './assets/img/playlist/playlist6.jpg'
        },
        {
            name: '100% Gây Nghiện',
            author: 'Zing MP3',
            image: './assets/img/playlist/playlist7.jpg'
        }
    ],
    render: function() {
        const htmlHomePlayLists = this.homePlayListdescriptions.map(homePlayListdescription => {
            return `
                <div class="col l-2-4 m-4 c-6 home__playlist-item">
                    <div class="playlist__concontainer-item">
                        <div class="item__img">
                            <img src="${homePlayListdescription.image}" alt="">
                            <div class="img__actions">
                                <div class="app__heart">
                                    <div class="app__heart-des app__heart--notaction">
                                        <i class="fa-solid fa-heart"></i>
                                    </div>
                                    <div class="app__heart-des app__heart--action">
                                        <i class="main__heart-action fa-solid fa-heart"></i>
                                    </div> 
                                </div>
                                <i class="item__img-play fa-solid fa-play"></i>
                                <div class="app__music-more playlist__action-more ">
                                    <i class="app__music-more--icon ti-more"></i>
                                </div>
                            </div>
                        </div>
                        <div class="playlist__des">
                            <div class="playlist__des-heading">${homePlayListdescription.name}</div>
                            <div class="playlist__des-author">${homePlayListdescription.author}</div>
                        </div>
                    </div>
                </div>
            `
        })
        $('.homeplaylist').innerHTML = $('.homeplaylist').innerHTML + htmlHomePlayLists.join('')

        const htmlHomeTabPlayLists = this.homePlayListdescriptions.map(homePlayListdescription => {
            return `
                <div class="col l-2-4 m-4 c-6">
                    <div class="playlist__concontainer-item">
                        <div class="item__img">
                            <img src="${homePlayListdescription.image}" alt="">
                            <div class="img__actions">
                                <div class="app__heart ">
                                    <div class="app__heart-des app__heart--notaction">
                                        <i class="fa-solid fa-heart"></i>
                                    </div>
                                    <div class="app__heart-des app__heart--action">
                                        <i class="main__heart-action fa-solid fa-heart"></i>
                                    </div> 
                                </div>
                                <i class="item__img-play fa-solid fa-play"></i>
                                <div class="app__music-more playlist__action-more ">
                                    <i class="app__music-more--icon ti-more"></i>
                                </div>
                            </div>
                        </div>
                        <div class="playlist__des">
                            <div class="playlist__des-heading">${homePlayListdescription.name}</div>
                            <div class="playlist__des-author">${homePlayListdescription.author}</div>
                        </div>
                    </div>
                </div>
            `
        })

        $('.hometabplaylist').innerHTML = $('.hometabplaylist').innerHTML + htmlHomeTabPlayLists.join('')
        

    
    },
    start: function() {
        this.render()
    }
}

homePlaylist.start()

