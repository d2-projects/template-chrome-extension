/* eslint-disable */

const menus = [
  'DEMO'
]

menus.forEach((menu, index) => {
  chrome.contextMenus.create({
    title: menu,
    onclick: function (info, tab) {
      chrome.tabs.sendMessage(tab.id, {
        action: 'action_name',
        category: menu
      })
    }
  })
})
