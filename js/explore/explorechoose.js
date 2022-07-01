const exploreChoose = {
    exploreChooseDescriptions: [
        {
            name: 'Đóa hồng nhạc Việt',
            des: 'Những đóa hồng tạo nên dấu ấn trên thị trường âm nhạc Việt hiện nay',
            image: './assets/img/explore/explore_choose/explore_choose1.jpg'
        },
        {
            name: 'V-Pop Rising',
            des: ' Những tài năng Gen Z của V-Pop đáng nghe nhất hôm nay',
            image: './assets/img/explore/explore_choose/explore_choose2.jpg'
        },
        {
            name: 'Tỏ Tình Nhẹ Nhàng Thôi',
            des: 'Khởi động mỗi ngày với những ca khúc EDM sôi động',
            image: './assets/img/explore/explore_choose/explore_choose3.jpg'
        },
        {
            name: 'Nhạc Trẻ Gây Nghiện',
            des: 'Những hạt giống tiềm năng của K-Pop thế hệ mới',
            image: './assets/img/explore/explore_choose/explore_choose4.jpg'
        },
        {
            name: 'Everydat EDM',
            des: 'Nhạc Anime hot nhất ở thời điểm hiện tại có ngay tại đây',
            image: './assets/img/explore/explore_choose/explore_choose5.jpg'
        }
    ],
    render: function() {
        const htmlexploreChoose = this.exploreChooseDescriptions.map(exploreChooseDescription => {
            return `
            <div class="col l-2-4 m-4 c-6">
                <div class="explore__item-concontainer--content">
                    <div class="item__img">
                        <img src="${exploreChooseDescription.image}" alt="">
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
                        <span class="item__img-name--item">${exploreChooseDescription.name}</span>
                        <div class="item__img-name--des">
                            ${exploreChooseDescription.des}
                        </div>
                    </div>
                </div>
            </div>
            `
        })
        $('.explore_choose').innerHTML = htmlexploreChoose.join('')
    },
    start: function() {
        this.render()
    }
}

export default exploreChoose;