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

        <el-dialog
        title="上传文件"
        :visible.sync="uploadVisible"
        
        >
            <el-upload
                class="upload-demo"
                action=""
                :on-remove="onRemove"
                :auto-upload="false"
                :limit="1"
                :on-change="onChange"
                >
                <el-button size="small" type="primary">选择文件</el-button>
                <div slot="tip" class="el-upload__tip">请选择要上传的文件</div>
            </el-upload>
            <div slot="footer" class="dialog-footer">
                <el-button @click="uploadVisible = false">取 消</el-button>
                <el-button type="primary" @click="submitUpload">上 传</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script src="./script.js"></script>
<style scoped src="./style.css"></style>