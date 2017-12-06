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
                    prop="username"
                    label="用户名"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="university"
                    label="学校">
                </el-table-column>
                <el-table-column
                    prop="major"
                    label="专业">
                </el-table-column>
                <el-table-column
                    fixed="right"
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