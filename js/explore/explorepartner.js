const explorePartner = {
    explorePartnerDescriptions: [
        {
            img: './assets/img/explore/explore_partner/explore_partner1.png',
        },
        {
            img: './assets/img/explore/explore_partner/explore_partner2.png',
        },
        {
            img: './assets/img/explore/explore_partner/explore_partner3.png',
        },
        {
            img: './assets/img/explore/explore_partner/explore_partner4.png',
        },
        {
            img: './assets/img/explore/explore_partner/explore_partner5.png',
        },
        {
            img: './assets/img/explore/explore_partner/explore_partner6.png',
        },
        {
            img: './assets/img/explore/explore_partner/explore_partner7.png',
        },
    ],
    render: function() {
        const htmlexplorePartners = this.explorePartnerDescriptions.map(explorePartnerDescription => {
            return `
                <div class="col l-1-7 m-3 c-4">
                    <div class="explore__partner-img">
                        <div class="explore__partner-container"></div>
                        <img src="${explorePartnerDescription.img}" alt="" class="explore__partner-container--img">
                    </div>
                </div>
            `
        })
        $('.explore__partner').innerHTML = htmlexplorePartners.join('')
    },
    start: function() {
        this.render()
    }
}
explorePartner.start()


