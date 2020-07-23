<template>
  <div>
    <van-search
      v-model="searchText"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
      @cancel="onCancel"
    />
    <van-row class="layout-content" gutter="10" v-if="categoryList.length">
      <van-col span="6" class="layout-content-left">
        <van-sidebar v-model="activeKey" style="width: 100px;">
          <van-sidebar-item v-for="item in categoryList" :key="item" :title="item" />
        </van-sidebar>
      </van-col>
      <van-col span="18" class="layout-content-right">
        <van-card
          style="text-align:left;"
          v-for="item in productListByCategory"
          :key="item.id"
          :price="item.price"
          :desc="item.description"
          :title="item.name"
          :thumb="item.image || defaultImg"
          @click="showDetail(item)"
        />
      </van-col>
    </van-row>
    <div class="no-data" v-else>暂无数据</div>
    <van-button class="add-btn" round type="primary" size="large" @click="addProduct">+</van-button>
  </div>
</template>

<script>
import { get } from '@/utils/http'
export default {
  name: 'Index',
  data () {
    return {
      searchText: '',
      activeKey: 0,
      active: 0,
      productList: [],
      defaultImg: require('@/assets/null.png')
    }
  },
  computed: {
    categoryList () {
      return this.productListBySearch.reduce((result, item) => {
        if (!result.includes(item.category)) {
          result.push(item.category)
        }
        return result
      }, [])
    },
    productListBySearch () {
      return this.productList.filter((item) => item.name.indexOf(this.searchText) > -1)
    },
    productListByCategory () {
      return this.productListBySearch.filter((item) => {
        return item.category === this.categoryList[this.activeKey]
      })
    }
  },
  methods: {
    onSearch () {
    },
    onCancel () { },
    showDetail (item) {
      // 
      this.$router.push(`./editProduct?id=${item.id}`)
    },
    addProduct () {
      this.$router.push('./editProduct')
    },
    async getProductList () {
      this.productList = await get('/app/getProductList')
    }
  },
  activated () {
    this.getProductList()
  },
  mounted () {
    this.getProductList()
    // console.log(this.productList)
  }
}
</script>

<style scoped>
.add-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  text-align: center;
  font-size: 20px;
}
.no-data {
  color: #999;
  margin: 10px;
  text-align: center;
}
.layout-content {
  height: calc(100vh - 54px);
}
.layout-content-left,
.layout-content-right {
  height: 100%;
  overflow: auto;
}
</style>