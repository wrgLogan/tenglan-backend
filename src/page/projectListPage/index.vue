<template>
    <div class="page">
        <el-main>
            <header>
                <div class="title">{{ title }}</div>
            </header>
            <el-table
                :data="projectList"
                stripe
                style="width: 100%;"
            >
                
                <el-table-column
                    prop="title"
                    label="项目名"
                    width="250">
                </el-table-column>
                <el-table-column
                    prop="applyNum"
                    label="申请人数"
                    width="80">
                </el-table-column>
                <el-table-column
                    prop="passNum"
                    label="通过人数"
                    width="80">
                </el-table-column>
                <el-table-column
                    prop="status"
                    label="状态"
                    width="50">
                </el-table-column>
                <el-table-column
                    prop="application"
                    label="报名表"
                    >
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