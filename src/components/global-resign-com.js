import kvicon from "./kv-icon";

function globalResignCom(app) {
  const { name, kvIcon } = kvicon;
  app.component(name, kvIcon);
}

export { globalResignCom };
