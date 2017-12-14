<template>
    <div class="page">
        <el-main>
            <header>
                <div class="title">{{ title }}</div>
            </header>
            <section class="body">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="名称">
                      <el-input v-model="form.attributes.title"></el-input>
                    </el-form-item>
                    <el-form-item label="项目备注">
                      <el-input v-model="form.attributes.briefInt"></el-input>
                    </el-form-item>
                    <el-form-item label="启动时间">
                      <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.attributes.startDate" style="width: 100%;"></el-date-picker>
                      </el-col>
                    </el-form-item>
                    <el-form-item label="结束时间"> 
                      <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.attributes.endDate" style="width: 100%;"></el-date-picker>
                      </el-col>
                    </el-form-item>
                    <el-form-item label="目标人数">
                      <el-col :span="11">
                        <el-input v-model="form.attributes.planNum"></el-input>
                      </el-col>
                    </el-form-item>

                    <el-form-item class="requirement" label="课程要求">
                      <el-col :span="2">
                        <span>数学</span>
                        <el-input v-model="form.attributes.requirement1"></el-input>
                      </el-col>
                      <el-col :span="2">
                        <span>雅思</span>
                        <el-input v-model="form.attributes.requirement2"></el-input>
                      </el-col>
                      <el-col :span="2">
                        <span>托福</span>
                        <el-input v-model="form.attributes.requirement3"></el-input>
                      </el-col>
                      <el-col :span="2">
                        <span>费用</span>
                        <el-input v-model="form.attributes.requirement4"></el-input>
                      </el-col>
                    </el-form-item>

                    <el-form-item label="报名表">
                      <span>{{ form.attributes.downloadFile.attributes.fileName }}</span>
                      <input type="file" @change="getFile($event)"/>
                    </el-form-item>
                    
                    <el-form-item label="详情">
                      <p id="projectDetails" class="aditcontent" contenteditable="true" v-html="form.attributes.projectDetails"></p>
                    </el-form-item>
                    <el-form-item label="须知">
                      <p id="projectNotice" class="aditcontent" contenteditable="true" v-html="form.attributes.projectNotice"></p>
                    </el-form-item>
                    <el-form-item label="师资">
                      <p id="projectTeachers" class="aditcontent" contenteditable="true" v-html="form.attributes.projectTeachers"></p>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" @click="saveProject">保存修改</el-button>
                    </el-form-item>
                  </el-form>
            </section>
            
        </el-main>
    </div>
</template>
<script src="./script.js"></script>
<style scoped src="./style.css"></style>