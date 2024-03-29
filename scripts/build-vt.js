// const fs = require('fs-extra')
// const glob = require('globby')
import fs from 'fs-extra'
import fg from 'fast-glob'

function toDist(file) {
  return file.replace(/vuetom\//, 'vuetom/dist/')
}

function rewrite(file) {
  if (process.env.NODE_ENV !== 'build') return
  const content = fs.readFileSync(file, 'utf-8')
  const res = content.replace(
    /import '\.\/styles\/index.scss'/,
    'import \'./css/index.css\''
  )
  fs.writeFileSync(file, res, 'utf-8')
}

function rewriteDoc(file) {
  if (process.env.NODE_ENV !== 'build') return
  const content = fs.readFileSync(file, 'utf-8')

  const res = content.replace(
    /\.scss/g,
    '.css'
  )

  // const res = content.replace(
  //   /import '\.\.\/styles\/rewrite\/index.scss'/,
  //   'import \'../css/rewrite/index.css\''
  // )
  // let res = content.replace(
  //   /import '\.\.\/styles\/rewrite\/index.scss'/,
  //   '// import \'../styles/rewrite/index.scss\''
  // )
  // res = res.replace(
  //   /\/\/ import '\.\.\/css\/index.css'/,
  //   'import \'../css/index.css\''
  // )

  fs.writeFileSync(file, res, 'utf-8')
}

fg.sync('../vuetom/**').forEach((file) => {
  if (/node_modules\//.test(file)) return
  if (/dist\//.test(file)) return
  if (/(\.ts|tsconfig\.json)$/.test(file)) return
  if (/(\.ts|package\.json)$/.test(file)) return
  if (/(\.js|postcss.config\.cjs)$/.test(file)) return
  if (/(\.js|tailwind.config\.cjs)$/.test(file)) return
  const target = toDist(file)
  if (file !== target) fs.copy(file, target)
})

fg.sync('../vuetom/dist/**').forEach((file) => {
  if (/index.js$/.test(file)) rewrite(file)
  if (/doc\/index.js$/.test(file)) rewriteDoc(file)
})
