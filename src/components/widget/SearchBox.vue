<template>
<el-popover
    @show="onShowInputBox"
    placement="bottom"
    trigger="click"
    v-model="showInputBox"
    v-if="!directlyShow"
    width="400">
    <el-input v-model="keyword" @keyup.enter.native="search" :placeholder="placeholder" clearable ref="searchInputBox">
        <el-button circle size="medium" slot="append" @click="search" icon="el-icon-search"></el-button>
    </el-input>
    <el-button circle size="medium" slot="reference" icon="el-icon-search">
    </el-button>
</el-popover>
<el-input v-else v-model="keyword" :placeholder="placeholder" @keyup.enter.native="search" clearable ref="searchInputBox">
    <el-button circle size="medium" slot="append" @click="search" icon="el-icon-search"></el-button>
</el-input>
</template>

<script>

export default {
    name: "SearchBox",
    data() {
        return {
            keyword: "",
            showInputBox: false
        };
    },
    props: {
        placeholder: String,
        directlyShow: {
            type: Boolean,
            default: false
        },
        input: String
    },
    watch: {
        input: {
            "immediate": true,
            "handler": function(val) {
                this.keyword = val;
            }
        }
    },
    methods: {
        search() {
            if (this.keyword.trim() == "") return;
            this.showInputBox = false;
            let temp = this.keyword;
            this.keyword="";
            this.$emit("search", temp);
            
        },
        onShowInputBox(){ 
            this.$nextTick(() => {
                this.$refs.searchInputBox.focus();
            });
        }
    }
};
</script>