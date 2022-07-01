const exploreZingChart = {
    exploreZingChartDescriptions: [
        {
            image: './assets/img/explore/explore_zingchart/explore_zingchart1.jpg'
        },
        {
            image: './assets/img/explore/explore_zingchart/explore_zingchart2.jpg'
        },
        {
            image: './assets/img/explore/explore_zingchart/explore_zingchart3.jpg'
        }
    ],
    render: function() {
        const htmleexploreZingChart = this.exploreZingChartDescriptions.map(exploreZingChartDescription => {
            return `
            <div class="col l-4 m-6 c-6">
                <div class="explore__item-concontainer--content">
                    <div class="item__img">
                        <img src="${exploreZingChartDescription.image}" alt="">
                    </div>
                </div>
            </div>
            `
        })
        $('.explore__zingchart').innerHTML = htmleexploreZingChart.join('')
    },
    start: function() {
        this.render()
    }
}

export default exploreZingChart;