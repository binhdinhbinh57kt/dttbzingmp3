const exploreCorner = {
    exploreCornerDescriptions: [
        {
            name: 'New Releases',
            des: 'Những ca khúc tạo nên xu hướng âm nhạc mới!',
            image: './assets/img/explore/explore_corner/explore_corner1.jpg'
        },
        {
            name: 'Todays Electronic',
            des: ' Cuồng nhiệt, đầy mê hoặc với giai điệu Electronic',
            image: './assets/img/explore/explore_corner/explore_corner2.jpg'
        },
        {
            name: 'XONE Picks',
            des: 'Top ca khúc XONE chọn riêng cho hôm nay',
            image: './assets/img/explore/explore_corner/explore_corner3.jpg'
        },
        {
            name: 'Lany Flavour',
            des: 'Thưởng thức âm nhạc từ nghệ sỹ bạn yêu thích',
            image: './assets/img/explore/explore_corner/explore_corner4.jpg'
        },
        {
            name: 'Asia Tune',
            des: 'Bài hát tuyển chọn cho người chơi hệ châu Á',
            image: './assets/img/explore/explore_corner/explore_corner5.jpg'
        }
    ],
    render: function() {
        const htmlexploreCorner = this.exploreCornerDescriptions.map(exploreCornerDescription => {
            return `
            <div class="col l-2-4 m-4 c-6">
                <div class="explore__item-concontainer--content">
                    <div class="item__img">
                        <img src="${exploreCornerDescription.image}" alt="">
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
                        <span class="item__img-name--item">${exploreCornerDescription.name}</span>
                        <div class="item__img-name--des">
                            ${exploreCornerDescription.des}
                        </div>
                    </div>
                </div>
            </div>
            `
        })
        $('.explore_corner').innerHTML = htmlexploreCorner.join('')
    },
    start: function() {
        this.render()
    }
}
exploreCorner.start()