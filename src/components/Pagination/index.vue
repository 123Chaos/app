<template>
  <div class="pagination">
    <!-- 第一部分 -->
    <button :disabled="pageNo == 1" @click="$emit('getPageNo', pageNo - 1)">
      上一页
    </button>
    <button v-if="startNumAndEndNum.start > 1" @click="$emit('getPageNo', 1)">
      1
    </button>
    <button v-if="startNumAndEndNum.start > 2" disabled="true">···</button>
    <!-- 中间部分 -->
    <button
      v-if="page >= startNumAndEndNum.start"
      v-for="(page, index) in startNumAndEndNum.end"
      :key="index"
      @click="$emit('getPageNo', page)"
      :class="{ active: pageNo == page }"
    >
      {{ page }}
    </button>
    <!-- 尾部 -->
    <button v-if="startNumAndEndNum < totalPage - 1" disabled="true">
      ···
    </button>
    <button
      v-if="startNumAndEndNum < totalPage"
      @click="$emit('getPageNo', totalPage)"
      :class="{ active: pageNo == totalPage }"
    >
      {{ totalPage }}
    </button>
    <button
      :disabled="pageNo == totalPage"
      @click="$emit('getPageNo', pageNo + 1)"
    >
      下一页
    </button>
    <button style="margin-left: 30px" disabled="true">
      共 {{ this.total }} 条
    </button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["pageNo", "pageSize", "total", "continues"],
  computed: {
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    // 计算连续的页码起始与结束数字
    startNumAndEndNum() {
      // 先定义两个变量存储起始和结束数字
      let start = 0,
        end = 0;
      // 连续页码至少为5
      if (this.continues > this.totalPage) {
        start = 1;
        end = this.totalPage;
      } else {
        start = this.pageNo - parseInt(this.continues / 2);
        end = this.pageNo + parseInt(this.continues / 2);
        if (start < 1) {
          start = 1;
          end = this.continues;
        }
        if (end > this.totalPage) {
          end = this.totalPage;
          start =
            this.totalPage - this.continues + 1 < 1
              ? 1
              : this.totalPage - this.continues + 1;
        }
      }
      return { start, end };
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
.active {
  background-color: #409eff;
}
</style>
