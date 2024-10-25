import Mock from 'mockjs'

function generateInfo() {
  return Mock.mock({
    'name|1-10': 10
  })
}

// 生成字母数组
function generateAlphabetArray() {
  const Random = Mock.Random
  const letterCount = Random.integer(8, 10)

  let result: string[] = []

  for (let i = 0; i < letterCount; i++) {
    const letter = String.fromCharCode(65 + i)
    result = result.concat([
      `${letter}1`,
      `${letter}2`,
      `${letter}3`,
      `${letter}4`
    ])
  }

  return result
}

// 随机取两个
function getRandomTwoElements(arr: string[]) {
  // 确保数组长度至少为 2
  if (arr.length < 2) {
    throw new Error('Array must contain at least two elements.')
  }

  // 生成两个不重复的随机索引
  const index1 = Math.floor(Math.random() * arr.length)
  let index2
  do {
    index2 = Math.floor(Math.random() * arr.length)
  } while (index2 === index1) // 确保 index2 与 index1 不相同

  return [arr[index1], arr[index2]]
}

// 所有座位
const generatedArray = generateAlphabetArray()

Mock.mock('/getData', 'get', {
  status: 200,
  data: {
    baseInfo: generateInfo(),
    seatList: generatedArray,
    disabledList: getRandomTwoElements(generatedArray),
    paidList: getRandomTwoElements(generatedArray)
  }
})
