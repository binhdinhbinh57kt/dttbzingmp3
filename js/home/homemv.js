const homeMv = {
    homeMvDescriptions:[
        {
            mv: 'Một bước yêu vạn dặm đau',
            author: 'Mr.Siro',
            time: '11:54',
            imagemv: './assets/img/mv/mv1.jpg',
            imageauthor: './assets/img/mv/artist1_mv1.jpg'
        },
        {
            mv: 'Simple Love',
            author: 'Obito, Seachains, Davis',
            time: '03:53',
            imagemv: './assets/img/mv/mv2.jpg',
            imageauthor: './assets/img/mv/artist2_mv2.jpg'
        },
        {
            mv: 'Lời yêu ngây dại',
            author: 'Kha',
            time: '04:33',
            imagemv: './assets/img/mv/mv3.jpg',
            imageauthor: './assets/img/mv/artist3_mv3.jpg'
        },
        {
            mv: '24H',
            author: 'LyLy, Magazine',
            time: '04:55',
            imagemv: './assets/img/mv/mv4.jpg',
            imageauthor: './assets/img/mv/artist4_mv4.jpg'
        },
        {
            mv: 'Nước mắt em lau bằng tình yêu mới',
            author: 'Da LAB, Tóc Tiên',
            time: '03:19',
            imagemv: './assets/img/mv/mv5.jpg',
            imageauthor: './assets/img/mv/artist5_mv5.jpg'
        },
        {
            mv: 'Mình yêu nnhau đi',
            author: 'Bích Phương',
            time: '04:12',
            imagemv: './assets/img/mv/mv6.jpg',
            imageauthor: './assets/img/mv/artist6_mv6.jpg'
        },
        {
            mv: 'Đừng Về Trễ (Acoustic Version)',
            author: 'Sơn Tùng MTP',
            time: '04:04',
            imagemv: './assets/img/mv/mv7.jpg',
            imageauthor: './assets/img/mv/artist7_mv7.jpg'
        }
    ],
    render: function() {
        const htmlHomeMvs = this.homeMvDescriptions.map(homeMvDescription => {
            return `
                <div class="col l-4 m-6 c-12 home__mv-item fade">
                    <div class="mv__container-item">
                        <div class="mv__item-img">
                            <img src="${homeMvDescription.imagemv}" alt="">
                            <div class="mv__img-play">
                                <i class="mv__img-play--icon fa-solid fa-play"></i>
                            </div>
                            <div class="mv__img-exit">
                                <i class="mv__img-exit--icon ti-close"></i>
                            </div>
                            <div class="mv__img-time">
                                <span class="mv__img-time--text">${homeMvDescription.time}</span>
                            </div>
                        </div>
                        <div class="mv__item-description">
                            <div class="mv__item-img--author">
                                <img src="${homeMvDescription.imageauthor}" alt="">
                            </div>
                            <div class="mv__item-name">
                                <div class="mv__item-name--mv">${homeMvDescription.mv}</div>
                                <div class="mv__item-name--author">
                                    <a href="#">${homeMvDescription.author}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        })
        $('.homemv').innerHTML = htmlHomeMvs.join('')

        const htmlHomeTabMvs = this.homeMvDescriptions.map(homeMvDescription => {
            return `
                <div class="col l-4 m-6 c-12">
                    <div class="mv__container-item">
                        <div class="mv__item-img">
                            <img src="${homeMvDescription.imagemv}" alt="">
                            <div class="mv__img-play">
                                <i class="mv__img-play--icon fa-solid fa-play"></i>
                            </div>
                            <div class="mv__img-exit">
                                <i class="mv__img-exit--icon ti-close"></i>
                            </div>
                            <div class="mv__img-time">
                                <span class="mv__img-time--text">${homeMvDescription.time}</span>
                            </div>
                        </div>
                        <div class="mv__item-description">
                            <div class="mv__item-img--author">
                                <img src="${homeMvDescription.imageauthor}" alt="">
                            </div>
                            <div class="mv__item-name">
                                <div class="mv__item-name--mv">${homeMvDescription.mv}</div>
                                <div class="mv__item-name--author">
                                    <a href="#">${homeMvDescription.author}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        })
        $('.hometabmv').innerHTML = htmlHomeTabMvs.join('')
    },
    start: function() {
        this.render()
    }
}

homeMv.start()