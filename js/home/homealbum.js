const homeAlbum = {
    homeAlbumDescriptions: [
        {
            name: 'Golden Hour',
            imgae: './assets/img/album/album1.jpg'
        },
        {
            name: 'Boycold (Mini Album)',
            imgae: './assets/img/album/album2.jpg'
        },
        {
            name: 'Red',
            imgae: './assets/img/album/album3.jpg'
        },
        {
            name: 'Người Yêu Cũ (Gửi Cho Anh 2) (Mini Album)',
            imgae: './assets/img/album/album4.jpg'
        },
        {
            name: 'Querencia (Mini Album)',
            imgae: './assets/img/album/album5.jpg'
        },
        {
            name: 'Justice (Mini Album)',
            imgae: './assets/img/album/album6.jpg'
        },
        {
            name: 'Teenage Dream',
            imgae: './assets/img/album/album7.jpg'
        },
        {
            name: 'The Off Season',
            imgae: './assets/img/album/album8.jpg'
        },
        {
            name: 'The Album',
            imgae: './assets/img/album/album9.jpg'
        },
        {
            name: 'Random Access Memories',
            imgae: './assets/img/album/album10.jpg'
        },
        {
            name: 'RMap of the Soul: 7',
            imgae: './assets/img/album/album11.jpg'
        }
    ],
    render: function() {
        const htmlHomeAlbums = this.homeAlbumDescriptions.map(homeAlbumDescription => {
            return `
                <div class="col l-2-4 m-4 c-6 home__album-item fade">
                    <div class="album__concontainer-item">
                        <div class="item__img ">
                            <img src="${homeAlbumDescription.imgae}" alt="">
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
                                <div class="app__music-more album__action-more ">
                                    <i class="album__more-icon app__music-more--icon ti-more"></i>
                                </div>
                            </div>
                        </div>
                        <div class="album__item-name">${homeAlbumDescription.name}</div>
                    </div>
                </div>     `
        })
        $('.homealbum').innerHTML = htmlHomeAlbums.join('')

        const htmlHomeTabAlbums = this.homeAlbumDescriptions.map(homeAlbumDescription => {
            return `
                <div class="col l-2-4 m-4 c-6">
                    <div class="album__concontainer-item">
                        <div class="item__img ">
                            <img src="${homeAlbumDescription.imgae}" alt="">
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
                                <div class="app__music-more album__action-more ">
                                    <i class="album__more-icon app__music-more--icon ti-more"></i>
                                </div>
                            </div>
                        </div>
                        <div class="album__item-name">${homeAlbumDescription.name}</div>
                    </div>
                </div>     `
        })
        $('.hometabalbum').innerHTML = htmlHomeTabAlbums.join('')
    },
    start: function() {
        this.render()
    }
}
homeAlbum.start()