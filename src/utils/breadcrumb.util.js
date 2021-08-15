import { appTreeDirectory, APP_TREE } from "../constants/breadcrumb.constant";
import stringUtil from "./string.util";

class BreadcrumbUtil {
  generateBreadcrumbPath(name, directory = {}) {
    let breadcrumb = [];

    const path = appTreeDirectory[stringUtil.toKey(name)];

    if (path.length === 1) {
      return [];
    }
    
    let pointer = APP_TREE[path[0]];
    breadcrumb.push({
      name: pointer.name,
      link: pointer.link
    });

    for (let i = 1; i < path.length-1; i++) {
      pointer = pointer.children[path[i]];
      if (directory[pointer.name]) {
        breadcrumb.push(directory[pointer.name]);
      } else {
        breadcrumb.push({
          name: pointer.name,
          link: pointer.link
        });
      }
    }

    return breadcrumb;
  }
}

export default new BreadcrumbUtil();