<template>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
    status-icon
  >
    <el-form-item label="username" prop="username">
      <el-input class="input-width" v-model="ruleForm.username" />
    </el-form-item>
    <el-form-item label="password" prop="password">
      <el-input class="input-width" v-model="ruleForm.password" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">
        Login
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ElMessageBox, ElMessage } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'

import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";

const userStore = useUserStore();
const router = useRouter();


interface RuleForm {
  username: string
  password: string
}

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  username: '',
  password: '',
})

const rules = reactive<FormRules<RuleForm>>({
  username: [
    { required: true, message: 'Please input username', trigger: 'blur' },
    { min: 2, max: 20, message: 'Length should be 2 to 20', trigger: 'blur' },
  ],
  password: [
    { required: true, message: 'Please input password', trigger: 'blur' },
    { min: 5, max: 20, message: 'Length should be 5 to 20', trigger: 'blur' },
  ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      userStore.Login(ruleForm).then(res => {
        const { success, error } = res;
        if (!success) {
          ElMessage.error(error || '失败')
        } else {
          ElMessage.success('成功')
          router.replace('/')
        }
      }).catch(err => {
        ElMessage.error('失败！')
      })
    } else {
      ElMessage.error('请输入')
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

</script>

<style scoped>
.input-width {
  width: 330px;
}
</style>

