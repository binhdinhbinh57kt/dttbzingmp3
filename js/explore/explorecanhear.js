const exploreCanHear = {
    exploreCanHearDescriptions: [
        {
            name: 'Mở Đầu Hoàn Hảo',
            author1: 'AMEE',
            author2: 'ERIK',
            author3: 'Hoàng Duyên',
            image: './assets/img/explore/explore_canmusic/explore_canmusic1.jpg'
        },
        {
            name: 'V-Pop: The A-List',
            author1: 'Bích Phương',
            author2: 'Hoàng Thùy Linh',
            author3: 'ERIK',
            image: './assets/img/explore/explore_canmusic/explore_canmusic2.jpg'
        },
        {
            name: 'Tỏ Tình Nhẹ Nhàng Thôi',
            author1: 'Quân A.P',
            author2: 'Chang',
            author3: 'Hoàng Duyên',
            image: './assets/img/explore/explore_canmusic/explore_canmusic3.jpg'
        },
        {
            name: 'Nhạc Trẻ Gây Nghiện',
            author1: 'AMEE',
            author2: 'Quân A.P',
            author3: 'ERIK',
            image: './assets/img/explore/explore_canmusic/explore_canmusic4.jpg'
        },
        {
            name: 'HIT-MAKER: Nổi Bật',
            author1: 'LyLy',
            author2: 'RIN9',
            author3: 'Vương Anh Tú',
            image: './assets/img/explore/explore_canmusic/explore_canmusic5.jpg'
        }
    ],
    render: function() {
        const htmlexploreCanHears = this.exploreCanHearDescriptions.map(exploreCanHearDescription => {
            return `
            <div class="col l-2-4 m-4 c-6">
                <div class="explore__item-concontainer--content">
                    <div class="item__img">
                        <img src="${exploreCanHearDescription.image}" alt="">
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
                        <span class="item__img-name--item">${exploreCanHearDescription.name}</span>
                            <div class="item__img-name--author">
                            <a href="#">${exploreCanHearDescription.author1}</a>,
                            <a href="#">${exploreCanHearDescription.author2}</a>,
                            <a href="#">${exploreCanHearDescription.author3}</a>
                    </div>
                </div>
            </div>
        </div>
            `
        })
        $('.explore_canhear').innerHTML = htmlexploreCanHears.join('')
    },
    start: function() {
        this.render()
    }
}
exploreCanHear.start()