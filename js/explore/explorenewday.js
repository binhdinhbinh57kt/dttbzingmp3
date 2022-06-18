const exploreNewDay = {
    exploreNewDayDescriptions: [
        {
            name: 'Nhạc Việt Tháng 10/2021',
            author1: 'Nguyên Hà',
            author2: 'Đức Phúc',
            author3: 'Bích Phương',
            image: './assets/img/explore/explore_everyday/explore_everyday1.jpg'
        },
        {
            name: 'Nhạc Âu Mỹ Tháng 10/2021',
            author1: 'Jeremy Zucker',
            author2: 'Lil Nas X',
            author3: 'Nicki Minaj',
            image: './assets/img/explore/explore_everyday/explore_everyday2.jpg'
        },
        {
            name: 'Nhạc Hàn Tháng 10/2021',
            author1: 'CL',
            author2: 'Aespa',
            author3: 'Key',
            image: './assets/img/explore/explore_everyday/explore_everyday3.jpg'
        },
        {
            name: 'Nhạc Hoa Tháng 10/2021',
            author1: 'Trình Hưởng',
            author2: 'PANTHEPACK',
            author3: 'Sunnee Dương Vân Tình',
            image: './assets/img/explore/explore_everyday/explore_everyday4.jpg'
        },
        {
            name: 'Indie Việt Tháng 10/2021',
            author1: 'Duongg',
            author2: 'Starry Night',
            author3: 'Charles Huỳnh',
            image: './assets/img/explore/explore_everyday/explore_everyday5.jpg'
        },
        
    ],
    render: function() {
        const htmlexploreNewDays = this.exploreNewDayDescriptions.map(exploreNewDayDescription => {
            return `
            <div class="col l-2-4 m-4 c-6">
                <div class="explore__item-concontainer--content">
                    <div class="item__img">
                        <img src="${exploreNewDayDescription.image}" alt="">
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
                            <div class="app__music-more album__action-more ">
                                <i class="album__more-icon app__music-more--icon ti-more"></i>
                            </div>
                        </div>
                    </div>
                    <div class="item__img-name">
                        <span class="item__img-name--item">${exploreNewDayDescription.name}</span>
                        <div class="item__img-name--author">
                            <a href="#">${exploreNewDayDescription.author1}</a>,
                            <a href="#">${exploreNewDayDescription.author2}</a>,
                            <a href="#">${exploreNewDayDescription.author3}</a>
                        </div>
                    </div>
                </div>
            </div>
            `
        })
        $('.explore_newday').innerHTML = htmlexploreNewDays.join('')
    },
    start: function() {
        this.render()
    }
}
exploreNewDay.start()


