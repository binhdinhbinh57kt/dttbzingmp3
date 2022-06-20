const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const navItems = $$('.sidebar__nav-item')
const appSidebar = $('.app__sidebar')
const btnExpand = $('.sidebar__plus-expand')
const btnShrink = $('.sidebar__plus-shrink')
const app = $('.app')
const appContainer = $('.app__container')
const settingBtn = $('.app__private-setting--btn')
const settingContent = $('.app__private-setting')
const settingChildItems = $$('.app__setting-child--item')
const settingToggles = $$('.app__setting-display--item')
const settingAvatar = $('.app__private-item--avatar')
const settingAvatarList =  $('.app__avatar-list')
const settingAvatarItems = $$('.app__avatar-item')
const appMainItems = $$('.app__main-item')



navItems.forEach((navitem,index) => {
    const appMainItem = appMainItems[index]

    navitem.onclick = function() {
        $('.sidebar__nav-item.active').classList.remove('active')
        navitem.classList.add('active')
        $('.app__main-item.active').classList.remove('active')
        appMainItem.classList.add('active')
    }
})

btnExpand.onclick = function() {
    appSidebar.classList.add('expand')
}

btnShrink.onclick = function() {
    appSidebar.classList.remove('expand')
}

appContainer.onclick = function() {
    appSidebar.classList.remove('expand') 
}

// SETTING
settingBtn.onclick = function(e) {
    if(settingContent.style.display === "block") {
        settingContent.style.display = "none"
    }
    else {
        settingContent.style.display = "block"
    }
    e.stopPropagation()
}

settingToggles.forEach((settingToggle,index) => {
    settingToggle.onclick = function(e) {
       e.stopPropagation()
    }
})

// SETTING AVATAR
settingAvatar.onclick = function(e) {
    if(settingAvatarList.style.display === "block") {
        settingAvatarList.style.display = "none"
    }
    else {
        settingAvatarList.style.display = "block"
    }
    e.stopPropagation()
}

settingAvatarItems.forEach((settingAvatarItem,index) => {
    settingAvatarItem.onclick = function(e) {
       e.stopPropagation()
    }
})

app.onclick = function() {
    settingContent.style.display = "none"
    settingAvatarList.style.display = "none"
}

settingChildItems.forEach((settingChildItem,index) => {
    settingChildItem.onclick = function(e) {
        $('.app__setting-child--item.active').classList.remove('active')
        settingChildItem.classList.add('active')
        e.stopPropagation()
    }
})


