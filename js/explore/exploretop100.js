const exploreTop = {
    exploreTopDescriptions: [
        {
            name: 'Top 100 Nhạc Dance Việt Nam Hay Nhất',
            image: './assets/img/explore/explore_top/explore_top1.jpg'
        },
        {
            name: 'Top 100 Bài Hát Nhạc Trẻ Hay Nhất',
            image: './assets/img/explore/explore_top/explore_top2.jpg'
        },
        {
            name: 'Top 100 Pop Âu Mỹ Hay Nhất',
            image: './assets/img/explore/explore_top/explore_top3.jpg'
        },
        {
            name: 'Top 100 Nhạc Electronic/Dance Âu Mỹ Hay Nhất',
            image: './assets/img/explore/explore_top/explore_top4.jpg'
        },
        {
            name: 'Top 100 Nhạc Hàn Quốc Hay Nhất',
            image: './assets/img/explore/explore_top/explore_top5.jpg'
        }
        
    ],
    render: function() {
        const htmlexploreTop = this.exploreTopDescriptions.map(exploreTopDescription => {
            return `
            <div class="col l-2-4 m-4 c-6">
                <div class="explore__item-concontainer--content">
                    <div class="item__img">
                        <img src="${exploreTopDescription.image}" alt="">
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
                        <span class="item__img-name--item">${exploreTopDescription.name}</span>
                    </div>
                </div>
            </div>
            `
        })
        $('.explore__top100').innerHTML = htmlexploreTop.join('')
    },
    start: function() {
        this.render()
    }
}
exploreTop.start()