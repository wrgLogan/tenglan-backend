<template>
    <div class="page">
        <el-main>
            <header>
                <div class="title">{{ title }}</div>
                <div class="top-btns">
                    <el-button type="primary"  @click="uploadVisible = true">+ 上传文件</el-button>
                </div>
            </header>
            <el-table
                :data="fileList"
                stripe
                style="width: 100%;"
            >
                <el-table-column
                    prop="attributes.fileName"
                    label="文件名"
                    >
                </el-table-column>
                
                <el-table-column
                    prop="statusTxt"
                    label="文件状态"
                    width="80">
                </el-table-column>
                <el-table-column
                    prop="createdAt"
                    label="创建日期"
                    width="200"
                    >
                </el-table-column>
                <el-table-column
                    fixed="right"
                    label="操作"
                    width="150">
                    <template slot-scope="scope">
                        <el-button @click="online(scope.row)" type="text" size="small" v-show="scope.row.attributes.status == '0'">&nbsp;&nbsp;&nbsp;上线</el-button>
                        <el-button @click="offline(scope.row)" type="text" size="small" v-show="scope.row.attributes.status == '1'">下线</el-button>
                        <!-- <el-button type="text" size="small">编辑</el-button> -->
                    </template>
                </el-table-column>
            </el-table>
        </el-main>

        <!-- <el-dialog
        title="修改申请状态"
        :visible.sync="statusDialogVisible"
        >
            <el-select v-model="fileStatus" placeholder="请选择申请状态">
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
        </el-dialog> -->
    </div>
</template>
<script src="./script.js"></script>
<style scoped src="./style.css"></style>