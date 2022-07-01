const homeArtist = {
    homeArtistDescriptions: [
        {
            nameartist: 'Binz',
            follow: '265K',
            image: './assets/img/artist/artist_binz.jpg'
        },
        {
            nameartist: 'Phương Ly',
            follow: '79K',
            image: './assets/img/artist/artist_phuongly.jpg'
        },
        {
            nameartist: 'AMEE',
            follow: '317K',
            image: './assets/img/artist/artist_ame.jpg'
        },
        {
            nameartist: 'MCK',
            follow: '52K',
            image: './assets/img/artist/artist_mck.jpg'
        },
        {
            nameartist: 'Sơn Tùng M-TP',
            follow: '265K',
            image: './assets/img/artist/artist_mtp.jpg'
        },
        {
            nameartist: 'Mr. Siro',
            follow: '735K',
            image: './assets/img/artist/artist_mtsiro.jpg'
        },
        {
            nameartist: 'Han Sara',
            follow: '158K',
            image: './assets/img/artist/artist_hansana.jpg'
        },
        {
            nameartist: 'Han Sara',
            follow: '158K',
            image: './assets/img/artist/artist_hansana.jpg'
        },
        {
            nameartist: 'Bích Phương',
            follow: '368K',
            image: './assets/img/artist/artist_bichphuong.jpg'
        },
        {
            nameartist: 'Soobin',
            follow: '435K',
            image: './assets/img/artist/artist_sobin.jpg'
        },
        {
            nameartist: 'Chi Dân',
            follow: '518K',
            image: './assets/img/artist/artist_chidan.jpg'
        }
    ],
    render: function() {
        const htmlhomeArtists = this.homeArtistDescriptions.map(homeArtistDescription => {
            return `
            <div class="col l-2-4 m-3 c-6 home__artist-item fade">
                <div class="artist__container-item">
                    <div class="artist__item-img">
                        <img src="${homeArtistDescription.image}" alt="">
                        <div class="artist__item-img--play">
                            <i class="artist__img-icon ti-control-shuffle"></i>
                        </div>
                    </div>
                    <div class="artist__item-name">
                        <span class="artist__item-name--text">${homeArtistDescription.nameartist}</span>
                        <i class="artist__item-name--icon fa-solid fa-star"></i>
                    </div>
                    <div class="artist__item-care">
                        ${homeArtistDescription.follow} quan tâm
                    </div>
                    <div class="artist__item-action--care">
                        <div class="artist__action-care">
                            <i class="artist__action-icon fa-solid fa-check"></i>
                            <span class="artist__action-text">Đã quan tâm</span>
                        </div>
                        <div class="artist__action-dontcare">
                             <i class="artist__action-icon fa-solid fa-user-plus"></i>
                            <span class="artist__action-text">Quan tâm</span>
                        </div>
                    </div>
                </div>
            </div>
            `
        })
        $('.homeartist').innerHTML = htmlhomeArtists.join('')

        const htmlhomeTabArtists = this.homeArtistDescriptions.map(homeArtistDescription => {
            return `
            <div class="col l-2-4 m-3 c-6">
                <div class="artist__container-item">
                    <div class="artist__item-img">
                        <img src="${homeArtistDescription.image}" alt="">
                        <div class="artist__item-img--play">
                            <i class="artist__img-icon ti-control-shuffle"></i>
                        </div>
                    </div>
                    <div class="artist__item-name">
                        <span class="artist__item-name--text">${homeArtistDescription.nameartist}</span>
                        <i class="artist__item-name--icon fa-solid fa-star"></i>
                    </div>
                    <div class="artist__item-care">
                        ${homeArtistDescription.follow} quan tâm
                    </div>
                    <div class="artist__item-action--care">
                        <div class="artist__action-care">
                            <i class="artist__action-icon fa-solid fa-check"></i>
                            <span class="artist__action-text">Đã quan tâm</span>
                        </div>
                        <div class="artist__action-dontcare">
                             <i class="artist__action-icon fa-solid fa-user-plus"></i>
                            <span class="artist__action-text">Quan tâm</span>
                        </div>
                    </div>
                </div>
            </div>
            `
        })
        $('.hometabartist').innerHTML = htmlhomeTabArtists.join('')
    },
    start: function() {
        this.render()
    }
}


export default homeArtist;