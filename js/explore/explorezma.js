const exploreZma = {
    exploreZmaDescriptions: [
        {
            image: './assets/img/explore/explore_zma/explore_zma1.png'
        },
        {
            image: './assets/img/explore/explore_zma/explore_zma2.png'
        },
        {
            image: './assets/img/explore/explore_zma/explore_zma3.png'
        },
        {
            image: './assets/img/explore/explore_zma/explore_zma4.png'
        },
        {
            image: './assets/img/explore/explore_zma/explore_zma5.png'
        },
        {
            image: './assets/img/explore/explore_zma/explore_zma6.png'
        },
        {
            image: './assets/img/explore/explore_zma/explore_zma7.png'
        },
        {
            image: './assets/img/explore/explore_zma/explore_zma8.png'
        },
        {
            image: './assets/img/explore/explore_zma/explore_zma9.png'
        },
        {
            image: './assets/img/explore/explore_zma/explore_zma10.png'
        }
    ],
    render: function() {
        const htmlexploreZma = this.exploreZmaDescriptions.map(exploreZmaDescription => {
            return `
            <div class="col l-2-4 m-4 c-6 mySlidesZMA">
            <div class="explore__item-concontainer--content">
                <div class="explore__zma-item">
                    <img src="${exploreZmaDescription.image}" alt="">   
                </div>
            </div>
        </div>   
            `
        })
        $('.explore__zma').innerHTML = htmlexploreZma.join('')
    },
    start: function() {
        this.render()
    }
}


export default exploreZma;