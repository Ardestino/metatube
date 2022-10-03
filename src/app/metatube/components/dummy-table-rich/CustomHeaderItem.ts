
import { TableItem, TableHeaderItem } from "carbon-components-angular";

export class CustomHeaderItem extends TableHeaderItem {
  // used for custom sorting
  compare(one: TableItem, two: TableItem) {
    const stringOne = (one.data.name || one.data.surname || one.data).toLowerCase()
    const stringTwo = (two.data.name || two.data.surname || two.data).toLowerCase()

    if (stringOne > stringTwo) {
      return 1
    }
    else if (stringOne < stringTwo) {
      return -1
    }
    else {
      return 0
    }
  }
}

