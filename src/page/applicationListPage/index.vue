<template>
    <div class="page">
        <el-main>
            <header>
                <div class="title">{{ title }}</div>
            </header>
            <el-table
                :data="applicationList"
                stripe
                style="width: 100%;"
            >
                
                <el-table-column
                    prop="attributes.project.attributes.title"
                    label="项目名">
                </el-table-column>
                <el-table-column
                    prop="attributes.applicant.attributes.name"
                    label="申请人"
                    width="80">
                </el-table-column>
                <el-table-column
                    prop="createdAt"
                    label="申请时间"
                    width="180">
                </el-table-column>
                <el-table-column
                    label="申请表">
                    <template slot-scope="scope">
                        <a :href="scope.row.attributes.applyFile.attributes.file.attributes.url" download>{{ scope.row.attributes.applyFile.attributes.fileName }}</a>
                    </template>
                </el-table-column>
                <el-table-column
                    label="展示视频">
                    <template slot-scope="scope">
                        <a :href="scope.row.attributes.videoFile.attributes.file.attributes.url" download>{{ scope.row.attributes.videoFile.attributes.fileName }}</a>
                    </template>
                </el-table-column>
                <el-table-column
                    label="成绩单">
                    <template slot-scope="scope">
                        <a :href="scope.row.attributes.reportCardFile.attributes.file.attributes.url" download>{{ scope.row.attributes.reportCardFile.attributes.fileName }}</a>
                    </template>
                </el-table-column>
                <!-- <el-table-column
                    prop="status1"
                    label="一审状态"
                    width="80">
                </el-table-column>
                <el-table-column
                    prop="needInterview"
                    label="是否需要面试"
                    width="120"
                    >
                </el-table-column>
                <el-table-column
                    prop="status2"
                    label="二审状态"
                    width="80"
                    >
                </el-table-column> -->
                <el-table-column
                    prop="passStatus"
                    label="是否通过"
                    width="80"
                    >
                </el-table-column>
                <el-table-column
                    label="操作"
                    width="200">
                    <template slot-scope="scope">
                        <!-- <el-button @click="handleCheck(scope.row)" type="text" size="small">查看</el-button> -->
                        <el-button type="text" size="small" @click="showUpdate(scope.row)">更改状态</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-main>
        <el-dialog
        title="修改申请状态"
        :visible.sync="statusDialogVisible"
        
        >
            <el-select v-model="applyStatus" placeholder="请选择申请状态">
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