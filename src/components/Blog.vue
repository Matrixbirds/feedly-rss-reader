<template>
  <div class='rss-content'>
    <div class='container'>
      <header class='rss-content-top'><h1>Rss Vue Demo</h1></header>
      <div class='rss-resources'>
        <h5>Blog</h5>
        <div class='rss-item' v-for='item in items'>
          <div class='thumbnail' :style="{'background-image': 'url('+item.thumbnail+')'}"></div>
          <div class='item-body'>
            <div class='item-title'><h5 class='title'>{{ item.title }}</h5></div>
            <p class='paragraph gray'>
              {{ item.paragraph }}
            </p>
            <div class='item-footer'>
              <h6>{{ item.author }} 2015/01/03</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import items from '../fixtures/index.json'
export default {
  data () {
    return {
      items: items['nodeList']
    }
  }
}
</script>


<style scoped>
  .rss-content-top {
    text-align: center;
  }


  .title {
    color: #333333;
  }
  h5,h6,h7,h8 {
    color: #9e9e9e;
  }

  .gray {
    color: #9e9e9e;
  }

  .rss-resources {
    display: block;
    padding: 0 10%;
  }

  .thumbnail {
    width: 206px;
    height: 110px;
    display: block;
    opacity: 1;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    float: left;
  }

  .item-body {
    display: block;
    margin-left: 220px;
  }

  .paragraph {
    margin: 3px 3px;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 75px;
    min-height: 75px;
  }

  .rss-item {
    height: 120px;
    margin-bottom: 32px;
    clear: both;
  }

  .item-title > * {
    margin: 3px 3px;
  }

  .item-footer > * {
    margin: 3px 3px;
  }
</style>
