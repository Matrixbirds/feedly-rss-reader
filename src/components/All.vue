<template>
  <div class='rss-content'>
    <div class='container'>
      <header class='rss-content-top'><h1>Rss Vue Demo</h1></header>
      <div class='rss-resources'>
        <h5>All</h5>
        <div class='rss-item' v-for='item in feeds'>
          <div class='thumbnail' :style="{'background-image': 'url('+items[0].thumbnail+')'}"></div>
          <div class='item-body'>
            <div class='item-title'>
              <a :href="item['link']">
                <h5 class='title gray lighter'>{{ item['title'] }}</h5>
              </a>
            </div>
            <p class='paragraph gray'>
              {{ getText(item['description']) }}
            </p>
            <div class='item-footer'>
              <h6 class='lighter'>{{ item['dc:creator'] }} {{ timeFormat(item['pubDate']) }}</h6>
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
      items: items['nodeList'],
      feeds: []
    }
  },
  methods: {
    convertBlob (blob) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsText(blob)
        reader.addEventListener('load', function () {
          let domArr = new DOMParser()
            .parseFromString(this.result, 'text/xml')
            .documentElement.children[0].children
          domArr = [].slice.call(domArr, 4)
          resolve(domArr.map(item => {
            return [... item.children].reduce((prev, cur) => {
                prev[cur.nodeName] = cur.textContent
                return prev
            }, {})
          }))
        })
      })
    },
    getText (description) {
      let dom = new DOMParser()
      return dom.parseFromString(description, 'text/xml').documentElement.textContent
    },
    timeFormat (str) {
      return moment(str).format('YYYY年MM月DD日')
    }
  },
  route: {
    data ({ to }) {
      return this.$http.get('https://yuguo.us/feed.xml')
        .then((res) => {
          return res.blob()
        })
        .then((blob) => {
          return this.convertBlob(blob)
        })
        .then((data) => {
          this.feeds = data
        })
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
    margin: 0 0;
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
    border: 1px solid #DFDFDF;
    border-radius: 5px;
  }

  .item-body {
    display: block;
    margin-left: 220px;
  }

  .item-title {
    margin: 3 3px;
  }

  .item-title > a {
    text-decoration: none;
  }

  .paragraph {
    margin: 5px 0 0 0;
    font-size: 13px;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 75px;
  }

  .rss-item {
    height: 120px;
    margin-bottom: 32px;
    clear: both;
  }

  .item-footer {
    margin-top: 3px;
  }

  .lighter {
    font-weight: lighter;
  }
</style>
