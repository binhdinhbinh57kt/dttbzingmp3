const exploreNewMusic = {
    exploreNewMusicDescriptions: [
        {
            name: 'Ta Thương Người, Người chẳng thơng ta (Single)',
            author: 'Huy Vạc',
            image: './assets/img/explore/explore_newmusic/explore_newmusic1.jpg'
        },
        {
            name: 'Ôm trộn nỗi đâu(single)',
            author: 'Tino',
            image: './assets/img/explore/explore_newmusic/explore_newmusic2.jpg'
        },
        {
            name: 'Bao lâu ta lại yêu một người (Lofi Version)',
            author: 'Doãn Hiếu',
            image: './assets/img/explore/explore_newmusic/explore_newmusic3.jpg'
        },
        {
            name: 'Vâng anh đi đi (liu liu version)',
            author: 'Bích Phương',
            image: './assets/img/explore/explore_newmusic/explore_newmusic4.jpg'
        },
        {
            name: 'Đêm mưa(single)',
            author: 'Duy Ngọc',
            image: './assets/img/explore/explore_newmusic/explore_newmusic5.jpg'
        },
        
    ],
    render: function() {
        const htmlexploreNewMusics = this.exploreNewMusicDescriptions.map(exploreNewMusicDescription => {
            return `
        <div class="col l-2-4 m-4 c-6">
            <div class="explore__item-concontainer--content">
                <div class="item__img">
                    <img src="${exploreNewMusicDescription.image}" alt="">
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
                    <span class="item__img-name--item">${exploreNewMusicDescription.name}</span>
                    <div class="item__img-name--author">
                        <a href="#">${exploreNewMusicDescription.author}</a>
                    </div>
                </div>
            </div>
        </div>
        `
        })
        $('.explore__newmusic').innerHTML = htmlexploreNewMusics.join('')
    },
    start: function() {
        this.render()
    }
}

export default exploreNewMusic;


