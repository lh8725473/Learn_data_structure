import Queue from './queue';
import Deque from './deque';

/**
 * 用队列解决问题-击鼓传花问题
 * @param items 参加游戏数组
 * @param num 第几个被淘汰
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
console.log(hotPotato(['name1', 'name2', 'name3', 'name4', 'name5'], 3)); // 'name1'

/**
 * 用双端队列解决问题-检查器
 * @param text 被检查字符串
 */
function plalindromeCheck(text: String): boolean {
  if (text === undefined || text === null || (text != null && text.length === 0)) {
    return false;
  }

  const deque = new Deque<String>();
  const lowerString = text.toLocaleLowerCase().split(' ').join('');
  let firstChar: string, lastChar: string;

  for (let i = 0; i < lowerString.length; i++) {
    deque.addBack(lowerString.charAt(i));
  }

  while (deque.size() > 1) {
    firstChar = deque.removeFront();
    lastChar = deque.removeBack();
    if (firstChar !== lastChar) {
      return false;
    }
  }

  return true;
}

console.log(plalindromeCheck('abcba')); // true
console.log(plalindromeCheck('abcbc')); // false
