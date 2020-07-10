<template>
  <div>
    <!--    更新报告表单-->
    <a-form
      :form="form"
      layout="vertical"
      hide-required-mark
    >
      <a-form-item v-decorator="'reportId'" />
      <a-row :gutter="16">
        <a-col :span="24">
          <a-form-item label="用户名">
            <a-textarea
              v-decorator="[
                'workContent',
                {
                  rules: [{ required: true, message: 'Please enter workContent' }],
                  initialValue: userInfo.userName,
                },
              ]"
              :rows="4"
              placeholder="please enter workContent"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <a-col :span="24">
          <a-form-item label="姓名">
            <a-textarea
              v-decorator="[
                'difficulty',
                {
                  rules: [{ required: true, message: 'Please enter difficulty' }],
                  initialValue: userInfo.name,
                },
              ]"
              :rows="4"
              placeholder="please enter difficulty"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <a-col :span="24">
          <a-form-item label="电话号码">
            <a-textarea
              v-decorator="[
                'solution',
                {
                  rules: [{ required: true, message: 'Please enter solution' }],
                  initialValue: userInfo.mobile ,
                },
              ]"
              :rows="4"
              placeholder="please enter solution"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <a-col :span="24">
          <a-form-item label="个性签名">
            <a-textarea
              v-decorator="[
                'experience',
                {
                  rules: [{ required: true, message: 'Please enter experience' }],
                  initialValue: userInfo.userDescription,
                },
              ]"
              :rows="4"
              placeholder="please enter experience"
            />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
    <div
      :style="{
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: '100%',
        borderTop: '1px solid #e9e9e9',
        padding: '10px 16px',
        background: '#fff',
        textAlign: 'right',
        zIndex: 1,
      }"
    >
      <a-button :style="{ marginRight: '8px' }" @click="onclose">
        取消
      </a-button>
      <a-button type="primary" html-type="submit" @click="handleSubmit">修改</a-button>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      form: this.$form.createForm(this)
    }
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },
  methods: {
    onclose() {
      this.$emit('hide')
    },
    handleSubmit() {
      this.form.validateFields(() => {
        this.$emit('hide')
      })
    }
  }
}

</script>
<style scoped>

</style>
