import Queue from './queue';

/**
 * 用队列解决问题-击鼓传花问题
 * @param items 参加游戏数组
 * @param num 第几个淘汰
 */

function hotPotato(items: any[], num: number) {
  const queue = new Queue();
  const weedOutList = [];

  for (let i = 0; i < items.length; i++) {
    queue.enqueue(items[i]);
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    weedOutList.push(queue.dequeue());
  }

  return {
    weedOutList: weedOutList,
    winner: queue.dequeue()
  };
}
console.log(hotPotato(['name1', 'name2', 'name3', 'name4'], 3)); // 'name2'
