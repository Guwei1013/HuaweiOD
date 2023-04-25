interface Item {
  name: string,
  type: 'file'|'folder',
  children?: Item[]
}



function printFileTree(dir: Item[]) {
 // coding
}


const a = {
  name: 'file',
  type: 'file'
}
const b = {
  name: 'folder',
  type: 'folder',
  children: [
  ]
}

printFileTree([
  {
    name: 'public',
    type: 'folder',
    children: [
      {
        name: 'index.html',
        type: 'file',
      },
      {
        name: 'favicon.ico',
        type: 'file',
      },
    ]
  },
  {
    name: 'src',
    type: 'folder',
    children: [
      {
        name: 'assets',
        type: 'folder',
        children: [
          {
            name: 'base.css',
            type: 'file',
          },
          {
            name: 'logo.svg',
            type: 'file',
          },
          {
            name: 'main.css',
            type: 'file',
          },
        ]
      },
      {
        name: 'components',
        type: 'folder',
        children: [
          {
            name: 'icons',
            type: 'folder',
            children: [
              {
                name: 'icon1.vue',
                type: 'file',
              },
              {
                name: 'icon2.vue',
                type: 'file',
              },
              {
                name: 'icon3.vue',
                type: 'file',
              },
            ]
          },
          {
            name: 'component1.vue',
            type: 'file',
          },
          {
            name: 'component2.vue',
            type: 'file',
          },
          {
            name: 'component3.vue',
            type: 'file',
          },
        ]
      },
      {
        name: 'App.vue',
        type: 'file',
      },
      {
        name: 'main.js',
        type: 'file',
      },
    ]
  },
  {
    name: 'package.json',
    type: 'file',
  },
  {
    name: 'readme.md',
    type: 'file',
  },
  {
    name: 'vue.config.js',
    type: 'file',
  },
])
console.log(`

`)

export default {}