<template>
    <div class="page">
        <el-main>
            <header>
                <div class="title">{{ title }}</div>
                <div class="top-btns">
                    <el-button type="primary"  @click="dialogFormVisible = true">+ 新建项目</el-button>
                </div>
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
                    prop="projStatus"
                    label="状态"
                    width="80">
                </el-table-column>
                <el-table-column
                    prop="downloadFile.attributes.file.attributes.url"
                    label="报名表"
                    >
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
                    fixed="right"
                    label="操作"
                    width="150">
                    <template slot-scope="scope">
                        <el-button @click="updateStatus(scope.row)" type="text" size="small">修改状态</el-button>
                        <el-button type="text" size="small" @click="toEditProject(scope.row)">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-main>

        <el-dialog title="新建项目" :visible.sync="dialogFormVisible">
            <el-form :model="addProjForm">
                <el-form-item label="项目名称" :label-width="formLabelWidth">
                    <el-input v-model="addProjForm.title" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="submitAddProject">确 定</el-button>
            </div>
        </el-dialog>

        <el-dialog
        title="修改项目状态"
        :visible.sync="statusDialogVisible"
        
        >
        <el-select v-model="projStatus" placeholder="请选择项目状态">
            <el-option
            v-for="item in statusOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
        <div slot="footer" class="dialog-footer">
            <el-button @click="statusDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="submitUpdateStatus">确 定</el-button>
        </div>
        </el-dialog>
    </div>
</template>
<script src="./script.js"></script>
<style scoped src="./style.css"></style>