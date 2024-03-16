// 渲染成最后的结果的关键处理
import { RelationGraphWith8Update } from './RelationGraphWith8Update';
import { RGListeners, RGOptions } from '../types';

export class RelationGraphFinal extends RelationGraphWith8Update {
  constructor(options: RGOptions, listeners: RGListeners) {
    super(options, listeners);
  }
  ready() {
    // 初始化Layouter
    this.initLayouter();
    // 重置页面大小
    this.resetViewSize();
    // 重置页面之后的宽高信息计算
    this.refreshNVAnalysisInfo();
  }
}
