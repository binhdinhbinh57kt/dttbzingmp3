const exploreHeard = {
    exploreHeardDescriptions: [
        {
            name: 'Những bài hát hay nhát của Nguyễn Trọng Tài',
            author: 'Nguyễn Trọng Tài',
            image: './assets/img/explore/explore_heard/explore_heard1.jpg'
        },
        {
            name: 'Cớ sao em buồn (Single)',
            author: 'Nguyễn Trọng Tài',
            image: './assets/img/explore/explore_heard/explore_heard2.jpg'
        },
        {
            name: 'Ngừng mơ (Single)',
            author: 'Nguyễn Trọng Tài',
            image: './assets/img/explore/explore_heard/explore_heard3.jpg'
        },
        {
            name: 'Hongkong1(single)',
            author: 'Nguyễn Trọng Tài',
            image: './assets/img/explore/explore_heard/explore_heard4.jpg'
        },
        {
            name: 'Cớ sao em buồn (Single)',
            author: 'Nguyễn Trọng Tài',
            image: './assets/img/explore/explore_heard/explore_heard5.jpg'
        },
    ],
    render: function() {
        const htmlexploreHeard = this.exploreHeardDescriptions.map(exploreHeardDescription => {
            return `
            <div class="col l-2-4 m-4 c-6">
                <div class="explore__item-concontainer--content">
                    <div class="item__img">
                        <img src="${exploreHeardDescription.image}" alt="">
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
                        <span class="item__img-name--item">${exploreHeardDescription.name}</span>
                        <div class="item__img-name--author">
                            <a href="#">${exploreHeardDescription.author}</a>
                        </div>
                    </div>
                </div>
            </div>
            `
        })
        $('.explore__heard').innerHTML = htmlexploreHeard.join('')
    },
    start: function() {
        this.render()
    }
}
exploreHeard.start()