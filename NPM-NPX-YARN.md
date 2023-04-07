
# NPM

## Project scope
### Install
- npm install react react-dom => dependencies
- npm i react react-dom => dependencies

### Install dev
- npm install --save-dev react react-dom => devDependencies
- npm i -D react react-dom => devDependencies

### Uninstall
- npm uninstall react react-dom


## Global scope
### Install
- npm i --global create-react-app 
- npm i -g create-react-app

### For instructions
- create-react-app --help

### Uninstall
- npm uninstall -g create-react-app



# NPX
- install Node => NPM + NPX
- Khi dùng nqx create-react-app tại 1 thư mục
=> quét xem có phải là project của nodejs hay ko
==> tìm node_modules => tìm .bin => file bin tên create-react-app

## Cons
- các thư viện chỉ cần dùng trong 1 vài project => ko cần global
- khi máy không có => chọc lên npm => kéo phiên bản mới nhất về



# YARN
## YARN vs NPM
- https://www.sitepoint.com/yarn-vs-npm/

## Install
- npm i -g yarn


# Lưu ý
- Luôn bật dev server (npm start || yarn start)