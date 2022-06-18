const exploreYouHeard = {
    exploreYouHeardDescriptions: [
        {
            name: 'Today Rap Hits',
            author1: 'Drake',
            author2: 'Kanye West',
            author3: 'Lil Nas',
            image: './assets/img/explore/explore_hiphop/explore_hiphop1.jpg'
        },
        {
            name: 'Rap Việt Cũ Mà Hay',
            author1: 'Rhymastic',
            author2: 'LK',
            author3: 'Yanbi',
            image: './assets/img/explore/explore_hiphop/explore_hiphop2.jpg'
        },
        {
            name: 'Rap Việt Cực Chất',
            author1: '16 Typh',
            author2: 'Tage',
            author3: 'ICD',
            image: './assets/img/explore/explore_hiphop/explore_hiphop3.jpg'
        },
        {
            name: 'Rap Việt Kết Hợp Cực Chất',
            author1: 'G5R Squad',
            author2: 'Phan Ann',
            author3: 'Tlinh',
            image: './assets/img/explore/explore_hiphop/explore_hiphop4.jpg'
        },
        {
            name: 'Rap Việt Thả Thính Hay Nhất',
            author1: 'OSAD',
            author2: 'HIEUTHUHAI',
            author3: 'Obitoh',
            image: './assets/img/explore/explore_hiphop/explore_hiphop5.jpg'
        },
        
    ],
    render: function() {
        const htmlexploreYouHeards = this.exploreYouHeardDescriptions.map(exploreYouHeardDescription => {
            return `
            <div class="col l-2-4 m-4 c-6">
                <div class="explore__item-concontainer--content">
                    <div class="item__img">
                        <img src=".${exploreYouHeardDescription.image}" alt="">
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
                         <div class="item__img-name">
                            <span class="item__img-name--item">${exploreYouHeardDescription.name}</span>
                            <div class="item__img-name--author">
                                <a href="#">${exploreYouHeardDescription.author1}</a>,
                                <a href="#">${exploreYouHeardDescription.author2}</a>,
                                <a href="#">${exploreYouHeardDescription.author3}</a>
                            </div>
                        </div>
                </div>
            </div>
            `
        })
        $('.explore__youheard').innerHTML = htmlexploreYouHeards.join('')
    },
    start: function() {
        this.render()
    }
}
exploreYouHeard.start()


