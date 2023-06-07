export interface TreeNode {
  name: string;
  children?: TreeNode[] | null;
  _children?: TreeNode[] | null;
}

export const TreeData = [
  {
    "name": "Algorithm",
    "url": "algorithm",
    "children": [
      {
        "name": "ordering",
        "url": "algorithm-ordering"
      },
      {
        "name": "ordering",
        "url": "algorithm-ordering"
      },
      {
        "name": "ordering",
        "url": "algorithm-ordering"
      }
    ]
  },
  {
    "name": "Algorithm",
    "url": "algorithm",
    "children": [
      {
        "name": "ordering",
        "url": "algorithm-ordering"
      }
    ]
  },
  {
    "name": "Array",
    "isOpen": false,
    "url": "array",
    "children": [
      {
        "name": "basic search",
        "url": "array-basicSearch",
        "children": [
          {
            "name": "3",
            "isOpen": false,
            "url": "array-basicSearch-3"
          },
          {
            "name": "1",
            "isOpen": false,
            "url": "array-basicSearch-1"
          }
        ]
      },
      {
        "name": "Linear Search",
        "isOpen": false,
        "url": "array-linearSearch",
        "children": [
          {
            "name": "1",
            "isOpen": false,
            "url": "/array-linearSearch-1"
          },
          {
            "name": "2",
            "isOpen": false,
            "url": "/array-linearSearch-2"
          }
        ]
      },
      {
        "name": "Binary Search",
        "url": "array-binarySearch"
      }
    ]
  },
  {
    "name": "Linked List",
    "url": "linkedList",
    "children": [
      {
        "name": "Tree",
        "url": "linkedList-tree"
      }
    ]
  }
]

export const memberBox = {
  width: 125,
  height: 40,
  marginHeight: 280,
  marginWidth: 50
};
