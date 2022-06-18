const exploreMixtage = {
    exploreMixtageDescriptions: [
        {
            author1: 'SOOBIN',
            author2: 'Binz',
            author3: 'MCK',
            image: './assets/img/explore/explore_mixtape/explore_mixtape1.jfif'
        },
        {
            author1: 'Jack',
            author2: 'Uyên Linh',
            author3: 'Timo',
            image: './assets/img/explore/explore_mixtape/explore_mixtape2.jfif'
        },
        {
            author1: 'MCK',
            author2: 'Tlinh',
            author3: 'Khắc Hưng',
            image: './assets/img/explore/explore_mixtape/explore_mixtape3.jfif'
        },
        {
            author1: 'Rhymastic',
            author2: 'Phương Ly',
            author3: 'Touliver',
            image: './assets/img/explore/explore_mixtape/explore_mixtape4.jfif'
        },
        {
            author1: 'Hương Ly',
            author2: 'Huy Nam (A#)',
            author3: 'Trúc Nhân',
            image: './assets/img/explore/explore_mixtape/explore_mixtape5.jfif'
        },
    ],
    render: function() {
        const htmlexploreMixtapes = this.exploreMixtageDescriptions.map(exploreMixtageDescription => {
            return `
                <div class="col l-2-4 m-4 c-6">
                    <div class="explore__item-concontainer--content">
                        <div class="item__img">
                            <img src="${exploreMixtageDescription.image}" alt="">
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
                            <div class="item__img-name--author">
                                <a href="#">${exploreMixtageDescription.author1}</a>,
                                <a href="#">${exploreMixtageDescription.author2}</a>,
                                <a href="#">${exploreMixtageDescription.author3}</a>
                            </div>
                        </div>
                    </div>

                </div>
            `
        })
        $('.explore_mixtape').innerHTML = htmlexploreMixtapes.join('')
    },
    start: function() {
        this.render()
    }
}
exploreMixtage.start()