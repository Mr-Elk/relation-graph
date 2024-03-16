/* 本文件是Vue2 版本的index.js文件 */
import { version } from './constants';
// 渲染成 RelationGraph 的核心代码
import RelationGraph from './core4vue/index.vue';
// 生成整体页面的最终方法
import { RelationGraphFinal } from './models/RelationGraphFinal';
// 下面是几种布局 依次是双向树、中心布局、圆形布局、固定布局、力学布局
import BidirectionalTreeLayouter from './layouters/SeeksBidirectionalTreeLayouter';
import CenterLayouter from './layouters/SeeksCenterLayouter';
import CircleLayouter from './layouters/SeeksCircleLayouter';
import FixedLayouter from './layouters/SeeksFixedLayouter';
import ForceLayouter from './layouters/SeeksForceLayouter';

// 下面是对于关系图谱对应的连接线、节点、配置项、布局容器的JSON数据和数据类型限制
import * as SeeksRGLink from './models/RGLink';
import * as SeeksRGNode from './models/RGNode';
import * as SeeksRGOptions from './models/RGOptions';
import * as SeeksRGLayouter from './models/RGLayouter';

export * from './types';
export const RelationGraphCore = RelationGraphFinal;
export const Layout = {
  BidirectionalTreeLayouter,
  CenterLayouter,
  CircleLayouter,
  FixedLayouter,
  ForceLayouter
};
export const RGLayouterUtils = SeeksRGLayouter;
export const RGOptionsUtils = SeeksRGOptions;
export const RGLinkUtils = SeeksRGLink;
export const RGNodeUtils = SeeksRGNode;
const install = (Vue:any, options?:any) => {
  Vue.component('RelationGraph', RelationGraph);
};
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
const rg = RelationGraph;// as RelationGraphVueComponent;
export default {
  ...rg,
  version,
  install
};
