<template>
    <div class="page">
        <el-main>
            <header>
                <div class="title">{{ title }}</div>
                <!-- <div class="top-btns">
                    <el-button type="primary">+ 添加用户</el-button>
                </div> -->
            </header>
            <el-table
                :data="userList"
                stripe
                style="width: 100%;"
            >
                
                <el-table-column
                    prop="name"
                    label="姓名"
                    width="100">
                </el-table-column>
                <el-table-column
                    prop="gender"
                    label="性别"
                    width="50">
                </el-table-column>
                <!-- <el-table-column
                    prop="age"
                    label="年龄"
                    width="50">
                </el-table-column> -->
                <el-table-column
                    prop="mobilePhone"
                    label="手机号"
                    width="110">
                </el-table-column>
                <el-table-column
                    prop="university"
                    label="学校"
                    width="150"
                    >
                </el-table-column>
                <el-table-column
                    prop="grade"
                    label="年级"
                    width="80">
                </el-table-column>
                <el-table-column
                    prop="city"
                    label="现居城市"
                    width="80">
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="联系地址">
                </el-table-column>
                <el-table-column
                    prop="joinNum"
                    label="项目参与数"
                    width="100">
                </el-table-column>
                <el-table-column
                    prop="applyNum"
                    label="项目申请数"
                    width="100">
                </el-table-column>
                <el-table-column
                    label="操作"
                    width="100">
                    <template slot-scope="scope">
                        <el-button @click="showAdd(scope.row)" type="text" size="small">发送消息</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-main>

        <el-dialog
        title="给用户发送消息"
        :visible.sync="addVisible"
        
        >
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="消息标题">
                    <el-col :span="11">
                        <el-input v-model="form.title"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="消息内容">
                    <el-col :span="18">
                        <el-input type="textarea" v-model="form.content"></el-input>
                    </el-col>
                    
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="addVisible = false">取 消</el-button>
                <el-button type="primary" @click="submitAdd">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script src="./script.js"></script>
<style scoped src="./style.css"></style>