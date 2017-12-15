<template>
    <div class="page">
        <el-main>
            <header>
                <div class="title">{{ title }}</div>
                <div class="top-btns">
                    <el-button type="primary"  @click="addVisible = true">+ 新建消息</el-button>
                </div>
            </header>
            <el-table
                :data="messages"
                stripe
                style="width: 100%;"
            >
                <el-table-column
                    prop="attributes.title"
                    label="标题"
                    width="100">
                </el-table-column>
                <el-table-column
                    prop="attributes.content"
                    label="内容"
                    >
                </el-table-column>
                <el-table-column
                    prop="attributes.type"
                    label="消息类型"
                    width="100">
                </el-table-column>
                <el-table-column
                    prop="attributes.receiver.attributes.name"
                    label="接收用户"
                    width="110">
                </el-table-column>
                <!-- <el-table-column
                    label="操作"
                    width="100">
                    <template slot-scope="scope">
                        <el-button @click="handleCheck(scope.row)" type="text" size="small">编辑</el-button>
                    </template>
                </el-table-column> -->
            </el-table>
        </el-main>

        <el-dialog
        title="创建广播消息"
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
                <el-button type="primary" @click="submitAdd">上 传</el-button>
            </div>
        </el-dialog>
        
    </div>
</template>
<script src="./script.js"></script>
<style scoped src="./style.css"></style>