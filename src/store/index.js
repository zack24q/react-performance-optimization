/**
 * Created by zack on 2017/7/17.
 */
const defaultImgs = [
  `http://cdn01.weipaitang.com/img/20170703d7914692-3881-49d4-9e15-5de198b43f05-W750H750/w/640`,
  `http://cdn01.weipaitang.com/img/201706272014fb38-4e8a-4639-9ae1-a2e543021b05-W1312H805/w/640`,
  `http://cdn01.weipaitang.com/img/20170702fd18e104-05b7-48e4-b648-b3f56a1515ce-W1107H900/w/640`,
  `http://cdn01.weipaitang.com/img/2017070273d616e5-c375-4ab8-a781-32466c439798-W750H562/w/640`,
  `http://cdn01.weipaitang.com/img/2017062914e1c8fa-1362-4e9c-8f50-7359884ba9ee-W1333H1200/w/640`,
  `http://cdn01.weipaitang.com/img/20170703964e4875-ee8c-45bd-adfe-b7ecf7494c26-W750H1000/w/640`,
  `http://cdn01.weipaitang.com/img/201707041ycB6EqQYKi0EfSyFQKhIDNEWgVvl0gT2jlih0Zcbj32BU9DdQlOH_8pjrIavGUR-W3024H3024/w/640`,
  `http://cdn01.weipaitang.com/img/20170704c7TmxnRVMlawwZD0T_GXmhc9oLinj7ApWvTXFm5YoTjsdzlMVJ1tKo07FQnnslKv-W3024H3024/w/640`,
  `http://cdn01.weipaitang.com/img/20170704l3thVe7-uAq5PLEHM1HKoyjpDu3ZS4rQOQpesUILYgzHT0JDmht5nm6vuOv7voow-W3024H3024/w/640`,
  `http://cdn01.weipaitang.com/img/20170704htF_CPIYzz3P7o8tilwLRYrbETTZ4Y88ixavQkBwO7v6kL6xIg667vwM47g3aiz6-W3024H3024/w/640`,
];
const generateRandomValues = () => {
  const items = [];
  for (let i = 0; i < 500; i++) {
    const random = Math.random().toFixed(6);
    items.push({
      id: i,
      value: random,
      img: defaultImgs[i % 10]
    });
  }
  return items;
};

const items = generateRandomValues();

export default {
  getItems(){
    return items;
  }
}
