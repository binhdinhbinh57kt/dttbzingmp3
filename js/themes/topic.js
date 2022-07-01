const topicTopic = {
    topicTopicDescriptions: [
        {
            name: 'XONE',
            image: './assets/img/themes/topic/topic__xone.jpg'
        },
        {
            name: 'Zing Music Awards',
            image: './assets/img/themes/topic/topic__zma.jpg'
        },
        {
            name: 'Tháp Eiffel',
            image: './assets/img/themes/topic/topic__eiffel.jpg'
        }
    ],
    render: function() {
        const htmlTtopicTopic = this.topicTopicDescriptions.map(topicTopicDescription => {
            return `
            <div class="col c-4 l-2 m-4 choose--item">
                <div class="topic__choose-img ">
                    <img src="${topicTopicDescription.image}" alt="" class="topic__img">
                    <div class="choose__description">
                        <div class="choose__item choose__apply">Áp dụng</div>
                        <div class="choose__item choose__preview">Xem trước</div>
                    </div>
                </div>
                <div class="topic__choose-name">${topicTopicDescription.name}</div>
            </div>
            `
        })
        $('.topic__topic').innerHTML = htmlTtopicTopic.join('')
    },
    start: function() {
        this.render()
    }
}

export default topicTopic;
