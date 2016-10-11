<template>
  <div class='rss-menu'>
    <div class='rss-tabs'>
      <div class='top-button-list'>
        <ul class='button-list'>
          <li class='fa fa-meanpath'><a href="#">Today</a></li>
          <li class='fa fa-meanpath'><a href="#">Saved for later</a></li>
        </ul>
      </div>
      <div class='discover'>
        <button class='discover-button'>DISCOVER AND FOLLOW</button>
      </div>
      <div class='top-menu-button-list'>
        <ul class='button-list'>
          <li class='fa fa-bars fa-6'>
            <a>All</a>
          </li>
          <li class='fa fa-circle-thin'>
            <a>Blogs</a>
          </li>
          <li class='fa fa-circle-thin'>
            <a>My Favorites Podcasts</a>
          </li>
          <li class='fa fa-circle-thin'>
            <a>Uncategorized</a>
          </li>
        </ul>
      </div>
      <div class='buttom-menu-button-list'>
        <ul class='button-list'>
          <li class='button-tab'>
            <a>Organize sources</a>
          </li>
          <li class='fa fa-rocket'>
            <a>Integrations</a>
            <button class='button-yellow'>NEW</button>
          </li>
          <li class='fa fa-share-alt'>
            <a>Share Collections</a>
          </li>
          <li class='button-tab'>
            <a>Support</a>
          </li>
          <li class='button-tab'>
            <a>More</a>
          </li>
        </ul>
      </div>
      <div class='fixed-profile-board'>
        <a class='author-avatar'>
          <img src='//assets.servedby-buysellads.com/p/manage/asset/id/33270'>
        </a>
        <div class='author-name'>
          author nameauthor nameauthor nameauthor nameauthor nameauthor nameauthor nameauthor nameauthor name
        </div>
        <button class='upgrade-button'>
          UPGRADE
        </button>
      </div>
    </div>
  </div>
  <rss-content></rss-content>
</template>

<script>
import RssContent from './components/RssContent'

export default {
  components: {
    RssContent
  }
}
</script>

<style lang="less">
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  height: 100%;
  background: #fff;
  margin: 0;
  padding: 0;
}


.rss-menu,
.rss-content {
  font-family: Source Sans Pro, Helvetica, sans-serif;
  height: 100%;
}

.rss-content {
  width: 100%;
  margin-left: 180px;
}

.rss-menu {
  background: #EFEFEF;
  position: fixed;
}

.rss-tabs {
  width: 220px;
  padding: 0 20px;
}

.rss-menu > * {
  font-family: sans-serif;
  font-size: 13px;
}

.border {
  border: 1px solid #fff;
}

.button-list {
  list-style: none;
  padding: 0
}

.button-list > li > a {
  padding-left: 5px;
  display: inline-block;
  line-height: 22px;
  text-decoration: none;
  color: inherit;
}

.button-list > li:hover {
  background: rgba(0, 0, 0, 0.05);
}

.fa:after {
  display: inline-block;
  content: '+';
  float: right;
  line-height: 25px;
}

.button-yellow {
  background: inherit;
  border: 1px solid #ff9632;
  border-radius: 4px;
  color: #f99632;
}

li {
  padding: 5px;
  cursor: pointer;
}

.fa {
    display: block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.button-tab {
  padding-left: 18px;
}

.discover-button {
  padding: 10px 15px;
  width: 100%;
  border: 1px solid rgba(14, 14, 14, 0.28);
  background: #EFEFEF;
  border-radius: 4px;
}

button:focus{
  outline: none;
}

button:hover{
  cursor: pointer;
}

.author-avatar {
  display: block;
  flex-grow: 2;
}

.author-avatar:hover {
  cursor: pointer;
}

.author-avatar > img {
  width: 25px;
  height: 25px;
  border-radius: 15px;
}

.fixed-profile-board {
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 240px;
  padding: 10px 10px;
  align-items: center;
  display: flex;
}

.author-name {
  display: inline-block;
  flex-grow: 2;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 140px;
}

.upgrade-button {
  border-radius: 4px;
  color: #fff;
  border: inherit;
  background-color: #F60;
  height: 27px;
}

</style>
