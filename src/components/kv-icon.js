import { createVNode } from "vue";
import * as eIcon from "@element-plus/icons-vue";

const kvIcon = (props) => {
  const { name } = props;
  return createVNode(eIcon[name]);
};

export default { name: "kvIcon", kvIcon };
