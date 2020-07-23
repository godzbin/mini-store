<template>
  <div>
    <van-nav-bar :title="`${editType}商品`" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-form @submit="onSubmit">
      <van-field name="rate" label="商品图片">
        <template #input>
          <img class="product-img" :src="product.image || defaultImg" alt />
          <van-uploader :after-read="afterRead" />
        </template>
      </van-field>
      <van-field
        v-model="product.name"
        name="商品名"
        label="商品名"
        placeholder="商品名"
        :rules="[{ required: true, message: '请填写商品名' }]"
      />
      <van-field
        v-model="product.category"
        name="类别"
        label="类别"
        placeholder="类别"
        :rules="[{ required: true, message: '请填写类别' }]"
      />
      <van-field
        v-model="product.price"
        name="价格"
        label="价格"
        placeholder="价格"
        :rules="[{ required: true, message: '请填写商品名' }]"
      />
      <van-field
        v-model="product.description"
        name="描述"
        label="描述"
        placeholder="描述"
        :rules="[{ required: false, message: '请填写描述' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
    <div v-if="productId" style="margin: 16px;">
      <van-button round block type="danger" @click="deleteProduct">删除</van-button>
    </div>
  </div>
</template>

<script>
import { Notify, Dialog } from 'vant';
import { get, post, remove } from '@/utils/http'
export default {
  name: 'edit-product',
  data () {
    return {
      product: {
        image: ''
      },
      imageFile: '',
      defaultImg: require('@/assets/null.png')
    }
  },
  computed: {
    editType () {
      console.log(this.$route)
      return this.$route.query.id ? '修改' : '新增'
    },
    productId () {
      return this.$route.query.id
    }
  },
  methods: {
    onClickLeft () {
      this.$router.push('/index')
    },
    afterRead (file) {
      const reader = new FileReader()
      this.product.image = file.content
    },
    async onSubmit () {
      if (this.productId) {
        const { id } = await post('./app/updateProduct', {
          ...this.product,
          id: this.productId
        })
        Notify({ type: 'success', message: '提交成功' })
      } else {
        const { id } = await post('./app/addProduct', {
          ...this.product
        })
        Notify({ type: 'success', message: '新增成功' })
        setTimeout(() => {
          this.$router.push(`./editProduct?id=${id}`)
        }, 1000)
        return
      }
      this.getProduct()
    },
    async getProduct () {
      this.product = await get(`./app/getProduct?id=${this.productId}`)
    },
    deleteProduct () {
      Dialog.confirm({
        title: '提示',
        message: `是否要删除${this.product.name}`,
      })
        .then(async () => {
          // on confirm
          await remove(`./app/deleteProduct?id=${this.productId}`)
          Notify({ type: 'success', message: '删除成功' })
          setTimeout(() => {
            this.$router.push('/index')
          }, 1000)
        })
        .catch(() => {
          // on cancel
        });

    }
  },
  mounted () {
    if (this.productId) {
      this.getProduct(this.productId)
    }
  }
}
</script>

<style  scoped>
.product-img {
  width: 88px;
  height: 88px;
  vertical-align: middle;
  margin: 12px;
  border-radius: 8px;
}
</style>