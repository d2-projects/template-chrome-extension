/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'

const AppConstructor = Vue.extend(App)
const instance = new AppConstructor()
instance.$mount();
document.body.appendChild(instance.$el);

chrome.extension.onMessage.addListener(
  async function (request, sender, sendMessage) {
    instance.onMessage(request)
  }
)
