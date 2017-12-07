<template>
    <div class="page">
        <el-main>
            <header>
                <div class="title">{{ title }}</div>
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
                <el-table-column
                    prop="age"
                    label="年龄"
                    width="50">
                </el-table-column>
                <el-table-column
                    prop="mobilePhoneNumber"
                    label="手机号"
                    width="110">
                </el-table-column>
                <el-table-column
                    prop="university"
                    label="学校"
                    >
                </el-table-column>
                <el-table-column
                    prop="education"
                    label="教育水平"
                    width="80">
                </el-table-column>
                <el-table-column
                    prop="city"
                    label="现居城市"
                    width="80">
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
                        <el-button @click="handleCheck(scope.row)" type="text" size="small">查看</el-button>
                        <el-button type="text" size="small">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-main>
    </div>
</template>
<script src="./script.js"></script>
<style scoped src="./style.css"></style>